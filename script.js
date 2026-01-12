document.addEventListener('DOMContentLoaded', () => {

    // FUNCIONALIDAD 1: MODAL DINÁMICO (Gestión de proyectos)
    const modal = document.getElementById('dynamic-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const triggers = document.querySelectorAll('.project-trigger'); // Selecciona cartas y hero images

    // Elementos internos del modal
    const mTitle = document.getElementById('modal-title');
    const mImg = document.getElementById('modal-img');
    const mDesc = document.getElementById('modal-desc');
    const mTech = document.getElementById('modal-tech');

    triggers.forEach(card => {
        card.addEventListener('click', (e) => {
            // Evitamos que el link del hero salte
            e.preventDefault();

            // Extraer datos de los atributos data-
            const title = card.getAttribute('data-title');
            const desc = card.getAttribute('data-desc');
            const img = card.getAttribute('data-img');
            const tech = card.getAttribute('data-tech');

            // Inyectar en el modal
            mTitle.innerText = `// PROYECTO: ${title}`;
            mDesc.innerText = desc;
            mImg.src = img;
            mTech.innerText = tech ? tech : "Stack no especificado";

            // Mostrar modal
            modal.style.display = 'flex';
        });
    });

    // Cerrar modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // FUNCIONALIDAD 2: BUSCADOR EN TIEMPO REAL
    const searchInput = document.getElementById('projectSearch');
    const allCards = document.querySelectorAll('.project-card'); // Solo las del grid

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();

        allCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            const tech = card.getAttribute('data-tech').toLowerCase();

            // Si el término está en el título o en la tecnología
            if(title.includes(term) || tech.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // FUNCIONALIDAD 3: FORMULARIO DE CONTACTO (Mailto directo)
    const contactForm = document.getElementById('cyber-contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailDestino = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simulamos un efecto de "Enviando..."
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = "ENCRIPTANDO Y ENVIANDO...";
        btn.style.borderColor = "var(--neon-green)";
        btn.style.color = "var(--neon-green)";

        setTimeout(() => {
            // Construir el mailto
            window.location.href = `mailto:${emailDestino}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

            // Resetear botón
            btn.innerText = "DATOS ENVIADOS";
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.borderColor = "var(--neon-cyan)";
                btn.style.color = "var(--neon-cyan)";
                contactForm.reset();
            }, 2000);
        }, 1000);
    });

    // EXTRA: EFECTO MÁQUINA DE ESCRIBIR EN HERO
    const titleElement = document.getElementById('typing-title');
    const textToType = "PROYECTOS DESTACADOS";
    titleElement.innerText = "";

    let i = 0;
    function typeWriter() {
        if (i < textToType.length) {
            titleElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Velocidad de escritura
        } else {
            // Añadir el cursor parpadeante al final
            titleElement.innerHTML += '<span class="cursor">_</span>';
        }
    }
    // Iniciar efecto
    setTimeout(typeWriter, 500);
});
document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. GESTIÓN DEL MODAL DINÁMICO --- */
    const modal = document.getElementById('dynamic-modal');
    const closeBtn = document.getElementById('close-modal');

    // Seleccionamos TODOS los elementos que deben abrir modal (incluidos los del Hero)
    const triggers = document.querySelectorAll('.project-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            // Extraer info de los data-attributes
            const title = trigger.getAttribute('data-title');
            const desc = trigger.getAttribute('data-desc');
            const img = trigger.getAttribute('data-img');
            const tech = trigger.getAttribute('data-tech');

            // Rellenar modal
            document.getElementById('modal-title').innerText = "// PROYECTO: " + title;
            document.getElementById('modal-desc').innerText = desc;
            document.getElementById('modal-img').src = img;
            document.getElementById('modal-tech').innerText = "> STACK: " + tech;

            // Mostrar
            modal.style.display = 'flex';
        });
    });

    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    }

    /* --- 2. BUSCADOR EN TIEMPO REAL --- */
    const searchInput = document.getElementById('projectSearch');
    const gridCards = document.querySelectorAll('.projects-grid .project-card');

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();

        gridCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            const tech = card.getAttribute('data-tech').toLowerCase();

            // Mostrar si coincide título O tecnología
            if(title.includes(term) || tech.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    /* --- 3. FUNCIONALIDAD MAILTO --- */
    const form = document.getElementById('cyber-contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('contact-email').value;
        const subject = document.getElementById('contact-subject').value;
        const msg = document.getElementById('contact-msg').value;

        // Crear enlace mailto
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`;
    });
});