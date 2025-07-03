/*
           ====================================================================
           SECCIÓN: VARIABLES Y CONSTANTES GLOBALES
           Descripción: Declaración de todas las referencias a elementos del DOM
                        y valores constantes para fácil acceso y modificación.
           ====================================================================
        */
        // Users database (5 random users with @cftrl.cl emails and RUT passwords)
        // Estos son los datos de usuario "actualizados" que mencionaste.
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

        // Directorio de contactos (NUEVO: organizado por sede y con datos de Paillaco actualizados)
        const directoryDataBySede = {
            "Sede Valdivia": [
                {
                    name: "Dr. Ana Rojas",
                    position: "Directora Académica",
                    email: "arojas@cftrl.cl",
                    phone: "+56 9 1111 2222",
                    department: "Administración",
                    icon: "&#127891;" // Icono de birrete
                },
                {
                    name: "Prof. Ricardo Soto",
                    position: "Jefe de Carrera (Programación)",
                    email: "rsoto@cftrl.cl",
                    phone: "+56 9 3333 4444",
                    department: "Informática",
                    icon: "&#128187;" // Icono de laptop
                }
            ],
            "Sede La Unión": [
                {
                    name: "Ing. Carla Fuentes",
                    position: "Coordinadora de Prácticas",
                    email: "cfuentes@cftrl.cl",
                    phone: "+56 9 5555 6666",
                    department: "Vinculación con el Medio",
                    icon: "&#128188;" // Icono de maletín
                },
                {
                    name: "Sra. Elena Paredes",
                    position: "Secretaria Académica",
                    email: "eparedes@cftrl.cl",
                    phone: "+56 9 7777 8888",
                    department: "Secretaría General",
                    icon: "&#128100;" // Icono de busto/persona
                }
            ],
            "Sede Paillaco": [ // Datos actualizados
                {
                    name: "Mauricio Peters",
                    position: "Coordinador Sede",
                    email: "mpeters@cftdelosrios.cl",
                    phone: "+56 9 2100 0001", // Teléfono ficticio
                    department: "Coordinación",
                    icon: "&#128204;" // Icono de pin de mapa
                },
                {
                    name: "Abraham Acevedo",
                    position: "Registro Curricular",
                    email: "aacevedo@cftdelosrios.cl",
                    phone: "+56 9 2100 0002", // Teléfono ficticio
                    department: "Académico",
                    icon: "&#128220;" // Icono de notas
                },
                {
                    name: "Felipe Fierro",
                    position: "Experiencia Estudiantil",
                    email: "ffierro@cftdelosrios.cl",
                    phone: "+56 9 2100 0003", // Teléfono ficticio
                    department: "DAE",
                    icon: "&#128100;" // Icono de persona
                },
                {
                    name: "Scarlett Barra",
                    position: "Psicóloga",
                    email: "sbarra@cftdelosrios.cl",
                    phone: "+56 9 2100 0004", // Teléfono ficticio
                    department: "Equipo Psicosocial",
                    icon: "&#129504;" // Icono de cerebro
                },
                {
                    name: "María José Pardo",
                    position: "Psicopedagoga",
                    email: "mpardo@cftdelosrios.cl",
                    phone: "+56 9 2100 0005", // Teléfono ficticio
                    department: "Equipo Psicosocial",
                    icon: "&#128218;" // Icono de libro
                },
                {
                    name: "Camila Donoso",
                    position: "Admisión",
                    email: "cdonoso@cftdelosrios.cl",
                    phone: "+56 9 2100 0006", // Teléfono ficticio
                    department: "Admisión",
                    icon: "&#128273;" // Icono de llave
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
        const navSearchInput = document.getElementById('nav-search-input'); // Input de búsqueda
        const navSearchButton = document.getElementById('nav-search-button'); // Botón de búsqueda
        const navSearchLi = document.getElementById('nav-search-li'); // Elemento <li> de la búsqueda para visibilidad
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
        const noticiasSection = document.getElementById('noticias-section'); // NUEVO: Sección Noticias
        const backButtons = document.querySelectorAll('.back-button');

        // Elementos del Modal de Autenticación (actualizados para el nuevo login)
        const loginModal = document.getElementById('login-modal');
        const closeModalButton = document.querySelector('.close-button');
        const modalTitle = document.getElementById('modal-title'); // Título dentro del login-header
        const authForm = document.getElementById('auth-form'); // El formulario principal del login
        const emailInput = document.getElementById('email'); // Campo de email del nuevo login
        const passwordInput = document.getElementById('password'); // Campo de contraseña del nuevo login
        const loginBtn = document.getElementById('loginBtn'); // Botón de login del nuevo login
        const modalToggleFormLink = document.getElementById('modal-toggle-form'); // Enlace para alternar entre login/registro
        const loginContainerMain = document.getElementById('loginContainerMain'); // El contenedor principal del formulario de login para animaciones

        // Elementos de Notificación (del nuevo login)
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

        // Elementos del Directorio (NUEVOS)
        const directoryList = document.getElementById('directory-list');
        const contactDetailsModal = document.getElementById('contact-details-modal');
        const closeContactDetailsModalBtn = document.getElementById('close-contact-details-modal');
        const contactDetailsTitle = document.getElementById('contact-details-title');
        const contactDetailsOutput = document.getElementById('contact-details-output');

        // Elementos del Formulario de Reportar Problemas (NUEVOS - desde problema.html)
        const reportIssueForm = document.getElementById('reportIssueForm');
        const formMessage = document.getElementById('formMessage'); // Mensaje dentro del formulario de reporte
        const submitReportBtn = document.getElementById('submitReportBtn');


        // Constantes
        const DEFAULT_AVATAR_PATH = 'https://placehold.co/120x120/D3D3D3/000?text=Avatar'; // Ruta a una imagen de avatar por defecto
        let isRegistering = false; // Estado para el formulario de autenticación (registro vs. login)

        // Cache para el contenido HTML cargado dinámicamente
        const htmlCache = {};

        /**
         * Carga contenido HTML desde un archivo y lo inserta en un elemento.
         * Utiliza un caché para evitar múltiples peticiones para el mismo archivo.
         * @param {string} filePath - Ruta al archivo HTML.
         * @param {string} elementId - ID del elemento donde se insertará el HTML.
         */
        async function loadHtmlContent(filePath, elementId) {
            const targetElement = document.getElementById(elementId);
            if (!targetElement) {
                console.error(`Elemento con ID '${elementId}' no encontrado.`);
                return;
            }

            if (htmlCache[filePath]) {
                targetElement.innerHTML = htmlCache[filePath];
                return; // Contenido cargado desde caché
            }

            // Mostrar indicador de carga
            targetElement.innerHTML = `<p>Cargando...</p>`;

            try {
                const response = await fetch(filePath);
                if (!response.ok) {
                    throw new Error(`Error HTTP ${response.status} al cargar ${filePath}`);
                }
                const html = await response.text();
                htmlCache[filePath] = html; // Guardar en caché
                targetElement.innerHTML = html;
            } catch (error) {
                console.error(`Error al cargar contenido HTML para ${elementId}:`, error);
                targetElement.innerHTML = `<p style="color:var(--color-error);">Error al cargar contenido. Intente nuevamente.</p>`;
                // Opcionalmente, usar showNotification para un error más global si es apropiado
                // showNotification('error', `No se pudo cargar la sección: ${elementId.replace('-section','').replace('ContainerMain',' modal')}.`);
            }
        }


        /*
           ====================================================================
           SECCIÓN: FUNCIONES DE UTILIDAD (HELPERS)
           Descripción: Funciones genéricas y reutilizables para tareas comunes.
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
        async function showSection(sectionId) {
            const loggedInUser = localStorage.getItem('currentUserEmail');
            const protectedSections = ['user-profile-detail', 'notes-attendance', 'academic-calendar', 'notifications', 'directory', 'scholarships', 'report-issue'];

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

            hideAllSections(); // Oculta todas antes de mostrar la deseada

            const targetSectionElement = document.getElementById(`${sectionId}-section`);
            if (targetSectionElement) {
                // Cargar contenido HTML dinámicamente para las secciones refactorizadas
                if (sectionId === 'home' && !htmlCache['sections/home-section-content.html']) {
                    await loadHtmlContent('sections/home-section-content.html', 'home-section');
                } else if (sectionId === 'modules' && !htmlCache['sections/modules-section-content.html']) {
                    await loadHtmlContent('sections/modules-section-content.html', 'modules-section');
                }
                // Añadir aquí más 'else if' para otras secciones a medida que se refactorizan.
                // Por ejemplo:
                // else if (sectionId === 'user-profile-detail' && !htmlCache['sections/user-profile-detail-section-content.html']) {
                //     await loadHtmlContent('sections/user-profile-detail-section-content.html', 'user-profile-detail-section');
                // }

                targetSectionElement.classList.add('active-section');

                // Lógica específica después de cargar el contenido y activar la sección
                if (sectionId === 'directory') {
                    renderDirectory();
                } else if (sectionId === 'notes-attendance') {
                    initializeNotesSection();
                } else if (sectionId === 'modules') {
                    // Re-asignar event listeners a los module-cards cargados dinámicamente
                    document.querySelectorAll('#modules-section .module-card').forEach(card => {
                        card.addEventListener('click', () => {
                            const targetSect = card.dataset.section;
                            if (targetSect) {
                                showSection(targetSect);
                            }
                        });
                    });
                } else if (sectionId === 'home') {
                     // Re-asignar event listener al botón de login en home
                    const homeLoginButton = document.querySelector('#home-section .btn-primario[data-action="open-login-modal"]');
                    if (homeLoginButton) {
                        homeLoginButton.addEventListener('click', openLoginModal);
                    }
                }
                // ... otras inicializaciones específicas de sección
            }


            // Asegura que la sección de módulos (el grid en sí) se active solo cuando corresponde
            // Esto es un poco redundante si modules-section es el targetSectionElement, pero se mantiene por claridad
            if (loggedInUser && sectionId === 'modules') {
                modulesSection.classList.add('active-section'); // El grid se muestra
            } else if (sectionId !== 'modules') { // Si no estamos en módulos, nos aseguramos que el grid no esté activo
                modulesSection.classList.remove('active-section');
            }


            // Carga datos del perfil si se va a la sección de detalles del perfil
            if (sectionId === 'user-profile-detail' && loggedInUser) {
                // Asumimos que el HTML de user-profile-detail-section ya está en index.html o se cargará
                // de forma similar a 'home' o 'modules' si se decide refactorizarlo.
                // Por ahora, la lógica de carga de datos del perfil permanece igual.
                loadProfileData(loggedInUser);
                setProfileFormState(false); // Por defecto, el formulario de perfil está en modo de visualización
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

            // Hide the other notification if it's currently showing
            const otherNotification = type === 'success' ? errorNotification : successNotification;
            otherNotification.classList.remove('show');
            otherNotification.classList.remove(type === 'success' ? 'error' : 'success'); // Remove class to prevent conflicts

            messageSpan.textContent = message;
            notificationElement.classList.add('show');
            notificationElement.classList.add(type); // Add the specific type class

            setTimeout(() => {
                notificationElement.classList.remove('show');
                notificationElement.classList.remove(type); // Remove type class after hiding
            }, 3000); // Notification visible for 3 seconds
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
            // Muestra el mensaje
            responseMessageNotificationDiv.style.display = 'block';
            // Ocultar automáticamente mensajes de éxito/info después de 5 segundos
            if (type === 'success' || type === 'info') {
                setTimeout(() => {
                    responseMessageNotificationDiv.style.display = 'none';
                }, 5000);
            }
        }


        /**
         * Función para mostrar mensajes en el formulario de reporte de problemas.
         * Es una versión adaptada de showFormMessage para este formulario específico.
         * @param {string} message - El mensaje a mostrar.
         * @param {string} type - 'success', 'error' o 'info'.
         */
        function showReportFormMessage(message, type) {
            formMessage.textContent = message;
            formMessage.className = `message ${type}`; // Elimina clases anteriores y añade la nueva
            formMessage.style.display = 'block'; // Muestra el mensaje
            // Ocultar automáticamente mensajes de éxito/info después de 5 segundos
            if (type === 'success' || type === 'info') {
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }
        }


        /*
           ====================================================================
           SECCIÓN: LÓGICA DE AUTENTICACIÓN Y MODAL
           Descripción: Funciones para abrir/cerrar el modal de login/registro,
                        gestionar el estado del formulario y manejar la autenticación.
           ====================================================================
        */

        /**
         * Abre el modal de inicio de sesión/registro.
         */
        async function openLoginModal() {
            if (!htmlCache['sections/login-modal-content.html']) {
                await loadHtmlContent('sections/login-modal-content.html', 'loginContainerMain');
                // Re-enlazar listeners para elementos dentro del modal cargado dinámicamente
                setupModalEventListeners();
            }
            loginModal.classList.add('show');
            // Los inputs emailInput y passwordInput se definen globalmente,
            // pero podrían necesitar ser re-seleccionados si se cargan con el modal.
            // Por ahora, asumimos que setupModalEventListeners los maneja o que son estables.
            if(emailInput) emailInput.value = '';
            if(passwordInput) passwordInput.value = '';
            setFormToLoginMode(); // Asegurarse de que el formulario empiece en modo login
        }


        /**
         * Configura los event listeners específicos para los elementos dentro del modal de login,
         * especialmente aquellos que se cargan dinámicamente.
         */
        function setupModalEventListeners() {
            const newCloseModalButton = loginModal.querySelector('.close-button');
            const newAuthForm = loginModal.querySelector('#auth-form');
            const newLoginBtn = loginModal.querySelector('#loginBtn');
            const newModalToggleFormLink = loginModal.querySelector('#modal-toggle-form');
            const newEmailInput = loginModal.querySelector('#email');
            const newPasswordInput = loginModal.querySelector('#password');

            if (newCloseModalButton) newCloseModalButton.addEventListener('click', closeLoginModal);

            if (newAuthForm && newLoginBtn && newModalToggleFormLink && newEmailInput && newPasswordInput) {
                newAuthForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    setLoading(true);
                    loginContainerMain.classList.remove('shake');

                    const email = newEmailInput.value.trim();
                    const password = newPasswordInput.value.trim();

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

                newModalToggleFormLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    loginContainerMain.classList.remove('shake');
                    // Los inputs de email y password son re-seleccionados dentro del submit handler,
                    // así que no es necesario re-asignarlos aquí.
                    // El modalTitle y el btn-text sí necesitan ser referenciados correctamente
                    // si sus IDs se mantienen estables o son re-seleccionados.
                    isRegistering ? setFormToLoginMode() : setFormToRegisterMode();
                });

                 // Re-asignar referencias globales si es necesario, o asegurar que se usen las nuevas.
                // Esto es crucial si otras funciones (como setFormToLoginMode) dependen de estas variables globales.
                // Por simplicidad, este ejemplo asume que las funciones internas del modal usarán las nuevas referencias.
            }
        }


        /**
         * Cierra el modal de inicio de sesión/registro.
         */
        function closeLoginModal() {
            loginModal.classList.remove('show');
            // Ensure no lingering shake effect
            if (loginContainerMain.classList.contains('shake')) {
                loginContainerMain.classList.remove('shake');
            }
        }

        /**
         * Configura el formulario del modal en modo "Iniciar Sesión".
         */
        function setFormToLoginMode() {
            isRegistering = false;
            modalTitle.textContent = 'Intranet CFT Los Ríos'; // Título del nuevo login
            document.querySelector('.login-subtitle').textContent = 'Ingresa tus credenciales para acceder';
            loginBtn.querySelector('.btn-text').textContent = 'Iniciar Sesión';
            modalToggleFormLink.textContent = '¿No tienes cuenta? Regístrate aquí';
            // Clear any previous error messages
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
            // Clear any previous error messages
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
         * También gestiona la visibilidad del botón de menú móvil.
         */
        function updateAuthUI() {
            const loggedInUser = localStorage.getItem('currentUserEmail');
            if (loggedInUser) {
                document.body.classList.add('logged-in');
                profileNavLink.style.display = 'list-item';
                carrerasNavLink.style.display = 'list-item';
                admisionNavLink.style.display = 'list-item';
                vidaEstudiantilNavLink.style.display = 'list-item';
                noticiasNavLink.style.display = 'list-item';
                navSearchLi.style.display = 'list-item'; // Mostrar contenedor de búsqueda

                const profile = getProfileData(loggedInUser);
                navProfilePic.src = profile.profilePic || DEFAULT_AVATAR_PATH;
                dropdownProfilePic.src = profile.profilePic || DEFAULT_AVATAR_PATH;
                dropdownUsername.textContent = profile.name || loggedInUser;
                showSection('modules');
            } else {
                document.body.classList.remove('logged-in');
                profileNavLink.style.display = 'none';
                carrerasNavLink.style.display = 'none';
                admisionNavLink.style.display = 'none';
                vidaEstudiantilNavLink.style.display = 'none';
                noticiasNavLink.style.display = 'none';
                navSearchLi.style.display = 'none'; // Ocultar contenedor de búsqueda
                profileDropdown.classList.remove('show');
                showSection('home');
            }
        }


        /*
           ====================================================================
           SECCIÓN: LÓGICA DE GESTIÓN DE PERFIL
           Descripción: Funciones para cargar, guardar y editar los datos del perfil,
                        incluyendo la foto de perfil.
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
                // Si el usuario existe en 'users' pero no tiene perfil en localStorage, creamos uno básico
                const userInDb = users.find(user => user.email === email);
                return {
                    name: userInDb ? userInDb.name : 'Estudiante CFT',
                    email: email,
                    phone: '+56 9 1234 5678', // Default phone
                    rut: userInDb ? userInDb.password : '12.345.678-K', // Use password as RUT for default
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

            // Determina si se muestra el botón de eliminar foto
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

            // El botón de eliminar foto solo se muestra si está editando Y no es la foto por defecto
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
           SECCIÓN: LÓGICA DEL DIRECTORIO (ACTUALIZADA para mostrar por sede)
           ====================================================================
        */

        /**
         * Renderiza la lista de contactos del directorio, agrupados por sede.
         */
        function renderDirectory() {
            directoryList.innerHTML = ''; // Limpia la lista existente

            for (const sede in directoryDataBySede) {
                if (directoryDataBySede.hasOwnProperty(sede)) {
                    // Crea un encabezado para la sede
                    const sedeHeading = document.createElement('h2');
                    sedeHeading.classList.add('sede-title'); // Clase para el estilo del título de sede
                    sedeHeading.textContent = sede;
                    directoryList.appendChild(sedeHeading);

                    // Crea un contenedor para los contactos de esta sede (que será un grid)
                    const sedeContactsGrid = document.createElement('div');
                    sedeContactsGrid.classList.add('directory-grid'); // Aplica las clases de grid aquí

                    directoryDataBySede[sede].forEach((contact, index) => {
                        const card = document.createElement('div');
                        card.classList.add('directory-card');
                        // Usamos un identificador único para el contacto que incluya la sede y el índice
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

            // Añadir event listeners a las nuevas tarjetas del directorio
            // Delegamos el evento al contenedor principal para evitar añadir muchos listeners
            directoryList.addEventListener('click', (e) => {
                const card = e.target.closest('.directory-card');
                if (card) {
                    const contactId = card.dataset.contactId;
                    // Encontrar el contacto usando el contactId
                    let foundContact = null;
                    for (const sede in directoryDataBySede) {
                        const contactIndex = parseInt(contactId.split('-').pop());
                        // La parte del contactId antes del último '-' debe coincidir con la sede normalizada
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
         * Muestra un modal con los detalles del contacto en formato normal (no C++-like).
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
            // Cambiar el color de las notas según su valor
            document.querySelectorAll('#notes-attendance-section .nota-value').forEach(nota => {
                const value = parseFloat(nota.textContent);
                if (value < 4.0) {
                    nota.style.backgroundColor = getCssVariable('--color-error'); // Rojo para notas bajas
                } else if (value < 5.0) {
                    nota.style.backgroundColor = getCssVariable('--accent-login-color'); // Naranjo para notas regulares
                } else {
                    nota.style.backgroundColor = getCssVariable('--color-exito'); // Verde para notas buenas
                }
            });

            // Animación al cargar las tarjetas
            const cards = document.querySelectorAll('#notes-attendance-section .materia-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0'; // Reset opacity for re-animation
                card.style.transform = 'translateY(20px)'; // Reset transform for re-animation
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 * index); // Staggered animation
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


        /*
           ====================================================================
           SECCIÓN: CONFIGURACIÓN DE EVENT LISTENERS
           Descripción: Agrupa todos los escuchadores de eventos para mejorar
                        la organización y la legibilidad.
           ====================================================================
        */

        /**
         * Configura todos los escuchadores de eventos de la aplicación.
         */
        function setupEventListeners() {
            // Navegación y menú móvil
            menuToggle.addEventListener('click', () => {
                navUl.classList.toggle('active');
                profileDropdown.classList.remove('show'); // Asegura que el dropdown de perfil se cierre al abrir/cerrar el menú móvil
            });

            // Clic en el enlace del perfil en la navegación (para mostrar/ocultar dropdown en desktop)
            profileNavLink.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                if (navUl.classList.contains('active')) {
                    // Si el menú móvil está activo, navega a la sección de perfil
                    navUl.classList.remove('active');
                    showSection('user-profile-detail');
                } else {
                    // Si no, alterna el dropdown de perfil (en desktop)
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
            });

            // Clics dentro del dropdown de perfil (Ver Perfil, Cerrar Sesión)
            profileDropdown.addEventListener('click', (e) => {
                e.stopPropagation(); // Evita que el clic se propague al documento
                const target = e.target;
                if (target.tagName === 'A') {
                    e.preventDefault();
                    profileDropdown.classList.remove('show'); // Cierra el dropdown
                    navUl.classList.remove('active'); // Asegura que el menú móvil también se cierre
                    if (target.dataset.section === 'user-profile-detail') {
                        showSection('user-profile-detail');
                    } else if (target.dataset.action === 'logout') {
                        localStorage.removeItem('currentUserEmail');
                        updateAuthUI(); // Actualiza la UI después del logout
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
                // Remove shake class before changing mode
                loginContainerMain.classList.remove('shake');
                isRegistering ? setFormToLoginMode() : setFormToRegisterMode();
            });

            // Envío del formulario de autenticación (manejado por setupModalEventListeners si el modal se carga dinámicamente)
            // Si el modal SIEMPRE está en el DOM desde el inicio, este listener original podría seguir aquí.
            // PERO, como ahora el contenido del modal se carga dinámicamente, los listeners para SUS elementos internos
            // deben configurarse DESPUÉS de que su HTML es inyectado. Esto se hace en setupModalEventListeners.
            // Por lo tanto, el listener original para authForm (que era global) se elimina o se comenta si ya no aplica directamente.

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
                    email: profileEmailInput.value.trim(), // Email no se puede editar, pero se mantiene en el objeto
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
                if (!profileNameInput.disabled) profileImageUpload.click(); // Permite clickear solo en modo edición
            });
            profileImageUpload.addEventListener('change', handleProfileImageUpload);
            deleteProfilePicBtn.addEventListener('click', handleDeleteProfilePic);

            // Botones de retroceso
            backButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const loggedInUser = localStorage.getItem('currentUserEmail');
                    showSection(loggedInUser ? 'modules' : 'home');
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
                event.preventDefault(); // Evita el envío del formulario por defecto (recarga de página)

                const email = emailNotificationInput.value;
                const phone = phoneNotificationInput.value;
                const message = messageNotificationInput.value;

                // Validación básica de campos
                if (!email || !phone || !message) {
                    showFormMessage('Por favor, completa todos los campos.', 'error');
                    return;
                }

                // Validación simple de formato de correo electrónico
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    showFormMessage('Por favor, introduce un correo electrónico válido.', 'error');
                    return;
                }

                // Simulación de envío (esta parte no es real)
                showFormMessage('Enviando notificación...', 'info');

                // En un entorno real, aquí harías una petición a tu servidor backend:
                /*
                try {
                    const response = await fetch('/api/send-notification', { // Esta URL sería la de tu backend
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email, phone, message })
                    });

                    if (response.ok) {
                        const result = await response.json();
                        showFormMessage(`Notificación enviada con éxito a ${email} y ${phone}.`, 'success');
                        notificationForm.reset(); // Limpia el formulario
                    } else {
                        const errorData = await response.json();
                        showFormMessage(`Error al enviar la notificación: ${errorData.message || 'Error desconocido'}`, 'error');
                    }
                } catch (error) {
                    console.error('Error de red o del servidor:', error);
                    showFormMessage('Hubo un problema de conexión. Inténtalo de nuevo.', 'error');
                }
                */

                // Para esta simulación, simplemente esperamos un poco y mostramos éxito
                await new Promise(resolve => setTimeout(resolve, 2000)); // Simula un retraso de 2 segundos

                showFormMessage(`Notificación ficticia enviada a: Correo (${email}), Teléfono (${phone}). Mensaje: "${message}"`, 'success');
                notificationForm.reset(); // Limpia el formulario después de la simulación
            });

            // Lógica del Modal de Detalles del Contacto (NUEVO)
            closeContactDetailsModalBtn.addEventListener('click', closeContactDetailsModal);
            window.addEventListener('click', (e) => {
                if (e.target === contactDetailsModal) {
                    closeContactDetailsModal();
                }
            });

            // Lógica del Formulario de Reportar Problemas (NUEVO - integrado de problema.html)
            reportIssueForm.addEventListener('submit', async (e) => {
                e.preventDefault(); // Evita el envío tradicional del formulario

                // Deshabilita el botón y cambia el texto mientras se envía
                submitReportBtn.disabled = true;
                submitReportBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

                // Recopila los datos del formulario
                const nombre = document.getElementById('nombreEstudiante').value;
                const carrera = document.getElementById('carreraEstudiante').value; // Obtener valor del select
                const profesor = document.getElementById('profesorCarrera').value;
                const motivo = document.getElementById('motivoReporte').value;

                // Simple validación
                // Asegúrate de que la carrera seleccionada no sea la opción por defecto vacía
                if (!nombre || !carrera || carrera === "" || !motivo) {
                    showReportFormMessage('Por favor, completa todos los campos requeridos (Nombre, Carrera, Motivo).', 'error');
                    submitReportBtn.disabled = false; // Re-habilita el botón
                    submitReportBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Reporte';
                    return;
                }

                showReportFormMessage('Enviando reporte...', 'info');

                await new Promise(resolve => setTimeout(resolve, 2500)); // Simula un retraso de 2.5 segundos

                // Aquí es donde normalmente enviarías los datos a un servidor.
                // Ejemplo con fetch API (descomenta y adapta a tu backend real):
                /*
                try {
                    const response = await fetch('/api/reportar-problema', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ nombre, carrera, profesor, motivo }),
                    });

                    if (response.ok) {
                        showReportFormMessage('Reporte enviado con éxito. ¡Gracias por tu retroalimentación!', 'success');
                        reportIssueForm.reset(); // Limpia el formulario al éxito
                    } else {
                        const errorData = await response.json();
                        showReportFormMessage(`Error al enviar el reporte: ${errorData.message || 'Inténtalo de nuevo.'}`, 'error');
                    }
                } catch (error) {
                    console.error('Error de red o del servidor:', error);
                    showReportFormMessage('Hubo un problema de conexión. Por favor, inténtalo más tarde.', 'error');
                } finally {
                    submitReportBtn.disabled = false; // Siempre re-habilita el botón
                    submitReportBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Reporte';
                }
                */

                // Para esta simulación, asumimos éxito
                showReportFormMessage('Reporte enviado con éxito. ¡Gracias por tu retroalimentación!', 'success');
                reportIssueForm.reset(); // Limpia el formulario después de la simulación
                submitReportBtn.disabled = false; // Re-habilita el botón
                submitReportBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Reporte';
            });

        }

        /*
           ====================================================================
           SECCIÓN: INICIALIZACIÓN
           Descripción: Función que se ejecuta cuando el DOM está completamente
                        cargado para configurar la aplicación.
           ====================================================================
        */
        document.addEventListener('DOMContentLoaded', () => {
            setupEventListeners();
            setInitialTheme(); // Aplicar tema guardado o default al cargar
            updateAuthUI();
            initializeAdmisionForm();
            initializeNoticiasFilters();

            // Event listener para el botón de cambio de tema
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
                 // Opcional: limpiar búsqueda si el input se vacía manualmente
                navSearchInput.addEventListener('input', function() {
                    if (this.value.trim() === '') {
                        // Podríamos llamar a una función que restaure todo
                        // o simplemente no hacer nada hasta que se presione buscar/enter de nuevo.
                        // Por ahora, se restaurará al borrar y presionar Enter o el botón.
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
            const admisionForm = document.getElementById('admisionForm');

            if (sedeSelectAdmision && carreraSelectAdmision) {
                sedeSelectAdmision.addEventListener('change', (event) => {
                    const sedeSeleccionada = event.target.value;
                    const carreras = carrerasPorSedeAdmision[sedeSeleccionada] || [];
                    carreraSelectAdmision.innerHTML = '<option value="" disabled selected>-- Elige una carrera --</option>';
                    carreraSelectAdmision.disabled = false;
                    carreras.forEach(carrera => {
                        let option = document.createElement('option');
                        option.value = carrera.value;
                        // Se elimina el span con estilo para simplificar, el estilo del select debe ser general
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

            if (admisionForm) {
                admisionForm.addEventListener('submit', (event) => {
                    event.preventDefault();
                    // Aquí puedes usar la función showNotification o una alerta simple
                    showNotification('success', '¡Datos enviados! Nos contactaremos pronto.');
                    // alert('¡Datos enviados correctamente!\nNos pondremos en contacto contigo pronto.');
                    admisionForm.reset();
                    if(carreraSelectAdmision) {
                        carreraSelectAdmision.innerHTML = '<option value="" disabled selected>-- Primero elige una sede --</option>';
                        carreraSelectAdmision.disabled = true;
                    }
                    if(telefonoInputAdmision) {
                        telefonoInputAdmision.value = '';
                    }
                });
            }
        }

        function initializeNoticiasFilters() {
            const filterBtns = document.querySelectorAll('#noticias-section .filter-btn');
            const newsCards = document.querySelectorAll('#noticias-section .news-card');
            const newsContainer = document.querySelector('#noticias-section .news-container');

            if (!filterBtns.length || !newsCards.length || !newsContainer) {
                // console.warn("Elementos para filtros de noticias no encontrados. Saltando inicialización de filtros.");
                return;
            }

            function filterNews(filter) {
                newsCards.forEach(card => {
                    // Forzar la re-evaluación del layout antes de cambiar display para animación
                    void card.offsetWidth;

                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'block'; // O 'flex' o 'grid-item' dependiendo del layout de .news-row
                        card.style.animation = 'fadeIn 0.5s ease-out forwards';
                    } else {
                        card.style.animation = 'fadeOut 0.3s ease-out forwards';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300); // Coincidir con la duración de fadeOut
                    }
                });
            }

            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    const filterValue = this.getAttribute('data-filter');
                    filterNews(filterValue);

                    // Opcional: Scroll suave al contenedor de noticias si está fuera de vista
                    // newsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            });

            // Activar el filtro "Todos" por defecto al cargar la sección
            const allFilterBtn = document.querySelector('#noticias-section .filter-btn[data-filter="all"]');
            if (allFilterBtn) {
                allFilterBtn.classList.add('active');
                filterNews('all'); // Aplicar filtro inicial
            }

            // Añadir animaciones fadeIn/fadeOut si no existen
            const styleSheet = document.styleSheets[0];
            let fadeInExists = false;
            let fadeOutExists = false;
            for (let i = 0; i < styleSheet.cssRules.length; i++) {
                if (styleSheet.cssRules[i].name === 'fadeIn') fadeInExists = true;
                if (styleSheet.cssRules[i].name === 'fadeOut') fadeOutExists = true;
            }

            if (!fadeInExists) {
                try {
                    styleSheet.insertRule(`
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(15px); }
                            to { opacity: 1; transform: translateY(0); }
                        }`, styleSheet.cssRules.length);
                } catch (e) {
                    console.error("Error insertando regla fadeIn: ", e);
                }
            }
            if (!fadeOutExists) {
                 try {
                    styleSheet.insertRule(`
                        @keyframes fadeOut {
                            from { opacity: 1; transform: translateY(0); }
                            to { opacity: 0; transform: translateY(15px); }
                        }`, styleSheet.cssRules.length);
                } catch (e) {
                    console.error("Error insertando regla fadeOut: ", e);
                }
            }
        }

        // --- Funcionalidad de Cambio de Tema ---
        function setInitialTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            if (savedTheme === 'dark') {
                document.body.classList.add('theme-dark');
                themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Icono de sol para tema oscuro
            } else {
                document.body.classList.remove('theme-dark');
                themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Icono de luna para tema claro
            }
        }

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
        // --- Fin Funcionalidad de Cambio de Tema ---


        function initializeNoticiasFilters() {
            const filterBtns = document.querySelectorAll('#noticias-section .filter-btn');
            const newsCards = document.querySelectorAll('#noticias-section .news-card');
            const newsContainer = document.querySelector('#noticias-section .news-container');

            if (!filterBtns.length || !newsCards.length || !newsContainer) {
                // console.warn("Elementos para filtros de noticias no encontrados. Saltando inicialización de filtros.");
                return;
            }

            function filterNews(filter) {
                newsCards.forEach(card => {
                    // Forzar la re-evaluación del layout antes de cambiar display para animación
                    void card.offsetWidth;

                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'block'; // O 'flex' o 'grid-item' dependiendo del layout de .news-row
                        card.style.animation = 'fadeIn 0.5s ease-out forwards';
                    } else {
                        card.style.animation = 'fadeOut 0.3s ease-out forwards';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300); // Coincidir con la duración de fadeOut
                    }
                });
            }

            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    const filterValue = this.getAttribute('data-filter');
                    filterNews(filterValue);

                    // Opcional: Scroll suave al contenedor de noticias si está fuera de vista
                    // newsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            });

            // Activar el filtro "Todos" por defecto al cargar la sección
            const allFilterBtn = document.querySelector('#noticias-section .filter-btn[data-filter="all"]');
            if (allFilterBtn) {
                allFilterBtn.classList.add('active');
                // filterNews('all'); // Aplicar filtro inicial - Se comenta para que no se ejecute antes de que la sección sea visible
            }

            // Añadir animaciones fadeIn/fadeOut si no existen
            const styleSheet = document.styleSheets[0];
            let fadeInExists = false;
            let fadeOutExists = false;
            if (styleSheet) { // Asegurarse que styleSheet existe
                for (let i = 0; i < styleSheet.cssRules.length; i++) {
                    if (styleSheet.cssRules[i].name === 'fadeIn') fadeInExists = true;
                    if (styleSheet.cssRules[i].name === 'fadeOut') fadeOutExists = true;
                }

                if (!fadeInExists) {
                    try {
                        styleSheet.insertRule(`
                            @keyframes fadeIn {
                                from { opacity: 0; transform: translateY(15px); }
                                to { opacity: 1; transform: translateY(0); }
                            }`, styleSheet.cssRules.length);
                    } catch (e) {
                        console.error("Error insertando regla fadeIn: ", e);
                    }
                }
                if (!fadeOutExists) {
                     try {
                        styleSheet.insertRule(`
                            @keyframes fadeOut {
                                from { opacity: 1; transform: translateY(0); }
                                to { opacity: 0; transform: translateY(15px); }
                            }`, styleSheet.cssRules.length);
                    } catch (e) {
                        console.error("Error insertando regla fadeOut: ", e);
                    }
                }
            }
        }

        // --- Funcionalidad de Búsqueda ---
        function handleSiteSearch() {
            const searchTerm = navSearchInput.value.trim().toLowerCase();
            if (!searchTerm) {
                // Si no hay término de búsqueda, restaurar la visibilidad de todos los elementos relevantes
                // Esto es una simplificación; una implementación más robusta podría recordar el estado anterior.
                document.querySelectorAll('.news-card, .module-card, #carreras-info-section li, #vida-estudiantil-section .card, #vida-estudiantil-section .faq-item').forEach(el => {
                    el.style.display = ''; // Restablecer display
                    el.classList.remove('search-highlight'); // Remover resaltado
                });
                // También asegurarse de que las secciones activas se muestren correctamente si la búsqueda las ocultó.
                // Por ahora, no ocultaremos secciones enteras, solo elementos dentro de ellas.
                return;
            }

            let foundItems = 0;

            // 1. Búsqueda en Tarjetas de Noticias (título y texto)
            document.querySelectorAll('#noticias-section .news-card').forEach(card => {
                const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
                const text = card.querySelector('.card-text')?.textContent.toLowerCase() || '';
                if (title.includes(searchTerm) || text.includes(searchTerm)) {
                    card.style.display = 'block'; // O el display original
                    card.classList.add('search-highlight');
                    foundItems++;
                } else {
                    card.style.display = 'none';
                    card.classList.remove('search-highlight');
                }
            });

            // 2. Búsqueda en Módulos (título y descripción)
            document.querySelectorAll('#modules-section .module-card').forEach(card => {
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const text = card.querySelector('p')?.textContent.toLowerCase() || '';
                 if (title.includes(searchTerm) || text.includes(searchTerm)) {
                    card.style.display = 'block'; // O 'grid' si es item de grid
                    card.classList.add('search-highlight');
                    foundItems++;
                } else {
                    card.style.display = 'none';
                    card.classList.remove('search-highlight');
                }
            });

            // 3. Búsqueda en lista de Carreras
            document.querySelectorAll('#carreras-info-section li').forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'list-item';
                    item.classList.add('search-highlight');
                    foundItems++;
                } else {
                    item.style.display = 'none';
                    item.classList.remove('search-highlight');
                }
            });

            // 4. Búsqueda en Vida Estudiantil (títulos de cards y FAQ)
            document.querySelectorAll('#vida-estudiantil-section .card, #vida-estudiantil-section .faq-item').forEach(item => {
                const title = item.querySelector('h3')?.textContent.toLowerCase() || '';
                const textContent = item.querySelector('p')?.textContent.toLowerCase() || '';
                if (title.includes(searchTerm) || textContent.includes(searchTerm)) {
                    item.style.display = 'block'; // O 'grid-item' para cards
                    item.classList.add('search-highlight');
                    foundItems++;
                } else {
                    item.style.display = 'none';
                    item.classList.remove('search-highlight');
                }
            });

            // Podríamos mostrar un mensaje si no se encuentran resultados
            if (foundItems === 0 && searchTerm) {
                // Idealmente, mostrar esto en un lugar visible, no solo consola.
                console.log(`No se encontraron resultados para "${navSearchInput.value.trim()}".`);
                 // showNotification('info', `No se encontraron resultados para "${navSearchInput.value.trim()}".`);
            }

            // Importante: esta búsqueda es muy básica. No maneja bien el cambio de secciones.
            // Si el usuario está en "Módulos" y busca algo que está en "Noticias",
            // los elementos de noticias se mostrarán/ocultarán, pero el usuario no será llevado a esa sección.
            // Una implementación más completa requeriría cambiar a la sección donde se encontró el resultado.
        }
        // --- Fin Funcionalidad de Búsqueda ---


        // --- Funcionalidad de Cambio de Tema ---
        function setInitialTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            if (savedTheme === 'dark') {
                document.body.classList.add('theme-dark');
                themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Icono de sol para tema oscuro
            } else {
                document.body.classList.remove('theme-dark');
                themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Icono de luna para tema claro
            }
        }

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
        // --- Fin Funcionalidad de Cambio de Tema ---


        function initializeNoticiasFilters() {
            const filterBtns = document.querySelectorAll('#noticias-section .filter-btn');
            const newsCards = document.querySelectorAll('#noticias-section .news-card');
            const newsContainer = document.querySelector('#noticias-section .news-container');

            if (!filterBtns.length || !newsCards.length || !newsContainer) {
                // console.warn("Elementos para filtros de noticias no encontrados. Saltando inicialización de filtros.");
                return;
            }

            function filterNews(filter) {
                newsCards.forEach(card => {
                    // Forzar la re-evaluación del layout antes de cambiar display para animación
                    void card.offsetWidth;

                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'block'; // O 'flex' o 'grid-item' dependiendo del layout de .news-row
                        card.style.animation = 'fadeIn 0.5s ease-out forwards';
                    } else {
                        card.style.animation = 'fadeOut 0.3s ease-out forwards';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300); // Coincidir con la duración de fadeOut
                    }
                });
            }

            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    const filterValue = this.getAttribute('data-filter');
                    filterNews(filterValue);

                    // Opcional: Scroll suave al contenedor de noticias si está fuera de vista
                    // newsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            });

            // Activar el filtro "Todos" por defecto al cargar la sección
            const allFilterBtn = document.querySelector('#noticias-section .filter-btn[data-filter="all"]');
            if (allFilterBtn) {
                allFilterBtn.classList.add('active');
                // filterNews('all'); // Aplicar filtro inicial - Se comenta para que no se ejecute antes de que la sección sea visible
            }

            // Añadir animaciones fadeIn/fadeOut si no existen
            const styleSheet = document.styleSheets[0];
            let fadeInExists = false;
            let fadeOutExists = false;
            if (styleSheet) { // Asegurarse que styleSheet existe
                for (let i = 0; i < styleSheet.cssRules.length; i++) {
                    if (styleSheet.cssRules[i].name === 'fadeIn') fadeInExists = true;
                    if (styleSheet.cssRules[i].name === 'fadeOut') fadeOutExists = true;
                }

                if (!fadeInExists) {
                    try {
                        styleSheet.insertRule(`
                            @keyframes fadeIn {
                                from { opacity: 0; transform: translateY(15px); }
                                to { opacity: 1; transform: translateY(0); }
                            }`, styleSheet.cssRules.length);
                    } catch (e) {
                        console.error("Error insertando regla fadeIn: ", e);
                    }
                }
                if (!fadeOutExists) {
                     try {
                        styleSheet.insertRule(`
                            @keyframes fadeOut {
                                from { opacity: 1; transform: translateY(0); }
                                to { opacity: 0; transform: translateY(15px); }
                            }`, styleSheet.cssRules.length);
                    } catch (e) {
                        console.error("Error insertando regla fadeOut: ", e);
                    }
                }
            }
        }
