
        const trainingCenters = [
            {
                id: 1,
                name: "Centre de Formation Professionnelle Hay Elkhadra",
                city: "Tunis",
                specialties: ["Technologies de l'Information", "Électronique", "Mécanique Générale", "Réfrigération et Climatisation"],
                type: "Public",
                phone: "71 234 567",
                email: "cfp.hayelkhadra@education.tn",
                address: "Avenue Habib Bourguiba, Hay Elkhadra, Tunis 1003",
                coordinates: { lat: 36.8065, lng: 10.1815 },
                rating: 4.5,
                employmentRate: 92,
                duration: "12-18 mois",
                description: "Centre de formation moderne spécialisé dans les technologies et les métiers techniques. Équipements de pointe et formation pratique de qualité.",
                reviews: [
                    {
                        id: 1,
                        author: "Ahmed Ben Salem",
                        rating: 5,
                        comment: "Excellente formation en informatique. Les professeurs sont compétents et l'équipement est moderne.",
                        date: "2024-01-15"
                    },
                    {
                        id: 2,
                        author: "Fatma Gharbi",
                        rating: 4,
                        comment: "Très bonne expérience, formation pratique et aide à l'emploi efficace.",
                        date: "2024-02-10"
                    }
                ]
            },
            {
                id: 2,
                name: "Centre de Formation et d'Apprentissage Ariana",
                city: "Ariana",
                specialties: ["Bâtiment et Travaux Publics", "Menuiserie", "Soudure", "Plomberie"],
                type: "Public",
                phone: "71 345 678",
                email: "cfa.ariana@education.tn",
                address: "Route de Bizerte, Ariana 2080",
                coordinates: { lat: 36.8625, lng: 10.1956 },
                rating: 4.2,
                employmentRate: 88,
                duration: "10-12 mois",
                description: "Centre spécialisé dans les métiers du bâtiment et de l'artisanat. Formation pratique en atelier avec encadrement professionnel.",
                reviews: [
                    {
                        id: 3,
                        author: "Mohamed Trabelsi",
                        rating: 4,
                        comment: "Formation solide en menuiserie, bon encadrement et ateliers bien équipés.",
                        date: "2024-01-20"
                    }
                ]
            },
            {
                id: 3,
                name: "Institut Horizon Informatique et Gestion",
                city: "Tunis",
                specialties: ["Programmation Avancée", "Développement d'Applications Mobiles", "Sécurité Informatique", "Intelligence Artificielle"],
                type: "Privé",
                phone: "71 567 890",
                email: "contact@horizon-institute.tn",
                address: "12 Avenue de la Liberté, Centre-ville, Tunis 1001",
                coordinates: { lat: 36.8008, lng: 10.1817 },
                rating: 4.8,
                employmentRate: 96,
                duration: "18-24 mois",
                description: "Institut privé de référence en informatique et nouvelles technologies. Formation de haut niveau avec stages en entreprise garantis.",
                reviews: [
                    {
                        id: 4,
                        author: "Salma Khiari",
                        rating: 5,
                        comment: "Formation exceptionnelle en développement mobile. J'ai trouvé un emploi avant même la fin de ma formation!",
                        date: "2024-02-05"
                    },
                    {
                        id: 5,
                        author: "Youssef Mansouri",
                        rating: 5,
                        comment: "Professeurs experts et programme très à jour. Recommandé à 100%!",
                        date: "2024-01-28"
                    }
                ]
            },
            {
                id: 4,
                name: "École Supérieure de Santé et Soins Infirmiers",
                city: "Tunis",
                specialties: ["Soins Infirmiers Spécialisés", "Assistance Médicale", "Techniques de Laboratoire", "Premiers Secours"],
                type: "Privé",
                phone: "71 678 901",
                email: "info@ecole-sante.tn",
                address: "Rue de la Santé, Menzah 6, Tunis 1004",
                coordinates: { lat: 36.8518, lng: 10.1896 },
                rating: 4.7,
                employmentRate: 94,
                duration: "24-30 mois",
                description: "École spécialisée dans la formation paramédicale. Partenariats avec les hôpitaux publics et privés pour la formation pratique.",
                reviews: [
                    {
                        id: 6,
                        author: "Nour Bouzid",
                        rating: 5,
                        comment: "Formation complète et très professionnelle. Stages en hôpitaux excellents.",
                        date: "2024-02-12"
                    }
                ]
            },
            {
                id: 5,
                name: "Centre de Formation Professionnelle Sfax Centre-Ville",
                city: "Sfax",
                specialties: ["Industries Alimentaires", "Marketing et Commerce", "Comptabilité", "Secrétariat"],
                type: "Public",
                phone: "74 123 456",
                email: "cfp.sfax@education.tn",
                address: "Avenue Habib Bourguiba, Sfax 3000",
                coordinates: { lat: 34.7398, lng: 10.7600 },
                rating: 4.3,
                employmentRate: 89,
                duration: "12-15 mois",
                description: "Centre de formation au cœur de Sfax, spécialisé dans les métiers du commerce et de la gestion. Fort réseau d'entreprises partenaires.",
                reviews: [
                    {
                        id: 7,
                        author: "Imen Jebali",
                        rating: 4,
                        comment: "Bonne formation en comptabilité, professeurs expérimentés.",
                        date: "2024-01-30"
                    }
                ]
            },
            {
                id: 6,
                name: "Centre Sectoriel de Tourisme Monastir",
                city: "Monastir",
                specialties: ["Gestion de Restaurants", "Services de Réception", "Animation Touristique", "Guide Touristique"],
                type: "Sectoriel",
                phone: "73 234 567",
                email: "cst.monastir@tourisme.tn",
                address: "Zone Touristique Skanes, Monastir 5000",
                coordinates: { lat: 35.7817, lng: 10.8256 },
                rating: 4.4,
                employmentRate: 91,
                duration: "9-12 mois",
                description: "Centre spécialisé dans la formation touristique et hôtelière. Formation en situation réelle dans les hôtels partenaires.",
                reviews: [
                    {
                        id: 8,
                        author: "Karim Slimani",
                        rating: 4,
                        comment: "Formation pratique en hôtellerie, bon contact avec les professionnels du secteur.",
                        date: "2024-02-08"
                    }
                ]
            },
            {
                id: 7,
                name: "Institut de Technologie Appliquée Sousse",
                city: "Sousse",
                specialties: ["Automatisation Industrielle", "Maintenance Électrotechnique", "Énergies Renouvelables", "Robotique"],
                type: "Public",
                phone: "73 456 789",
                email: "ita.sousse@education.tn",
                address: "Boulevard 14 Janvier, Sousse 4000",
                coordinates: { lat: 35.8245, lng: 10.6348 },
                rating: 4.6,
                employmentRate: 93,
                duration: "15-18 mois",
                description: "Institut de pointe dans les technologies industrielles. Équipements dernière génération et partenariats avec l'industrie.",
                reviews: [
                    {
                        id: 9,
                        author: "Rami Hamdi",
                        rating: 5,
                        comment: "Formation excellente en robotique, équipements de très haut niveau.",
                        date: "2024-02-15"
                    }
                ]
            },
            {
                id: 8,
                name: "Centre de Formation Agricole Bizerte",
                city: "Bizerte",
                specialties: ["Agriculture Moderne", "Élevage", "Agroalimentaire", "Environnement"],
                type: "Sectoriel",
                phone: "72 345 123",
                email: "cfa.bizerte@agriculture.tn",
                address: "Route de Tunis, Bizerte 7000",
                coordinates: { lat: 37.2744, lng: 9.8739 },
                rating: 4.1,
                employmentRate: 85,
                duration: "10-14 mois",
                description: "Centre spécialisé dans la formation agricole moderne. Exploitation agricole intégrée pour la formation pratique.",
                reviews: [
                    {
                        id: 10,
                        author: "Sarra Bouaziz",
                        rating: 4,
                        comment: "Formation complète en agriculture, approche moderne et écologique.",
                        date: "2024-01-25"
                    }
                ]
            }
        ];

        // État global de l'application
        let currentCenter = null;
        let currentRating = 0;
        let searchTimeout = null;

        // Initialisation de l'application
        document.addEventListener('DOMContentLoaded', function () {
            initializeApp();
            setupEventListeners();
        });

        function initializeApp() {
            showHomePage();
            loadStoredReviews();
        }

        function setupEventListeners() {
            const searchInput = document.getElementById('searchInput');
            const starRating = document.getElementById('starRating');

            // Recherche en temps réel
            searchInput.addEventListener('input', function () {
                clearTimeout(searchTimeout);
                const query = this.value.trim();

                if (query.length >= 2) {
                    searchTimeout = setTimeout(() => {
                        showSearchDropdown(query);
                    }, 300);
                } else {
                    hideSearchDropdown();
                }
            });

            // Gestion du système d'étoiles
            if (starRating) {
                starRating.addEventListener('click', function (e) {
                    if (e.target.classList.contains('star')) {
                        const rating = parseInt(e.target.dataset.rating);
                        setStarRating(rating);
                    }
                });
            }

            // Fermer le dropdown quand on clique ailleurs
            document.addEventListener('click', function (e) {
                if (!e.target.closest('.search-container')) {
                    hideSearchDropdown();
                }
            });

            // Gestion du redimensionnement
            window.addEventListener('resize', function () {
                adjustLayoutForMobile();
            });
        }

        // Fonctions de navigation
        function showHomePage() {
            document.getElementById('homePage').style.display = 'block';
            document.getElementById('centerPage').style.display = 'none';
            hideSearchDropdown();
        }

        function showCenterPage(centerId) {
            const center = trainingCenters.find(c => c.id === centerId);
            if (!center) return;

            currentCenter = center;

            // Masquer la page d'accueil et afficher la page du centre
            document.getElementById('homePage').style.display = 'none';
            document.getElementById('centerPage').style.display = 'block';

            // Remplir les informations du centre
            populateCenterInfo(center);

            // Charger les avis
            loadCenterReviews(center);

            // Réinitialiser le formulaire d'avis
            resetReviewForm();

            // Scroll vers le haut
            window.scrollTo(0, 0);
        }

        function populateCenterInfo(center) {
            document.getElementById('centerName').textContent = center.name;
            document.getElementById('centerDescription').textContent = center.description;
            document.getElementById('centerAddress').textContent = center.address;
            document.getElementById('centerPhone').textContent = center.phone;
            document.getElementById('centerEmail').textContent = center.email;
            document.getElementById('centerType').textContent = center.type;
            document.getElementById('centerDuration').textContent = center.duration;
            document.getElementById('centerEmployment').textContent = center.employmentRate + '% de réussite';

            // Afficher les spécialités
            const specialtiesContainer = document.getElementById('centerSpecialties');
            specialtiesContainer.innerHTML = '';
            center.specialties.forEach(specialty => {
                const card = document.createElement('div');
                card.className = 'specialty-card';
                card.innerHTML = `
                    <h4>${specialty}</h4>
                    <p>Formation complète et pratique</p>
                `;
                specialtiesContainer.appendChild(card);
            });

            // Configurer Google Maps
            setupGoogleMaps(center);
        }

        // Système de recherche en temps réel
        function showSearchDropdown(query) {
            const results = searchCenters(query);
            const dropdown = document.getElementById('searchDropdown');

            if (results.length === 0) {
                dropdown.innerHTML = `
                    <div class="dropdown-item">
                        <div class="dropdown-icon">❌</div>
                        <div class="dropdown-content">
                            <div class="dropdown-title">Aucun résultat trouvé</div>
                            <div class="dropdown-subtitle">Essayez avec d'autres mots-clés</div>
                        </div>
                    </div>
                `;
            } else {
                dropdown.innerHTML = results.slice(0, 5).map(center => `
                    <div class="dropdown-item" onclick="showCenterPage(${center.id})">
                        <div class="dropdown-icon">${getTypeIcon(center.type)}</div>
                        <div class="dropdown-content">
                            <div class="dropdown-title">${center.name}</div>
                            <div class="dropdown-subtitle">📍 ${center.city} • ${center.type}</div>
                            <div class="dropdown-rating">${'★'.repeat(Math.floor(center.rating))} ${center.rating}/5</div>
                        </div>
                    </div>
                `).join('');
            }

            dropdown.classList.add('show');
        }

        function hideSearchDropdown() {
            const dropdown = document.getElementById('searchDropdown');
            dropdown.classList.remove('show');
        }

        function searchCenters(query) {
            const lowerQuery = query.toLowerCase();
            return trainingCenters.filter(center => {
                return center.name.toLowerCase().includes(lowerQuery) ||
                    center.city.toLowerCase().includes(lowerQuery) ||
                    center.specialties.some(specialty => specialty.toLowerCase().includes(lowerQuery)) ||
                    center.type.toLowerCase().includes(lowerQuery);
            });
        }

        function getTypeIcon(type) {
            switch (type) {
                case 'Public': return '🏛️';
                case 'Privé': return '🏢';
                case 'Sectoriel': return '⚙️';
                default: return '🎓';
            }
        }

        // Fonctions de recherche rapide
        function performSearch() {
            const query = document.getElementById('searchInput').value.trim();
            if (query === '') {
                showNotification('Veuillez saisir un terme de recherche', 'error');
                return;
            }

            const results = searchCenters(query);
            if (results.length === 1) {
                showCenterPage(results[0].id);
            } else if (results.length > 1) {
                showSearchResults(results, query);
            } else {
                showNotification(`Aucun résultat trouvé pour "${query}"`, 'error');
            }
        }

        function quickSearch(term) {
            document.getElementById('searchInput').value = term;
            performSearch();
        }

        function showSearchResults(results, query) {
            // Pour l'instant, montrer le premier résultat
            // Vous pouvez créer une page de résultats séparée si nécessaire
            showCenterPage(results[0].id);
        }

        // Intégration Google Maps
        function setupGoogleMaps(center) {
            const mapContainer = document.getElementById('mapContainer');
            const mapPlaceholder = mapContainer.querySelector('.map-placeholder');

            // Mettre à jour le placeholder avec l'adresse
            mapPlaceholder.innerHTML = `
                <div>
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🗺️</div>
                    <div><strong>${center.name}</strong></div>
                    <div style="margin: 0.5rem 0;">${center.address}</div>
                    <div style="font-size: 0.9rem; opacity: 0.8;">Cliquez pour ouvrir dans Google Maps</div>
                </div>
            `;
        }

        function openGoogleMaps() {
            if (!currentCenter) return;

            const address = encodeURIComponent(currentCenter.address);
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
            window.open(googleMapsUrl, '_blank');
        }

        // Système d'évaluation
        function loadCenterReviews(center) {
            const storedReviews = getStoredReviews(center.id);
            const allReviews = [...center.reviews, ...storedReviews];

            updateRatingDisplay(allReviews);
            displayReviews(allReviews);
        }

        function updateRatingDisplay(reviews) {
            if (reviews.length === 0) {
                document.getElementById('avgRating').textContent = '0.0';
                document.getElementById('avgStars').textContent = '☆☆☆☆☆';
                document.getElementById('reviewCount').textContent = '0';
                document.getElementById('ratingBreakdown').innerHTML = '<p>Aucun avis pour le moment</p>';
                return;
            }

            const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
            const roundedRating = Math.round(avgRating * 10) / 10;

            document.getElementById('avgRating').textContent = roundedRating.toFixed(1);
            document.getElementById('avgStars').innerHTML = generateStars(avgRating);
            document.getElementById('reviewCount').textContent = reviews.length;

            // Génération du graphique de répartition
            const breakdown = [1, 2, 3, 4, 5].map(rating => {
                const count = reviews.filter(r => r.rating === rating).length;
                const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                return { rating, count, percentage };
            }).reverse();

            const breakdownHtml = breakdown.map(item => `
                <div class="rating-bar">
                    <span>${item.rating} ★</span>
                    <div class="rating-bar-fill">
                        <div class="rating-bar-inner" style="width: ${item.percentage}%"></div>
                    </div>
                    <span>${item.count}</span>
                </div>
            `).join('');

            document.getElementById('ratingBreakdown').innerHTML = breakdownHtml;
        }

        function displayReviews(reviews) {
            const reviewsList = document.getElementById('reviewsList');

            if (reviews.length === 0) {
                reviewsList.innerHTML = '<p style="text-align: center; color: #666;">Aucun avis pour le moment. Soyez le premier à laisser un avis!</p>';
                return;
            }

            reviewsList.innerHTML = reviews
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map(review => `
                    <div class="review-item">
                        <div class="review-header">
                            <span class="review-author">${review.author}</span>
                            <span class="review-date">${formatDate(review.date)}</span>
                        </div>
                        <div class="review-stars">${generateStars(review.rating)}</div>
                        <div class="review-text">${review.comment}</div>
                    </div>
                `).join('');
        }

        function generateStars(rating) {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

            return '★'.repeat(fullStars) +
                (hasHalfStar ? '☆' : '') +
                '☆'.repeat(emptyStars);
        }

        function setStarRating(rating) {
            currentRating = rating;
            const stars = document.querySelectorAll('.star');
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        }

        function submitReview() {
            const name = document.getElementById('reviewerName').value.trim();
            const comment = document.getElementById('reviewComment').value.trim();

            if (!name) {
                showNotification('Veuillez entrer votre nom', 'error');
                return;
            }

            if (currentRating === 0) {
                showNotification('Veuillez sélectionner une note', 'error');
                return;
            }

            if (!comment) {
                showNotification('Veuillez écrire un commentaire', 'error');
                return;
            }

            const review = {
                id: Date.now(),
                author: name,
                rating: currentRating,
                comment: comment,
                date: new Date().toISOString().split('T')[0]
            };

            // Sauvegarder l'avis
            saveReview(currentCenter.id, review);

            // Recharger les avis
            loadCenterReviews(currentCenter);

            // Réinitialiser le formulaire
            resetReviewForm();

            showNotification('Votre avis a été publié avec succès!', 'success');
        }

        function resetReviewForm() {
            document.getElementById('reviewerName').value = '';
            document.getElementById('reviewComment').value = '';
            currentRating = 0;
            document.querySelectorAll('.star').forEach(star => star.classList.remove('active'));
        }

        // Stockage local des avis
        function saveReview(centerId, review) {
            const reviews = getStoredReviews(centerId);
            reviews.push(review);
            localStorage.setItem(`reviews_${centerId}`, JSON.stringify(reviews));
        }

        function getStoredReviews(centerId) {
            const stored = localStorage.getItem(`reviews_${centerId}`);
            return stored ? JSON.parse(stored) : [];
        }

        function loadStoredReviews() {
            // Charger les avis stockés pour tous les centres
            trainingCenters.forEach(center => {
                const storedReviews = getStoredReviews(center.id);
                if (storedReviews.length > 0) {
                    const allReviews = [...center.reviews, ...storedReviews];
                    const avgRating = allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length;
                    center.rating = Math.round(avgRating * 10) / 10;
                }
            });
        }

        // Fonctions utilitaires
        function formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }

        function showNotification(message, type = 'success') {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.className = `notification ${type} show`;

            setTimeout(() => {
                notification.classList.remove('show');
            }, 4000);
        }

        function contactCenter() {
            if (!currentCenter) return;

            const phoneNumber = currentCenter.phone.replace(/\s/g, '');
            const whatsappMessage = encodeURIComponent(`Bonjour, je suis intéressé(e) par les formations du ${currentCenter.name}. Pouvez-vous me donner plus d'informations ?`);

            // Essayer d'ouvrir WhatsApp, sinon fallback vers le téléphone
            const whatsappUrl = `https://wa.me/216${phoneNumber}?text=${whatsappMessage}`;
            const phoneUrl = `tel:+216${phoneNumber}`;

            // Créer un menu de choix
            const contactOptions = `
                <div style="text-align: center;">
                    <h3 style="margin-bottom: 20px;">Contacter ${currentCenter.name}</h3>
                    <div style="margin-bottom: 20px;">
                        <a href="${whatsappUrl}" target="_blank" class="btn btn-success" style="margin: 10px; display: inline-block;">
                            📱 WhatsApp
                        </a>
                        <a href="${phoneUrl}" class="btn btn-primary" style="margin: 10px; display: inline-block;">
                            📞 Appeler
                        </a>
                    </div>
                    <div style="background: #f8f9ff; padding: 15px; border-radius: 10px; margin-top: 20px;">
                        <p><strong>📞 Téléphone:</strong> ${currentCenter.phone}</p>
                        <p><strong>✉️ Email:</strong> ${currentCenter.email}</p>
                        <p><strong>📍 Adresse:</strong> ${currentCenter.address}</p>
                    </div>
                </div>
            `;

            showModal(contactOptions);
        }

        // Fonctions pour les fonctionnalités existantes
        function showAllCenters() {
            showSearchResults(trainingCenters, 'tous les centres');
        }

        function showAllSpecialties() {
            const allSpecialties = [...new Set(trainingCenters.flatMap(center => center.specialties))];
            const specialtiesHtml = `
                <h3 style="color: #667eea; text-align: center; margin-bottom: 20px;">
                    Toutes les Spécialités (${allSpecialties.length})
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                    ${allSpecialties.map(specialty => `
                        <div style="background: #f8f9ff; padding: 15px; border-radius: 10px; text-align: center; cursor: pointer; transition: all 0.3s ease;"
                             onclick="quickSearch('${specialty}')" 
                             onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)'"
                             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                            <h4 style="color: #333; margin-bottom: 10px;">${specialty}</h4>
                            <p style="color: #666; font-size: 0.9rem;">Cliquez pour rechercher</p>
                        </div>
                    `).join('')}
                </div>
            `;
            showModal(specialtiesHtml);
        }

        function showNearestCenters() {
            const citiesHtml = `
                <h3 style="color: #667eea; text-align: center; margin-bottom: 20px;">Centres par Ville</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    ${[...new Set(trainingCenters.map(center => center.city))].map(city => {
                const centerCount = trainingCenters.filter(center => center.city === city).length;
                return `
                            <div style="background: linear-gradient(45deg, #667eea, #764ba2); color: white; padding: 20px; border-radius: 15px; text-align: center; cursor: pointer; transition: all 0.3s ease;"
                                 onclick="showCentersByCity('${city}')"
                                 onmouseover="this.style.transform='scale(1.05)'"
                                 onmouseout="this.style.transform='scale(1)'">
                                <h4>${city}</h4>
                                <p>${centerCount} centre${centerCount > 1 ? 's' : ''}</p>
                            </div>
                        `;
            }).join('')}
                </div>
            `;
            showModal(citiesHtml);
        }

        function showCentersByCity(city) {
            const cityCenters = trainingCenters.filter(center => center.city === city);
            const centersHtml = `
                <h3 style="color: #667eea; text-align: center; margin-bottom: 20px;">Centres à ${city}</h3>
                <div style="max-height: 400px; overflow-y: auto;">
                    ${cityCenters.map(center => `
                        <div style="background: #f8f9ff; padding: 20px; margin: 15px 0; border-radius: 15px; cursor: pointer; border-left: 4px solid #667eea; transition: all 0.3s ease;"
                             onclick="showCenterPage(${center.id})"
                             onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)'"
                             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                            <h4 style="color: #333; margin-bottom: 10px;">${center.name}</h4>
                            <p style="color: #666; margin: 5px 0;">📍 ${center.address}</p>
                            <p style="color: #666; margin: 5px 0;">📞 ${center.phone}</p>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
                                <span style="background: #28a745; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.9rem;">
                                    ${center.employmentRate}% emploi
                                </span>
                                <span style="color: #ffc107; font-size: 1.1rem;">
                                    ${generateStars(center.rating)} (${center.rating})
                                </span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            showModal(centersHtml);
        }

        function showContact() {
            const contactHtml = `
                <h3 style="color: #667eea; text-align: center; margin-bottom: 20px;">Contactez-nous</h3>
                <div style="background: #f0f8ff; padding: 20px; border-radius: 12px; margin-bottom: 20px; text-align: center;">
                    <h4 style="color: #333; margin-bottom: 15px;">Informations de contact</h4>
                    <p style="color: #666; margin: 10px 0;"><strong>📞 Téléphone:</strong> +216 71 123 456</p>
                    <p style="color: #666; margin: 10px 0;"><strong>✉️ Email:</strong> info@takwinsearch.tn</p>
                    <p style="color: #666; margin: 10px 0;"><strong>📍 Adresse:</strong> Avenue Habib Bourguiba, Tunis</p>
                    <p style="color: #666; margin: 10px 0;"><strong>⏰ Horaires:</strong> Lun-Ven 8h-18h, Sam 9h-13h</p>
                </div>
                <div style="max-width: 500px; margin: 0 auto;">
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Nom complet *</label>
                        <input type="text" id="contactName" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1rem;" required>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Email *</label>
                        <input type="email" id="contactEmail" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1rem;" required>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Sujet</label>
                        <select id="contactSubject" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1rem;">
                            <option value="">Choisir un sujet...</option>
                            <option value="info">Demande d'information</option>
                            <option value="partnership">Partenariat</option>
                            <option value="technical">Support technique</option>
                            <option value="other">Autre</option>
                        </select>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Message *</label>
                        <textarea id="contactMessage" rows="4" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1rem; resize: vertical;" required placeholder="Écrivez votre message ici..."></textarea>
                    </div>
                    <button onclick="submitContactForm()" style="background: #28a745; color: white; border: none; padding: 15px 30px; border-radius: 25px; cursor: pointer; width: 100%; font-size: 1.1rem; font-weight: bold; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='#218838'" onmouseout="this.style.backgroundColor='#28a745'">
                        Envoyer le message
                    </button>
                </div>
            `;
            showModal(contactHtml);
        }

        function submitContactForm() {
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value.trim();

            if (!name || !email || !message) {
                showNotification('Veuillez remplir tous les champs obligatoires', 'error');
                return;
            }

            // Validation email simple
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Veuillez entrer une adresse email valide', 'error');
                return;
            }

            // Simuler l'envoi du message
            const submitBtn = event.target;
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.disabled = true;

            setTimeout(() => {
                closeModal();
                showNotification('Votre message a été envoyé avec succès! Nous vous répondrons dans les plus brefs délais.', 'success');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }

        // Système de modal
        function showModal(content) {
            // Créer le modal s'il n'existe pas
            let modal = document.getElementById('globalModal');
            if (!modal) {
                modal = document.createElement('div');
                modal.id = 'globalModal';
                modal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 10000;
                    display: none;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                `;

                const modalContent = document.createElement('div');
                modalContent.style.cssText = `
                    background: white;
                    border-radius: 15px;
                    max-width: 800px;
                    width: 100%;
                    max-height: 80vh;
                    overflow-y: auto;
                    position: relative;
                    padding: 20px;
                `;

                const closeBtn = document.createElement('button');
                closeBtn.innerHTML = '×';
                closeBtn.onclick = closeModal;
                closeBtn.style.cssText = `
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: #ff4757;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 35px;
                    height: 35px;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 18px;
                    z-index: 1;
                `;

                const contentDiv = document.createElement('div');
                contentDiv.id = 'modalContentArea';

                modalContent.appendChild(closeBtn);
                modalContent.appendChild(contentDiv);
                modal.appendChild(modalContent);
                document.body.appendChild(modal);
            }

            document.getElementById('modalContentArea').innerHTML = content;
            modal.style.display = 'flex';
        }

        function closeModal() {
            const modal = document.getElementById('globalModal');
            if (modal) {
                modal.style.display = 'none';
            }
        }

        // Fonctions supplémentaires pour améliorer l'expérience
        function adjustLayoutForMobile() {
            const isMobile = window.innerWidth <= 768;

            if (isMobile) {
                // Ajustements pour mobile
                const searchBox = document.querySelector('.search-box');
                const centerInfoGrid = document.querySelector('.center-info-grid');

                if (searchBox) {
                    searchBox.style.flexDirection = 'column';
                }

                if (centerInfoGrid) {
                    centerInfoGrid.style.gridTemplateColumns = '1fr';
                }
            }
        }

        // Fonctions d'animation et d'amélioration UX
        function addLoadingAnimation(element) {
            const originalContent = element.innerHTML;
            element.innerHTML = '<span class="loading"></span> Chargement...';
            element.disabled = true;

            return function removeLoading() {
                element.innerHTML = originalContent;
                element.disabled = false;
            };
        }

        // Fonction pour gérer les erreurs
        function handleError(error, context = '') {
            console.error(`Erreur ${context}:`, error);
            showNotification('Une erreur est survenue. Veuillez réessayer.', 'error');
        }

        // Fonctions de statistiques et analytics (simulation)
        function trackUserInteraction(action, details = {}) {
            // Simuler le tracking d'interactions utilisateur
            const interaction = {
                timestamp: new Date().toISOString(),
                action: action,
                details: details,
                userAgent: navigator.userAgent,
                url: window.location.href
            };

            // En production, vous pourriez envoyer ces données à votre service d'analytics
            console.log('User Interaction:', interaction);
        }

        // Amélioration de la recherche avec suggestions
        function getSearchSuggestions(query) {
            const suggestions = [];
            const lowerQuery = query.toLowerCase();

            // Suggestions basées sur les villes
            const cities = [...new Set(trainingCenters.map(c => c.city))];
            cities.forEach(city => {
                if (city.toLowerCase().includes(lowerQuery)) {
                    suggestions.push({
                        type: 'city',
                        value: city,
                        icon: '📍',
                        label: `Centres à ${city}`
                    });
                }
            });

            // Suggestions basées sur les spécialités
            const specialties = [...new Set(trainingCenters.flatMap(c => c.specialties))];
            specialties.forEach(specialty => {
                if (specialty.toLowerCase().includes(lowerQuery)) {
                    suggestions.push({
                        type: 'specialty',
                        value: specialty,
                        icon: '🎓',
                        label: specialty
                    });
                }
            });

            return suggestions.slice(0, 3);
        }

        // Fonction pour améliorer l'accessibilité
        function improveAccessibility() {
            // Ajouter des attributs ARIA
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.setAttribute('aria-label', 'Rechercher un centre de formation');
                searchInput.setAttribute('aria-describedby', 'search-help');
            }

            // Ajouter le support clavier pour les éléments interactifs
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    hideSearchDropdown();
                    closeModal();
                }

                if (e.key === 'Enter' && e.target.classList.contains('dropdown-item')) {
                    e.target.click();
                }
            });
        }

        // Initialisation finale
        document.addEventListener('DOMContentLoaded', function () {
            improveAccessibility();
            adjustLayoutForMobile();

            // Track initial page load
            trackUserInteraction('page_load', {
                page: 'home',
                timestamp: new Date().toISOString()
            });
        });

        // Gestion des erreurs globales
        window.addEventListener('error', function (e) {
            handleError(e.error, 'global');
        });

        // Fonction pour partager un centre
        function shareCenter(centerId) {
            const center = trainingCenters.find(c => c.id === centerId);
            if (!center) return;

            if (navigator.share) {
                navigator.share({
                    title: center.name,
                    text: `Découvrez ${center.name} - Formation professionnelle à ${center.city}`,
                    url: `${window.location.origin}#center-${centerId}`
                });
            } else {
                // Fallback pour navigateurs qui ne supportent pas Web Share API
                const url = `${window.location.origin}#center-${centerId}`;
                navigator.clipboard.writeText(url).then(() => {
                    showNotification('Lien copié dans le presse-papiers!', 'success');
                });
            }
        }

        // Gérer les liens directs vers les centres
        function handleDirectLinks() {
            const hash = window.location.hash;
            if (hash.startsWith('#center-')) {
                const centerId = parseInt(hash.replace('#center-', ''));
                if (centerId) {
                    setTimeout(() => showCenterPage(centerId), 100);
                }
            }
        }

        // Appeler handleDirectLinks au chargement de la page
        window.addEventListener('load', handleDirectLinks);
