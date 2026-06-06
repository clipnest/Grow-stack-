/* =============================================
   GROWSTACK — Main JavaScript
============================================= */

/* ── CURSOR ── */
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursorTrail');
let mouseX = 0, mouseY = 0, trailX = 0, trailY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateTrail() {
  trailX += (mouseX - trailX) * 0.12;
  trailY += (mouseY - trailY) * 0.12;
  trail.style.left = trailX + 'px';
  trail.style.top = trailY + 'px';
  requestAnimationFrame(animateTrail);
}
animateTrail();

document.querySelectorAll('a, button, .faq-q, .filter-btn, .niche-card, .portfolio-card, .service-card, .pricing-card').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('hovering'); trail.classList.add('hovering'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('hovering'); trail.classList.remove('hovering'); });
});

/* ── NAV SCROLL ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── HAMBURGER ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ── TYPING EFFECT ── */
const typedEl = document.getElementById('typed');
if (typedEl) {
  const words = ['Unforgettable', 'Viral', 'Premium', 'Cinematic', 'AI-Powered'];
  let wi = 0, ci = 0, deleting = false;
  function type() {
    const word = words[wi];
    if (!deleting) {
      typedEl.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; return setTimeout(type, 2000); }
    } else {
      typedEl.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(type, deleting ? 60 : 100);
  }
  type();
}

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
reveals.forEach(el => observer.observe(el));

/* ── FAQ ── */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ── PORTFOLIO FILTER ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      if (match) {
        card.classList.remove('hidden');
        card.style.display = '';
      } else {
        card.classList.add('hidden');
        card.style.display = 'none';
      }
    });
  });
});

/* ── CONTACT FORM ── */
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');
form?.addEventListener('submit', e => {
  e.preventDefault();
  form.style.display = 'none';
  success.style.display = 'block';
});

/* ── SMOOTH ANCHOR SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
