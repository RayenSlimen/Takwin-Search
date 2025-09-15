function selectRole(role) {
            // Reset all buttons and forms
            document.querySelectorAll('.role-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.signup-form').forEach(form => form.classList.remove('active'));

            // Activate selected role
            if (role === 'student') {
                document.getElementById('roleInput').value = role;
                document.getElementById('student-btn').classList.add('active');
                document.getElementsByClassName('student-form')[0].classList.add('active');
            } else if (role === 'center') {
                document.getElementById('roleInput').value = role;
                document.getElementById('center-btn').classList.add('active');
                document.getElementsByClassName('center-form')[0].classList.add('active');
            }
        }

        // Form validation
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function (e) {
                const inputs = form.querySelectorAll('input], select]');
                let valid = true;

                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        input.style.borderColor = '#ef4444';
                        valid = false;
                    } else {
                        input.style.borderColor = '#e5e7eb';
                    }
                });

                if (!valid) {
                    e.preventDefault();
                    alert('Veuillez remplir tous les champs obligatoires.');
                }
            });
        });

        // Input focus effects
        document.querySelectorAll('.form-input').forEach(input => {
            input.addEventListener('focus', function () {
                this.style.borderColor = '#4f46e5';
            });

            input.addEventListener('blur', function () {
                if (!this.value) {
                    this.style.borderColor = '#e5e7eb';
                }
            });
        });