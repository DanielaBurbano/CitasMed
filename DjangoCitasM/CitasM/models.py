from django.db import models

# Create your models here.
class Roles(models.Model):
    cod_rol = models.AutoField(primary_key=True)
    des_rol = models.CharField(max_length=50)

class Estados(models.Model):
    cod_est = models.AutoField(primary_key=True)
    des_est = models.CharField(max_length=50)

class Personas(models.Model):
    cod_per = models.AutoField(primary_key=True)
    ced_per = models.CharField(max_length=100)
    nom_per = models.CharField(max_length=100)
    fna_per = models.DateField()
    dir_per = models.CharField(max_length=100)
    ema_per = models.CharField(max_length=100)
    pas_per = models.CharField(max_length=100)
    fk_perrol = models.ForeignKey(Roles, on_delete=models.CASCADE)
    fk_perest = models.ForeignKey(Estados, on_delete=models.CASCADE)

class Doctores(models.Model):
    cod_doc = models.CharField(max_length=100, primary_key=True)
    fk_docper = models.ForeignKey(Personas, on_delete=models.CASCADE)