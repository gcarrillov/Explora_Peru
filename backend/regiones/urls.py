from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

# 👇 Importamos los ViewSets y la vista personalizada de búsqueda
from regiones.views import (
    RegionViewSet,
    RutaViewSet,
    EmpresaViewSet,
    BusViewSet,
    ViajeViewSet,
    RegionPorNombreAPIView
)

# 🔁 Routers para las vistas estándar
router = DefaultRouter()
router.register(r'regiones', RegionViewSet, basename='region')
router.register(r'rutas', RutaViewSet, basename='ruta')
router.register(r'empresas', EmpresaViewSet, basename='empresa')
router.register(r'buses', BusViewSet, basename='bus')
router.register(r'viajes', ViajeViewSet, basename='viaje')

urlpatterns = [
    # Panel de administración
    path('admin/', admin.site.urls),

    # Endpoints CRUD generados por los ViewSet
    path('api/', include(router.urls)),

    # Endpoint personalizado: buscar región por nombre
    path('api/regiones/buscar/', RegionPorNombreAPIView.as_view(), name='buscar-region'),

    # Rutas para autenticación y usuarios
    path('api/', include('usuarios.urls')),
]

# Archivos multimedia
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
