// Datos de usuarios (permanecen en app.js)
const users = [
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
];

// Datos de galerías (simulando galleries.json)
let galleries = [
    {
        id: 1,
        title: "Paisajes Naturales",
        description: "Hermosos paisajes y naturaleza",
        photos: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 2,
        title: "Retratos Artísticos", 
        description: "Colección de retratos y fotografía de personas",
        photos: [
            "https://images.unsplash.com/photo-1494790108755-2616c7ee8e31?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 3,
        title: "Arquitectura Moderna",
        description: "Edificios y estructuras contemporáneas",
        photos: [
            "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop"
        ]
    }
];

// AQUÍ SE ESTÁ CAMBIANDO: Datos de escritos (simulando stories.json)
let stories = [
    {
        id: 1,
        title: "El Jardín Secreto",
        content: "Había una vez un jardín escondido detrás de una puerta de hierro oxidado. Los niños del pueblo susurraban historias sobre ese lugar mágico donde las flores cantaban y los árboles bailaban con el viento. María, una niña curiosa de ocho años, decidió un día aventurarse a descubrir la verdad detrás de esas leyendas.\n\nCuando finalmente logró abrir la pesada puerta, se encontró con un espectáculo que superaba cualquier cuento de hadas. Las rosas hablaban en susurros melodiosos, compartiendo secretos del viento y la lluvia. Los girasoles giraban lentamente, siguiendo no solo el sol, sino también los sueños de quienes se atrevían a escuchar.\n\nMaría pasó toda la tarde en aquel lugar encantado, aprendiendo los nombres secretos de cada flor y el lenguaje antiquísimo de los árboles. Al caer la noche, prometió regresar, sabiendo que había encontrado un tesoro más valioso que cualquier oro: un mundo donde la magia aún vivía, esperando ser descubierta por corazones valientes y curiosos."
    },
    {
        id: 2,
        title: "La Última Carta",
        content: "El sobre amarillento reposaba sobre la mesa de roble, como si hubiera estado esperando durante décadas el momento perfecto para ser abierto. Elena observaba la carta con una mezcla de curiosidad y temor, sabiendo que las palabras escritas en su interior podrían cambiar todo lo que creía saber sobre su familia.\n\nLa letra era elegante pero temblorosa, claramente escrita por una mano anciana. 'Mi querida Elena,' comenzaba la misiva, 'si estás leyendo esto, significa que finalmente has encontrado el coraje para buscar la verdad que tanto tiempo hemos guardado.'\n\nLo que siguió fue una revelación que transformaría para siempre la comprensión que Elena tenía de su historia familiar. Secretos guardados por generaciones, amores prohibidos, sacrificios silenciosos y decisiones que habían moldeado el destino de todos los que vinieron después.\n\nAl terminar de leer, Elena comprendió que cada familia tiene sus misterios, y que a veces, conocer la verdad es tanto una bendición como una responsabilidad. Con lágrimas en los ojos y el corazón lleno de una nueva comprensión, dobló cuidadosamente la carta, sabiendo que ahora le tocaba a ella decidir qué hacer con ese legado de secretos y revelaciones."
    },
    {
        id: 3,
        title: "El Reloj de Arena",
        content: "En la penumbra del desván, entre libros olvidados y fotografías descoloridas, Lucas encontró un reloj de arena diferente a cualquier otro que hubiera visto. No era el tiempo lo que medía, sino algo mucho más valioso: los momentos de felicidad pura que una persona puede experimentar en toda su vida.\n\nAl tomarlo entre sus manos, el reloj comenzó a brillar con una luz dorada y cálida. Los granos que caían no eran de arena común, sino pequeñas chispas de luz que representaban cada instante de alegría: el primer beso, la risa compartida con amigos, el abrazo de una madre, la satisfacción de un sueño cumplido.\n\nLucas se dio cuenta de que tenía en sus manos no solo un objeto mágico, sino una lección de vida. Cada grano que caía le recordaba que la felicidad no se trataba de grandes eventos, sino de pequeños momentos perfectos que, unidos, formaban la verdadera riqueza de una existencia plena y bien vivida."
    }
];

// Datos de citas (permanecen en app.js)
let appointments = [
    {
        id: 1,
        date: "2025-10-01",
        title: "Reunión mensual",
        description: "Revisión de nuevas propuestas fotográficas"
    },
    {
        id: 2, 
        date: "2025-10-15",
        title: "Sesión de fotos",
        description: "Sesión de retratos en exteriores"
    },
    {
        id: 3,
        date: "2025-10-22",
        title: "Workshop de escritura",
        description: "Taller de escritura creativa"
    }
];

// Variables globales
let currentUser = null;
let currentSection = 'photos';
let currentGalleryId = null;
let spotifyPlaylist = '';

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    showLoginModal();
}

