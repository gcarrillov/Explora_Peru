from django.db import models

class Region(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    recursos_turisticos = models.TextField()

    imagen = models.ImageField(upload_to='regiones/', null=True, blank=True)
    lugares_turisticos = models.TextField(default="Desconocido")
    tradiciones = models.TextField(default="Desconocido")
    costumbres = models.TextField(default="Desconocido")
    comidas_tipicas = models.TextField(default="Desconocido")

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

class Bus(models.Model):
    placa = models.CharField(max_length=10, unique=True)
    tipo = models.CharField(max_length=50)
    capacidad = models.IntegerField()
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE, related_name='buses')

    def __str__(self):
        return f"{self.placa} - {self.tipo}"
    
class Viaje(models.Model):
    ruta = models.ForeignKey(Ruta, on_delete=models.CASCADE, related_name='viajes')
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE, related_name='viajes')
    fecha_hora_salida = models.DateTimeField()
    precio = models.DecimalField(max_digits=7, decimal_places=2)
    asientos_disponibles = models.IntegerField()

    def __str__(self):
        return f"Viaje {self.id} - {self.ruta.nombre} el {self.fecha_hora_salida.strftime('%d/%m/%Y %H:%M')}"