from django.db import models

# Create your models here.
class Roles(models.Model):
    cod_rol = models.AutoField(primary_key=True)
    des_rol = models.CharField(max_length=50)

class Estados(models.Model):
    cod_est = models.AutoField(primary_key=True)
    des_est = models.CharField(max_length=50)