from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

# 👇 Importamos los ViewSets y la vista personalizada de búsqueda
from regiones.views import (
    RegionAleatoriaView,
    RegionViewSet,
    RutaViewSet,
    EmpresaViewSet,
    BusViewSet,
    ViajeViewSet,
    RegionPorNombreAPIView
)

urlpatterns = [

    # Endpoint personalizado: buscar región por nombre
    path('buscar/', RegionPorNombreAPIView.as_view(), name='buscar-region'),

    path('descrubrir/', RegionAleatoriaView.as_view(), name='region-aleatoria')
]

# Archivos multimedia
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
