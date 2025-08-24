from django.urls import path
from . import views
urlpatterns = [
    path('', views.centre_de_formation_view, name='centre_de_formation'),
    path('signup.html', views.signupUser, name='signupUser'),
    path('signup.html', views.signupcentre, name='signupcentre'),
    path('login.html', views.loginuser, name='loginuser'),
    path('login.html', views.logincentre, name='logincentre'),
    path("sessionetudiant.html", views.sessionetudiant, name="sessionetudiant" ),
    path("sessioncentre.html", views.sessioncentre, name="sessioncentre" ),

]

