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

class Ruta(models.Model):
    nombre = models.CharField(max_length=100)
    origen = models.ForeignKey(Region, related_name='rutas_origen', on_delete=models.CASCADE)
    destino = models.ForeignKey(Region, related_name='rutas_destino', on_delete=models.CASCADE)
    distancia_km = models.DecimalField(max_digits=6, decimal_places=2)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} ({self.origen} → {self.destino})"
