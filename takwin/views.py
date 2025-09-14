from django.shortcuts import render
from .models import Utilisateur
from .models import CentreFormation
from django.contrib import messages
from django.contrib.auth.hashers import check_password
from django.shortcuts import redirect
from django.contrib.auth.hashers import make_password
# Create your views here.

def signup(request):
    if request.method == "POST":
       role = request.POST.get("role")
       print("Role reçu:", role, type(role)) 
       if role == "student":
            return signupUser(request)
       elif role == "center":
            return signupcentre(request)
       else:
            print("No role selected", request.POST)
            print( "Veuillez sélectionner un rôle")
            messages.error(request, "Veuillez sélectionner un rôle")
            return render(request, 'pages/signup.html')
    else:
        return render(request, 'pages/signup.html')

def signupUser(request):
    """
    Render the signup page for the Takwin application.
    """
    nom= request.POST.get("student-nom")
    prenom= request.POST.get("student-nom-famille")
    email= request.POST.get("student-email")
    password= request.POST.get("student-password")
    role= request.POST.get("role")

    if Utilisateur.objects.filter(email=email).exists():
         print("E-mail déjà utilisé", request.POST, Utilisateur.objects.filter(email=email).exists())
         messages.error(request,"E-mail déjà utilisé")
         return render(request, 'pages/signup.html')
    else:
         try:
             utilisateur = Utilisateur(nom=nom, prenom=prenom, email=email, mot_de_passe=password, role=role)
             utilisateur.save()

             print( "Inscription réussie")
             messages.success(request, "Inscription réussie")
             return redirect('login.html')
         except Exception as e:
             print( f"Erreur lors de l'inscription: {e}")
             messages.error(request, f"Erreur lors de l'inscription: {e}")
    return render(request, 'pages/signup.html')

def signupcentre(request):
    """
    Render the signup page for the Takwin application.
    """
    name = request.POST.get("nom_centre")
    phone = request.POST.get("center-telephone")
    email = request.POST.get("center-email")
    mot_de_passe = request.POST.get("center-password")
    address = request.POST.get("center-adresse")

    exists = CentreFormation.objects.filter(email=email).exists()
    print(f"Centre with email {email} exists: {exists}")
    if CentreFormation.objects.filter(email=email).exists():
        print("Email already exists")
        print( "E-mail déjà utilisé")
        messages.error(request, "E-mail déjà utilisé")
        return render(request, 'pages/signup.html')
    else:
        print("Creating new CentreFormation")
        centre = CentreFormation(name=name, phone=phone, email=email, mot_de_passe=make_password(mot_de_passe), address=address)
        centre.save()
        print( "Centre de formation créé avec succès")
        messages.success(request, "Centre de formation créé avec succès")
        return redirect ( 'login.html')
    return render(request, 'pages/signup.html')

def login(request):
    if request.method == "POST":
       role= request.POST.get("role")
       print("Role reçu:", role, type(role))
       if role == "student":
            return loginuser(request)
       elif role == "center":
            return logincentre(request)
       
       else:
            print("No role selected", request.POST)
            print( "Veuillez sélectionner un rôle")
            messages.error(request, "Veuillez sélectionner un rôle")
            return render(request, 'pages/login.html')
    else:
        return render(request, 'pages/login.html')

def loginuser(request):
    """
    Render the login page for the Takwin application.
    """
    if request.method == "POST":
        email = request.POST.get("student-email")
        password = request.POST.get("student-password")

        try:
            print( "Attempting to find user with email:", email)
            user = Utilisateur.objects.get(email=email)
            print( "User found:", user, password, user.mot_de_passe)

            # Check if the password matches 
            # Note: In a real application, you should use Django's built-in authentication system
            if password == user.mot_de_passe:
                print( "Hi ")
                messages.success(request, "Hi ")

                request.session['name'] = user.nom
                return redirect('sessionetudiant')  
            else:
                print( "mot de passe ou e-mail incorrect")
                messages.error(request, "mot de passe ou e-mail incorrect")
        except Utilisateur.DoesNotExist:
            print( "Utilisateur non trouvé")
            messages.error(request, "Utilisateur non trouvé")

        print("Rendering login page again")
        return render(request, 'pages/login.html')
    
def logincentre(request):
    """Render the login page for the Takwin application.
    """
    if request.method == "POST":
        email = request.POST.get("center-email")
        password = request.POST.get("center-password")

        try:
            centre = CentreFormation.objects.get(email=email)
            
            # Check if the password matches 
            # Note: In a real application, you should use Django's built-in authentication system
            if  centre.mot_de_passe and check_password(password, centre.mot_de_passe):
                print( "Bienvenue ")
                messages.success(request, "Bienvenue ")
                request.session['name'] = centre.name
                return redirect ("sessioncentre")  
            else:
                print( "mot de passe ou e-mail incorrect")
                messages.error(request, "mot de passe ou e-mail incorrect")
        except CentreFormation.DoesNotExist:
            print( "Centre non trouvé")
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
    name = request.session.get("name")

    return render(request, 'pages/sessionetudiant.html', {"name": name})
def sessioncentre(request):
    """
    Render the session page for the Takwin application.
    """
    name = request.session.get("name")

    return render(request, 'pages/sessioncentre.html', {"name": name})


