from rest_framework.viewsets import ModelViewSet
from djangorestframework_camel_case.render import CamelCaseJSONRenderer, \
    CamelCaseBrowsableAPIRenderer
from djangorestframework_camel_case.parser import CamelCaseJSONParser

from .models import Project, Todo
from .serializers import ProjectSerializer, TodoSerializer


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    renderer_classes = [
        CamelCaseJSONRenderer,
        CamelCaseBrowsableAPIRenderer,
    ]
    parser_classes = [
        CamelCaseJSONParser,
    ]


class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    renderer_classes = [
        CamelCaseJSONRenderer,
        CamelCaseBrowsableAPIRenderer,
    ]
    parser_classes = [
        CamelCaseJSONParser,
    ]
