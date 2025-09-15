 const specialties = [
            "Technologies de l'Information", "Électronique", "Mécanique Générale", "Réfrigération et Climatisation",
            "Bâtiment et Travaux Publics", "Menuiserie", "Soudure", "Plomberie",
            "Programmation Avancée", "Développement d'Applications Mobiles", "Sécurité Informatique", "Intelligence Artificielle",
            "Soins Infirmiers Spécialisés", "Assistance Médicale", "Techniques de Laboratoire", "Premiers Secours",
            "Industries Alimentaires", "Marketing et Commerce", "Comptabilité", "Secrétariat",
            "Gestion de Restaurants", "Services de Réception", "Animation Touristique", "Guide Touristique",
            "Automatisation Industrielle", "Maintenance Électrotechnique", "Énergies Renouvelables", "Robotique",
            "Agriculture Moderne", "Élevage", "Agroalimentaire", "Environnement"
        ];

        // Données des centres
        const trainingCenters = [
            {
                id: 1,
                name: "Centre de Formation Professionnelle Hay Elkhadra",
                city: "Tunis",
                type: "Public"
            },
            {
                id: 2,
                name: "Centre de Formation et d'Apprentissage Ariana",
                city: "Ariana",
                type: "Public"
            },
            {
                id: 3,
                name: "Institut Horizon Informatique et Gestion",
                city: "Tunis",
                type: "Privé"
            },
            {
                id: 4,
                name: "École Supérieure de Santé et Soins Infirmiers",
                city: "Tunis",
                type: "Privé"
            },
            {
                id: 5,
                name: "Centre de Formation Professionnelle Sfax Centre-Ville",
                city: "Sfax",
                type: "Public"
            },
            {
                id: 6,
                name: "Centre Sectoriel de Tourisme Monastir",
                city: "Monastir",
                type: "Sectoriel"
            },
            {
                id: 7,
                name: "Institut de Technologie Appliquée Sousse",
                city: "Sousse",
                type: "Public"
            },
            {
                id: 8,
                name: "Centre de Formation Agricole Bizerte",
                city: "Bizerte",
                type: "Sectoriel"
            }
        ];

        // État global
        let sessions = [];
        let filteredSessions = [];

        // Initialisation
        document.addEventListener('DOMContentLoaded', function () {
            initializeApp();
        });

        function initializeApp() {
            loadStoredSessions();
            generateSampleSessions();
            populateFilters();
            populateFormSelects();
            displaySessions();
            updateStatistics();
            setupEventListeners();
        }

        function setupEventListeners() {
            document.getElementById('addSessionForm').addEventListener('submit', function (e) {
                e.preventDefault();
                addNewSession();
            });

            // Auto-update end date when start date changes
            document.getElementById('sessionStartDate').addEventListener('change', function () {
                const startDate = new Date(this.value);
                if (startDate) {
                    const endDate = new Date(startDate);
                    endDate.setMonth(endDate.getMonth() + 6); // Default 6 months duration
                    document.getElementById('sessionEndDate').value = endDate.toISOString().split('T')[0];
                }
            });
        }

        function generateSampleSessions() {
            if (sessions.length === 0) {
                // Générer des sessions d'exemple
                const sampleSessions = [
                    {
                        id: 1,
                        specialty: "Technologies de l'Information",
                        center: "Centre de Formation Professionnelle Hay Elkhadra",
                        city: "Tunis",
                        startDate: "2024-09-15",
                        endDate: "2025-03-15",
                        location: "Laboratoire Informatique A1",
                        totalPlaces: 25,
                        availablePlaces: 18,
                        price: 800,
                        description: "Formation complète en développement web et programmation"
                    },
                    {
                        id: 2,
                        specialty: "Électronique",
                        center: "Centre de Formation Professionnelle Hay Elkhadra",
                        city: "Tunis",
                        startDate: "2024-10-01",
                        endDate: "2025-04-01",
                        location: "Atelier Électronique B2",
                        totalPlaces: 20,
                        availablePlaces: 5,
                        price: 650,
                        description: "Formation pratique en électronique et circuits"
                    },
                    {
                        id: 3,
                        specialty: "Menuiserie",
                        center: "Centre de Formation et d'Apprentissage Ariana",
                        city: "Ariana",
                        startDate: "2024-09-30",
                        endDate: "2025-02-28",
                        location: "Atelier Menuiserie Principal",
                        totalPlaces: 15,
                        availablePlaces: 0,
                        price: 450,
                        description: "Apprentissage des techniques de menuiserie traditionnelle et moderne"
                    },
                    {
                        id: 4,
                        specialty: "Programmation Avancée",
                        center: "Institut Horizon Informatique et Gestion",
                        city: "Tunis",
                        startDate: "2024-11-01",
                        endDate: "2025-05-01",
                        location: "Lab Développement 3",
                        totalPlaces: 30,
                        availablePlaces: 22,
                        price: 1200,
                        description: "Formation avancée en développement logiciel et frameworks modernes"
                    },
                    {
                        id: 5,
                        specialty: "Soins Infirmiers Spécialisés",
                        center: "École Supérieure de Santé et Soins Infirmiers",
                        city: "Tunis",
                        startDate: "2024-10-15",
                        endDate: "2026-10-15",
                        location: "Laboratoire de Simulation Médicale",
                        totalPlaces: 18,
                        availablePlaces: 12,
                        price: 2000,
                        description: "Formation complète en soins infirmiers avec stages hospitaliers"
                    },
                    {
                        id: 6,
                        specialty: "Marketing et Commerce",
                        center: "Centre de Formation Professionnelle Sfax Centre-Ville",
                        city: "Sfax",
                        startDate: "2024-09-20",
                        endDate: "2025-01-20",
                        location: "Salle Marketing 101",
                        totalPlaces: 25,
                        availablePlaces: 15,
                        price: 600,
                        description: "Techniques modernes de marketing et stratégies commerciales"
                    },
                    {
                        id: 7,
                        specialty: "Gestion de Restaurants",
                        center: "Centre Sectoriel de Tourisme Monastir",
                        city: "Monastir",
                        startDate: "2024-10-10",
                        endDate: "2025-03-10",
                        location: "Restaurant École",
                        totalPlaces: 20,
                        availablePlaces: 8,
                        price: 750,
                        description: "Formation pratique en gestion d'établissements de restauration"
                    },
                    {
                        id: 8,
                        specialty: "Énergies Renouvelables",
                        center: "Institut de Technologie Appliquée Sousse",
                        city: "Sousse",
                        startDate: "2024-11-15",
                        endDate: "2025-06-15",
                        location: "Laboratoire Énergies Vertes",
                        totalPlaces: 22,
                        availablePlaces: 19,
                        price: 900,
                        description: "Technologies solaires, éoliennes et systèmes énergétiques durables"
                    },
                    {
                        id: 9,
                        specialty: "Agriculture Moderne",
                        center: "Centre de Formation Agricole Bizerte",
                        city: "Bizerte",
                        startDate: "2024-09-01",
                        endDate: "2025-02-01",
                        location: "Ferme École",
                        totalPlaces: 16,
                        availablePlaces: 11,
                        price: 400,
                        description: "Techniques agricoles modernes et agriculture biologique"
                    },
                    {
                        id: 10,
                        specialty: "Robotique",
                        center: "Institut de Technologie Appliquée Sousse",
                        city: "Sousse",
                        startDate: "2025-01-02",
                        endDate: "2025-07-02",
                        location: "Lab Robotique Avancée",
                        totalPlaces: 12,
                        availablePlaces: 12,
                        price: 1100,
                        description: "Conception, programmation et maintenance de systèmes robotiques"
                    }
                ];

                sessions = sampleSessions;
                saveSessionsToStorage();
            }
        }

        function populateFilters() {
            // Peupler le filtre des spécialités
            const specialtyFilter = document.getElementById('filterSpecialty');
            specialties.forEach(specialty => {
                const option = document.createElement('option');
                option.value = specialty;
                option.textContent = specialty;
                specialtyFilter.appendChild(option);
            });

            // Peupler le filtre des centres
            const centerFilter = document.getElementById('filterCenter');
            trainingCenters.forEach(center => {
                const option = document.createElement('option');
                option.value = center.name;
                option.textContent = center.name;
                centerFilter.appendChild(option);
            });

            // Peupler le filtre des villes
            const cityFilter = document.getElementById('filterCity');
            const cities = [...new Set(trainingCenters.map(center => center.city))];
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                cityFilter.appendChild(option);
            });

            // Peupler le filtre des mois
            const monthFilter = document.getElementById('filterMonth');
            const months = [
                'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
                'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
            ];
            months.forEach((month, index) => {
                const option = document.createElement('option');
                option.value = String(index + 1).padStart(2, '0');
                option.textContent = month;
                monthFilter.appendChild(option);
            });
        }

        function populateFormSelects() {
            // Peupler le select des spécialités dans le formulaire
            const specialtySelect = document.getElementById('sessionSpecialty');
            specialties.forEach(specialty => {
                const option = document.createElement('option');
                option.value = specialty;
                option.textContent = specialty;
                specialtySelect.appendChild(option);
            });

            // Peupler le select des centres dans le formulaire
            const centerSelect = document.getElementById('sessionCenter');
            trainingCenters.forEach(center => {
                const option = document.createElement('option');
                option.value = center.name;
                option.textContent = `${center.name} (${center.city})`;
                centerSelect.appendChild(option);
            });
        }

        function displaySessions() {
            const grid = document.getElementById('sessionsGrid');
            filteredSessions = sessions.slice(); // Copy all sessions initially

            if (filteredSessions.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📅</div>
                        <h3>Aucune session disponible</h3>
                        <p>Il n'y a actuellement aucune session de formation qui correspond à vos critères.</p>
                        <button class="btn btn-primary" onclick="showAddSessionModal()" style="margin-top: 1rem;">
                            ➕ Ajouter une session
                        </button>
                    </div>
                `;
                return;
            }

            grid.innerHTML = filteredSessions.map(session => {
                const statusInfo = getSessionStatus(session);
                const startDate = new Date(session.startDate);
                const endDate = new Date(session.endDate);
                const centerInfo = trainingCenters.find(center => center.name === session.center);

                return `
                    <div class="session-card">
                        <div class="session-specialty">${session.specialty}</div>
                        <div class="session-center">📍 ${session.center}</div>
                        
                        <div class="session-details">
                            <div class="session-detail">
                                <div class="detail-icon">📅</div>
                                <div>
                                    <strong>Début:</strong> ${formatDate(startDate)}<br>
                                    <strong>Fin:</strong> ${formatDate(endDate)}
                                </div>
                            </div>
                            <div class="session-detail">
                                <div class="detail-icon">📍</div>
                                <div>
                                    <strong>Lieu:</strong> ${session.location}<br>
                                    <strong>Ville:</strong> ${session.city}
                                </div>
                            </div>
                            <div class="session-detail">
                                <div class="detail-icon">👥</div>
                                <div>
                                    <strong>Places:</strong> ${session.availablePlaces}/${session.totalPlaces} disponibles
                                </div>
                            </div>
                            ${session.price ? `
                                <div class="session-detail">
                                    <div class="detail-icon">💰</div>
                                    <div><strong>Prix:</strong> ${session.price} TND</div>
                                </div>
                            ` : ''}
                        </div>

                        <div class="session-status ${statusInfo.class}">
                            ${statusInfo.text}
                        </div>

                        ${session.description ? `
                            <div style="margin-bottom: 1rem;">
                                <strong>Description:</strong><br>
                                <small style="color: #666;">${session.description}</small>
                            </div>
                        ` : ''}

                        <div class="session-actions">
                            <button class="btn btn-primary" onclick="registerForSession(${session.id})" 
                                    ${session.availablePlaces === 0 ? 'disabled' : ''}>
                                📝 S'inscrire
                            </button>
                            <button class="btn btn-secondary" onclick="viewSessionDetails(${session.id})">
                                👁️ Détails
                            </button>
                           
                        </div>
                    </div>
                `;
            }).join('');
        }

        function getSessionStatus(session) {
            const availablePercentage = (session.availablePlaces / session.totalPlaces) * 100;

            if (session.availablePlaces === 0) {
                return { class: 'status-full', text: '❌ Complet' };
            } else if (availablePercentage <= 25) {
                return { class: 'status-limited', text: '⚠️ Places limitées' };
            } else {
                return { class: 'status-available', text: '✅ Places disponibles' };
            }
        }

        function formatDate(date) {
            return date.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }

        function filterSessions() {
            const specialtyFilter = document.getElementById('filterSpecialty').value;
            const centerFilter = document.getElementById('filterCenter').value;
            const cityFilter = document.getElementById('filterCity').value;
            const monthFilter = document.getElementById('filterMonth').value;

            filteredSessions = sessions.filter(session => {
                let matches = true;

                if (specialtyFilter && session.specialty !== specialtyFilter) {
                    matches = false;
                }

                if (centerFilter && session.center !== centerFilter) {
                    matches = false;
                }

                if (cityFilter && session.city !== cityFilter) {
                    matches = false;
                }

                if (monthFilter) {
                    const sessionMonth = new Date(session.startDate).getMonth() + 1;
                    if (String(sessionMonth).padStart(2, '0') !== monthFilter) {
                        matches = false;
                    }
                }

                return matches;
            });

            displaySessions();
            updateStatistics();
            showNotification(`${filteredSessions.length} session(s) trouvée(s)`, 'success');
        }

        function resetFilters() {
            document.getElementById('filterSpecialty').value = '';
            document.getElementById('filterCenter').value = '';
            document.getElementById('filterCity').value = '';
            document.getElementById('filterMonth').value = '';

            filteredSessions = sessions.slice();
            displaySessions();
            updateStatistics();
            showNotification('Filtres réinitialisés', 'success');
        }

        function showAddSessionModal() {
            document.getElementById('addSessionModal').classList.add('show');

            // Set minimum date to today
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('sessionStartDate').min = today;
            document.getElementById('sessionEndDate').min = today;
        }

        function hideAddSessionModal() {
            document.getElementById('addSessionModal').classList.remove('show');
            document.getElementById('addSessionForm').reset();
        }

        function addNewSession() {
            const specialty = document.getElementById('sessionSpecialty').value;
            const centerName = document.getElementById('sessionCenter').value;
            const startDate = document.getElementById('sessionStartDate').value;
            const endDate = document.getElementById('sessionEndDate').value;
            const location = document.getElementById('sessionLocation').value;
            const places = parseInt(document.getElementById('sessionPlaces').value);
            const price = document.getElementById('sessionPrice').value;
            const description = document.getElementById('sessionDescription').value;

            // Validation
            if (!specialty || !centerName || !startDate || !endDate || !location || !places) {
                showNotification('Veuillez remplir tous les champs obligatoires', 'error');
                return;
            }

            if (new Date(endDate) <= new Date(startDate)) {
                showNotification('La date de fin doit être après la date de début', 'error');
                return;
            }

            // Find center info
            const center = trainingCenters.find(c => c.name === centerName);
            if (!center) {
                showNotification('Centre non trouvé', 'error');
                return;
            }

            // Create new session
            const newSession = {
                id: Date.now(),
                specialty: specialty,
                center: centerName,
                city: center.city,
                startDate: startDate,
                endDate: endDate,
                location: location,
                totalPlaces: places,
                availablePlaces: places,
                price: price ? parseInt(price) : null,
                description: description || null
            };

            sessions.push(newSession);
            saveSessionsToStorage();
            displaySessions();
            updateStatistics();
            hideAddSessionModal();
            showNotification('Session ajoutée avec succès!', 'success');
        }

        function registerForSession(sessionId) {
            const session = sessions.find(s => s.id === sessionId);
            if (!session) return;

            if (session.availablePlaces <= 0) {
                showNotification('Aucune place disponible pour cette session', 'error');
                return;
            }

            // Simulate registration process
            const confirmed = confirm(`Confirmer l'inscription à la session:\n\n${session.specialty}\n${session.center}\nDébut: ${formatDate(new Date(session.startDate))}\n\nContinuer?`);

            if (confirmed) {
                session.availablePlaces--;
                saveSessionsToStorage();
                displaySessions();
                updateStatistics();
                showNotification('Inscription confirmée! Vous recevrez un email de confirmation.', 'success');
            }
        }

        function viewSessionDetails(sessionId) {
            const session = sessions.find(s => s.id === sessionId);
            if (!session) return;

            const center = trainingCenters.find(c => c.name === session.center);
            const duration = calculateDuration(session.startDate, session.endDate);

            const detailsHtml = `
                <h3 style="color: #667eea; margin-bottom: 1rem;">${session.specialty}</h3>
                
                <div style="background: #f8f9ff; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
                    <h4 style="margin-bottom: 1rem;">📍 Informations Générales</h4>
                    <p><strong>Centre:</strong> ${session.center}</p>
                    <p><strong>Ville:</strong> ${session.city}</p>
                    <p><strong>Type:</strong> ${center ? center.type : 'N/A'}</p>
                    <p><strong>Lieu de formation:</strong> ${session.location}</p>
                </div>

                <div style="background: #f8f9ff; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
                    <h4 style="margin-bottom: 1rem;">📅 Planning</h4>
                    <p><strong>Date de début:</strong> ${formatDate(new Date(session.startDate))}</p>
                    <p><strong>Date de fin:</strong> ${formatDate(new Date(session.endDate))}</p>
                    <p><strong>Durée:</strong> ${duration}</p>
                </div>

                <div style="background: #f8f9ff; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
                    <h4 style="margin-bottom: 1rem;">👥 Inscriptions</h4>
                    <p><strong>Places totales:</strong> ${session.totalPlaces}</p>
                    <p><strong>Places disponibles:</strong> ${session.availablePlaces}</p>
                    <p><strong>Taux d'occupation:</strong> ${Math.round(((session.totalPlaces - session.availablePlaces) / session.totalPlaces) * 100)}%</p>
                    ${session.price ? `<p><strong>Prix:</strong> ${session.price} TND</p>` : '<p><strong>Prix:</strong> Gratuit</p>'}
                </div>

                ${session.description ? `
                    <div style="background: #f8f9ff; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
                        <h4 style="margin-bottom: 1rem;">📋 Description</h4>
                        <p>${session.description}</p>
                    </div>
                ` : ''}

                <div style="text-align: center; margin-top: 2rem;">
                    <button class="btn btn-success" onclick="registerForSession(${session.id}); closeModal();" 
                            ${session.availablePlaces === 0 ? 'disabled' : ''}>
                        📝 S'inscrire à cette session
                    </button>
                </div>
            `;

            showModal(detailsHtml);
        }

        function editSession(sessionId) {
            const session = sessions.find(s => s.id === sessionId);
            if (!session) return;

            // Pre-fill the form with session data
            document.getElementById('sessionSpecialty').value = session.specialty;
            document.getElementById('sessionCenter').value = session.center;
            document.getElementById('sessionStartDate').value = session.startDate;
            document.getElementById('sessionEndDate').value = session.endDate;
            document.getElementById('sessionLocation').value = session.location;
            document.getElementById('sessionPlaces').value = session.totalPlaces;
            document.getElementById('sessionPrice').value = session.price || '';
            document.getElementById('sessionDescription').value = session.description || '';

            // Change the form behavior to edit mode
            const form = document.getElementById('addSessionForm');
            const originalSubmit = form.onsubmit;

            form.onsubmit = function (e) {
                e.preventDefault();
                updateSession(sessionId);
            };

            document.querySelector('.modal-title').textContent = 'Modifier la Session';
            showAddSessionModal();
        }

        function updateSession(sessionId) {
            const sessionIndex = sessions.findIndex(s => s.id === sessionId);
            if (sessionIndex === -1) return;

            const specialty = document.getElementById('sessionSpecialty').value;
            const centerName = document.getElementById('sessionCenter').value;
            const startDate = document.getElementById('sessionStartDate').value;
            const endDate = document.getElementById('sessionEndDate').value;
            const location = document.getElementById('sessionLocation').value;
            const newTotalPlaces = parseInt(document.getElementById('sessionPlaces').value);
            const price = document.getElementById('sessionPrice').value;
            const description = document.getElementById('sessionDescription').value;

            // Validation
            if (!specialty || !centerName || !startDate || !endDate || !location || !newTotalPlaces) {
                showNotification('Veuillez remplir tous les champs obligatoires', 'error');
                return;
            }

            const center = trainingCenters.find(c => c.name === centerName);
            const currentSession = sessions[sessionIndex];

            // Adjust available places if total places changed
            const placesBooked = currentSession.totalPlaces - currentSession.availablePlaces;
            const newAvailablePlaces = Math.max(0, newTotalPlaces - placesBooked);

            // Update session
            sessions[sessionIndex] = {
                ...currentSession,
                specialty: specialty,
                center: centerName,
                city: center.city,
                startDate: startDate,
                endDate: endDate,
                location: location,
                totalPlaces: newTotalPlaces,
                availablePlaces: newAvailablePlaces,
                price: price ? parseInt(price) : null,
                description: description || null
            };

            saveSessionsToStorage();
            displaySessions();
            updateStatistics();
            hideAddSessionModal();

            // Reset form behavior
            document.getElementById('addSessionForm').onsubmit = function (e) {
                e.preventDefault();
                addNewSession();
            };
            document.querySelector('.modal-title').textContent = 'Ajouter une Nouvelle Session';

            showNotification('Session modifiée avec succès!', 'success');
        }

        function deleteSession(sessionId) {
            const session = sessions.find(s => s.id === sessionId);
            if (!session) return;

            const confirmed = confirm(`Êtes-vous sûr de vouloir supprimer la session:\n\n${session.specialty}\n${session.center}\n\nCette action est irréversible.`);

            if (confirmed) {
                sessions = sessions.filter(s => s.id !== sessionId);
                saveSessionsToStorage();
                displaySessions();
                updateStatistics();
                showNotification('Session supprimée avec succès', 'success');
            }
        }

        function calculateDuration(startDate, endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const diffMonths = Math.round(diffDays / 30);

            if (diffMonths < 1) {
                return `${diffDays} jours`;
            } else if (diffMonths < 12) {
                return `${diffMonths} mois`;
            } else {
                const years = Math.floor(diffMonths / 12);
                const remainingMonths = diffMonths % 12;
                return `${years} an${years > 1 ? 's' : ''}${remainingMonths > 0 ? ` et ${remainingMonths} mois` : ''}`;
            }
        }

        function updateStatistics() {
            const totalSessionsEl = document.getElementById('totalSessions');
            const totalPlacesEl = document.getElementById('totalPlaces');

            const currentSessions = filteredSessions.length > 0 ? filteredSessions : sessions;
            const totalPlaces = currentSessions.reduce((sum, session) => sum + session.availablePlaces, 0);

            totalSessionsEl.textContent = currentSessions.length;
            totalPlacesEl.textContent = totalPlaces;
        }

        // Storage functions
        function saveSessionsToStorage() {
            localStorage.setItem('trainingSessions', JSON.stringify(sessions));
        }

        function loadStoredSessions() {
            const stored = localStorage.getItem('trainingSessions');
            if (stored) {
                sessions = JSON.parse(stored);
            }
        }

        // Utility functions
        function showNotification(message, type = 'success') {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.className = `notification ${type} show`;

            setTimeout(() => {
                notification.classList.remove('show');
            }, 4000);
        }

        function showModal(content) {
            let modal = document.getElementById('globalModal');
            if (!modal) {
                modal = document.createElement('div');
                modal.id = 'globalModal';
                modal.className = 'modal';

                const modalContent = document.createElement('div');
                modalContent.className = 'modal-content';
                modalContent.style.maxWidth = '700px';

                const closeBtn = document.createElement('button');
                closeBtn.innerHTML = '×';
                closeBtn.className = 'close-btn';
                closeBtn.onclick = closeModal;
                closeBtn.style.position = 'absolute';
                closeBtn.style.top = '15px';
                closeBtn.style.right = '15px';

                const contentDiv = document.createElement('div');
                contentDiv.id = 'modalContentArea';
                contentDiv.style.paddingTop = '1rem';

                modalContent.appendChild(closeBtn);
                modalContent.appendChild(contentDiv);
                modal.appendChild(modalContent);
                document.body.appendChild(modal);
            }

            document.getElementById('modalContentArea').innerHTML = content;
            modal.classList.add('show');
        }

        function closeModal() {
            const modal = document.getElementById('globalModal');
            if (modal) {
                modal.classList.remove('show');
            }
        }

        // Navigation functions
        function goHome() {
            window.location.href = '#';
        }

        function showAllCenters() {
            alert('Redirection vers la page des centres...');
        }

        function showSessions() {
            // Already on sessions page
        }

        function showContact() {
            alert('Redirection vers la page de contact...');
        }