# Generated by Django 5.2.1 on 2025-07-14 06:50

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Empresa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('ruc', models.CharField(max_length=11, unique=True)),
                ('telefono', models.CharField(max_length=15)),
                ('correo', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Region',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('descripcion', models.TextField()),
                ('recursos_turisticos', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Ruta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('distancia_km', models.DecimalField(decimal_places=2, max_digits=6)),
                ('destino', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rutas_destino', to='regiones.region')),
                ('empresa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='regiones.empresa')),
                ('origen', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rutas_origen', to='regiones.region')),
            ],
        ),
    ]
