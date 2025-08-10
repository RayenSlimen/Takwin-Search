from django.db import models



# Create your models here.
class CentreFormation(models.Model):
    nom = models.CharField(max_length=100)
    adresse = models.TextField()
    telephone = models.CharField(max_length=20)

class Formation(models.Model):
    titre = models.CharField(max_length=100)
    description = models.TextField()
    duree = models.IntegerField()
    centre = models.ForeignKey(CentreFormation, on_delete=models.CASCADE)

class Utilisateur(models.Model):
    nom = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    mot_de_passe = models.CharField(max_length=128)

class Inscription(models.Model):
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    formation = models.ForeignKey(Formation, on_delete=models.CASCADE)
    date_inscription = models.DateField(auto_now_add=True)
