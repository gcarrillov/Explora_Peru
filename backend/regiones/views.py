from rest_framework import serializers
from .models import Region, Ruta, Empresa

class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = '__all__'

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
