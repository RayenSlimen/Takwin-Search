from django.shortcuts import render

# Create your views here.

def signup(request):
    """
    Render the signup page for the Takwin application.
    """
    return render(request, 'pages/signup.html')

def login(request):
    """
    Render the login page for the Takwin application.
    """
    return render(request, 'pages/login.html')
def inscription(request):
    """Render the inscription page for the Takwin application.
    """
    return render(request, 'pages/inscription.html')

from datetime import date

def inscription_view(request):
    utilisateurs = Utilisateur.objects.all()
    formations = Formation.objects.all()
    today = date.today()

    if request.method == "POST":
        utilisateur_id = request.POST.get("utilisateur_id")
        formation_id = request.POST.get("formation_id")

        utilisateur = Utilisateur.objects.get(id=utilisateur_id)
        formation = Formation.objects.get(id=formation_id)

        Inscription.objects.create(utilisateur=utilisateur, formation=formation)

        return redirect("success")

    return render(request, "pages/inscription.html", {
        "utilisateurs": utilisateurs,
        "formations": formations,
        "today_date": today.strftime("%Y-%m-%d"),
    })
def centre_de_formation_view(request):
    """
    Render the centre de formation page for the Takwin application.
    """
    return render(request, 'pages/centre_de_formation.html')