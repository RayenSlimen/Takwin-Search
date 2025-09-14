const userTypeBtns = document.querySelectorAll('.user-type-btn');
        const loginForms = document.querySelectorAll('.login-form');

        userTypeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const userType = btn.getAttribute('data-type');

                // Supprimer la classe active de tous les boutons
                userTypeBtns.forEach(b => b.classList.remove('active'));
                // Ajouter la classe active au bouton sélectionné
                btn.classList.add('active');

                // Masquer tous les formulaires
                loginForms.forEach(form => form.classList.remove('active'));

                document.getElementById('roleInput').value = userType;

                // Afficher le formulaire sélectionné
                if (userType === 'student') {
                    document.getElementById('studentForm').classList.add('active');
                } else {
                    document.getElementById('centerForm').classList.add('active');
                }
            });
        });

        // Gestion de la connexion étudiant
        document.getElementById('studentForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('student-email').value;
            const password = document.getElementById('student-password').value;

            // Validation des données
            if (validateLogin(email, password)) {
                showMessage('Connexion réussie en tant qu\'étudiant !', 'success');
                // Ici, vous pouvez ajouter le code pour envoyer les données au serveur
                console.log('Connexion Étudiant:', { email, password, type: 'student' });
            } else {
                showMessage('Veuillez vérifier votre e-mail et mot de passe', 'error');
            }
        });

        // Gestion de la connexion centre de formation
        document.getElementById('centerForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('center-email').value;
            const password = document.getElementById('center-password').value;

            // Validation des données
            if (validateLogin(email, password)) {
                showMessage('Connexion réussie en tant que centre de formation !', 'success');
                // Ici, vous pouvez ajouter le code pour envoyer les données au serveur
                console.log('Connexion Centre de Formation:', { email, password, type: 'center' });
            } else {
                showMessage('Veuillez vérifier votre e-mail et mot de passe', 'error');
            }
        });

        // Validation des données de connexion
        function validateLogin(email, password) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email) && password.length >= 6;
        }

        // Affichage des messages
        function showMessage(message, type) {
            const successDiv = document.getElementById('successMessage');
            const errorDiv = document.getElementById('errorMessage');

            // Masquer tous les messages
            successDiv.style.display = 'none';
            errorDiv.style.display = 'none';

            if (type === 'success') {
                successDiv.textContent = message;
                successDiv.style.display = 'block';
                setTimeout(() => {
                    successDiv.style.display = 'none';
                }, 5000);
            } else {
                errorDiv.textContent = message;
                errorDiv.style.display = 'block';
                setTimeout(() => {
                    errorDiv.style.display = 'none';
                }, 5000);
            }
        }

        // Gestion du mot de passe oublié
        function showForgotPassword(userType) {
            const typeText = userType === 'student' ? 'l\'étudiant' : 'le centre de formation';
            alert(`Un lien de réinitialisation du mot de passe sera envoyé à l'adresse e-mail de ${typeText}`);
        }

        // Ajouter un effet visuel aux champs
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', function () {
                this.parentElement.style.transform = 'scale(1.02)';
            });

            input.addEventListener('blur', function () {
                this.parentElement.style.transform = 'scale(1)';
            });
        });

        // Validation de l'e-mail en temps réel
        inputs.forEach(input => {
            if (input.type === 'email') {
                input.addEventListener('input', function () {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (this.value && !emailRegex.test(this.value)) {
                        this.style.borderColor = '#dc3545';
                    } else {
                        this.style.borderColor = '#e1e5e9';
                    }
                });
            }
        });