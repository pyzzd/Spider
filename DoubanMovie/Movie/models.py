# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Movie(models.Model):
    title = models.CharField(max_length=255)
    top = models.CharField(max_length=255, blank=True, null=True)
    score = models.CharField(max_length=255, blank=True, null=True)
    brief = models.TextField(blank=True, null=True)
    director = models.CharField(max_length=255, blank=True, null=True)
    actors = models.TextField(blank=True, null=True)
    type = models.CharField(max_length=255, blank=True, null=True)
    language = models.CharField(max_length=255, blank=True, null=True)
    release_date = models.CharField(max_length=255, blank=True, null=True)
    duration = models.CharField(max_length=255, blank=True, null=True)
    nation = models.CharField(max_length=255, blank=True, null=True)
    cover = models.CharField(max_length=255, blank=True, null=True)
    watched = models.CharField(max_length=255, blank=True, null=True)
    wanna_see = models.CharField(max_length=255, blank=True, null=True)
    id = models.IntegerField(primary_key=True)

    class Meta:
        db_table = 'movie'
