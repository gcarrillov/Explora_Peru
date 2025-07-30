from django.contrib import admin
from .models import Region, Ruta, Empresa, Bus, Viaje, FotoRegion

admin.site.register(Region)
admin.site.register(FotoRegion)
admin.site.register(Ruta)
admin.site.register(Empresa)
admin.site.register(Bus)
admin.site.register(Viaje)
