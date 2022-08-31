from rest_framework import generics

from users.models import User
from .serializers import MyUserSerializer, UserSerializerWithFullName


class UserListAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = MyUserSerializer

    def get_serializer_class(self):
        if self.request.version == '0.2':
            return UserSerializerWithFullName
        return MyUserSerializer
