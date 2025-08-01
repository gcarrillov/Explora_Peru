from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from django.http import Http404
from django.shortcuts import redirect, reverse
from django.views import View

from urllib.parse import urlencode

import random



from .models import Bus, Empresa, Region, Ruta, Viaje
from .serializers import (
    BusSerializer,
    EmpresaSerializer,
    RegionSerializer,
    RutaSerializer,
    ViajeSerializer,
)

class RegionPorNombreAPIView(APIView):
    def get(self, request):
        nombre = request.query_params.get('nombre', '').strip().lower()
        print("🔍 Django recibió la búsqueda:", nombre)
        try:
            region = Region.objects.get(nombre__iexact=nombre)
            serializer = RegionSerializer(region, context={'request': request})
            return Response(serializer.data)
        except Region.DoesNotExist:
            return Response({'error': 'Región no encontrada'}, status=404)


class RegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer

class RutaViewSet(viewsets.ModelViewSet):
    queryset = Ruta.objects.all()
    serializer_class = RutaSerializer

class EmpresaViewSet(viewsets.ModelViewSet):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer

class BusViewSet(viewsets.ModelViewSet):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer

class ViajeViewSet(viewsets.ModelViewSet):
    queryset = Viaje.objects.all()
    serializer_class = ViajeSerializer

class RegionAleatoriaView(APIView):
    def get(self, request):
        # Obtener todas las regiones
        regiones = Region.objects.all()
        
        if not regiones.exists():
            raise Http404("No hay regiones disponibles")
        
        # Seleccionar una región aleatoria
        region_aleatoria = random.choice(regiones)

        nombre = region_aleatoria.nombre.strip().lower()


        try:
            region = Region.objects.get(nombre__iexact=nombre)

            rutas = Ruta.objects.filter(origen=region) | Ruta.objects.filter(destino=region)
            rutas_data = RutaSerializer(rutas, many=True).data

            response_data = {
                'id': region.id,
                'nombre': region.nombre,
                'descripcion': region.descripcion,
                'imagen': request.build_absolute_uri(region.imagen.url) if region.imagen else None,
                'lugares_turisticos': region.lugares_turisticos,
                'tradiciones': region.tradiciones,
                'comidas_tipicas': region.comidas_tipicas,
                'costumbres': region.costumbres,
                'rutas': rutas_data
            }
            return Response(response_data)
        except Region.DoesNotExist:
            return Response({'error': 'Región no encontrada'}, status=status.HTTP_404_NOT_FOUND)
