/*
           ====================================================================
           SECCIÓN: VARIABLES Y CONSTANTES GLOBALES
           Descripción: Declaración de todas las referencias a elementos del DOM
                        y valores constantes para fácil acceso y modificación.
           ====================================================================
        */
        // Users database (5 random users with @cftrl.cl emails and RUT passwords)
        const users = [
            {
                name: "Henrry Alocilla",
                email: "henrryalocilla@cftlr.cl",
                password: "12345678-9"
            },
            {
                name: "Alex Reyes",
                email: "alexreyes@cftlr.cl",
                password: "16870931-5"
            },
            {
                name: "Renato Sandoval",
                email: "renatosandoval@cftlr.cl",
                password: "21638623-k"
            },
            {
                name: "Diego Vergara",
                email: "diegovergara@cftlr.cl",
                password: "19764816-3"
            },
            {
                name: "Fernando Millapan",
                email: "fernandomillapan@cftlr.cl",
                password: "21596595-3"
            }
        ];

        // Directorio de contactos (organizado por sede y con datos de Paillaco actualizados)
        const directoryDataBySede = {
            "Sede Valdivia": [
                {
                    name: "Dr. Ana Rojas",
                    position: "Directora Académica",
                    email: "arojas@cftrl.cl",
                    phone: "+56 9 1111 2222",
                    department: "Administración",
                    icon: "&#127891;"
                },
                {
                    name: "Prof. Ricardo Soto",
                    position: "Jefe de Carrera (Programación)",
                    email: "rsoto@cftrl.cl",
                    phone: "+56 9 3333 4444",
                    department: "Informática",
                    icon: "&#128187;"
                }
            ],
            "Sede La Unión": [
                {
                    name: "Ing. Carla Fuentes",
                    position: "Coordinadora de Prácticas",
                    email: "cfuentes@cftrl.cl",
                    phone: "+56 9 5555 6666",
                    department: "Vinculación con el Medio",
                    icon: "&#128188;"
                },
                {
                    name: "Sra. Elena Paredes",
                    position: "Secretaria Académica",
                    email: "eparedes@cftrl.cl",
                    phone: "+56 9 7777 8888",
                    department: "Secretaría General",
                    icon: "&#128100;"
                }
            ],
            "Sede Paillaco": [
                {
                    name: "Mauricio Peters",
                    position: "Coordinador Sede",
                    email: "mpeters@cftdelosrios.cl",
                    phone: "+56 9 2100 0001",
                    department: "Coordinación",
                    icon: "&#128204;"
                },
                {
                    name: "Abraham Acevedo",
                    position: "Registro Curricular",
                    email: "aacevedo@cftdelosrios.cl",
                    phone: "+56 9 2100 0002",
                    department: "Académico",
                    icon: "&#128220;"
                },
                {
                    name: "Felipe Fierro",
                    position: "Experiencia Estudiantil",
                    email: "ffierro@cftdelosrios.cl",
                    phone: "+56 9 2100 0003",
                    department: "DAE",
                    icon: "&#128100;"
                },
                {
                    name: "Scarlett Barra",
                    position: "Psicóloga",
                    email: "sbarra@cftdelosrios.cl",
                    phone: "+56 9 2100 0004",
                    department: "Equipo Psicosocial",
                    icon: "&#129504;"
                },
                {
                    name: "María José Pardo",
                    position: "Psicopedagoga",
                    email: "mpardo@cftdelosrios.cl",
                    phone: "+56 9 2100 0005",
                    department: "Equipo Psicosocial",
                    icon: "&#128218;"
                },
                {
                    name: "Camila Donoso",
                    position: "Admisión",
                    email: "cdonoso@cftdelosrios.cl",
                    phone: "+56 9 2100 0006",
                    department: "Admisión",
                    icon: "&#128273;"
                }
            ]
        };


        // Elementos de navegación
        const menuToggle = document.querySelector('.menu-toggle');
        const navUl = document.querySelector('nav ul');
        const profileNavLink = document.getElementById('profile-nav-link');
        const carrerasNavLink = document.getElementById('carreras-nav-link');
        const admisionNavLink = document.getElementById('admision-nav-link');
        const vidaEstudiantilNavLink = document.getElementById('vida-estudiantil-nav-link');
        const noticiasNavLink = document.getElementById('noticias-nav-link');
        const themeToggleButton = document.getElementById('theme-toggle-button');
        const navSearchInput = document.getElementById('nav-search-input');
        const navSearchButton = document.getElementById('nav-search-button');
        const navSearchLi = document.getElementById('nav-search-li');
        const navProfilePic = document.getElementById('nav-profile-pic');

        // Elementos de contenido y secciones
        const allContentSections = document.querySelectorAll('.content-section, .modules-grid');
        const homeSection = document.getElementById('home-section');
        const modulesSection = document.getElementById('modules-section');
        const userProfileDetailSection = document.getElementById('user-profile-detail-section');
        const directorySection = document.getElementById('directory-section');
        const notesAttendanceSection = document.getElementById('notes-attendance-section');
        const academicCalendarSection = document.getElementById('academic-calendar-section');
        const notificationsSection = document.getElementById('notifications-section');
        const scholarshipsSection = document.getElementById('scholarships-section');
        const reportIssueSection = document.getElementById('report-issue-section');
        const admisionSection = document.getElementById('admision-section');
        const vidaEstudiantilSection = document.getElementById('vida-estudiantil-section');
        const noticiasSection = document.getElementById('noticias-section');
        const infoCftSection = document.getElementById('info-cft-section'); // NEW: Info CFT section
        const backButtons = document.querySelectorAll('.back-button');

        // Elementos del Modal de Autenticación
        const loginModal = document.getElementById('login-modal');
        const closeModalButton = document.querySelector('.close-button');
        const modalTitle = document.getElementById('modal-title');
        const authForm = document.getElementById('auth-form');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const loginBtn = document.getElementById('loginBtn');
        const modalToggleFormLink = document.getElementById('modal-toggle-form');
        const loginContainerMain = document.getElementById('loginContainerMain');
        const togglePasswordButton = document.getElementById('toggle-password'); // NEW: Toggle password button
        const rememberMeCheckbox = document.getElementById('remember-me'); // NEW: Remember me checkbox

        // Elementos de Notificación
        const errorNotification = document.getElementById('errorNotification');
        const successNotification = document.getElementById('successNotification');
        const errorMessageSpan = document.getElementById('errorMessage');
        const successMessageSpan = document.getElementById('successMessage');

        // Elementos del Dropdown de Perfil (en Header)
        const profileDropdown = document.getElementById('profile-dropdown');
        const dropdownProfilePic = document.getElementById('dropdown-profile-pic');
        const dropdownUsername = document.getElementById('dropdown-username');

        // Elementos de la sección de Perfil Detallado
        const profileForm = document.getElementById('profile-form');
        const profilePic = document.getElementById('profile-pic');
        const profileImageUpload = document.getElementById('profile-image-upload');
        const deleteProfilePicBtn = document.getElementById('delete-profile-pic-btn');
        const profileNameInput = document.getElementById('profile-name');
        const profileEmailInput = document.getElementById('profile-email');
        const profilePhoneInput = document.getElementById('profile-phone');
        const profileRutInput = document.getElementById('profile-rut');
        const editProfileBtn = document.getElementById('edit-profile-btn');
        const saveProfileBtn = document.getElementById('save-profile-btn');
        const cancelEditBtn = document.getElementById('cancel-edit-btn');
        const profileMessage = document.getElementById('profile-message');

        // Elementos del Formulario de Notificaciones
        const notificationForm = document.getElementById('notificationForm');
        const emailNotificationInput = document.getElementById('email_notification');
        const phoneNotificationInput = document.getElementById('phone_notification');
        const messageNotificationInput = document.getElementById('message_notification');
        const responseMessageNotificationDiv = document.getElementById('responseMessageNotification');

        // Elementos del Directorio
        const directoryList = document.getElementById('directory-list');
        const contactDetailsModal = document.getElementById('contact-details-modal');
        const closeContactDetailsModalBtn = document.getElementById('close-contact-details-modal');
        const contactDetailsTitle = document.getElementById('contact-details-title');
        const contactDetailsOutput = document.getElementById('contact-details-output');

        // Elementos del Formulario de Reportar Problemas
        const reportIssueForm = document.getElementById('reportIssueForm');
        const formMessage = document.getElementById('formMessage');
        const submitReportBtn = document.getElementById('submitReportBtn');


        // Constantes
        const DEFAULT_AVATAR_PATH = 'https://placehold.co/120x120/D3D3D3/000?text=Avatar';
        let isRegistering = false;

        /*
           ====================================================================
           SECCIÓN: FUNCIONES DE UTILIDAD (HELPERS)
           ====================================================================
        */

        /**
         * Obtiene el valor de una variable CSS definida en :root.
         * @param {string} variableName - El nombre de la variable CSS (ej. '--color-primario').
         * @returns {string} El valor de la variable CSS.
         */
        function getCssVariable(variableName) {
            return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
        }

        /**
         * Oculta todas las secciones de contenido activas.
         */
        function hideAllSections() {
            allContentSections.forEach(section => {
                section.classList.remove('active-section');
            });
        }

        /**
         * Muestra una sección específica y oculta las demás.
         * Realiza comprobaciones de autenticación para secciones protegidas.
         * @param {string} sectionId - El ID de la sección a mostrar (sin '-section', ej. 'home', 'modules').
         */
        function showSection(sectionId) {
            const loggedInUser = localStorage.getItem('currentUserEmail');
            const protectedSections = ['user-profile-detail', 'notes-attendance', 'academic-calendar', 'notifications', 'directory', 'scholarships', 'report-issue', 'info-cft', 'carreras-info', 'admision', 'vida-estudiantil', 'noticias'];

            // Lógica para el logo (si se hace clic en él)
            if (sectionId === 'main-menu') {
                sectionId = loggedInUser ? 'modules' : 'home';
            }

            // Redirige a login si intenta acceder a una sección protegida sin autenticación
            if (protectedSections.includes(sectionId) && !loggedInUser) {
                hideAllSections();
                homeSection.classList.add('active-section');
                openLoginModal();
                showNotification('error', 'Debes iniciar sesión para acceder a esta función.');
                return;
            }

            hideAllSections();

            const targetSectionElement = document.getElementById(`${sectionId}-section`);
            if (targetSectionElement) {
                targetSectionElement.classList.add('active-section');
                // Lógica específica para inicializar secciones
                if (sectionId === 'directory') {
                    renderDirectory();
                } else if (sectionId === 'notes-attendance') {
                    initializeNotesSection();
                } else if (sectionId === 'noticias') {
                    initializeNoticiasFilters(); // Ensure filters are initialized when news section is shown
                } else if (sectionId === 'academic-calendar') {
                    initializeAcademicCalendar(); // Initialize calendar functionality
                }
            }

            // Asegura que la sección de módulos se active solo cuando corresponde
            if (loggedInUser && sectionId === 'modules') {
                modulesSection.classList.add('active-section');
            } else {
                modulesSection.classList.remove('active-section');
            }

            // Carga datos del perfil si se va a la sección de detalles del perfil
            if (sectionId === 'user-profile-detail' && loggedInUser) {
                loadProfileData(loggedInUser);
                setProfileFormState(false);
            }

            // Manejo de la visibilidad de los botones de retroceso
            backButtons.forEach(button => {
                const parentSection = button.closest('.content-section');
                if (parentSection) {
                    const parentSectionId = parentSection.id.replace('-section', '');
                    if (sectionId === parentSectionId && sectionId !== 'home' && sectionId !== 'modules') {
                        button.style.display = 'flex';
                    } else {
                        button.style.display = 'none';
                    }
                }
            });
        }

        /**
         * Muestra una notificación temporal en la esquina superior derecha.
         * @param {string} type - 'success' o 'error'.
         * @param {string} message - El mensaje a mostrar.
         */
        function showNotification(type, message) {
            const notificationElement = type === 'success' ? successNotification : errorNotification;
            const messageSpan = type === 'success' ? successMessageSpan : errorMessageSpan;

            const otherNotification = type === 'success' ? errorNotification : successNotification;
            otherNotification.classList.remove('show', 'error', 'success');

            messageSpan.textContent = message;
            notificationElement.classList.add('show', type);

            setTimeout(() => {
                notificationElement.classList.remove('show', type);
            }, 3000);
        }


        /**
         * Función para mostrar mensajes al usuario dentro del formulario de notificaciones.
         * @param {string} message - El mensaje a mostrar.
         * @param {string} type - 'success', 'error' o 'info'.
         */
        function showFormMessage(message, type) {
            responseMessageNotificationDiv.textContent = message;
            responseMessageNotificationDiv.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'bg-green-100', 'text-green-800', 'bg-blue-100', 'text-blue-800');
            if (type === 'success') {
                responseMessageNotificationDiv.classList.add('bg-green-100', 'text-green-800');
            } else if (type === 'error') {
                responseMessageNotificationDiv.classList.add('bg-red-100', 'text-red-800');
            } else {
                responseMessageNotificationDiv.classList.add('bg-blue-100', 'text-blue-800');
            }
            responseMessageNotificationDiv.style.display = 'block';
            if (type === 'success' || type === 'info') {
                setTimeout(() => {
                    responseMessageNotificationDiv.style.display = 'none';
                }, 5000);
            }
        }


        /**
         * Función para mostrar mensajes en el formulario de reporte de problemas.
         * @param {string} message - El mensaje a mostrar.
         * @param {string} type - 'success', 'error' o 'info'.
         */
        function showReportFormMessage(message, type) {
            formMessage.textContent = message;
            formMessage.className = `message ${type}`;
            formMessage.style.display = 'block';
            if (type === 'success' || type === 'info') {
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }
        }


        /*
           ====================================================================
           SECCIÓN: LÓGICA DE AUTENTICACIÓN Y MODAL
           ====================================================================
        */

        /**
         * Abre el modal de inicio de sesión/registro.
         */
        function openLoginModal() {
            loginModal.classList.add('show');
            emailInput.value = '';
            passwordInput.value = '';
            rememberMeCheckbox.checked = false; // Reset remember me checkbox
            setFormToLoginMode();
        }

        /**
         * Cierra el modal de inicio de sesión/registro.
         */
        function closeLoginModal() {
            loginModal.classList.remove('show');
            if (loginContainerMain.classList.contains('shake')) {
                loginContainerMain.classList.remove('shake');
            }
        }

        /**
         * Configura el formulario del modal en modo "Iniciar Sesión".
         */
        function setFormToLoginMode() {
            isRegistering = false;
            modalTitle.textContent = 'Intranet CFT Los Ríos';
            document.querySelector('.login-subtitle').textContent = 'Ingresa tus credenciales para acceder';
            loginBtn.querySelector('.btn-text').textContent = 'Iniciar Sesión';
            modalToggleFormLink.textContent = '¿No tienes cuenta? Regístrate aquí';
            errorMessageSpan.textContent = '';
            successMessageSpan.textContent = '';
            errorNotification.classList.remove('show');
            successNotification.classList.remove('show');
        }

        /**
         * Configura el formulario del modal en modo "Registrarse".
         */
        function setFormToRegisterMode() {
            isRegistering = true;
            modalTitle.textContent = 'Registrarse en CFT Los Ríos';
            document.querySelector('.login-subtitle').textContent = 'Crea tu cuenta para acceder';
            loginBtn.querySelector('.btn-text').textContent = 'Registrarse';
            modalToggleFormLink.textContent = 'Ya tengo cuenta, Iniciar Sesión';
            errorMessageSpan.textContent = '';
            successMessageSpan.textContent = '';
            errorNotification.classList.remove('show');
            successNotification.classList.remove('show');
        }

        /**
         * Muestra/oculta el spinner de carga en el botón de login.
         * @param {boolean} isLoading - True para mostrar, false para ocultar.
         */
        function setLoading(isLoading) {
            if (isLoading) {
                loginBtn.classList.add('loading');
                loginBtn.disabled = true;
            } else {
                loginBtn.classList.remove('loading');
                loginBtn.disabled = false;
            }
        }

        /**
         * Actualiza la interfaz de usuario de la barra de navegación en función del estado de autenticación.
         * Muestra/oculta el enlace de perfil y actualiza la foto/nombre.
         */
        function updateAuthUI() {
            const loggedInUser = localStorage.getItem('currentUserEmail');
            const rememberedUser = localStorage.getItem('rememberedUser');
            const rememberedUserExpiry = localStorage.getItem('rememberedUserExpiry');

            let userToDisplay = null;

            if (loggedInUser) {
                userToDisplay = loggedInUser;
            } else if (rememberedUser && rememberedUserExpiry && new Date().getTime() < parseInt(rememberedUserExpiry)) {
                // Auto-login if remembered user and not expired
                userToDisplay = rememberedUser;
                localStorage.setItem('currentUserEmail', rememberedUser); // Set as current user
                showNotification('success', '¡Bienvenido de nuevo!');
            }

            if (userToDisplay) {
                document.body.classList.add('logged-in');
                profileNavLink.style.display = 'list-item';
                carrerasNavLink.style.display = 'list-item';
                admisionNavLink.style.display = 'list-item';
                vidaEstudiantilNavLink.style.display = 'list-item';
                noticiasNavLink.style.display = 'list-item';
                navSearchLi.style.display = 'list-item';

                const profile = getProfileData(userToDisplay);
                navProfilePic.src = profile.profilePic || DEFAULT_AVATAR_PATH;
                dropdownProfilePic.src = profile.profilePic || DEFAULT_AVATAR_PATH;
                dropdownUsername.textContent = profile.name || userToDisplay;
                showSection('modules');
            } else {
                document.body.classList.remove('logged-in');
                profileNavLink.style.display = 'none';
                carrerasNavLink.style.display = 'none';
                admisionNavLink.style.display = 'none';
                vidaEstudiantilNavLink.style.display = 'none';
                noticiasNavLink.style.display = 'none';
                navSearchLi.style.display = 'none';
                profileDropdown.classList.remove('show');
                showSection('home');
            }
        }


        /*
           ====================================================================
           SECCIÓN: LÓGICA DE GESTIÓN DE PERFIL
           ====================================================================
        */

        /**
         * Obtiene los datos del perfil de un usuario del localStorage.
         * Si no existe, devuelve un perfil por defecto.
         * @param {string} email - El email del usuario.
         * @returns {object} Un objeto con los datos del perfil.
         */
        function getProfileData(email) {
            const profileKey = `profile_${email}`;
            const storedProfile = localStorage.getItem(profileKey);
            if (storedProfile) {
                return JSON.parse(storedProfile);
            } else {
                const userInDb = users.find(user => user.email === email);
                return {
                    name: userInDb ? userInDb.name : 'Estudiante CFT',
                    email: email,
                    phone: '+56 9 1234 5678',
                    rut: userInDb ? userInDb.password : '12.345.678-K',
                    profilePic: DEFAULT_AVATAR_PATH
                };
            }
        }

        /**
         * Guarda los datos de un perfil en el localStorage y actualiza la UI si es el usuario actual.
         * @param {string} email - El email del usuario.
         * @param {object} profile - El objeto con los datos del perfil a guardar.
         */
        function saveProfileData(email, profile) {
            const profileKey = `profile_${email}`;
            localStorage.setItem(profileKey, JSON.stringify(profile));
            const loggedInUser = localStorage.getItem('currentUserEmail');
            if (loggedInUser === email) {
                navProfilePic.src = profile.profilePic || DEFAULT_AVATAR_PATH;
                dropdownProfilePic.src = profile.profilePic || DEFAULT_AVATAR_PATH;
                dropdownUsername.textContent = profile.name || loggedInUser;
            }
        }

        /**
         * Carga los datos del perfil del usuario actual en el formulario de detalles de perfil.
         * @param {string} email - El email del usuario actual.
         */
        function loadProfileData(email) {
            const profile = getProfileData(email);
            profileNameInput.value = profile.name;
            profileEmailInput.value = profile.email;
            profilePhoneInput.value = profile.phone;
            profileRutInput.value = profile.rut;
            profilePic.src = profile.profilePic || DEFAULT_AVATAR_PATH;

            const isDefaultPic = profile.profilePic === DEFAULT_AVATAR_PATH || (window.location.origin + '/' + DEFAULT_AVATAR_PATH) === profile.profilePic;
            deleteProfilePicBtn.style.display = isDefaultPic ? 'none' : 'inline-block';
            profileMessage.textContent = '';
        }

        /**
         * Establece el estado del formulario de perfil (edición o visualización).
         * Habilita/deshabilita campos y muestra/oculta botones.
         * @param {boolean} isEditing - `true` para modo edición, `false` para modo visualización.
         */
        function setProfileFormState(isEditing) {
            profileNameInput.disabled = !isEditing;
            profilePhoneInput.disabled = !isEditing;
            profileRutInput.disabled = !isEditing;

            profilePic.style.cursor = isEditing ? 'pointer' : 'default';

            editProfileBtn.style.display = isEditing ? 'none' : 'inline-block';
            saveProfileBtn.style.display = isEditing ? 'inline-block' : 'none';
            cancelEditBtn.style.display = isEditing ? 'inline-block' : 'none';

            const isDefaultPic = profilePic.src.includes(DEFAULT_AVATAR_PATH);
            deleteProfilePicBtn.style.display = (isEditing && !isDefaultPic) ? 'inline-block' : 'none';
        }

        /**
         * Maneja la subida de una nueva foto de perfil.
         * Convierte la imagen a Data URL y la guarda en localStorage.
         * @param {Event} e - El evento de cambio del input file.
         */
        function handleProfileImageUpload(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    profilePic.src = event.target.result;
                    const loggedInUser = localStorage.getItem('currentUserEmail');
                    if (loggedInUser) {
                        const currentProfile = getProfileData(loggedInUser);
                        currentProfile.profilePic = event.target.result;
                        saveProfileData(loggedInUser, currentProfile);
                        profileMessage.textContent = 'Foto de perfil cargada. Haz clic en "Guardar Cambios".';
                        profileMessage.style.color = getCssVariable('--color-advertencia');
                        deleteProfilePicBtn.style.display = 'inline-block';
                    }
                };
                reader.readAsDataURL(file);
            }
        }

        /**
         * Elimina la foto de perfil del usuario, volviendo al avatar por defecto.
         */
        function handleDeleteProfilePic() {
            const loggedInUser = localStorage.getItem('currentUserEmail');
            if (loggedInUser) {
                const currentProfile = getProfileData(loggedInUser);
                currentProfile.profilePic = DEFAULT_AVATAR_PATH;
                profilePic.src = DEFAULT_AVATAR_PATH;
                saveProfileData(loggedInUser, currentProfile);
                profileMessage.textContent = 'Foto de perfil eliminada. Haz clic en "Guardar Cambios".';
                profileMessage.style.color = getCssVariable('--color-advertencia');
                deleteProfilePicBtn.style.display = 'none';
            }
        }

        /*
           ====================================================================
           SECCIÓN: LÓGICA DEL DIRECTORIO
           ====================================================================
        */

        /**
         * Renderiza la lista de contactos del directorio, agrupados por sede.
         */
        function renderDirectory() {
            directoryList.innerHTML = '';

            for (const sede in directoryDataBySede) {
                if (directoryDataBySede.hasOwnProperty(sede)) {
                    const sedeHeading = document.createElement('h2');
                    sedeHeading.classList.add('sede-title');
                    sedeHeading.textContent = sede;
                    directoryList.appendChild(sedeHeading);

                    const sedeContactsGrid = document.createElement('div');
                    sedeContactsGrid.classList.add('directory-grid');

                    directoryDataBySede[sede].forEach((contact, index) => {
                        const card = document.createElement('div');
                        card.classList.add('directory-card');
                        card.dataset.contactId = `${sede.replace(/\s/g, '')}-${index}`;
                        card.innerHTML = `
                            <span class="icon">${contact.icon}</span>
                            <div>
                                <h3>${contact.name}</h3>
                                <p>${contact.position}</p>
                            </div>
                        `;
                        sedeContactsGrid.appendChild(card);
                    });
                    directoryList.appendChild(sedeContactsGrid);
                }
            }

            directoryList.addEventListener('click', (e) => {
                const card = e.target.closest('.directory-card');
                if (card) {
                    const contactId = card.dataset.contactId;
                    let foundContact = null;
                    for (const sede in directoryDataBySede) {
                        const contactIndex = parseInt(contactId.split('-').pop());
                        if (contactId.startsWith(sede.replace(/\s/g, '')) && directoryDataBySede[sede][contactIndex]) {
                             foundContact = directoryDataBySede[sede][contactIndex];
                             break;
                        }
                    }

                    if (foundContact) {
                        showContactDetailsModal(foundContact);
                    }
                }
            });
        }

        /**
         * Muestra un modal con los detalles del contacto.
         * @param {object} contact - El objeto de contacto a mostrar.
         */
        function showContactDetailsModal(contact) {
            contactDetailsTitle.textContent = `Detalles de ${contact.name}`;
            contactDetailsOutput.innerHTML = `
                <p><strong>Cargo:</strong> ${contact.position}</p>
                <p><strong>Departamento:</strong> ${contact.department}</p>
                <p><strong>Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
                <p><strong>Teléfono:</strong> <a href="tel:${contact.phone}">${contact.phone}</a></p>
            `;
            contactDetailsModal.classList.add('show');
        }

        /**
         * Cierra el modal de detalles del contacto.
         */
        function closeContactDetailsModal() {
            contactDetailsModal.classList.remove('show');
        }

        /**
         * Inicializa la sección de Notas y Asistencia:
         * - Cambia el color de las notas según su valor.
         * - Anima las tarjetas de las materias.
         */
        function initializeNotesSection() {
            document.querySelectorAll('#notes-attendance-section .nota-value').forEach(nota => {
                const value = parseFloat(nota.textContent);
                if (value < 4.0) {
                    nota.style.backgroundColor = getCssVariable('--color-error');
                } else if (value < 5.0) {
                    nota.style.backgroundColor = getCssVariable('--accent-login-color');
                } else {
                    nota.style.backgroundColor = getCssVariable('--color-exito');
                }
            });

            const cards = document.querySelectorAll('#notes-attendance-section .materia-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 * index);
            });
        }

        /**
         * Toggles the visibility of a scholarship item's content.
         * This function is called directly from inline onclick attributes in the HTML.
         * @param {HTMLElement} element - The header element of the scholarship item.
         */
        function toggleBeca(element) {
            const content = element.nextElementSibling;
            const icon = element.querySelector('.toggle-icon');
            if (content.style.display === "block") {
                content.style.display = "none";
                icon.textContent = "+";
            } else {
                content.style.display = "block";
                icon.textContent = "-";
            }
        }

        /**
         * Resalta la fila del horario de clases correspondiente a la hora actual.
         */
        function highlightCurrentTime() {
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();

            const currentTimeInMinutes = currentHour * 60 + currentMinute;

            const scheduleTimes = [
                { mod: 1, start: 8 * 60 + 30, end: 9 * 60 + 15 },   // 08:30-09:15
                { mod: 2, start: 9 * 60 + 15, end: 10 * 60 + 0 },   // 09:15-10:00
                { mod: 3, start: 10 * 60 + 15, end: 11 * 60 + 0 },  // 10:15-11:00
                { mod: 4, start: 11 * 60 + 0, end: 11 * 60 + 45 },  // 11:00-11:45
                { mod: 5, start: 11 * 60 + 55, end: 12 * 60 + 40 }, // 11:55-12:40
                { mod: 6, start: 12 * 60 + 40, end: 13 * 60 + 20 }, // 12:40-13:20
                { mod: 7, start: 13 * 60 + 35, end: 14 * 60 + 20 }, // 13:35-14:20
                { mod: 8, start: 14 * 60 + 20, end: 15 * 60 + 5 },  // 14:20-15:05
                { mod: 9, start: 15 * 60 + 15, end: 16 * 60 + 0 },  // 15:15-16:00
                { mod: 10, start: 16 * 60 + 0, end: 16 * 60 + 45 }  // 16:00-16:45
            ];

            let currentMod = null;
            for (const time of scheduleTimes) {
                if (currentTimeInMinutes >= time.start && currentTimeInMinutes < time.end) {
                    currentMod = time.mod;
                    break;
                }
            }

            document.querySelectorAll('.current-time').forEach(el => {
                el.classList.remove('current-time');
            });

            if (currentMod !== null && now.getDay() >= 1 && now.getDay() <= 5) {
                const rows = document.querySelectorAll('.schedule-table tr');
                rows.forEach(row => {
                    const modCell = row.querySelector('td:first-child');
                    if (modCell && modCell.textContent === currentMod.toString()) {
                        row.querySelectorAll('td').forEach(cell => {
                            cell.classList.add('current-time');
                        });
                    }
                });
            }
        }

        /**
         * Inicializa la funcionalidad del calendario académico (filtros y resaltado de hora).
         */
        function initializeAcademicCalendar() {
            // Configurar filtros de asignatura
            document.querySelectorAll('.schedule-filter .filter-button').forEach(button => {
                button.addEventListener('click', () => {
                    document.querySelectorAll('.schedule-filter .filter-button').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    button.classList.add('active');

                    const filter = button.dataset.filter;
                    const allSubjects = document.querySelectorAll('.subject-cell');
                    const allTeacherCards = document.querySelectorAll('.teacher-card'); // Obtener todas las tarjetas de docentes

                    if (filter === 'all') {
                        allSubjects.forEach(subject => {
                            subject.style.display = 'block';
                            subject.parentElement.style.display = '';
                        });
                        document.querySelectorAll('.empty-cell').forEach(cell => {
                            cell.style.display = '';
                        });
                        allTeacherCards.forEach(card => { // Mostrar todas las tarjetas de docentes
                            card.style.display = 'block';
                        });
                    } else {
                        allSubjects.forEach(subject => {
                            if (subject.dataset.subject === filter) {
                                subject.style.display = 'block';
                                subject.parentElement.style.display = '';
                            } else {
                                subject.style.display = 'none';
                                subject.parentElement.style.display = 'none';
                            }
                        });

                        document.querySelectorAll('.schedule-table tr').forEach(row => {
                            const cells = row.querySelectorAll('td:not(.time-slot)');
                            const hasVisibleSubject = Array.from(cells).some(cell =>
                                cell.querySelector('.subject-cell') &&
                                cell.querySelector('.subject-cell').style.display !== 'none'
                            );

                            cells.forEach(cell => {
                                if (cell.classList.contains('empty-cell')) {
                                    cell.style.display = hasVisibleSubject ? 'none' : '';
                                }
                            });
                        });

                        allTeacherCards.forEach(card => { // Filtrar tarjetas de docentes
                            if (card.dataset.subject === filter) {
                                card.style.display = 'block';
                            } else {
                                card.style.display = 'none';
                            }
                        });
                    }
                    highlightCurrentTime(); // Re-highlight after filtering
                });
            });

            // Resaltar la hora actual al cargar y cada minuto
            highlightCurrentTime();
            setInterval(highlightCurrentTime, 60000);
        }


        /*
           ====================================================================
           SECCIÓN: CONFIGURACIÓN DE EVENT LISTENERS
           ====================================================================
        */

        /**
         * Configura todos los escuchadores de eventos de la aplicación.
         */
        function setupEventListeners() {
            // Navegación y menú móvil
            menuToggle.addEventListener('click', () => {
                navUl.classList.toggle('active');
                profileDropdown.classList.remove('show');
            });

            // Clic en el enlace del perfil en la navegación (para mostrar/ocultar dropdown en desktop)
            profileNavLink.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                if (navUl.classList.contains('active')) {
                    navUl.classList.remove('active');
                    showSection('user-profile-detail');
                } else {
                    profileDropdown.classList.toggle('show');
                }
            });

            // Delegación de eventos para la barra de navegación (logo y enlaces generales)
            document.querySelector('header .container').addEventListener('click', (e) => {
                let target = e.target;
                if ((target.tagName === 'IMG' && target.closest('.logo')) || target.classList.contains('logo')) {
                    target = target.closest('.logo');
                }
                if (target.tagName === 'A' && target.dataset.section) {
                    e.preventDefault();
                    navUl.classList.remove('active');
                    showSection(target.dataset.section);
                }
                 // Handle "Información CFT" button
                if (target.tagName === 'A' && target.getAttribute('href') === '#') {
                    if (target.dataset.section === 'info-cft') {
                        e.preventDefault();
                        showSection('info-cft');
                    }
                }
            });

            // Clics dentro del dropdown de perfil (Ver Perfil, Cerrar Sesión)
            profileDropdown.addEventListener('click', (e) => {
                e.stopPropagation();
                const target = e.target;
                if (target.tagName === 'A') {
                    e.preventDefault();
                    profileDropdown.classList.remove('show');
                    navUl.classList.remove('active');
                    if (target.dataset.section === 'user-profile-detail') {
                        showSection('user-profile-detail');
                    } else if (target.dataset.action === 'logout') {
                        localStorage.removeItem('currentUserEmail');
                        localStorage.removeItem('rememberedUser'); // Clear remembered user
                        localStorage.removeItem('rememberedUserExpiry'); // Clear expiry
                        updateAuthUI();
                    }
                }
            });

            // Clics en las tarjetas de módulo
            document.querySelectorAll('.module-card').forEach(card => {
                card.addEventListener('click', () => {
                    const targetSection = card.dataset.section;
                    if (targetSection) {
                        showSection(targetSection);
                    }
                });
            });

            // Botón "Iniciar Sesión" en la sección de bienvenida
            document.querySelector('#home-section .btn-primario').addEventListener('click', openLoginModal);

            // Cerrar modal
            closeModalButton.addEventListener('click', closeLoginModal);
            window.addEventListener('click', (e) => {
                if (e.target === loginModal) {
                    closeLoginModal();
                }
            });

            // Toggle entre registro y login dentro del modal
            modalToggleFormLink.addEventListener('click', (e) => {
                e.preventDefault();
                loginContainerMain.classList.remove('shake');
                isRegistering ? setFormToLoginMode() : setFormToRegisterMode();
            });

            // Toggle password visibility
            togglePasswordButton.addEventListener('click', () => {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                togglePasswordButton.querySelector('i').classList.toggle('fa-eye');
                togglePasswordButton.querySelector('i').classList.toggle('fa-eye-slash');
            });

            // Envío del formulario de autenticación (loginBtn submit)
            authForm.addEventListener('submit', (e) => {
                e.preventDefault();
                setLoading(true);
                loginContainerMain.classList.remove('shake');

                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();
                const rememberMe = rememberMeCheckbox.checked;

                if (email.length < 5 || password.length < 4) {
                    showNotification('error', 'El email debe tener al menos 5 caracteres y la contraseña al menos 4.');
                    loginContainerMain.classList.add('shake');
                    setLoading(false);
                    return;
                }

                if (isRegistering) {
                    const userExists = users.some(user => user.email === email);
                    if (userExists || localStorage.getItem(email)) {
                        showNotification('error', 'Este email ya está registrado o en uso.');
                        loginContainerMain.classList.add('shake');
                        setLoading(false);
                    } else {
                        localStorage.setItem(email, password);
                        users.push({ name: 'Nuevo Estudiante', email: email, password: password });

                        saveProfileData(email, { name: 'Nuevo Estudiante', email: email, phone: '', rut: '', profilePic: DEFAULT_AVATAR_PATH });

                        localStorage.setItem('currentUserEmail', email);
                        if (rememberMe) {
                            const expiry = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 7 days
                            localStorage.setItem('rememberedUser', email);
                            localStorage.setItem('rememberedUserExpiry', expiry);
                        } else {
                            localStorage.removeItem('rememberedUser');
                            localStorage.removeItem('rememberedUserExpiry');
                        }

                        showNotification('success', '¡Registro exitoso! Has iniciado sesión.');
                        loginContainerMain.classList.add('success-pulse');
                        setTimeout(() => {
                            closeLoginModal();
                            updateAuthUI();
                            loginContainerMain.classList.remove('success-pulse');
                            setLoading(false);
                        }, 1000);
                    }
                } else { // Login
                    const foundUser = users.find(user => user.email === email && user.password === password);
                    const storedPassword = localStorage.getItem(email);

                    if (foundUser || (storedPassword && storedPassword === password)) {
                        localStorage.setItem('currentUserEmail', email);
                        if (rememberMe) {
                            const expiry = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 7 days
                            localStorage.setItem('rememberedUser', email);
                            localStorage.setItem('rememberedUserExpiry', expiry);
                        } else {
                            localStorage.removeItem('rememberedUser');
                            localStorage.removeItem('rememberedUserExpiry');
                        }

                        showNotification('success', '¡Inicio de sesión exitoso! Entrando a la Intranet de CFT Los Ríos.');
                        loginContainerMain.classList.add('success-pulse');
                        setTimeout(() => {
                            closeLoginModal();
                            updateAuthUI();
                            loginContainerMain.classList.remove('success-pulse');
                            setLoading(false);
                        }, 1000);
                    } else {
                        showNotification('error', 'Credenciales no válidas, Intente nuevamente.');
                        loginContainerMain.classList.add('shake');
                        setLoading(false);
                    }
                }
            });

            // Perfil detallado - Edición, Guardar, Cancelar
            editProfileBtn.addEventListener('click', () => {
                setProfileFormState(true);
                profileMessage.textContent = '';
            });

            cancelEditBtn.addEventListener('click', () => {
                const loggedInUser = localStorage.getItem('currentUserEmail');
                if (loggedInUser) loadProfileData(loggedInUser);
                setProfileFormState(false);
                profileMessage.textContent = 'Edición cancelada.';
                profileMessage.style.color = getCssVariable('--color-advertencia');
            });

            profileForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const loggedInUser = localStorage.getItem('currentUserEmail');
                if (!loggedInUser) {
                    profileMessage.textContent = 'Error: Debes iniciar sesión para guardar tu perfil.';
                    profileMessage.style.color = getCssVariable('--color-error');
                    return;
                }

                if (!profileNameInput.value.trim() || !profileEmailInput.value.trim() || !profileEmailInput.value.includes('@')) {
                    profileMessage.textContent = 'Por favor, completa los campos requeridos con datos válidos.';
                    profileMessage.style.color = getCssVariable('--color-error');
                    return;
                }

                const currentProfile = getProfileData(loggedInUser);
                const updatedProfile = {
                    name: profileNameInput.value.trim(),
                    email: profileEmailInput.value.trim(),
                    phone: profilePhoneInput.value.trim(),
                    rut: profileRutInput.value.trim(),
                    profilePic: currentProfile.profilePic
                };
                saveProfileData(loggedInUser, updatedProfile);
                profileMessage.textContent = '¡Perfil actualizado exitosamente!';
                profileMessage.style.color = getCssVariable('--color-exito');
                setProfileFormState(false);
            });

            // Gestión de foto de perfil
            profilePic.addEventListener('click', () => {
                if (!profileNameInput.disabled) profileImageUpload.click();
            });
            profileImageUpload.addEventListener('change', handleProfileImageUpload);
            deleteProfilePicBtn.addEventListener('click', handleDeleteProfilePic);

            // Botones de retroceso
            backButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const loggedInUser = localStorage.getItem('currentUserEmail');
                    showSection(loggedInUser ? 'modules' : 'home');
                    // Clear search input and highlights when navigating back
                    navSearchInput.value = '';
                    handleSiteSearch();
                });
            });

            // Cierra el dropdown de perfil si se hace clic fuera de él (en desktop)
            document.addEventListener('click', (e) => {
                if (!profileNavLink.contains(e.target) && profileDropdown.classList.contains('show') && !navUl.classList.contains('active')) {
                    profileDropdown.classList.remove('show');
                }
            });

            // Lógica del Formulario de Notificaciones
            notificationForm.addEventListener('submit', async (event) => {
                event.preventDefault();

                const email = emailNotificationInput.value;
                const phone = phoneNotificationInput.value;
                const message = messageNotificationInput.value;

                if (!email || !phone || !message) {
                    showFormMessage('Por favor, completa todos los campos.', 'error');
                    return;
                }

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    showFormMessage('Por favor, introduce un correo electrónico válido.', 'error');
                    return;
                }

                showFormMessage('Enviando notificación...', 'info');

                await new Promise(resolve => setTimeout(resolve, 2000));

                showFormMessage(`Notificación ficticia enviada a: Correo (${email}), Teléfono (${phone}). Mensaje: "${message}"`, 'success');
                notificationForm.reset();
            });

            // Lógica del Modal de Detalles del Contacto
            closeContactDetailsModalBtn.addEventListener('click', closeContactDetailsModal);
            window.addEventListener('click', (e) => {
                if (e.target === contactDetailsModal) {
                    closeContactDetailsModal();
                }
            });

            // Lógica del Formulario de Reportar Problemas
            reportIssueForm.addEventListener('submit', async (e) => {
                e.preventDefault();

                submitReportBtn.disabled = true;
                submitReportBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

                const nombre = document.getElementById('nombreEstudiante').value;
                const carrera = document.getElementById('carreraEstudiante').value;
                const profesor = document.getElementById('profesorCarrera').value;
                const motivo = document.getElementById('motivoReporte').value;

                if (!nombre || !carrera || carrera === "" || !motivo) {
                    showReportFormMessage('Por favor, completa todos los campos requeridos (Nombre, Carrera, Motivo).', 'error');
                    submitReportBtn.disabled = false;
                    submitReportBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Reporte';
                    return;
                }

                showReportFormMessage('Enviando reporte...', 'info');

                await new Promise(resolve => setTimeout(resolve, 2500));

                showReportFormMessage('Reporte enviado con éxito. ¡Gracias por tu retroalimentación!', 'success');
                reportIssueForm.reset();
                submitReportBtn.disabled = false;
                submitReportBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Reporte';
            });

            // Lógica del Formulario de Admisión
            admisionForm.addEventListener('submit', (event) => {
                event.preventDefault();
                showNotification('success', '¡Datos enviados! Nos contactaremos pronto.');
                admisionForm.reset();
                const carreraSelectAdmision = document.getElementById('admision-carrera');
                if(carreraSelectAdmision) {
                    carreraSelectAdmision.innerHTML = '<option value="" disabled selected>-- Primero elige una sede --</option>';
                    carreraSelectAdmision.disabled = true;
                }
                const telefonoInputAdmision = document.getElementById('admision-telefono');
                if(telefonoInputAdmision) {
                    telefonoInputAdmision.value = '';
                }
            });

        }

        /*
           ====================================================================
           SECCIÓN: INICIALIZACIÓN DE LA APLICACIÓN
           ====================================================================
        */
        document.addEventListener('DOMContentLoaded', () => {
            setupEventListeners();
            setInitialTheme();
            updateAuthUI();
            initializeAdmisionForm();
            initializeNoticiasFilters();

            if(themeToggleButton) {
                themeToggleButton.addEventListener('click', toggleTheme);
            }
            if(navSearchButton) {
                navSearchButton.addEventListener('click', handleSiteSearch);
            }
            if(navSearchInput) {
                navSearchInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        handleSiteSearch();
                    }
                });
                navSearchInput.addEventListener('input', function() {
                    if (this.value.trim() === '') {
                        clearSearchHighlights();
                    }
                });
            }
        });

        function initializeAdmisionForm() {
            const carrerasPorSedeAdmision = {
                valdivia: [{ value: 'refrigeracion', text: 'TNS en Refrigeración y Climatización' }],
                launion: [{ value: 'agroindustria', text: 'TNS en Agroindustria e Innovación Alimentaria' }, { value: 'admin', text: 'TNS en Administración Pública y Privada' }, { value: 'comunicacion', text: 'TNS en Comunicación y Audiovisual' }],
                paillaco: [{ value: 'informatica', text: 'TNS en Informática y Data Science' }, { value: 'podologia', text: 'TNS en Podología' }, { value: 'enfermeria', text: 'TNS en Enfermería' }],
                panguipulli: [{ value: 'admin', text: 'TNS en Administración Pública y Privada' }, { value: 'construccion', text: 'TNS en Construcción mención Eficiencia Energética' }]
            };

            const sedeSelectAdmision = document.getElementById('admision-sede');
            const carreraSelectAdmision = document.getElementById('admision-carrera');
            const telefonoInputAdmision = document.getElementById('admision-telefono');

            if (sedeSelectAdmision && carreraSelectAdmision) {
                sedeSelectAdmision.addEventListener('change', (event) => {
                    const sedeSeleccionada = event.target.value;
                    const carreras = carrerasPorSedeAdmision[sedeSeleccionada] || [];
                    carreraSelectAdmision.innerHTML = '<option value="" disabled selected>-- Elige una carrera --</option>';
                    carreraSelectAdmision.disabled = false;
                    carreras.forEach(carrera => {
                        let option = document.createElement('option');
                        option.value = carrera.value;
                        option.textContent = carrera.text;
                        carreraSelectAdmision.appendChild(option);
                    });
                });
            }

            if (telefonoInputAdmision) {
                const prefijo = "+56 ";
                telefonoInputAdmision.addEventListener('input', () => {
                    let valor = telefonoInputAdmision.value;
                    if (!valor.startsWith(prefijo)) {
                        valor = prefijo;
                    }
                    let numeros = valor.substring(prefijo.length).replace(/\D/g, '');
                    if (numeros.length > 9) {
                        numeros = numeros.substring(0, 9);
                    }
                    telefonoInputAdmision.value = prefijo + numeros;
                });

                telefonoInputAdmision.addEventListener('focus', () => {
                    if (telefonoInputAdmision.value === "") {
                        telefonoInputAdmision.value = prefijo;
                    }
                });
            }
        }

        /**
         * Inicializa los filtros de noticias y las animaciones.
         */
        function initializeNoticiasFilters() {
            const filterBtns = document.querySelectorAll('#noticias-section .filter-btn');
            const newsCards = document.querySelectorAll('#noticias-section .news-card');

            if (!filterBtns.length || !newsCards.length) {
                return;
            }

            function filterNews(filter) {
                newsCards.forEach(card => {
                    void card.offsetWidth;

                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'flex'; // Ensure it's flex for news cards
                        card.style.animation = 'fadeIn 0.5s ease-out forwards';
                    } else {
                        card.style.animation = 'fadeOut 0.3s ease-out forwards';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            }

            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    const filterValue = this.getAttribute('data-filter');
                    filterNews(filterValue);
                });
            });

            const allFilterBtn = document.querySelector('#noticias-section .filter-btn[data-filter="all"]');
            if (allFilterBtn) {
                allFilterBtn.classList.add('active');
                filterNews('all'); // Apply initial filter
            }
        }

        /**
         * Establece el tema inicial de la página (claro u oscuro) basado en el almacenamiento local.
         */
        function setInitialTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            if (savedTheme === 'dark') {
                document.body.classList.add('theme-dark');
                themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                document.body.classList.remove('theme-dark');
                themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }

        /**
         * Alterna entre el tema claro y oscuro y guarda la preferencia.
         */
        function toggleTheme() {
            if (document.body.classList.contains('theme-dark')) {
                document.body.classList.remove('theme-dark');
                localStorage.setItem('theme', 'light');
                themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                document.body.classList.add('theme-dark');
                localStorage.setItem('theme', 'dark');
                themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }

        /**
         * Maneja la funcionalidad de búsqueda en la página.
         * Resalta los elementos que coinciden con el término de búsqueda y muestra las secciones relevantes.
         */
        function handleSiteSearch() {
            const searchTerm = navSearchInput.value.trim().toLowerCase();
            clearSearchHighlights(); // Limpiar resaltados anteriores

            // Ocultar todas las secciones antes de la búsqueda
            hideAllSections();

            if (!searchTerm) {
                // Si no hay término de búsqueda, mostrar la sección de módulos si el usuario está logueado, o la de inicio.
                updateAuthUI();
                return;
            }

            let foundItems = 0;
            let sectionsWithResults = new Set();

            // Define elementos a buscar dentro de cada tipo de sección
            const searchableElements = {
                'noticias-section': { selector: '.news-card', fields: ['.card-title', '.card-text'] },
                'modules-section': { selector: '.module-card', fields: ['h3', 'p'] },
                'carreras-info-section': { selector: 'li', fields: [] }, // Para <li>, el texto es el propio elemento
                'vida-estudiantil-section': { selector: '.card, .faq-item', fields: ['h3', 'p'] },
                'info-cft-section': { selector: 'h1, h2, h3, p, li', fields: [] }
            };

            for (const sectionId in searchableElements) {
                const sectionElement = document.getElementById(sectionId);
                if (sectionElement) {
                    const config = searchableElements[sectionId];
                    sectionElement.querySelectorAll(config.selector).forEach(item => {
                        let textToSearch = '';
                        if (config.fields.length > 0) {
                            config.fields.forEach(field => {
                                const element = item.querySelector(field);
                                if (element) {
                                    textToSearch += element.textContent.toLowerCase() + ' ';
                                }
                            });
                        } else {
                            // Si no hay campos específicos, buscar en el texto del propio elemento
                            textToSearch = item.textContent.toLowerCase();
                        }

                        if (textToSearch.includes(searchTerm)) {
                            item.classList.add('search-highlight');
                            foundItems++;
                            sectionsWithResults.add(sectionId);
                        }
                    });
                }
            }

            if (foundItems > 0) {
                // Mostrar solo las secciones que tienen resultados
                sectionsWithResults.forEach(sectionId => {
                    const sectionElement = document.getElementById(sectionId);
                    if (sectionElement) {
                        sectionElement.classList.add('active-section');
                        // Lógica específica para inicializar secciones si es necesario
                        if (sectionId === 'directory') {
                            renderDirectory();
                        } else if (sectionId === 'notes-attendance') {
                            initializeNotesSection();
                        } else if (sectionId === 'noticias') {
                            initializeNoticiasFilters();
                        }
                    }
                });
                showNotification('success', `Se encontraron ${foundItems} resultados para "${navSearchInput.value.trim()}".`);
            } else {
                showNotification('info', `No se encontraron resultados para "${navSearchInput.value.trim()}".`);
                // Si no hay resultados, volver a la sección de módulos o inicio
                updateAuthUI();
            }
        }

        /**
         * Elimina todos los resaltados de búsqueda de la página.
         */
        function clearSearchHighlights() {
            document.querySelectorAll('.search-highlight').forEach(el => {
                el.classList.remove('search-highlight');
            });
        }

        // Efecto de onda al hacer click
        document.querySelectorAll('.social-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                // Posición del click
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Crear elemento de onda
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                this.appendChild(ripple);
                
                // Eliminar después de la animación
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Animación de entrada
        document.querySelectorAll('.social-btn').forEach((btn, i) => {
            setTimeout(() => {
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, 150 * i);
            
            // Estilos iniciales para la animación
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(20px)';
            btn.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        });
    