"""library URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from authors.views import AuthorViewSet, BiographyViewSet, ArticleViewSet, \
    BookViewSet
from users.views import UserModelViewSet
from project.views import ProjectViewSet, TodoViewSet, UserCustomViewSet, \
    ProjectFilterView


router = DefaultRouter()
router.register('authors', AuthorViewSet)
router.register('users', UserModelViewSet)
router.register('authors', AuthorViewSet)
router.register('biographies', BiographyViewSet)
router.register('articles', ArticleViewSet)
router.register('books', BookViewSet)
router.register('projects', ProjectViewSet, basename='projects')
router.register('todos', TodoViewSet)
router.register('base_users', UserCustomViewSet, basename='users')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('filters/kwargs/<str:project_name>/', ProjectFilterView.as_view()),
]
