from django.db import models

# Create your models here.

class Account(models.Model):
    username = models.CharField(max_length=30)
    passwd = models.CharField(max_length=30)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=40)