function setupEventListeners() {
    // Login
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // Navegación
    document.querySelectorAll('.nav-btn[data-section]').forEach(btn => {
        btn.addEventListener('click', handleNavigation);
    });
    
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    
    // Modales
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = btn.getAttribute('data-modal');
            if (modal) {
                closeModal(modal);
            } else {
                closeAllModals();
            }
        });
    });
    
    // Cerrar modal al hacer clic fuera
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // Formularios
    document.getElementById('addGalleryForm').addEventListener('submit', handleAddGallery);
    document.getElementById('addStoryForm').addEventListener('submit', handleAddStory);
    document.getElementById('addUserForm').addEventListener('submit', handleAddUser);
    document.getElementById('appointmentForm').addEventListener('submit', handleAddAppointment);
    
    // AQUÍ SE AGREGA: Formulario agregar foto a galería existente
    document.getElementById('addPhotoToGalleryForm').addEventListener('submit', handleAddPhotoToGallery);
    
    // Botones agregar
    document.getElementById('addGalleryBtn').addEventListener('click', () => openModal('addGalleryModal'));
    document.getElementById('addStoryBtn').addEventListener('click', () => openModal('addStoryModal'));
    document.getElementById('addUserBtn').addEventListener('click', () => openModal('addUserModal'));
    
    // AQUÍ SE AGREGA: Preview de archivos subidos
    document.getElementById('galleryFiles').addEventListener('change', handleGalleryFilesPreview);
    document.getElementById('newPhotoFile').addEventListener('change', handleNewPhotoPreview);
    
    // AQUÍ SE AGREGA: Spotify
    document.getElementById('saveSpotifyBtn').addEventListener('click', handleSaveSpotify);
}

// Autenticación
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = user;
        hideLoginModal();
        showMainApp();
        loadContent();
        updatePermissions();
    } else {
        showError('Usuario o contraseña incorrectos');
    }
}

function handleLogout() {
    currentUser = null;
    hideMainApp();
    showLoginModal();
    document.getElementById('loginForm').reset();
    hideError();
}

function showLoginModal() {
    openModal('loginModal');
}

function hideLoginModal() {
    closeModal('loginModal');
}

function showMainApp() {
    document.getElementById('mainApp').classList.remove('hidden');
    document.getElementById('currentUserName').textContent = currentUser.name;
    document.getElementById('currentUserRole').textContent = getRoleText(currentUser.role);
}

function hideMainApp() {
    document.getElementById('mainApp').classList.add('hidden');
}

function getRoleText(role) {
    const roles = {
        'total': 'Control Total',
        'partial': 'Control Parcial', 
        'none': 'Solo Visualización'
    };
    return roles[role] || 'Sin Rol';
}

// Permisos
function updatePermissions() {
    const role = currentUser.role;
    
    // Botones agregar
    const addGalleryBtn = document.getElementById('addGalleryBtn');
    const addStoryBtn = document.getElementById('addStoryBtn');
    const addUserBtn = document.getElementById('addUserBtn');
    const usersNavBtn = document.getElementById('usersNavBtn');
    const appointmentForm = document.getElementById('appointmentForm');
    
    // Galerías - total y partial pueden agregar
    addGalleryBtn.style.display = (role === 'total' || role === 'partial') ? 'block' : 'none';
    
    // Escritos - solo total
    addStoryBtn.style.display = (role === 'total') ? 'block' : 'none';
    
    // Usuarios - solo total
    addUserBtn.style.display = (role === 'total') ? 'block' : 'none';
    usersNavBtn.style.display = (role === 'total') ? 'block' : 'none';
    
    // Calendario - total y partial
    appointmentForm.style.display = (role !== 'none') ? 'block' : 'none';
}

// Navegación
function handleNavigation(e) {
    const section = e.target.closest('.nav-btn').getAttribute('data-section');
    if (section && section !== currentSection) {
        currentSection = section;
        
        // Actualizar botones activos
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        e.target.closest('.nav-btn').classList.add('active');
        
        // Mostrar sección
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(section + 'Section').classList.add('active');
        
        loadContent();
    }
}

