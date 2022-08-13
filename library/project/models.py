from django.db import models

from library import settings


class Project(models.Model):
    project_name = models.CharField(
        max_length=64,
        verbose_name='Название проекта'
    )
    project_url = models.URLField(
        blank=True,
        verbose_name='Ссылка на проект'
    )
    project_users = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        blank = True,
        verbose_name='Список участников проекта'
    )


class Todo(models.Model):
    todo_project_name = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        verbose_name='Название проекта'
    )
    todo_text = models.TextField(
        max_length=1000,
        verbose_name='Текст заметки'
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Заметка создана'
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name='Заметка обновлена'
    )
    todo_user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name='Автор заметки'
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name='Заметка активна?'
    )
