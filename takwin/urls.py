from django.urls import path
from . import views
urlpatterns = [
    path('', views.centre_de_formation_view, name='home'),  
    path('centre_de_formation.html', views.centre_de_formation_view, name='centre_de_formation'),  
    path('signup.html', views.signup, name='signup'),
    path('login.html', views.login, name='login'),
    path("sessionetudiant.html", views.sessionetudiant, name="sessionetudiant" ),
    path("sessioncentre.html", views.sessioncentre, name="sessioncentre" ),

]

