from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RolSerializer, EstadoSerializer
from .models import Roles, Estados


class RolViewset(viewsets.ModelViewSet):
    serializer_class = RolSerializer
    queryset = Roles.objects.all()

class EstadoViewset(viewsets.ModelViewSet):
    serializer_class = EstadoSerializer
    queryset = Estados.objects.all()