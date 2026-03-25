document.addEventListener('DOMContentLoaded', () => {
 
  /* ── 1. SCROLL REVEAL ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.style.opacity    = '1';
        el.target.style.transform  = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
 
  document.querySelectorAll('.pkg-card, .dest-card, .testi-card, .feature').forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(30px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(el);
  });
 
 
  /* ── 2. NEWSLETTER SUBMIT ── */
  const nlBtn   = document.querySelector('.nl-form button');
  const nlInput = document.querySelector('.nl-form input');
 
  if (nlBtn && nlInput) {
    nlBtn.addEventListener('click', () => {
      if (nlInput.value.includes('@')) {
        nlInput.value       = '';
        nlInput.placeholder = '✓ You\'re subscribed! Thank you.';
        nlBtn.textContent   = 'Done ✓';
        nlBtn.style.background = 'var(--accent)';
        setTimeout(() => {
          nlInput.placeholder  = 'Enter your email address';
          nlBtn.textContent    = 'Subscribe →';
          nlBtn.style.background = '';
        }, 3500);
      } else {
        nlInput.style.borderColor = '#ff6b6b';
        nlInput.placeholder       = 'Please enter a valid email';
        setTimeout(() => {
          nlInput.style.borderColor = '';
          nlInput.placeholder       = 'Enter your email address';
        }, 2500);
      }
    });
  }
 
 
  /* ── 3. PACKAGE BOOK BUTTONS ── */
  document.querySelectorAll('.pkg-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const original = this.textContent;
      this.textContent        = '✓ Booked!';
      this.style.background   = 'var(--terracotta)';
      this.style.color        = 'var(--white)';
      setTimeout(() => {
        this.textContent      = original;
        this.style.background = '';
        this.style.color      = '';
      }, 2000);
    });
  });
 
 
  /* ── 4. STICKY NAV SHADOW ON SCROLL ── */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(26,20,16,.97)';
      nav.style.boxShadow  = '0 2px 24px rgba(0,0,0,.4)';
    } else {
      nav.style.background = '';
      nav.style.boxShadow  = '';
    }
  });
 
 
  /* ── 5. DESTINATION CARD TILT ── */
  document.querySelectorAll('.dest-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect  = card.getBoundingClientRect();
      const x     = (e.clientX - rect.left) / rect.width  - 0.5;
      const y     = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform .4s ease';
    });
  });
 
 
  /* ── 6. SMOOTH ACTIVE NAV LINK HIGHLIGHT ── */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('nav ul a');
 
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color   = '';
          link.style.opacity = '.85';
        });
        const active = document.querySelector(`nav ul a[href="#${entry.target.id}"]`);
        if (active) {
          active.style.color   = 'var(--accent)';
          active.style.opacity = '1';
        }
      }
    });
  }, { threshold: 0.4 });
 
  sections.forEach(s => sectionObserver.observe(s));
 
 
  /* ── 7. MOBILE NAV TOGGLE ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.style.display === 'flex';
      mobileMenu.style.display = open ? 'none' : 'flex';
      hamburger.textContent    = open ? '☰' : '✕';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        hamburger.textContent    = '☰';
      });
    });
  }
 
});document.addEventListener('DOMContentLoaded', () => {
 
  /* ── 1. SCROLL REVEAL ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.style.opacity    = '1';
        el.target.style.transform  = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
 
  document.querySelectorAll('.pkg-card, .dest-card, .testi-card, .feature').forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(30px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(el);
  });
 
 
  /* ── 2. NEWSLETTER SUBMIT ── */
  const nlBtn   = document.querySelector('.nl-form button');
  const nlInput = document.querySelector('.nl-form input');
 
  if (nlBtn && nlInput) {
    nlBtn.addEventListener('click', () => {
      if (nlInput.value.includes('@')) {
        nlInput.value       = '';
        nlInput.placeholder = '✓ You\'re subscribed! Thank you.';
        nlBtn.textContent   = 'Done ✓';
        nlBtn.style.background = 'var(--accent)';
        setTimeout(() => {
          nlInput.placeholder  = 'Enter your email address';
          nlBtn.textContent    = 'Subscribe →';
          nlBtn.style.background = '';
        }, 3500);
      } else {
        nlInput.style.borderColor = '#ff6b6b';
        nlInput.placeholder       = 'Please enter a valid email';
        setTimeout(() => {
          nlInput.style.borderColor = '';
          nlInput.placeholder       = 'Enter your email address';
        }, 2500);
      }
    });
  }
 
 
  /* ── 3. PACKAGE BOOK BUTTONS ── */
  document.querySelectorAll('.pkg-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const original = this.textContent;
      this.textContent        = '✓ Booked!';
      this.style.background   = 'var(--terracotta)';
      this.style.color        = 'var(--white)';
      setTimeout(() => {
        this.textContent      = original;
        this.style.background = '';
        this.style.color      = '';
      }, 2000);
    });
  });
 
 
  /* ── 4. STICKY NAV SHADOW ON SCROLL ── */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(26,20,16,.97)';
      nav.style.boxShadow  = '0 2px 24px rgba(0,0,0,.4)';
    } else {
      nav.style.background = '';
      nav.style.boxShadow  = '';
    }
  });
 
 
  /* ── 5. DESTINATION CARD TILT ── */
  document.querySelectorAll('.dest-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect  = card.getBoundingClientRect();
      const x     = (e.clientX - rect.left) / rect.width  - 0.5;
      const y     = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform .4s ease';
    });
  });
 
 
  /* ── 6. SMOOTH ACTIVE NAV LINK HIGHLIGHT ── */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('nav ul a');
 
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color   = '';
          link.style.opacity = '.85';
        });
        const active = document.querySelector(`nav ul a[href="#${entry.target.id}"]`);
        if (active) {
          active.style.color   = 'var(--accent)';
          active.style.opacity = '1';
        }
      }
    });
  }, { threshold: 0.4 });
 
  sections.forEach(s => sectionObserver.observe(s));
 
 
  /* ── 7. MOBILE NAV TOGGLE ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.style.display === 'flex';
      mobileMenu.style.display = open ? 'none' : 'flex';
      hamburger.textContent    = open ? '☰' : '✕';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        hamburger.textContent    = '☰';
      });
    });
  }
 
});
