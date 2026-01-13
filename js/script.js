document.addEventListener('DOMContentLoaded', () => {
    // 1. MODAL LOGIC
    const modal = document.getElementById('dynamic-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const triggers = document.querySelectorAll('.project-trigger');

    triggers.forEach(card => {
        card.addEventListener('click', () => {
            document.getElementById('modal-title').innerText = card.dataset.title;
            document.getElementById('modal-desc').innerText = card.dataset.desc;
            document.getElementById('modal-img').src = card.dataset.img;
            document.getElementById('modal-tech').innerText = `[STACK]: ${card.dataset.tech}`;
            modal.style.display = 'flex';
        });
    });

    closeBtn.onclick = () => modal.style.display = 'none';

    // 2. BUSCADOR FUNCIONAL (INGLÉS)
    const searchInput = document.getElementById('projectSearch');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.project-card').forEach(card => {
            const title = card.dataset.title.toLowerCase();
            card.style.display = title.includes(term) ? 'block' : 'none';
        });
    });

    // 3. SECURE CONTACT FORM
    const contactForm = document.getElementById('cyber-contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('c-email').value;
        const subject = document.getElementById('c-subject').value;
        const msg = document.getElementById('c-message').value;
        const target = "gerard.romo.7e9@itb.cat";

        window.location.href = `mailto:${target}?subject=${encodeURIComponent(subject)}&body=From: ${email}%0D%0A%0D%0A${encodeURIComponent(msg)}`;
    });
});