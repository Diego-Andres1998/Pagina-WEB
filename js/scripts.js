/*
           ====================================================================
           SECCIÓN: VARIABLES Y CONSTANTES GLOBALES
           ====================================================================
        */
        const users = [
            { name: "Henrry Alocilla", email: "henrryalocilla@cftlr.cl", password: "12345678-9" },
            { name: "Alex Reyes", email: "alexreyes@cftlr.cl", password: "16870931-5" },
            { name: "Renato Sandoval", email: "renatosandoval@cftlr.cl", password: "21638623-k" },
            { name: "Diego Vergara", email: "diegovergara@cftlr.cl", password: "19764816-3" },
            { name: "Fernando Millapan", email: "fernandomillapan@cftlr.cl", password: "21596595-3" }
        ];

        const directoryDataBySede = {
            "Sede Valdivia": [{ name: "Dr. Ana Rojas", position: "Directora Académica", email: "arojas@cftrl.cl", phone: "+56 9 1111 2222", department: "Administración", icon: "&#127891;" }, { name: "Prof. Ricardo Soto", position: "Jefe de Carrera (Programación)", email: "rsoto@cftrl.cl", phone: "+56 9 3333 4444", department: "Informática", icon: "&#128187;" }],
            "Sede La Unión": [{ name: "Ing. Carla Fuentes", position: "Coordinadora de Prácticas", email: "cfuentes@cftrl.cl", phone: "+56 9 5555 6666", department: "Vinculación con el Medio", icon: "&#128188;" }, { name: "Sra. Elena Paredes", position: "Secretaria Académica", email: "eparedes@cftrl.cl", phone: "+56 9 7777 8888", department: "Secretaría General", icon: "&#128100;" }],
            "Sede Paillaco": [{ name: "Mauricio Peters", position: "Coordinador Sede", email: "mpeters@cftdelosrios.cl", phone: "+56 9 2100 0001", department: "Coordinación", icon: "&#128204;" }, { name: "Abraham Acevedo", position: "Registro Curricular", email: "aacevedo@cftdelosrios.cl", phone: "+56 9 2100 0002", department: "Académico", icon: "&#128220;" }, { name: "Felipe Fierro", position: "Experiencia Estudiantil", email: "ffierro@cftdelosrios.cl", phone: "+56 9 2100 0003", department: "DAE", icon: "&#128100;" }, { name: "Scarlett Barra", position: "Psicóloga", email: "sbarra@cftdelosrios.cl", phone: "+56 9 2100 0004", department: "Equipo Psicosocial", icon: "&#129504;" }, { name: "María José Pardo", position: "Psicopedagoga", email: "mpardo@cftdelosrios.cl", phone: "+56 9 2100 0005", department: "Equipo Psicosocial", icon: "&#128218;" }, { name: "Camila Donoso", position: "Admisión", email: "cdonoso@cftdelosrios.cl", phone: "+56 9 2100 0006", department: "Admisión", icon: "&#128273;" }]
        };

        // DOM Elements (global references that are static in index.html)
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
        const allContentSections = document.querySelectorAll('.content-section, .modules-grid');
        const homeSection = document.getElementById('home-section');
        const modulesSection = document.getElementById('modules-section');
        const userProfileDetailSection = document.getElementById('user-profile-detail-section');
        const backButtons = document.querySelectorAll('.back-button');

        const loginModal = document.getElementById('login-modal');
        const loginContainerMain = document.getElementById('loginContainerMain');

        const errorNotification = document.getElementById('errorNotification');
        const successNotification = document.getElementById('successNotification');
        const errorMessageSpan = document.getElementById('errorMessage');
        const successMessageSpan = document.getElementById('successMessage');
        const profileDropdown = document.getElementById('profile-dropdown');
        const dropdownProfilePic = document.getElementById('dropdown-profile-pic');
        const dropdownUsername = document.getElementById('dropdown-username');

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

        const contactDetailsModal = document.getElementById('contact-details-modal');
        const closeContactDetailsModalBtn = document.getElementById('close-contact-details-modal');
        const contactDetailsTitle = document.getElementById('contact-details-title');
        const contactDetailsOutput = document.getElementById('contact-details-output');

        const DEFAULT_AVATAR_PATH = 'https://placehold.co/120x120/D3D3D3/000?text=Avatar';
        let isRegistering = false;
        const htmlCache = {};

        /*
           ====================================================================
           SECCIÓN: CARGA DINÁMICA DE HTML
           ====================================================================
        */
        async function loadHtmlContent(filePath, elementId) {
            const targetElement = document.getElementById(elementId);
            if (!targetElement) {
                console.error(`[loadHtmlContent] Elemento con ID '${elementId}' no encontrado.`);
                return false;
            }
            if (htmlCache[filePath]) {
                targetElement.innerHTML = htmlCache[filePath];
                return true;
            }
            targetElement.innerHTML = `<p style="padding:20px; text-align:center;">Cargando...</p>`;
            try {
                const response = await fetch(filePath);
                if (!response.ok) {
                    throw new Error(`Error HTTP ${response.status} al cargar ${filePath}`);
                }
                const html = await response.text();
                htmlCache[filePath] = html;
                targetElement.innerHTML = html;
                return true;
            } catch (error) {
                console.error(`[loadHtmlContent] Error al cargar contenido HTML para ${elementId} desde ${filePath}:`, error);
                targetElement.innerHTML = `<p style="color:var(--color-error); padding:20px; text-align:center;">Error al cargar contenido. Por favor, actualice la página e intente de nuevo.</p>`;
                return false;
            }
        }

        /*
           ====================================================================
           SECCIÓN: FUNCIONES DE UTILIDAD (HELPERS)
           ====================================================================
        */
        function getCssVariable(variableName) {
            return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
        }

        function hideAllSections() {
            allContentSections.forEach(section => section.classList.remove('active-section'));
        }

        async function showSection(sectionId) {
            const loggedInUser = localStorage.getItem('currentUserEmail');
            const protectedSections = ['user-profile-detail', 'notes-attendance', 'academic-calendar', 'notifications', 'directory', 'scholarships', 'report-issue'];

            if (sectionId === 'main-menu') {
                sectionId = loggedInUser ? 'modules' : 'home';
            }

            const homeTarget = document.getElementById('home-section');

            if (protectedSections.includes(sectionId) && !loggedInUser) {
                hideAllSections();
                if (homeTarget) {
                    if (!homeTarget.innerHTML.trim() || homeTarget.innerHTML.includes("Cargando...")) {
                        const homeLoaded = await loadHtmlContent('sections/home-section-content.html', 'home-section');
                        if (homeLoaded) {
                             const homeLoginButton = homeTarget.querySelector('.btn-primario[data-action="open-login-modal"]');
                             if (homeLoginButton && !homeLoginButton.hasAttribute('data-listener-set')) {
                                 homeLoginButton.addEventListener('click', openLoginModal);
                                 homeLoginButton.setAttribute('data-listener-set', 'true');
                             }
                        }
                    }
                    homeTarget.classList.add('active-section');
                }
                openLoginModal();
                showNotification('error', 'Debes iniciar sesión para acceder a esta función.');
                return;
            }

            hideAllSections();
            const targetSectionElement = document.getElementById(`${sectionId}-section`);

            if (targetSectionElement) {
                let contentJustLoaded = false; // Flag para saber si el contenido se cargó en ESTA llamada
                // Solo cargar si el contenido está vacío, o es el placeholder de "Cargando..." o de "Error..."
                if (!targetSectionElement.innerHTML.trim() ||
                    targetSectionElement.innerHTML.includes("Cargando...") ||
                    targetSectionElement.innerHTML.includes("Error al cargar contenido")) {

                    let filePathToLoad = null;
                    if (sectionId === 'home') filePathToLoad = 'sections/home-section-content.html';
                    else if (sectionId === 'modules') filePathToLoad = 'sections/modules-section-content.html';
                    // Aquí se añadirían más 'else if' para las otras secciones cuando se separen.
                    // Ejemplo: else if (sectionId === 'user-profile-detail') filePathToLoad = 'sections/user-profile-detail-content.html';

                    if (filePathToLoad) {
                        contentJustLoaded = await loadHtmlContent(filePathToLoad, `${sectionId}-section`);
                    } else {
                        // Si no es una sección con HTML externo conocido, asumimos que su contenido ya está o no necesita carga.
                        contentJustLoaded = true; // Para que proceda a inicializar listeners si es necesario.
                    }
                } else {
                    contentJustLoaded = true; // El contenido ya estaba presente.
                }

                targetSectionElement.classList.add('active-section');

                if(contentJustLoaded){
                    // (Re)Inicializar listeners específicos de la sección DESPUÉS de cargar/confirmar y mostrar
                    if (sectionId === 'home') {
                        const homeLoginButton = homeSection.querySelector('.btn-primario[data-action="open-login-modal"]');
                        if (homeLoginButton && !homeLoginButton.hasAttribute('data-listener-set')) {
                            homeLoginButton.addEventListener('click', openLoginModal);
                            homeLoginButton.setAttribute('data-listener-set', 'true');
                        }
                    } else if (sectionId === 'modules') {
                        document.querySelectorAll('#modules-section .module-card').forEach(card => {
                            if (!card.hasAttribute('data-listener-set')) {
                                card.addEventListener('click', () => {
                                    const targetSect = card.dataset.section;
                                    if (targetSect) showSection(targetSect);
                                });
                                card.setAttribute('data-listener-set', 'true');
                            }
                        });
                    } else if (sectionId === 'directory') {
                        renderDirectory();
                    } else if (sectionId === 'notes-attendance') {
                        initializeNotesSection();
                    } else if (sectionId === 'noticias') {
                        initializeNoticiasFilters();
                    } else if (sectionId === 'user-profile-detail' && loggedInUser) {
                         loadProfileData(loggedInUser);
                         setProfileFormState(false);
                         // Los listeners para el form de perfil están en setupEventListeners globales por ahora
                    } else if (sectionId === 'admision') {
                        initializeAdmisionForm();
                    } else if (sectionId === 'scholarships'){
                        // Los onclick="toggleBeca(this)" están en el HTML, si scholarships.html se carga dinámicamente,
                        // necesitaríamos adjuntar listeners con JS después de la carga.
                    }
                } else {
                    // Si la carga falló, loadHtmlContent ya mostró un mensaje de error dentro de targetSectionElement
                    // y targetSectionElement ya está visible.
                }
            }

            backButtons.forEach(button => {
                const parentSection = button.closest('.content-section');
                if (parentSection && parentSection.id === `${sectionId}-section` && sectionId !== 'home' && sectionId !== 'modules') {
                    button.style.display = 'flex';
                } else {
                    button.style.display = 'none';
                }
            });
        }

        function showNotification(type, message) {
            const notificationElement = type === 'success' ? successNotification : errorNotification;
            const messageSpan = type === 'success' ? successMessageSpan : errorMessageSpan;
            const otherNotification = type === 'success' ? errorNotification : successNotification;
            otherNotification.classList.remove('show', 'error', 'success');
            messageSpan.textContent = message;
            notificationElement.classList.add('show', type);
            setTimeout(() => notificationElement.classList.remove('show', type), 3000);
        }

        function showFormMessage(message, type, formMsgElement) {
            if (!formMsgElement) {
                // console.warn("Elemento para mensajes de formulario no encontrado.");
                return;
            }
            formMsgElement.textContent = message;
            formMsgElement.className = `message ${type}`;
            formMsgElement.style.display = 'block';
            if (type === 'success' || type === 'info') {
                setTimeout(() => { formMsgElement.style.display = 'none'; }, 5000);
            }
        }

        /*
           ====================================================================
           SECCIÓN: LÓGICA DE AUTENTICACIÓN Y MODAL
           ====================================================================
        */
        async function openLoginModal() {
            const modalContentContainerId = 'loginContainerMain';
            const loginModalFilePath = 'sections/login-modal-content.html';

            loginModal.classList.add('show');

            const loadedSuccessfully = await loadHtmlContent(loginModalFilePath, modalContentContainerId);

            if (loadedSuccessfully) {
                setupModalEventListeners();
                const currentEmailInput = loginContainerMain.querySelector('#email');
                const currentPasswordInput = loginContainerMain.querySelector('#password');
                if (currentEmailInput) currentEmailInput.value = '';
                if (currentPasswordInput) currentPasswordInput.value = '';
                setFormToLoginMode();
            } else {
                // console.warn("[openLoginModal] El contenido del modal no se cargó.");
            }
        }

        function setupModalEventListeners() {
            if (!loginContainerMain || !loginContainerMain.firstChild || loginContainerMain.innerHTML.includes("Cargando...") || loginContainerMain.innerHTML.includes("Error al cargar")) {
                return;
            }

            const newCloseModalButton = loginContainerMain.querySelector('.close-button');
            const newAuthForm = loginContainerMain.querySelector('#auth-form');
            const newLoginBtn = loginContainerMain.querySelector('#loginBtn');
            const newModalToggleFormLink = loginContainerMain.querySelector('#modal-toggle-form');
            const newEmailInput = loginContainerMain.querySelector('#email');
            const newPasswordInput = loginContainerMain.querySelector('#password');

            if (newCloseModalButton && !newCloseModalButton.hasAttribute('data-listener-set')) {
                newCloseModalButton.addEventListener('click', closeLoginModal);
                newCloseModalButton.setAttribute('data-listener-set', 'true');
            }

            if (newAuthForm && !newAuthForm.hasAttribute('data-listener-set')) {
                newAuthForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    if (newLoginBtn) { newLoginBtn.classList.add('loading'); newLoginBtn.disabled = true; }
                    loginContainerMain.classList.remove('shake');
                    const email = newEmailInput.value.trim();
                    const password = newPasswordInput.value.trim();

                    if (email.length < 5 || password.length < 4) {
                        showNotification('error', 'El email debe tener al menos 5 caracteres y la contraseña al menos 4.');
                        loginContainerMain.classList.add('shake');
                        if (newLoginBtn) { newLoginBtn.classList.remove('loading'); newLoginBtn.disabled = false; }
                        return;
                    }
                     if (isRegistering) {
                        const userExists = users.some(user => user.email === email);
                        if (userExists || localStorage.getItem(email)) {
                            showNotification('error', 'Este email ya está registrado o en uso.');
                            loginContainerMain.classList.add('shake');
                             if (newLoginBtn) { newLoginBtn.classList.remove('loading'); newLoginBtn.disabled = false; }
                        } else {
                            localStorage.setItem(email, password);
                            users.push({ name: 'Nuevo Estudiante', email: email, password: password });
                            saveProfileData(email, { name: 'Nuevo Estudiante', email: email, phone: '', rut: '', profilePic: DEFAULT_AVATAR_PATH });
                            localStorage.setItem('currentUserEmail', email);
                            showNotification('success', '¡Registro exitoso! Has iniciado sesión.');
                            loginContainerMain.classList.add('success-pulse');
                            setTimeout(() => {
                                closeLoginModal(); updateAuthUI(); loginContainerMain.classList.remove('success-pulse');
                                if (newLoginBtn) { newLoginBtn.classList.remove('loading'); newLoginBtn.disabled = false; }
                            }, 1000);
                        }
                    } else {
                        const foundUser = users.find(user => user.email === email && user.password === password);
                        const storedPassword = localStorage.getItem(email);
                        if (foundUser || (storedPassword && storedPassword === password)) {
                            localStorage.setItem('currentUserEmail', email);
                            showNotification('success', '¡Inicio de sesión exitoso! Entrando a la Intranet de CFT Los Ríos.');
                            loginContainerMain.classList.add('success-pulse');
                            setTimeout(() => {
                                closeLoginModal(); updateAuthUI(); loginContainerMain.classList.remove('success-pulse');
                                if (newLoginBtn) { newLoginBtn.classList.remove('loading'); newLoginBtn.disabled = false; }
                            }, 1000);
                        } else {
                            showNotification('error', 'Credenciales no válidas, Intente nuevamente.');
                            loginContainerMain.classList.add('shake');
                            if (newLoginBtn) { newLoginBtn.classList.remove('loading'); newLoginBtn.disabled = false; }
                        }
                    }
                });
                newAuthForm.setAttribute('data-listener-set', 'true');
            }

            if (newModalToggleFormLink && !newModalToggleFormLink.hasAttribute('data-listener-set')) {
                newModalToggleFormLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    loginContainerMain.classList.remove('shake');
                    isRegistering ? setFormToLoginMode() : setFormToRegisterMode();
                });
                newModalToggleFormLink.setAttribute('data-listener-set', 'true');
            }
        }

        function closeLoginModal() {
            loginModal.classList.remove('show');
            if (loginContainerMain.classList.contains('shake')) {
                loginContainerMain.classList.remove('shake');
            }
        }

        function setFormToLoginMode() {
            isRegistering = false;
            if (!loginContainerMain || !loginContainerMain.firstChild) return;
            const titleEl = loginContainerMain.querySelector('#modal-title');
            const subtitleEl = loginContainerMain.querySelector('.login-subtitle');
            const btnTextEl = loginContainerMain.querySelector('#loginBtn .btn-text');
            const toggleLinkEl = loginContainerMain.querySelector('#modal-toggle-form');

            if (titleEl) titleEl.textContent = 'Intranet CFT Los Ríos';
            if (subtitleEl) subtitleEl.textContent = 'Ingresa tus credenciales para acceder';
            if (btnTextEl) btnTextEl.textContent = 'Iniciar Sesión';
            if (toggleLinkEl) toggleLinkEl.textContent = '¿No tienes cuenta? Regístrate aquí';

            if(errorMessageSpan) errorMessageSpan.textContent = '';
            if(successMessageSpan) successMessageSpan.textContent = '';
            if(errorNotification) errorNotification.classList.remove('show');
            if(successNotification) successNotification.classList.remove('show');
        }

        function setFormToRegisterMode() {
            isRegistering = true;
            if (!loginContainerMain || !loginContainerMain.firstChild) return;
            const titleEl = loginContainerMain.querySelector('#modal-title');
            const subtitleEl = loginContainerMain.querySelector('.login-subtitle');
            const btnTextEl = loginContainerMain.querySelector('#loginBtn .btn-text');
            const toggleLinkEl = loginContainerMain.querySelector('#modal-toggle-form');

            if (titleEl) titleEl.textContent = 'Registrarse en CFT Los Ríos';
            if (subtitleEl) subtitleEl.textContent = 'Crea tu cuenta para acceder';
            if (btnTextEl) btnTextEl.textContent = 'Registrarse';
            if (toggleLinkEl) toggleLinkEl.textContent = 'Ya tengo cuenta, Iniciar Sesión';

            if(errorMessageSpan) errorMessageSpan.textContent = '';
            if(successMessageSpan) successMessageSpan.textContent = '';
            if(errorNotification) errorNotification.classList.remove('show');
            if(successNotification) successNotification.classList.remove('show');
        }

        function updateAuthUI() {
            const loggedInUser = localStorage.getItem('currentUserEmail');
            if (loggedInUser) {
                document.body.classList.add('logged-in');
                if(profileNavLink) profileNavLink.style.display = 'list-item';
                if(carrerasNavLink) carrerasNavLink.style.display = 'list-item';
                if(admisionNavLink) admisionNavLink.style.display = 'list-item';
                if(vidaEstudiantilNavLink) vidaEstudiantilNavLink.style.display = 'list-item';
                if(noticiasNavLink) noticiasNavLink.style.display = 'list-item';
                if(navSearchLi) navSearchLi.style.display = 'list-item';
                const profile = getProfileData(loggedInUser);
                if(navProfilePic) navProfilePic.src = profile.profilePic || DEFAULT_AVATAR_PATH;
                if(dropdownProfilePic) dropdownProfilePic.src = profile.profilePic || DEFAULT_AVATAR_PATH;
                if(dropdownUsername) dropdownUsername.textContent = profile.name || loggedInUser;
                showSection('modules');
            } else {
                document.body.classList.remove('logged-in');
                if(profileNavLink) profileNavLink.style.display = 'none';
                if(carrerasNavLink) carrerasNavLink.style.display = 'none';
                if(admisionNavLink) admisionNavLink.style.display = 'none';
                if(vidaEstudiantilNavLink) vidaEstudiantilNavLink.style.display = 'none';
                if(noticiasNavLink) noticiasNavLink.style.display = 'none';
                if(navSearchLi) navSearchLi.style.display = 'none';
                if(profileDropdown) profileDropdown.classList.remove('show');
                showSection('home');
            }
        }

        /*
           ====================================================================
           SECCIÓN: LÓGICA DE GESTIÓN DE PERFIL
           ====================================================================
        */
        function getProfileData(email) {
            const profileKey = `profile_${email}`;
            const storedProfile = localStorage.getItem(profileKey);
            if (storedProfile) return JSON.parse(storedProfile);
            const userInDb = users.find(user => user.email === email);
            return { name: userInDb ? userInDb.name : 'Estudiante CFT', email: email, phone: '+56 9 1234 5678', rut: userInDb ? userInDb.password : '12.345.678-K', profilePic: DEFAULT_AVATAR_PATH };
        }
        function saveProfileData(email, profile) {
            localStorage.setItem(`profile_${email}`, JSON.stringify(profile));
            if (localStorage.getItem('currentUserEmail') === email) {
                if(navProfilePic) navProfilePic.src = profile.profilePic || DEFAULT_AVATAR_PATH;
                if(dropdownProfilePic) dropdownProfilePic.src = profile.profilePic || DEFAULT_AVATAR_PATH;
                if(dropdownUsername) dropdownUsername.textContent = profile.name || email;
            }
        }
        function loadProfileData(email) {
            const profile = getProfileData(email);
            if(profileNameInput) profileNameInput.value = profile.name;
            if(profileEmailInput) profileEmailInput.value = profile.email;
            if(profilePhoneInput) profilePhoneInput.value = profile.phone;
            if(profileRutInput) profileRutInput.value = profile.rut;
            if(profilePic) profilePic.src = profile.profilePic || DEFAULT_AVATAR_PATH;
            if(profilePic && deleteProfilePicBtn) {
                const isDefaultPic = profilePic.src.includes(DEFAULT_AVATAR_PATH.substring(DEFAULT_AVATAR_PATH.lastIndexOf('/') + 1));
                deleteProfilePicBtn.style.display = isDefaultPic ? 'none' : 'inline-block';
            }
            if(profileMessage) profileMessage.textContent = '';
        }
        function setProfileFormState(isEditing) {
            if(profileNameInput) profileNameInput.disabled = !isEditing;
            if(profilePhoneInput) profilePhoneInput.disabled = !isEditing;
            if(profileRutInput) profileRutInput.disabled = !isEditing;
            if(profilePic) profilePic.style.cursor = isEditing ? 'pointer' : 'default';
            if(editProfileBtn) editProfileBtn.style.display = isEditing ? 'none' : 'inline-block';
            if(saveProfileBtn) saveProfileBtn.style.display = isEditing ? 'inline-block' : 'none';
            if(cancelEditBtn) cancelEditBtn.style.display = isEditing ? 'inline-block' : 'none';
            if(profilePic && deleteProfilePicBtn){
                const isDefaultPic = profilePic.src.includes(DEFAULT_AVATAR_PATH.substring(DEFAULT_AVATAR_PATH.lastIndexOf('/') + 1));
                deleteProfilePicBtn.style.display = (isEditing && !isDefaultPic) ? 'inline-block' : 'none';
            }
         }
        function handleProfileImageUpload(e) {
            const file = e.target.files[0];
            if (file && profilePic) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    profilePic.src = event.target.result;
                    const loggedInUser = localStorage.getItem('currentUserEmail');
                    if (loggedInUser) {
                        const currentProfile = getProfileData(loggedInUser);
                        currentProfile.profilePic = event.target.result;
                        saveProfileData(loggedInUser, currentProfile);
                        if(profileMessage) {
                            profileMessage.textContent = 'Foto de perfil cargada. Haz clic en "Guardar Cambios".';
                            profileMessage.style.color = getCssVariable('--color-advertencia');
                        }
                        if(deleteProfilePicBtn) deleteProfilePicBtn.style.display = 'inline-block';
                    }
                };
                reader.readAsDataURL(file);
            }
        }
        function handleDeleteProfilePic() {
            const loggedInUser = localStorage.getItem('currentUserEmail');
            if (loggedInUser && profilePic) {
                const currentProfile = getProfileData(loggedInUser);
                currentProfile.profilePic = DEFAULT_AVATAR_PATH;
                profilePic.src = DEFAULT_AVATAR_PATH;
                saveProfileData(loggedInUser, currentProfile);
                if(profileMessage){
                    profileMessage.textContent = 'Foto de perfil eliminada. Haz clic en "Guardar Cambios".';
                    profileMessage.style.color = getCssVariable('--color-advertencia');
                }
                if(deleteProfilePicBtn) deleteProfilePicBtn.style.display = 'none';
            }
        }

        /*
           ====================================================================
           SECCIÓN: LÓGICA DEL DIRECTORIO
           ====================================================================
        */
        function renderDirectory() {
            const localDirectoryList = document.getElementById('directory-list');
            if (!localDirectoryList) return;
            localDirectoryList.innerHTML = '';
            for (const sede in directoryDataBySede) {
                if (directoryDataBySede.hasOwnProperty(sede)) {
                    const sedeHeading = document.createElement('h2');
                    sedeHeading.classList.add('sede-title'); sedeHeading.textContent = sede;
                    localDirectoryList.appendChild(sedeHeading);
                    const sedeContactsGrid = document.createElement('div');
                    sedeContactsGrid.classList.add('directory-grid');
                    directoryDataBySede[sede].forEach((contact, index) => {
                        const card = document.createElement('div');
                        card.classList.add('directory-card');
                        card.dataset.contactId = `${sede.replace(/\s/g, '')}-${index}`;
                        card.innerHTML = `<span class="icon">${contact.icon}</span><div><h3>${contact.name}</h3><p>${contact.position}</p></div>`;
                        sedeContactsGrid.appendChild(card);
                    });
                    localDirectoryList.appendChild(sedeContactsGrid);
                }
            }
         }
        function showContactDetailsModal(contact) {
            if(contactDetailsTitle) contactDetailsTitle.textContent = `Detalles de ${contact.name}`;
            if(contactDetailsOutput) contactDetailsOutput.innerHTML = `<p><strong>Cargo:</strong> ${contact.position}</p><p><strong>Departamento:</strong> ${contact.department}</p><p><strong>Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p><p><strong>Teléfono:</strong> <a href="tel:${contact.phone}">${contact.phone}</a></p>`;
            if(contactDetailsModal) contactDetailsModal.classList.add('show');
        }
        function closeContactDetailsModal() {
            if(contactDetailsModal) contactDetailsModal.classList.remove('show');
         }
        function initializeNotesSection() {
            document.querySelectorAll('#notes-attendance-section .nota-value').forEach(nota => {
                const value = parseFloat(nota.textContent);
                if (value < 4.0) nota.style.backgroundColor = getCssVariable('--color-error');
                else if (value < 5.0) nota.style.backgroundColor = getCssVariable('--accent-login-color');
                else nota.style.backgroundColor = getCssVariable('--color-exito');
            });
            document.querySelectorAll('#notes-attendance-section .materia-card').forEach((card, index) => {
                card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
                setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 100 * index);
            });
        }
        function toggleBeca(element) {
            const content = element.nextElementSibling;
            const icon = element.querySelector('.toggle-icon');
            if (content.style.display === "block") {
                content.style.display = "none"; icon.textContent = "+";
            } else {
                content.style.display = "block"; icon.textContent = "-";
            }
        }

        /*
           ====================================================================
           SECCIÓN: CONFIGURACIÓN DE EVENT LISTENERS
           ====================================================================
        */
        function setupEventListeners() {
            if (menuToggle) menuToggle.addEventListener('click', () => { navUl.classList.toggle('active'); profileDropdown.classList.remove('show'); });
            if (profileNavLink) profileNavLink.addEventListener('click', (e) => { e.stopPropagation(); e.preventDefault(); if (navUl.classList.contains('active')) { navUl.classList.remove('active'); showSection('user-profile-detail'); } else { profileDropdown.classList.toggle('show'); } });

            const headerContainer = document.querySelector('header .container');
            if(headerContainer) {
                headerContainer.addEventListener('click', (e) => { let target = e.target; if ((target.tagName === 'IMG' && target.closest('.logo')) || target.classList.contains('logo')) target = target.closest('.logo'); if (target.tagName === 'A' && target.dataset.section) { e.preventDefault(); navUl.classList.remove('active'); showSection(target.dataset.section); } });
            }

            if (profileDropdown) profileDropdown.addEventListener('click', (e) => { e.stopPropagation(); const target = e.target; if (target.tagName === 'A') { e.preventDefault(); profileDropdown.classList.remove('show'); navUl.classList.remove('active'); if (target.dataset.section === 'user-profile-detail') showSection('user-profile-detail'); else if (target.dataset.action === 'logout') { localStorage.removeItem('currentUserEmail'); updateAuthUI(); } } });

            window.addEventListener('click', (e) => { if (e.target === loginModal) closeLoginModal(); if (e.target === contactDetailsModal) closeContactDetailsModal(); });

            if (editProfileBtn) editProfileBtn.addEventListener('click', () => { setProfileFormState(true); profileMessage.textContent = ''; });
            if (cancelEditBtn) cancelEditBtn.addEventListener('click', () => { const loggedInUser = localStorage.getItem('currentUserEmail'); if (loggedInUser) loadProfileData(loggedInUser); setProfileFormState(false); profileMessage.textContent = 'Edición cancelada.'; profileMessage.style.color = getCssVariable('--color-advertencia'); });
            if (profileForm) profileForm.addEventListener('submit', (e) => { e.preventDefault(); const loggedInUser = localStorage.getItem('currentUserEmail'); if (!loggedInUser) { profileMessage.textContent = 'Error: Debes iniciar sesión para guardar tu perfil.'; profileMessage.style.color = getCssVariable('--color-error'); return; } if (!profileNameInput.value.trim() || !profileEmailInput.value.trim() || !profileEmailInput.value.includes('@')) { profileMessage.textContent = 'Por favor, completa los campos requeridos con datos válidos.'; profileMessage.style.color = getCssVariable('--color-error'); return; } const updatedProfile = { name: profileNameInput.value.trim(), email: profileEmailInput.value.trim(), phone: profilePhoneInput.value.trim(), rut: profileRutInput.value.trim(), profilePic: profilePic.src }; saveProfileData(loggedInUser, updatedProfile); profileMessage.textContent = '¡Perfil actualizado exitosamente!'; profileMessage.style.color = getCssVariable('--color-exito'); setProfileFormState(false); });
            if (profilePic) profilePic.addEventListener('click', () => { if (profileNameInput && !profileNameInput.disabled) profileImageUpload.click(); });
            if (profileImageUpload) profileImageUpload.addEventListener('change', handleProfileImageUpload);
            if (deleteProfilePicBtn) deleteProfilePicBtn.addEventListener('click', handleDeleteProfilePic);
            backButtons.forEach(button => button.addEventListener('click', () => { const loggedInUser = localStorage.getItem('currentUserEmail'); showSection(loggedInUser ? 'modules' : 'home'); }));
            document.addEventListener('click', (e) => { if (profileNavLink && !profileNavLink.contains(e.target) && profileDropdown && profileDropdown.classList.contains('show') && navUl && !navUl.classList.contains('active')) { profileDropdown.classList.remove('show'); } });

            const currentNotificationForm = document.getElementById('notificationForm');
            if (currentNotificationForm) {
                const currentEmailInput = document.getElementById('email_notification');
                const currentPhoneInput = document.getElementById('phone_notification');
                const currentMessageInput = document.getElementById('message_notification');
                const currentResponseMessageDiv = document.getElementById('responseMessageNotification');
                currentNotificationForm.addEventListener('submit', async (event) => { event.preventDefault(); const email = currentEmailInput.value; const phone = currentPhoneInput.value; const message = currentMessageInput.value; if (!email || !phone || !message) { showFormMessage('Por favor, completa todos los campos.', 'error', currentResponseMessageDiv); return; } const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; if (!emailRegex.test(email)) { showFormMessage('Por favor, introduce un correo electrónico válido.', 'error', currentResponseMessageDiv); return; } showFormMessage('Enviando notificación...', 'info', currentResponseMessageDiv); await new Promise(resolve => setTimeout(resolve, 1500)); showFormMessage(`Notificación ficticia enviada a: Correo (${email}), Teléfono (${phone}). Mensaje: "${message}"`, 'success', currentResponseMessageDiv); currentNotificationForm.reset(); });
            }

            if (closeContactDetailsModalBtn) closeContactDetailsModalBtn.addEventListener('click', closeContactDetailsModal);

            const localDirectoryList = document.getElementById('directory-list');
            if (localDirectoryList) {
                localDirectoryList.addEventListener('click', (e) => { const card = e.target.closest('.directory-card'); if (card) { const contactId = card.dataset.contactId; let foundContact = null; for (const sede in directoryDataBySede) { const contactIndex = parseInt(contactId.split('-').pop()); if (contactId.startsWith(sede.replace(/\s/g, '')) && directoryDataBySede[sede][contactIndex]) { foundContact = directoryDataBySede[sede][contactIndex]; break; } } if (foundContact) showContactDetailsModal(foundContact); } });
            }

            const localReportIssueForm = document.getElementById('reportIssueForm');
            if (localReportIssueForm) {
                const localFormMessage = localReportIssueForm.querySelector('#formMessage');
                const localSubmitReportBtn = localReportIssueForm.querySelector('#submitReportBtn');
                localReportIssueForm.addEventListener('submit', async (e) => { e.preventDefault(); if(localSubmitReportBtn) {localSubmitReportBtn.disabled = true; localSubmitReportBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';} const nombre = localReportIssueForm.querySelector('#nombreEstudiante').value; const carrera = localReportIssueForm.querySelector('#carreraEstudiante').value; const profesor = localReportIssueForm.querySelector('#profesorCarrera').value; const motivo = localReportIssueForm.querySelector('#motivoReporte').value; if (!nombre || !carrera || carrera === "" || !motivo) { showFormMessage('Por favor, completa todos los campos requeridos (Nombre, Carrera, Motivo).', 'error', localFormMessage); if(localSubmitReportBtn){localSubmitReportBtn.disabled = false; localSubmitReportBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Reporte';} return; } showFormMessage('Enviando reporte...', 'info', localFormMessage); await new Promise(resolve => setTimeout(resolve, 1500)); showFormMessage('Reporte enviado con éxito. ¡Gracias por tu retroalimentación!', 'success', localFormMessage); localReportIssueForm.reset(); if(localSubmitReportBtn){localSubmitReportBtn.disabled = false; localSubmitReportBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Reporte';} });
            }
        }

        /*
           ====================================================================
           SECCIÓN: INICIALIZACIÓN
           ====================================================================
        */
        document.addEventListener('DOMContentLoaded', () => {
            setInitialTheme();
            updateAuthUI();
            initializeAdmisionForm();
            setupEventListeners();

            if(themeToggleButton) themeToggleButton.addEventListener('click', toggleTheme);
            if(navSearchButton) navSearchButton.addEventListener('click', handleSiteSearch);
            if(navSearchInput) {
                navSearchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSiteSearch(); });
                navSearchInput.addEventListener('input', () => { if (navSearchInput.value.trim() === '') { document.querySelectorAll('.search-highlight').forEach(el => el.classList.remove('search-highlight')); } });
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
            const admisionFormElement = document.getElementById('admisionForm');
            if (sedeSelectAdmision && carreraSelectAdmision) {
                sedeSelectAdmision.addEventListener('change', (event) => { const sedeSeleccionada = event.target.value; const carreras = carrerasPorSedeAdmision[sedeSeleccionada] || []; carreraSelectAdmision.innerHTML = '<option value="" disabled selected>-- Elige una carrera --</option>'; carreraSelectAdmision.disabled = false; carreras.forEach(carrera => { let option = document.createElement('option'); option.value = carrera.value; option.textContent = carrera.text; carreraSelectAdmision.appendChild(option); }); });
            }
            if (telefonoInputAdmision) {
                const prefijo = "+56 ";
                telefonoInputAdmision.addEventListener('input', () => { let valor = telefonoInputAdmision.value; if (!valor.startsWith(prefijo)) valor = prefijo; let numeros = valor.substring(prefijo.length).replace(/\D/g, ''); if (numeros.length > 9) numeros = numeros.substring(0, 9); telefonoInputAdmision.value = prefijo + numeros; });
                telefonoInputAdmision.addEventListener('focus', () => { if (telefonoInputAdmision.value === "") telefonoInputAdmision.value = prefijo; });
            }
            if (admisionFormElement) {
                admisionFormElement.addEventListener('submit', (event) => { event.preventDefault(); showNotification('success', '¡Datos enviados! Nos contactaremos pronto.'); admisionFormElement.reset(); if(carreraSelectAdmision) { carreraSelectAdmision.innerHTML = '<option value="" disabled selected>-- Primero elige una sede --</option>'; carreraSelectAdmision.disabled = true; } if(telefonoInputAdmision) telefonoInputAdmision.value = ''; });
            }
        }

        function initializeNoticiasFilters() {
            const noticiasSectionNode = document.getElementById('noticias-section');
            if (!noticiasSectionNode || !noticiasSectionNode.classList.contains('active-section')) return;
            const filterBtns = noticiasSectionNode.querySelectorAll('.filter-btn');
            const newsCards = noticiasSectionNode.querySelectorAll('.news-card');
            if (!filterBtns.length || !newsCards.length) return;
            function filterNews(filter) { newsCards.forEach(card => { void card.offsetWidth; const isVisible = (filter === 'all' || card.classList.contains(filter)); if (isVisible) { card.style.display = ''; card.style.animation = 'fadeIn 0.5s ease-out forwards'; } else { card.style.animation = 'fadeOut 0.3s ease-out forwards'; setTimeout(() => { if (card.style.animationName === 'fadeOut') card.style.display = 'none'; }, 300); } }); }
            filterBtns.forEach(btn => { if (!btn.hasAttribute('data-listener-set')) { btn.addEventListener('click', function() { filterBtns.forEach(b => b.classList.remove('active')); this.classList.add('active'); filterNews(this.dataset.filter); }); btn.setAttribute('data-listener-set', 'true'); } });
            const allFilterBtn = noticiasSectionNode.querySelector('.filter-btn[data-filter="all"]');
            if (allFilterBtn && !allFilterBtn.classList.contains('active')) allFilterBtn.click();
        }

        function handleSiteSearch() {
            const searchTerm = navSearchInput.value.trim().toLowerCase();
            const allSearchableItems = document.querySelectorAll('#noticias-section .news-card, #modules-section .module-card, #carreras-info-section li, #vida-estudiantil-section .card, #vida-estudiantil-section .faq-item');
            if (!searchTerm) { allSearchableItems.forEach(el => { el.style.display = ''; el.classList.remove('search-highlight'); }); const loggedInUser = localStorage.getItem('currentUserEmail'); showSection(loggedInUser ? 'modules' : 'home'); return; }
            let foundItems = 0; let firstFoundSection = null;
            allSearchableItems.forEach(el => { el.style.display = 'none'; el.classList.remove('search-highlight'); });
            document.querySelectorAll('#noticias-section .news-card').forEach(card => { const title = card.querySelector('.card-title')?.textContent.toLowerCase() || ''; const text = card.querySelector('.card-text')?.textContent.toLowerCase() || ''; if (title.includes(searchTerm) || text.includes(searchTerm)) { card.style.display = ''; card.classList.add('search-highlight'); if (!firstFoundSection) firstFoundSection = 'noticias'; foundItems++; } });
            document.querySelectorAll('#modules-section .module-card').forEach(card => { const title = card.querySelector('h3')?.textContent.toLowerCase() || ''; const text = card.querySelector('p')?.textContent.toLowerCase() || ''; if (title.includes(searchTerm) || text.includes(searchTerm)) { card.style.display = ''; card.classList.add('search-highlight'); if (!firstFoundSection) firstFoundSection = 'modules'; foundItems++; } });
            document.querySelectorAll('#carreras-info-section li').forEach(item => { const text = item.textContent.toLowerCase(); if (text.includes(searchTerm)) { item.style.display = 'list-item'; item.classList.add('search-highlight'); if (!firstFoundSection) firstFoundSection = 'carreras-info'; foundItems++; } });
            document.querySelectorAll('#vida-estudiantil-section .card, #vida-estudiantil-section .faq-item').forEach(item => { const title = item.querySelector('h3')?.textContent.toLowerCase() || ''; const textContent = item.querySelector('p')?.textContent.toLowerCase() || ''; if (title.includes(searchTerm) || textContent.includes(searchTerm)) { item.style.display = ''; item.classList.add('search-highlight'); if (!firstFoundSection) firstFoundSection = 'vida-estudiantil'; foundItems++; } });
            if (foundItems > 0 && firstFoundSection) { showSection(firstFoundSection); } else if (searchTerm) { showNotification('info', `No se encontraron resultados para "${navSearchInput.value.trim()}".`); const loggedInUser = localStorage.getItem('currentUserEmail'); showSection(loggedInUser ? 'modules' : 'home'); }
        }

        function setInitialTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            if (themeToggleButton) { // Verificar que el botón exista
                if (savedTheme === 'dark') { document.body.classList.add('theme-dark'); themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>'; }
                else { document.body.classList.remove('theme-dark'); themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>'; }
            } else {
                // Fallback si el botón no está, aplicar tema al body de todas formas
                if (savedTheme === 'dark') document.body.classList.add('theme-dark');
                else document.body.classList.remove('theme-dark');
            }
        }
        function toggleTheme() {
            if (themeToggleButton) { // Verificar que el botón exista
                if (document.body.classList.contains('theme-dark')) { document.body.classList.remove('theme-dark'); localStorage.setItem('theme', 'light'); themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>'; }
                else { document.body.classList.add('theme-dark'); localStorage.setItem('theme', 'dark'); themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>'; }
            }
        }
