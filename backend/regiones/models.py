from django.db import models

class Region(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    recursos_turisticos = models.TextField()

    def __str__(self):
        return self.nombre