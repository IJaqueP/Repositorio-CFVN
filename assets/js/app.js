// AQUÍ SE ESTÁ CAMBIANDO: Datos de la aplicación en memoria
const appData = {
    users: [
        {
            username: "admin",
            password: "admin123",
            role: "total",
            name: "Administrador"
        },
        {
            username: "editor",
            password: "editor123", 
            role: "partial",
            name: "Editor"
        },
        {
            username: "viewer",
            password: "viewer123",
            role: "none", 
            name: "Visualizador"
        }
    ],
    galleries: [
        {
            id: 1,
            title: "Paisajes",
            description: "Hermosos paisajes naturales",
            photos: [
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop"
            ]
        },
        {
            id: 2,
            title: "Retratos", 
            description: "Colección de retratos artísticos",
            photos: [
                "https://images.unsplash.com/photo-1494790108755-2616c7ee8e31?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop"
            ]
        }
    ],
    stories: [
        {
            id: 1,
            title: "El Jardín Secreto",
            content: "Había una vez un jardín escondido detrás de una puerta de hierro oxidado. Los niños del pueblo susurraban historias sobre ese lugar mágico donde las flores cantaban y los árboles bailaban con el viento. María, una niña curiosa de ocho años, decidió un día aventurarse a descubrir la verdad detrás de esas leyendas.\n\nCuando finalmente logró abrir la pesada puerta, se encontró con un espectáculo que superaba cualquier cuento de hadas. Las rosas hablaban en susurros melodiosos, compartiendo secretos del viento y la lluvia. Los girasoles giraban lentamente, siguiendo no solo el sol, sino también los sueños de quienes se atrevían a escuchar.\n\nMaría pasó toda la tarde en aquel lugar encantado, aprendiendo los nombres secretos de cada flor y el lenguaje antiquísimo de los árboles. Al caer la noche, prometió regresar, sabiendo que había encontrado un tesoro más valioso que cualquier oro: un mundo donde la magia aún vivía, esperando ser descubierta por corazones valientes y curiosos."
        },
        {
            id: 2,
            title: "La Última Carta",
            content: "El sobre amarillento reposaba sobre la mesa de roble, como si hubiera estado esperando durante décadas el momento perfecto para ser abierto. Elena observaba la carta con una mezcla de curiosidad y temor, sabiendo que las palabras escritas en su interior podrían cambiar todo lo que creía saber sobre su familia.\n\nLa letra era elegante pero temblorosa, claramente escrita por una mano anciana. 'Mi querida Elena,' comenzaba la misiva, 'si estás leyendo esto, significa que finalmente has encontrado el coraje para buscar la verdad que tanto tiempo hemos guardado.'\n\nLo que siguió fue una revelación que transformaría para siempre la comprensión que Elena tenía de su historia familiar. Secretos guardados por generaciones, amores prohibidos, sacrificios silenciosos y decisiones que habían moldeado el destino de todos los que vinieron después.\n\nAl terminar de leer, Elena comprendió que cada familia tiene sus misterios, y que a veces, conocer la verdad es tanto una bendición como una responsabilidad. Con lágrimas en los ojos y el corazón lleno de una nueva comprensión, dobló cuidadosamente la carta, sabiendo que ahora le tocaba a ella decidir qué hacer con ese legado de secretos y revelaciones."
        }
    ],
    appointments: [
        {
            id: 1,
            date: "2025-10-01",
            title: "Reunión mensual",
            description: "Revisión de nuevas propuestas"
        },
        {
            id: 2, 
            date: "2025-10-15",
            title: "Sesión de fotos",
            description: "Sesión de retratos en exteriores"
        }
    ]
};

// AQUÍ SE ESTÁ CAMBIANDO: Estado de la aplicación
let currentUser = null;
let currentSection = 'galleries';

// AQUÍ SE ESTÁ CAMBIANDO: Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // AQUÍ SE ESTÁ CAMBIANDO: Configurar event listeners
    setupEventListeners();
    
    // AQUÍ SE ESTÁ CAMBIANDO: Mostrar página de login inicial
    showLoginPage();
}

function setupEventListeners() {
    // AQUÍ SE ESTÁ CAMBIANDO: Login
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // AQUÍ SE ESTÁ CAMBIANDO: Navegación
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (!btn.classList.contains('logout-btn')) {
            btn.addEventListener('click', handleNavigation);
        }
    });
    
    document.querySelector('.logout-btn').addEventListener('click', handleLogout);
    
    // AQUÍ SE ESTÁ CAMBIANDO: Modales
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    });
    
    // AQUÍ SE ESTÁ CAMBIANDO: Formularios
    document.getElementById('appointmentForm').addEventListener('submit', handleAddAppointment);
    document.getElementById('newGalleryForm').addEventListener('submit', handleAddGallery);
    document.getElementById('newStoryForm').addEventListener('submit', handleAddStory);
    document.getElementById('newUserForm').addEventListener('submit', handleAddUser);
    
    // AQUÍ SE ESTÁ CAMBIANDO: Botones de agregar
    document.getElementById('addGalleryBtn').addEventListener('click', () => openModal('addGalleryModal'));
    document.getElementById('addStoryBtn').addEventListener('click', () => openModal('addStoryModal'));
    document.getElementById('addUserBtn').addEventListener('click', () => openModal('addUserModal'));
}

