from rest_framework import viewsets
from .models import Region, Ruta, Empresa, Bus, Viaje
from .serializers import RegionSerializer, RutaSerializer, EmpresaSerializer, BusSerializer, ViajeSerializer
from rest_framework.response import Response
from rest_framework.decorators import action

class RegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer

    @action(detail=False)
    def por_nombre(self, request):
        nombre = request.query_params.get('nombre', None)
        if nombre:
            try:
                region = Region.objects.get(nombre__iexact=nombre)
                serializer = self.get_serializer(region)
                return Response(serializer.data)
            except Region.DoesNotExist:
                return Response({'error': 'Región no encontrada'}, status=404)
        return Response({'error': 'Debe proporcionar el nombre'}, status=400)

class EmpresaViewSet(viewsets.ModelViewSet):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer

class RutaViewSet(viewsets.ModelViewSet):
    queryset = Ruta.objects.all()
    serializer_class = RutaSerializer

class BusViewSet(viewsets.ModelViewSet):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer

class ViajeViewSet(viewsets.ModelViewSet):
    queryset = Viaje.objects.all()
    serializer_class = ViajeSerializer
