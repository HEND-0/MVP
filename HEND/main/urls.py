from django.urls import path
from account.views import signin,login
from main.views import home

urlpatterns = [
    path('', home, name='home'),
]