// AQUÍ SE ESTÁ CAMBIANDO: Funciones de autenticación
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = appData.users.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = user;
        showMainPage();
        hideError();
    } else {
        showError('Usuario o contraseña incorrectos');
    }
}

function handleLogout() {
    currentUser = null;
    showLoginPage();
    // AQUÍ SE ESTÁ CAMBIANDO: Limpiar formularios
    document.getElementById('loginForm').reset();
}

function showLoginPage() {
    document.getElementById('loginPage').classList.add('active');
    document.getElementById('mainPage').classList.remove('active');
}

function showMainPage() {
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('mainPage').classList.add('active');
    
    // AQUÍ SE ESTÁ CAMBIANDO: Actualizar información del usuario
    document.getElementById('currentUser').textContent = currentUser.name;
    document.getElementById('userRole').textContent = getRoleText(currentUser.role);
    
    // AQUÍ SE ESTÁ CAMBIANDO: Cargar contenido inicial
    loadContent();
    updatePermissions();
}

function getRoleText(role) {
    const roles = {
        'total': 'Control Total',
        'partial': 'Control Parcial',
        'none': 'Solo Visualización'
    };
    return roles[role] || 'Sin Rol';
}

// AQUÍ SE ESTÁ CAMBIANDO: Sistema de permisos
function updatePermissions() {
    const role = currentUser.role;
    
    // AQUÍ SE ESTÁ CAMBIANDO: Botones de agregar
    const addBtns = document.querySelectorAll('#addGalleryBtn, #addStoryBtn');
    addBtns.forEach(btn => {
        btn.style.display = (role === 'total') ? 'block' : 'none';
    });
    
    // AQUÍ SE ESTÁ CAMBIANDO: Galería - solo parcial y total pueden subir fotos
    document.getElementById('addGalleryBtn').style.display = 
        (role === 'total' || role === 'partial') ? 'block' : 'none';
    
    // AQUÍ SE ESTÁ CAMBIANDO: Sección de usuarios - solo total
    const usersNav = document.querySelector('[data-section="users"]');
    usersNav.style.display = (role === 'total') ? 'block' : 'none';
    
    // AQUÍ SE ESTÁ CAMBIANDO: Formulario de calendario - parcial y total
    const calendarForm = document.getElementById('appointmentForm');
    calendarForm.style.display = (role !== 'none') ? 'block' : 'none';
}

// AQUÍ SE ESTÁ CAMBIANDO: Navegación entre secciones
function handleNavigation(e) {
    const section = e.target.getAttribute('data-section');
    if (section) {
        currentSection = section;
        
        // AQUÍ SE ESTÁ CAMBIANDO: Actualizar botones activos
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        
        // AQUÍ SE ESTÁ CAMBIANDO: Mostrar sección correspondiente
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(section + 'Section').classList.add('active');
        
        // AQUÍ SE ESTÁ CAMBIANDO: Cargar contenido de la sección
        loadContent();
    }
}

// AQUÍ SE ESTÁ CAMBIANDO: Carga de contenido dinámico
function loadContent() {
    switch(currentSection) {
        case 'galleries':
            loadGalleries();
            break;
        case 'stories':
            loadStories();
            break;
        case 'users':
            loadUsers();
            break;
    }
    loadAppointments();
}

function loadGalleries() {
    const container = document.getElementById('galleriesContainer');
    container.innerHTML = '';
    
    appData.galleries.forEach(gallery => {
        const card = createGalleryCard(gallery);
        container.appendChild(card);
    });
}

function createGalleryCard(gallery) {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.onclick = () => openGalleryModal(gallery);
    
    const preview = gallery.photos[0] || 'https://via.placeholder.com/300x200';
    
    card.innerHTML = `
        <img src="${preview}" alt="${gallery.title}" class="gallery-preview">
        <div class="gallery-info">
            <h3>${gallery.title}</h3>
            <p>${gallery.description}</p>
            <div class="gallery-actions">
                <button class="btn btn--small btn--primary" onclick="event.stopPropagation(); openGalleryModal(${JSON.stringify(gallery).replace(/"/g, '&quot;')})">Ver Galería</button>
                ${(currentUser.role === 'total' || currentUser.role === 'partial') ? 
                    `<button class="btn btn--small btn--danger" onclick="event.stopPropagation(); deleteGallery(${gallery.id})">Eliminar</button>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

function openGalleryModal(gallery) {
    document.getElementById('galleryModalTitle').textContent = gallery.title;
    const photosContainer = document.getElementById('galleryPhotos');
    photosContainer.innerHTML = '';
    
    gallery.photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        img.className = 'gallery-photo';
        img.onclick = () => openPhotoModal(photo);
        photosContainer.appendChild(img);
    });
    
    openModal('galleryModal');
}

