export function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`Elemento com o ID ${targetId} não encontrado.`);
            }
        });
    });
}

export function handleNavbarOpacity() {
    const nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.style.background = window.scrollY > 100 ? 'rgba(44,82,130,1)' : 'rgba(44,82,130,0.9)';
        });
    } else {
        console.error("Navbar não encontrada na página.");
    }
}

export function handleImageLoadError() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
            console.error(`Erro ao carregar imagem com src: ${img.src}`);
            img.src = 'https://via.placeholder.com/300x200?text=Imagem+Indisponível';
        });
    });
}

export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
    smoothScroll();
    handleNavbarOpacity();
    handleImageLoadError();
});
