from django.db import models

class Region(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    recursos_turisticos = models.TextField()

    def __str__(self):
        return self.nombre
    
class Empresa(models.Model):
    nombre = models.CharField(max_length=100)
    ruc = models.CharField(max_length=11, unique=True)
    telefono = models.CharField(max_length=15)
    correo = models.EmailField()

    def __str__(self):
        return self.nombre


