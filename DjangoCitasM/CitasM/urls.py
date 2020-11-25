from rest_framework import routers
from . import views
from django.urls import path, include

router = routers.DefaultRouter()
router.register('rol', viewset=views.RolViewset)
router.register('estado', viewset=views.EstadoViewset)
router.register('persona', viewset=views.PersonaViewset)
router.register('personas', viewset=views.PersonasViewset)

urlpatterns = [
    path('', include(router.urls))
]