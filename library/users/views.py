from rest_framework.viewsets import ModelViewSet

from .models import User
from .serializers import UserModelSerializer, UserSerializerIsStaff


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

    def get_serializer_class(self):
        if self.request.version == '0.2':
            return UserSerializerIsStaff
        return UserModelSerializer
