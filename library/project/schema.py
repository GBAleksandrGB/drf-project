from dataclasses import fields
from importlib.metadata import requires
import graphene
from graphene_django import DjangoObjectType

from .models import Todo, Project
from users.models import User


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class Query(graphene.ObjectType):
    all_todos = graphene.List(TodoType)
    all_users = graphene.List(UserType)
    user_by_id = graphene.Field(UserType, id=graphene.Int(required=True))
    todo_by_user_name = graphene.List(TodoType,
                                         name=graphene.String(required=False))

    def resolve_all_todos(root, info):
        return Todo.objects.all()

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_todo_by_user_name(self, info, username=None):
        todos = Todo.objects.all()
        if username:
            Todo = todos.filter(user__username=username)
        return todos

    def resolve_user_by_id(self, info, id):
        try:
            return User.objects.get(id=id)
        except User.DoesNotExist:
            return None


class UserMutation(graphene.Mutation):
    class Arguments:
        is_active = graphene.Boolean(required=True)
        id = graphene.ID()

    user = graphene.Field(UserType)

    @classmethod
    def mutate(cls, root, info, is_active, id):
        user = User.objects.get(pk=id)
        user.is_active = False
        user.save()
        return UserMutation(user=user)


class Mutation(graphene.ObjectType):
    update_user = UserMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
