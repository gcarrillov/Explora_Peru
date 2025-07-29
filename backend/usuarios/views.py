from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from django.core.mail import send_mail
from django.conf import settings

from .serializers import RegistroSerializer

class RegistroView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegistroSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, _ = Token.objects.get_or_create(user=user)

            # Enviar correo real de confirmación
            send_mail(
                subject='Bienvenido a Explora Perú',
                message=f'Hola {user.first_name}, te has registrado correctamente con el usuario {user.username}.',
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[user.email],
                fail_silently=False
            )

            return Response({'token': token.key, 'username': user.username})
        return Response(serializer.errors, status=400)


class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({'token': token.key, 'username': token.user.username})
