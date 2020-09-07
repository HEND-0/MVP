from django.db import models

# Create your models here.

class Account(models.Model):
    username = models.TextField(max_length=20)
    email = models.TextField(max_length=20)
    
