from django.db import models

# Create your models here.
class CentreFormation(models.Model):
    name = models.TextField(max_length=100)
    phone = models.IntegerField()
    email = models.TextField()
    address = models.TextField()
    role = models.TextField(max_length=50)

class Formation(models.Model):
    titre = models.CharField(max_length=100)
    description = models.TextField()
    duree = models.IntegerField()
    niveau = models.CharField(max_length=50)
    prix = models.DecimalField(max_digits=10, decimal_places=2)

class Utilisateur(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    mot_de_passe = models.CharField(max_length=128)
    role = models.TextField(max_length=50)

class Inscription(models.Model):
    
    date_inscription = models.DateField(auto_now_add=True)
    statut = models.CharField(max_length=50)

class session(models.Model):
    date_debut = models.DateField()
    date_fin = models.DateField()
    lieu = models.CharField(max_length=100)
    nombre_places = models.IntegerField(default=0)
    
class stagiaire(models.Model):
    cin= models.CharField(max_length=20, unique=True)
    date_naissance = models.DateField()
    niveau_scolaire = models.CharField(max_length=50)