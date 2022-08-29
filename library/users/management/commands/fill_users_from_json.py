import json
import os

from django.core.management.base import BaseCommand
from django.contrib.auth.hashers import make_password

from users.models import User


JSON_PATH = 'users/jsons'


def load_from_json(filename):
    with open(os.path.join(JSON_PATH, filename + '.json'), mode='r',
              encoding='UTF-8') as infile:
        return json.load(infile)


class Command(BaseCommand):
    def handle(self, *args, **options):
        users = load_from_json('users')
        User.objects.all().delete()
        for user in users:
            user['password'] = make_password(user['password'])
            new_user = User(**user)
            new_user.save()
        User.objects.create_superuser(
            'admin', 'admin@django.com', '123')
