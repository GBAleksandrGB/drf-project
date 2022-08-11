from rest_framework import serializers

from .models import Project, Todo
from users.models import User


class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email']


class ProjectSerializer(serializers.ModelSerializer):
    project_users = UserSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class TodoSerializer(serializers.ModelSerializer):
    todo_project_name = ProjectSerializer()

    class Meta:
        model = Todo
        fields = '__all__'


user1 = User.objects.get(id=1)
user2 = User.objects.get(id=2)
user3 = User.objects.get(id=3)

project1 = Project.objects.create(
    project_name='Заметки',
    project_url='https://github.com/GBAleksandrGB/drf-project/pull/3', 
)
project1.project_users.add(user1)
project1.project_users.add(user2)
project1.project_users.add(user3)
project1.save()
serializer = ProjectSerializer(project1)

todo1 = Todo.objects.create(
    todo_project_name=project1,
    todo_text='Замучался с Джангой.',
    todo_user=user1
)
serializer = TodoSerializer(todo1)
