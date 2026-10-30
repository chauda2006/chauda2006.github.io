/**
 * NEON ART UNIVERSE — CORE CONTROLLER
 * Author: Châu Tiến Đạt
 * Palette: Crimson Red × Emerald Green × Obsidian Black
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCanvasBackground();
  initCustomCursor();
  initScrollSpyAndReveals();
  initAudioAmbiance();
  initContactForm();
  initTelemetryStats();
});

/* ==========================================================================
   NAVBAR & MOBILE DRAWER
   ========================================================================== */
function initNavbar() {
  const nav = document.querySelector('.site-nav');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const allNavLinks = document.querySelectorAll('.nav-link');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      playSynthSound(isOpen ? 440 : 330, 'sine', 0.1);
    });

    // Close when clicking link
    allNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Back to top button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      playSynthSound(580, 'sine', 0.12);
    });
  }
}

/* ==========================================================================
   PARTICLE CANVAS BACKGROUND (60 FPS, OBSIDIAN DUST & ENERGY NODES)
   ========================================================================== */
function initCanvasBackground() {
  const canvas = document.getElementById('cyber-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 25 : 50;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.6 + 0.6;
      // 50% Crimson, 50% Emerald
      this.isCrimson = Math.random() > 0.5;
      this.color = this.isCrimson ? 'rgba(255, 36, 79, ' : 'rgba(56, 255, 145, ';
      this.alpha = Math.random() * 0.4 + 0.15;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting circuit lines if close enough
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const strokeColor = particles[i].isCrimson ? 'rgba(255, 36, 79, ' : 'rgba(56, 255, 145, ';
          const strokeAlpha = (1 - dist / 110) * 0.12;
          ctx.strokeStyle = strokeColor + strokeAlpha + ')';
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  // Only animate if not reduced motion
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animate();
  }
}

/* ==========================================================================
   CUSTOM CYBER CURSOR
   ========================================================================== */
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const dot = document.querySelector('.custom-cursor-dot');
  if (!cursor || !dot) return;

  let mouseX = -100, mouseY = -100;
  let cursorX = -100, cursorY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  }, { passive: true });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.22;
    cursorY += (mouseY - cursorY) * 0.22;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover states on interactive elements
  const hoverables = document.querySelectorAll('a, button, input, textarea, .cyber-card, .gallery-item');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '48px';
      cursor.style.height = '48px';
      cursor.style.borderColor = 'var(--crimson-neon)';
      cursor.style.background = 'rgba(255, 36, 79, 0.08)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '28px';
      cursor.style.height = '28px';
      cursor.style.borderColor = 'var(--emerald-neon)';
      cursor.style.background = 'transparent';
    });
  });
}

/* ==========================================================================
   SCROLL SPY & ENTRANCE REVEALS
   ========================================================================== */
function initScrollSpyAndReveals() {
  // Reveal elements on scroll
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // ScrollSpy for Active Nav Link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(sec => navObserver.observe(sec));
}

/* ==========================================================================
   SYNTHETIC WEB AUDIO AMBIANCE & SFX
   Subtle synthetic sound effects generated via Web Audio API
   ========================================================================== */
let audioCtx = null;
let soundEnabled = false;

function initAudioAmbiance() {
  const audioBtn = document.getElementById('audio-toggle');
  if (!audioBtn) return;

  const savedSound = localStorage.getItem('neon_audio_sfx');
  if (savedSound === 'enabled') {
    soundEnabled = true;
    audioBtn.classList.add('active');
    audioBtn.setAttribute('title', 'Sound: ON');
  }

  audioBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      playSynthSound(520, 'sine', 0.15);
      audioBtn.classList.add('active');
      audioBtn.setAttribute('title', 'Sound: ON');
      localStorage.setItem('neon_audio_sfx', 'enabled');
    } else {
      audioBtn.classList.remove('active');
      audioBtn.setAttribute('title', 'Sound: OFF');
      localStorage.setItem('neon_audio_sfx', 'disabled');
    }
  });

  // Attach sound triggers to major CTA buttons
  document.querySelectorAll('.btn-crimson, .btn-emerald, .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      playSynthSound(btn.classList.contains('btn-crimson') ? 480 : 640, 'triangle', 0.08);
    });
  });
}

function playSynthSound(freq = 440, type = 'sine', duration = 0.1) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.7, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    // Graceful fallback if Web Audio is restricted
  }
}

/* ==========================================================================
   CONTACT FORM HANDLER
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status-msg');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('sender-name').value.trim();
    const email = document.getElementById('sender-email').value.trim();
    const subject = document.getElementById('sender-subject').value.trim();
    const message = document.getElementById('sender-message').value.trim();

    if (!name || !email || !message) {
      if (statusMsg) {
        statusMsg.textContent = '⚠ Please fill in all required fields.';
        statusMsg.style.color = 'var(--crimson-neon)';
      }
      playSynthSound(280, 'sawtooth', 0.2);
      return;
    }

    // Prepare mailto fallback
    const mailtoUri = `mailto:chauda2006@example.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;

    if (statusMsg) {
      statusMsg.innerHTML = `✓ Transmitting packet... Launching direct mail client.`;
      statusMsg.style.color = 'var(--emerald-neon)';
    }

    playSynthSound(680, 'sine', 0.2);

    setTimeout(() => {
      window.location.href = mailtoUri;
      form.reset();
    }, 800);
  });
}

/* ==========================================================================
   SYSTEM TELEMETRY
   ========================================================================== */
function initTelemetryStats() {
  const fpsDisplay = document.getElementById('telemetry-fps');
  if (!fpsDisplay) return;

  let lastTime = performance.now();
  let frameCount = 0;

  function updateFps(now) {
    frameCount++;
    if (now - lastTime >= 1000) {
      const currentFps = Math.min(60, Math.round((frameCount * 1000) / (now - lastTime)));
      fpsDisplay.textContent = `${currentFps} FPS`;
      frameCount = 0;
      lastTime = now;
    }
    requestAnimationFrame(updateFps);
  }
  requestAnimationFrame(updateFps);
}