function loadContent() {
    switch(currentSection) {
        case 'photos':
            loadGalleries();
            break;
        case 'stories':
            loadStories();
            break;
        case 'users':
            loadUsers();
            break;
        case 'spotify':
            loadSpotify();
            break;
    }
    loadAppointments();
}

// Galerías
function loadGalleries() {
    const container = document.getElementById('galleriesGrid');
    container.innerHTML = '';
    
    galleries.forEach(gallery => {
        const card = createGalleryCard(gallery);
        container.appendChild(card);
    });
}

function createGalleryCard(gallery) {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    
    const preview = gallery.photos[0] || 'https://via.placeholder.com/300x200';
    
    card.innerHTML = `
        <img src="${preview}" alt="${gallery.title}" class="gallery-preview" loading="lazy">
        <div class="gallery-info">
            <h3 class="gallery-title">${gallery.title}</h3>
            <p class="gallery-description">${gallery.description}</p>
            <div class="gallery-actions">
                <button class="btn btn--primary btn--small" onclick="viewGallery(${gallery.id})">Ver Galería</button>
                ${(currentUser.role === 'total' || currentUser.role === 'partial') ? 
                    `<button class="btn btn--danger btn--small" onclick="deleteGallery(${gallery.id})">Eliminar</button>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

function viewGallery(galleryId) {
    const gallery = galleries.find(g => g.id === galleryId);
    if (!gallery) return;
    
    currentGalleryId = galleryId;
    document.getElementById('galleryViewTitle').textContent = gallery.title;
    
    const photosGrid = document.getElementById('galleryPhotosGrid');
    photosGrid.innerHTML = '';
    
    gallery.photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        img.className = 'gallery-photo';
        img.loading = 'lazy';
        img.onclick = () => viewPhoto(photo);
        photosGrid.appendChild(img);
    });
    
    // AQUÍ SE AGREGA: Mostrar sección agregar foto si tiene permisos
    const addPhotoSection = document.getElementById('addPhotoSection');
    if (currentUser.role === 'total' || currentUser.role === 'partial') {
        addPhotoSection.style.display = 'block';
        // Limpiar formulario
        document.getElementById('addPhotoToGalleryForm').reset();
        document.getElementById('newPhotoPreview').innerHTML = '';
    } else {
        addPhotoSection.style.display = 'none';
    }
    
    openModal('galleryViewModal');
}

function viewPhoto(photoSrc) {
    document.getElementById('fullSizePhoto').src = photoSrc;
    closeModal('galleryViewModal');
    openModal('photoViewModal');
}

// AQUÍ SE AGREGA: Agregar foto a galería existente
function handleAddPhotoToGallery(e) {
    e.preventDefault();
    
    if (!currentGalleryId) return;
    
    const fileInput = document.getElementById('newPhotoFile');
    const urlInput = document.getElementById('newPhotoUrl');
    
    if (fileInput.files.length > 0) {
        // Subir archivo
        const file = fileInput.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                addPhotoToGallery(currentGalleryId, e.target.result);
                e.target.reset();
                document.getElementById('newPhotoPreview').innerHTML = '';
            };
            reader.readAsDataURL(file);
        }
    } else if (urlInput.value.trim()) {
        // Agregar URL
        addPhotoToGallery(currentGalleryId, urlInput.value.trim());
        urlInput.value = '';
    }
}

function addPhotoToGallery(galleryId, photoSrc) {
    const gallery = galleries.find(g => g.id === galleryId);
    if (gallery) {
        gallery.photos.push(photoSrc);
        viewGallery(galleryId); // Recargar vista
        showSuccess('Foto agregada exitosamente');
    }
}

function deleteGallery(galleryId) {
    if (confirm('¿Estás seguro de eliminar esta galería?')) {
        galleries = galleries.filter(g => g.id !== galleryId);
        loadGalleries();
        showSuccess('Galería eliminada exitosamente');
    }
}

// AQUÍ SE AGREGA: Preview de archivos para nueva galería
function handleGalleryFilesPreview(e) {
    const files = e.target.files;
    const preview = document.getElementById('galleryPhotosPreview');
    preview.innerHTML = '';
    
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'preview-image';
                preview.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
}

