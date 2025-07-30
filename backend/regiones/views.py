from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Region, Ruta, Empresa, Bus, Viaje
from .serializers import RegionSerializer, RutaSerializer, EmpresaSerializer, BusSerializer, ViajeSerializer

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