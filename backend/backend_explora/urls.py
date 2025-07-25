"""
URL configuration for backend_explora project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from regiones.views import RegionViewSet, RutaViewSet, EmpresaViewSet, BusViewSet, ViajeViewSet

router = DefaultRouter()
router.register(r'regiones', RegionViewSet, basename='region')
router.register(r'rutas', RutaViewSet, basename='ruta')
router.register(r'empresas', EmpresaViewSet, basename='empresa')
router.register(r'buses', BusViewSet, basename='bus')
router.register(r'viajes', ViajeViewSet, basename='viaje')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/', include('usuarios.urls')),  # activa /api/registro/ y /api/login/
]