// AQUÍ SE AGREGA: Preview de archivo para foto individual
function handleNewPhotoPreview(e) {
    const file = e.target.files[0];
    const preview = document.getElementById('newPhotoPreview');
    preview.innerHTML = '';
    
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'preview-image';
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

// AQUÍ SE AGREGA: Manejo de galería con archivos y URLs
function handleAddGallery(e) {
    e.preventDefault();
    
    const title = document.getElementById('galleryTitle').value;
    const description = document.getElementById('galleryDescription').value;
    const fileInput = document.getElementById('galleryFiles');
    const urlsInput = document.getElementById('galleryUrls').value;
    
    const photos = [];
    
    // Procesar URLs
    if (urlsInput.trim()) {
        const urls = urlsInput.trim().split('\n').filter(url => url.trim());
        photos.push(...urls);
    }
    
    // Procesar archivos
    const processFiles = () => {
        const newGallery = {
            id: Date.now(),
            title,
            description,
            photos
        };
        
        galleries.push(newGallery);
        loadGalleries();
        closeModal('addGalleryModal');
        document.getElementById('addGalleryForm').reset();
        document.getElementById('galleryPhotosPreview').innerHTML = '';
        showSuccess('Galería creada exitosamente');
    };
    
    if (fileInput.files.length > 0) {
        let filesProcessed = 0;
        const totalFiles = fileInput.files.length;
        
        Array.from(fileInput.files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    photos.push(e.target.result);
                    filesProcessed++;
                    if (filesProcessed === totalFiles) {
                        processFiles();
                    }
                };
                reader.readAsDataURL(file);
            } else {
                filesProcessed++;
                if (filesProcessed === totalFiles) {
                    processFiles();
                }
            }
        });
    } else {
        processFiles();
    }
}

// Escritos
function loadStories() {
    const container = document.getElementById('storiesContainer');
    container.innerHTML = '';
    
    stories.forEach(story => {
        const card = createStoryCard(story);
        container.appendChild(card);
    });
}

function createStoryCard(story) {
    const card = document.createElement('div');
    card.className = 'story-card';
    
    const preview = story.content.substring(0, 150) + '...';
    
    card.innerHTML = `
        <div class="story-header">
            <div class="story-info">
                <h3>${story.title}</h3>
                <p class="story-preview">${preview}</p>
            </div>
            <div class="story-actions">
                <button class="btn btn--primary btn--small" onclick="readStory(${story.id})">Leer</button>
                ${currentUser.role === 'total' ? 
                    `<button class="btn btn--danger btn--small" onclick="deleteStory(${story.id})">Eliminar</button>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

function readStory(storyId) {
    const story = stories.find(s => s.id === storyId);
    if (!story) return;
    
    document.getElementById('storyReadTitle').textContent = story.title;
    document.getElementById('storyReadContent').textContent = story.content;
    openModal('storyReadModal');
}

function handleAddStory(e) {
    e.preventDefault();
    
    const title = document.getElementById('storyTitle').value;
    const content = document.getElementById('storyContent').value;
    
    const newStory = {
        id: Date.now(),
        title,
        content
    };
    
    stories.push(newStory);
    loadStories();
    closeModal('addStoryModal');
    document.getElementById('addStoryForm').reset();
    showSuccess('Escrito creado exitosamente');
}

function deleteStory(storyId) {
    if (confirm('¿Estás seguro de eliminar este escrito?')) {
        stories = stories.filter(s => s.id !== storyId);
        loadStories();
        showSuccess('Escrito eliminado exitosamente');
    }
}

// Usuarios
function loadUsers() {
    const container = document.getElementById('usersGrid');
    container.innerHTML = '';
    
    users.forEach(user => {
        const card = createUserCard(user);
        container.appendChild(card);
    });
}

function createUserCard(user) {
    const card = document.createElement('div');
    card.className = 'user-card';
    
    const initial = user.name.charAt(0).toUpperCase();
    
    card.innerHTML = `
        <div class="user-avatar">${initial}</div>
        <div class="user-name">${user.name}</div>
        <div class="user-username">@${user.username}</div>
        <div class="user-role-badge ${user.role}">${getRoleText(user.role)}</div>
        ${currentUser.role === 'total' && user.username !== currentUser.username ? 
            `<button class="btn btn--danger btn--small" onclick="deleteUser('${user.username}')">Eliminar</button>` : ''}
    `;
    
    return card;
}

function handleAddUser(e) {
    e.preventDefault();
    
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const name = document.getElementById('newName').value;
    const role = document.getElementById('newRole').value;
    
    if (users.find(u => u.username === username)) {
        showError('El nombre de usuario ya existe');
        return;
    }
    
    const newUser = {
        username,
        password,
        name,
        role
    };
    
    users.push(newUser);
    loadUsers();
    closeModal('addUserModal');
    document.getElementById('addUserForm').reset();
    showSuccess('Usuario creado exitosamente');
}

function deleteUser(username) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
        const index = users.findIndex(u => u.username === username);
        if (index > -1) {
            users.splice(index, 1);
            loadUsers();
            showSuccess('Usuario eliminado exitosamente');
        }
    }
}

