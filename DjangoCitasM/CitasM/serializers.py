from rest_framework import serializers
from .models import Roles, Estados

class RolSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Roles
        fields = ('cod_rol', 'des_rol')

class EstadoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Estados
        fields = ('cod_est', 'des_est')