from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Roles, Estados, Personas, Doctores

class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roles
        fields = ('cod_rol', 'des_rol')

class EstadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estados
        fields = ('cod_est', 'des_est')

class PersonaSerializer(ModelSerializer):
    class Meta:
        model = Personas
        fields = ('cod_per', 'ced_per', 'nom_per', 'fna_per', 'dir_per', 'ema_per', 'pas_per', 'fk_perrol', 'fk_perest')

class PersonasSerializer(ModelSerializer):
    fk_perrol = RolSerializer(many=False, read_only=True)
    fk_perest = EstadoSerializer(many=False, read_only=True)
    class Meta:
        model = Personas
        fields = ('cod_per', 'ced_per', 'nom_per', 'fna_per', 'dir_per', 'ema_per', 'pas_per', 'fk_perrol', 'fk_perest')

class DoctorSerializer(ModelSerializer):
    class Meta:
        model = Doctores
        fields = ('cod_doc', 'fk_docper')

class DoctoresSerializer(ModelSerializer):
    fk_docper = PersonasSerializer(many=False, read_only=True)
    class Meta:
        model = Doctores
        fields = ('cod_doc', 'fk_docper')