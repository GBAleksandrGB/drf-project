from rest_framework.serializers import HyperlinkedModelSerializer

from .models import User


class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = 'username', 'first_name', 'last_name', 'email'


class UserSerializerIsStaff(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('is_superuser', 'is_staff')
