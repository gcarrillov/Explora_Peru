from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

class RegistroSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    fecha_nacimiento = serializers.DateField(write_only=True)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'password',
            'first_name',
            'last_name',
            'fecha_nacimiento'
        ]

    def create(self, validated_data):
        # Extraemos la fecha_nacimiento, aunque no se guarda aún
        fecha_nacimiento = validated_data.pop('fecha_nacimiento')
        validated_data['password'] = make_password(validated_data['password'])
        user = User.objects.create(**validated_data)
        return user
