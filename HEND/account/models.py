from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Account(models.Model):
    user =  models.OneToOneField(User, on_delete=models.CASCADE)
    username = models.TextField(max_length=20)
    email = models.TextField(max_length=20)
    phone_number = models.TextField(max_length=20)

    def __str__(self):
        return self.email
    
    