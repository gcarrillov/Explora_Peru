from rest_framework import serializers
from .models import Region, Ruta, Empresa, Bus, Viaje

class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = [
            'id', 'nombre', 'descripcion', 'imagen',
            'lugares_turisticos', 'tradiciones', 'comidas_tipicas', 'costumbres'
        ]

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'

class RutaSerializer(serializers.ModelSerializer):
    origen = RegionSerializer(read_only=True)
    destino = RegionSerializer(read_only=True)
    empresa = EmpresaSerializer(read_only=True)

    class Meta:
        model = Ruta
        fields = '__all__'

class BusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = '__all__'

class ViajeSerializer(serializers.ModelSerializer):
    ruta = serializers.PrimaryKeyRelatedField(queryset=Ruta.objects.all())
    bus = serializers.PrimaryKeyRelatedField(queryset=Bus.objects.all())

    class Meta:
        model = Viaje
        fields = '__all__'
