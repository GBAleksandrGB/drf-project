from django.db import models

class Author(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    birthday_year = models.PositiveIntegerField()

    class Meta:
        verbose_name = 'Автор'
        verbose_name_plural = 'Авторы'
        ordering = ['first_name', 'birthday_year']
