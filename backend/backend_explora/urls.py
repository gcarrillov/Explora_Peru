from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from regiones.views import (
    RegionViewSet, RutaViewSet, EmpresaViewSet, BusViewSet, ViajeViewSet,
    RegionPorNombreAPIView 
)
from django.conf.urls.static import static
from django.conf import settings

# Routers para las vistas estándar
router = DefaultRouter()
router.register(r'regiones', RegionViewSet, basename='region')
router.register(r'rutas', RutaViewSet, basename='ruta')
router.register(r'empresas', EmpresaViewSet, basename='empresa')
router.register(r'buses', BusViewSet, basename='bus')
router.register(r'viajes', ViajeViewSet, basename='viaje')

urlpatterns = [
    path('admin/', admin.site.urls),

    # Primero las rutas personalizadas
    path('api/regiones/buscar/', RegionPorNombreAPIView.as_view(), name='buscar-region'),

    # Luego el router (para que no las intercepte)
    path('api/', include(router.urls)),

    path('api/', include('usuarios.urls')),
]

# Archivos multimedia (como imágenes)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