// AQUÍ SE AGREGA: Spotify
function loadSpotify() {
    const urlInput = document.getElementById('spotifyUrl');
    const preview = document.getElementById('spotifyPreview');
    
    if (spotifyPlaylist) {
        urlInput.value = spotifyPlaylist;
        preview.innerHTML = `
            <h4>Playlist Guardada</h4>
            <p>URL: ${spotifyPlaylist}</p>
            <a href="${spotifyPlaylist}" target="_blank" class="btn btn--secondary btn--small">Abrir en Spotify</a>
        `;
        preview.classList.add('active');
    } else {
        preview.classList.remove('active');
    }
}

function handleSaveSpotify() {
    const url = document.getElementById('spotifyUrl').value.trim();
    
    if (url && (url.includes('spotify.com') || url.includes('open.spotify.com'))) {
        spotifyPlaylist = url;
        loadSpotify();
        showSuccess('Playlist de Spotify guardada exitosamente');
    } else {
        showError('Por favor ingresa una URL válida de Spotify');
    }
}

// AQUÍ SE AGREGA: Calendario con eliminación
function loadAppointments() {
    const container = document.getElementById('appointmentsList');
    container.innerHTML = '';
    
    appointments.forEach(appointment => {
        const item = createAppointmentItem(appointment);
        container.appendChild(item);
    });
}

function createAppointmentItem(appointment) {
    const item = document.createElement('div');
    item.className = 'appointment-item';
    
    const canDelete = currentUser.role === 'total' || currentUser.role === 'partial';
    
    item.innerHTML = `
        <div class="appointment-info">
            <div class="appointment-date">${appointment.date}</div>
            <div class="appointment-title">${appointment.title}</div>
            <div class="appointment-description">${appointment.description}</div>
        </div>
        ${canDelete ? `
        <div class="appointment-actions">
            <button class="btn-delete-appointment" onclick="deleteAppointment(${appointment.id})">Eliminar</button>
        </div>
        ` : ''}
    `;
    
    return item;
}

function handleAddAppointment(e) {
    e.preventDefault();
    
    const date = document.getElementById('appointmentDate').value;
    const title = document.getElementById('appointmentTitle').value;
    const description = document.getElementById('appointmentDescription').value;
    
    const newAppointment = {
        id: Date.now(),
        date,
        title,
        description
    };
    
    appointments.push(newAppointment);
    loadAppointments();
    document.getElementById('appointmentForm').reset();
    showSuccess('Cita agregada exitosamente');
}

// AQUÍ SE AGREGA: Función eliminar cita
function deleteAppointment(appointmentId) {
    if (confirm('¿Estás seguro de eliminar esta cita?')) {
        appointments = appointments.filter(a => a.id !== appointmentId);
        loadAppointments();
        showSuccess('Cita eliminada exitosamente');
    }
}

// Modales
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
}

// Mensajes
function showError(message) {
    const errorDiv = document.getElementById('loginError');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
        setTimeout(() => hideError(), 5000);
    }
}

function hideError() {
    const errorDiv = document.getElementById('loginError');
    if (errorDiv) {
        errorDiv.classList.add('hidden');
    }
}

function showSuccess(message) {
    // Crear mensaje de éxito temporal
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.position = 'fixed';
    successDiv.style.top = '20px';
    successDiv.style.right = '20px';
    successDiv.style.zIndex = '10000';
    successDiv.style.animation = 'fadeIn 0.3s ease';
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => document.body.removeChild(successDiv), 300);
    }, 3000);
}

// Prevenir acceso sin login
window.addEventListener('beforeunload', function() {
    if (!currentUser) {
        showLoginModal();
    }
});