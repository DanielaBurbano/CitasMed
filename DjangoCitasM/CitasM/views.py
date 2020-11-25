from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RolSerializer, EstadoSerializer, PersonaSerializer, PersonasSerializer
from .models import Roles, Estados, Personas


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