function openPhotoModal(photoSrc) {
    document.getElementById('expandedPhoto').src = photoSrc;
    closeModal();
    openModal('photoModal');
}

function loadStories() {
    const container = document.getElementById('storiesContainer');
    container.innerHTML = '';
    
    appData.stories.forEach(story => {
        const item = createStoryItem(story);
        container.appendChild(item);
    });
}

function createStoryItem(story) {
    const item = document.createElement('div');
    item.className = 'story-item';
    
    const preview = story.content.substring(0, 150) + '...';
    
    item.innerHTML = `
        <div class="story-header">
            <div>
                <h3>${story.title}</h3>
                <div class="story-preview">${preview}</div>
            </div>
            <div>
                <button class="expand-btn" onclick="openStoryModal(${JSON.stringify(story).replace(/"/g, '&quot;')})">Leer Completo</button>
                ${currentUser.role === 'total' ? 
                    `<button class="btn btn--small btn--danger" onclick="deleteStory(${story.id})" style="margin-left: 10px;">Eliminar</button>` : ''}
            </div>
        </div>
    `;
    
    return item;
}

function openStoryModal(story) {
    document.getElementById('storyModalTitle').textContent = story.title;
    document.getElementById('storyContent').textContent = story.content;
    openModal('storyModal');
}

function loadUsers() {
    const container = document.getElementById('usersContainer');
    container.innerHTML = '';
    
    appData.users.forEach(user => {
        const card = createUserCard(user);
        container.appendChild(card);
    });
}

function createUserCard(user) {
    const card = document.createElement('div');
    card.className = 'user-card';
    
    card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Usuario:</strong> ${user.username}</p>
        <div class="user-role ${user.role}">${getRoleText(user.role)}</div>
        ${currentUser.role === 'total' && user.username !== currentUser.username ? 
            `<button class="btn btn--small btn--danger" onclick="deleteUser('${user.username}')">Eliminar</button>` : ''}
    `;
    
    return card;
}

function loadAppointments() {
    const container = document.getElementById('appointmentsList');
    container.innerHTML = '';
    
    appData.appointments.forEach(appointment => {
        const item = document.createElement('div');
        item.className = 'appointment-item';
        item.innerHTML = `
            <div class="appointment-date">${appointment.date}</div>
            <div><strong>${appointment.title}</strong></div>
            <div>${appointment.description}</div>
        `;
        container.appendChild(item);
    });
}

// AQUÍ SE ESTÁ CAMBIANDO: Gestión de modales
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// AQUÍ SE ESTÁ CAMBIANDO: Manejo de formularios
function handleAddGallery(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const photos = formData.get('photos').split('\n').filter(url => url.trim());
    
    const newGallery = {
        id: Date.now(),
        title: formData.get('title'),
        description: formData.get('description'),
        photos: photos
    };
    
    appData.galleries.push(newGallery);
    loadGalleries();
    closeModal();
    e.target.reset();
}

function handleAddStory(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const newStory = {
        id: Date.now(),
        title: formData.get('title'),
        content: formData.get('content')
    };
    
    appData.stories.push(newStory);
    loadStories();
    closeModal();
    e.target.reset();
}

function handleAddUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const newUser = {
        username: formData.get('username'),
        password: formData.get('password'),
        name: formData.get('name'),
        role: formData.get('role')
    };
    
    // AQUÍ SE ESTÁ CAMBIANDO: Verificar si el usuario ya existe
    if (appData.users.find(u => u.username === newUser.username)) {
        alert('El nombre de usuario ya existe');
        return;
    }
    
    appData.users.push(newUser);
    loadUsers();
    closeModal();
    e.target.reset();
}

function handleAddAppointment(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const newAppointment = {
        id: Date.now(),
        date: formData.get('date'),
        title: formData.get('title'),
        description: formData.get('description')
    };
    
    appData.appointments.push(newAppointment);
    loadAppointments();
    e.target.reset();
}

// AQUÍ SE ESTÁ CAMBIANDO: Funciones de eliminación
function deleteGallery(galleryId) {
    if (confirm('¿Estás seguro de eliminar esta galería?')) {
        appData.galleries = appData.galleries.filter(g => g.id !== galleryId);
        loadGalleries();
    }
}

function deleteStory(storyId) {
    if (confirm('¿Estás seguro de eliminar este escrito?')) {
        appData.stories = appData.stories.filter(s => s.id !== storyId);
        loadStories();
    }
}

function deleteUser(username) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
        appData.users = appData.users.filter(u => u.username !== username);
        loadUsers();
    }
}

// AQUÍ SE ESTÁ CAMBIANDO: Funciones de utilidad
function showError(message) {
    const errorDiv = document.getElementById('loginError');
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
}

function hideError() {
    const errorDiv = document.getElementById('loginError');
    errorDiv.classList.add('hidden');
}

// AQUÍ SE ESTÁ CAMBIANDO: Prevenir acceso sin login
window.addEventListener('beforeunload', function() {
    if (!currentUser) {
        showLoginPage();
    }
});
