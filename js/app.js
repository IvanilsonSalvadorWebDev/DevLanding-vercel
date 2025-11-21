import './bootstrap';

import { gsap } from "gsap";

// Garantir que o JS roda só depois da página carregar
window.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const heroText = hero ? hero.querySelector('div') : null;
    const heroCard = document.querySelector('.hero-card');

    // Linha do tempo principal
    const tl = gsap.timeline();

    if (heroText) {
        tl.from(heroText, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out"
        });
    }

    if (heroCard) {
        tl.from(heroCard, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4"); // começa um pouco antes do fim da animação do texto
    }

    // Meta info / hero-meta
    const heroMetaItems = document.querySelectorAll('.hero-meta-item');
    if (heroMetaItems.length) {
        tl.from(heroMetaItems, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out"
        }, "-=0.3");
    }
});












    // Ano automático
    document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll suave para newsletter
    const btnScrollNewsletter = document.getElementById('btn-scroll-newsletter');
    const newsletterSection = document.getElementById('newsletter');

    btnScrollNewsletter.addEventListener('click', () => {
        newsletterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Scroll suave para links do menu
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Animação do "planeta"
    const orbitDot = document.getElementById('orbit-dot');
    let angle = 0;

    function animateOrbit() {
        const radiusX = 90;
        const radiusY = 55;
        const centerX = 50;
        const centerY = 50;

        const rad = angle * (Math.PI / 180);
        const x = centerX + Math.cos(rad) * (radiusX / 2);
        const y = centerY + Math.sin(rad) * (radiusY / 2);

        orbitDot.style.left = x + '%';
        orbitDot.style.top = y + '%';

        angle = (angle + 0.8) % 360;
        requestAnimationFrame(animateOrbit);
    }

    animateOrbit();






































   window.addEventListener('DOMContentLoaded', () => {
    // ... (hero + card, como acima)

    const popup = document.getElementById('success-popup');
    const popupCloseBtn = document.getElementById('popup-close-btn');

    if (popup && popupCloseBtn) {
        const popupCard = popup.querySelector('.popup-card');

        // Animação de entrada do popup
        gsap.fromTo(popup, 
            { opacity: 0 },
            { opacity: 1, duration: 0.25, ease: "power1.out" }
        );

        gsap.fromTo(popupCard,
            { y: 30, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out", delay: 0.05 }
        );

        const closePopup = () => {
            // Animação de saída
            const tlPopup = gsap.timeline({
                onComplete: () => {
                    popup.style.display = 'none';
                }
            });

            tlPopup.to(popupCard, {
                y: 20,
                opacity: 0,
                scale: 0.96,
                duration: 0.25,
                ease: "power2.inOut"
            }).to(popup, {
                opacity: 0,
                duration: 0.2,
                ease: "power1.in"
            }, "-=0.15");
        };

        popupCloseBtn.addEventListener('click', closePopup);

        popup.addEventListener('click', (event) => {
            if (event.target === popup) {
                closePopup();
            }
        });

        // Auto fechar depois de 4s
        setTimeout(closePopup, 4000);
    }
});

