from django.shortcuts import render
from .models import Utilisateur
from .models import CentreFormation
from django.contrib import messages
from django.contrib.auth.hashers import check_password
from django.shortcuts import redirect
# Create your views here.

def signupUser(request):
    """
    Render the signup page for the Takwin application.
    """
    if request.method == "POST":
       nom= request.POST.get("nom")
       prenom= request.POST.get("prenom")
       email= request.POST.get("email")
       password= request.POST.get("password")
       role= request.POST.get("role")
    
       if Utilisateur.objects.filter(email=email).exists():
            messages.error(request,"E-mail déjà utilisé")
            return render(request, 'pages/signup.html')
       else:
            utilisateur = Utilisateur(nom=nom, prenom=prenom, email=email, mot_de_passe=password, role=role)
            utilisateur.save()
            messages.success(request, "Inscription réussie")
            return render(request, 'login.html')
    return render(request, 'pages/signup.html')
def signupcentre(request):
    """
    Render the signup page for the Takwin application.
    """
    if request.method == "POST":
        name = request.POST.get("nom_centre")
        phone = request.POST.get("telephone")
        email = request.POST.get("email")
        address = request.POST.get("adresse")
        print(f"Received data: {name}, {phone}, {email}, {address}")
        exists = CentreFormation.objects.filter(email=email).exists()
        print(f"Centre with email {email} exists: {exists}")
        if CentreFormation.objects.filter(email=email).exists():
            print("Email already exists")
            messages.error(request, "E-mail déjà utilisé")
            return render(request, 'pages/signup.html')
        else:
            print("Creating new CentreFormation")
            centre = CentreFormation(name=name, phone=phone, email=email, address=address)
            centre.save()
            messages.success(request, "Centre de formation créé avec succès")
            return render(request, 'logincentre')
    return render(request, 'pages/signup.html')

def loginuser(request):
    """
    Render the login page for the Takwin application.
    """
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        try:
            user = Utilisateur.objects.get(email=email)
            
            # Check if the password matches 
            # Note: In a real application, you should use Django's built-in authentication system
            if check_password(password, Utilisateur.mot_de_passe):
                messages.success(request, "Hi ")
                return render(request,"pages/sessionetudiant.html")  
            else:
                messages.error(request, "mot de passe ou e-mail incorrect")
        except Utilisateur.DoesNotExist:
            messages.error(request, "Utilisateur non trouvé")

    return render(request, 'pages/login.html')
def logincentre(request):
    """Render the login page for the Takwin application.
    """
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        try:
            centre = CentreFormation.objects.get(email=email)
            
            # Check if the password matches 
            # Note: In a real application, you should use Django's built-in authentication system
            if check_password(password, centre.mot_de_passe):
                messages.success(request, "Bienvenue ")
                return render(request,"pages/sessioncentre.html")  
            else:
                messages.error(request, "mot de passe ou e-mail incorrect")
        except CentreFormation.DoesNotExist:
            messages.error(request, "Centre non trouvé")

    return render(request, 'pages/login.html')

def centre_de_formation_view(request):
    """
    Render the centre de formation page for the Takwin application.
    """
    return render(request, 'pages/centre_de_formation.html')
def sessionetudiant(request):
    """
    Render the session page for the Takwin application.
    """
    return render(request, 'pages/sessionetudiant.html')
def sessioncentre(request):
    """
    Render the session page for the Takwin application.
    """
    return render(request, 'pages/sessioncentre.html')

