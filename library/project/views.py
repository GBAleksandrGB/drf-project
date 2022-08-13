import django_filters
from rest_framework import mixins, viewsets
from rest_framework import generics
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from djangorestframework_camel_case.render import CamelCaseJSONRenderer, \
    CamelCaseBrowsableAPIRenderer
from djangorestframework_camel_case.parser import CamelCaseJSONParser, \
    MultiPartParser

from .models import Project, Todo
from users.models import User
from .serializers import ProjectSerializer, TodoSerializer, UserSerializer


class UserCustomViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin, viewsets.GenericViewSet):
    renderer_classes = [CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer]
    parser_classes = [CamelCaseJSONParser, MultiPartParser]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectViewSet(viewsets.ViewSet):
    renderer_classes = [
        CamelCaseJSONRenderer,
        CamelCaseBrowsableAPIRenderer
    ]
    parser_classes = [
        CamelCaseJSONParser,
        MultiPartParser
    ]
    pagination_class = ProjectLimitOffsetPagination

    def list(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        project = get_object_or_404(Project, pk=pk)
        serializer = ProjectSerializer(project)
        return Response(serializer.data)


class ProjectFilterView(generics.ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        name = self.kwargs['project_name']
        return Project.objects.filter(project_name__contains=name)


class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class TodoFilter(django_filters.FilterSet):
    todo_project_name = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Todo
        fields = ['created_at', 'updated_at']


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    renderer_classes = [
        CamelCaseJSONRenderer,
        CamelCaseBrowsableAPIRenderer,
    ]
    parser_classes = [
        CamelCaseJSONParser,
        MultiPartParser
    ]
    filterset_class = TodoFilter
    pagination_class = TodoLimitOffsetPagination

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_active = False
        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


