# Generated by Django 4.1 on 2022-08-16 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0005_alter_todo_todo_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='project_name',
            field=models.CharField(max_length=64, verbose_name='Название проекта'),
        ),
    ]
