from rest_framework import serializers
from .models import Region, Empresa, Ruta, Bus, Viaje, FotoRegion

# Serializer de fotos individuales
class FotoRegionSerializer(serializers.ModelSerializer):
    imagen = serializers.ImageField(use_url=True)

    class Meta:
        model = FotoRegion
        fields = ['id', 'imagen']

# Serializer de región principal
class RegionSerializer(serializers.ModelSerializer):
    galeria = FotoRegionSerializer(many=True, read_only=True)  # ✅ CORREGIDO
    imagen = serializers.ImageField(use_url=True)

    class Meta:
        model = Region
        fields = [
            'id',
            'nombre',
            'descripcion',
            'imagen',
            'lugares_turisticos',
            'tradiciones',
            'comidas_tipicas',
            'acerca_de',
            'galeria'
        ]

# Serializer simplificado para mostrar origen/destino
class RegionSimpleSerializer(serializers.ModelSerializer):
    imagen = serializers.ImageField(use_url=True)

    class Meta:
        model = Region
        fields = [
            'id',
            'nombre',
            'descripcion',
            'imagen',
            'lugares_turisticos',
            'tradiciones',
            'comidas_tipicas'
        ]

# Empresa
class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'

# Ruta (con origen y destino)
class RutaSerializer(serializers.ModelSerializer):
    origen = RegionSimpleSerializer()
    destino = RegionSimpleSerializer()
    empresa = EmpresaSerializer()

    class Meta:
        model = Ruta
        fields = [
            'id',
            'nombre',
            'origen',
            'destino',
            'distancia_km',
            'empresa',
        ]

# Bus
class BusSerializer(serializers.ModelSerializer):
    empresa = EmpresaSerializer()

    class Meta:
        model = Bus
        fields = '__all__'

# Viaje
class ViajeSerializer(serializers.ModelSerializer):
    ruta = RutaSerializer()
    bus = BusSerializer()

    class Meta:
        model = Viaje
        fields = '__all__'
