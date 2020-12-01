from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RolSerializer, EstadoSerializer, PersonaSerializer, PersonasSerializer, DoctorSerializer, DoctoresSerializer, CitaSerializer, CitasSerializer
from .models import Roles, Estados, Personas, Doctores, Citas


class RolViewset(viewsets.ModelViewSet):
    serializer_class = RolSerializer
    queryset = Roles.objects.all()

class EstadoViewset(viewsets.ModelViewSet):
    serializer_class = EstadoSerializer
    queryset = Estados.objects.all()

class PersonaViewset(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Personas.objects.all()

class PersonasViewset(viewsets.ModelViewSet):
    serializer_class = PersonasSerializer
    queryset = Personas.objects.all()
    filterset_fields = ['ema_per', 'fk_perrol', 'ced_per']

class DoctorViewset(viewsets.ModelViewSet):
    serializer_class = DoctorSerializer
    queryset = Doctores.objects.all()

class DoctoresViewset(viewsets.ModelViewSet):
    serializer_class = DoctoresSerializer
    queryset = Doctores.objects.all()
    filterset_fields = ['fk_docper']

class CitaViewset(viewsets.ModelViewSet):
    serializer_class = CitaSerializer
    queryset = Citas.objects.all()

class CitasViewset(viewsets.ModelViewSet):
    serializer_class = CitasSerializer
    queryset = Citas.objects.all()
    filterset_fields = ['cod_cit', 'fk_citper', 'fk_citdoc']