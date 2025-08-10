from django.urls import path
from . import views
urlpatterns = [
    path('', views.signup, name='signup'),
    path('login.html', views.login, name='login'),
    path('inscription.html', views.inscription, name='inscription'),
    path('centre_de_formation.html', views.centre_de_formation_view, name='centre_de_formation'),
]

