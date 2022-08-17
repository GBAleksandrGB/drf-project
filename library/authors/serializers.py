from rest_framework import serializers

from .models import Author, Biography, Article, Book


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class BiographySerializer(serializers.ModelSerializer):
    class Meta:
        model = Biography
        fields = ['text', 'author']


class ArticleSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()

    class Meta:
        model = Article
        exclude = ['name']


class BookSerializer(serializers.ModelSerializer):
    authors = serializers.StringRelatedField(many=True)

    class Meta:
        model = Book
        fields = '__all__'


# author1 = Author.objects.create(
#     first_name='Александр', last_name='Грин', birthday_year=1880)
# serializer = AuthorSerializer(author1)

# biography = Biography.objects.create(
#     text='Некоторая биография', author=author1)
# serializer = BiographySerializer(biography)

# article = Article.objects.create(name='Некоторая статья', author=author1)
# serializer = ArticleSerializer(article)

# author2 = Author.objects.create(
#     first_name='Александр', last_name='Пушкин', birthday_year=1799)

# book = Book.objects.create(name='Некоторая книга')
# book.authors.add(author1)
# book.authors.add(author2)
# book.save()
# serializer = BookSerializer(book)
