/**
 * NEON ART UNIVERSE — PROJECTS CONTROLLER & CASE STUDY MODAL
 * Author: Châu Tiến Đạt
 */

const PROJECTS_DATA = [
  {
    id: 'aura-beats',
    title: 'Aura Beats — Online Music Platform',
    category: 'web',
    categoryLabel: 'WEB APP',
    role: 'Full-Stack Developer & UI Architect',
    tagline: 'High-performance audio streaming platform with VIP membership and playlist systems.',
    image: './assets/images/aura-beats-preview.svg',
    tech: ['PHP 8.x', 'MySQL', 'JavaScript (ES6)', 'HTML5 Web Audio API', 'CSS Glassmorphism', 'AJAX'],
    overview: 'Aura Beats is a modern music-streaming application designed for seamless playback and refined auditory curation. Built with custom audio buffer controllers, dynamic playlist caching, and tiered VIP subscription logic.',
    challenge: 'Achieving continuous, gapless song playback across page transitions without full-page reloads, while maintaining synchronized audio wave state across browser tabs.',
    solution: 'Engineered a single-page state layer using vanilla JavaScript and AJAX for dynamic view injection, coupled with HTML5 Audio element caching and LocalStorage session synchronization.',
    metrics: [
      { label: 'Latency', value: '< 45ms' },
      { label: 'VIP Gate', value: 'Role-Based' },
      { label: 'Storage', value: 'Lossless FLAC/MP3' }
    ],
    github: 'https://github.com/chauda2006/aura-beats',
    demo: '#'
  },
  {
    id: 'student-events',
    title: 'Student Event Management System',
    category: 'systems',
    categoryLabel: 'SYSTEMS & API',
    role: 'Backend Architect & Database Engineer',
    tagline: 'Comprehensive university event platform with automated QR attendance and REST API.',
    image: './assets/images/student-events-preview.svg',
    tech: ['PHP', 'MySQL', 'RESTful API', 'Bootstrap 5', 'JavaScript', 'Postman', 'XAMPP'],
    overview: 'A centralized administrative platform enabling academic faculties and student organizations to schedule, publish, and monitor events with automated QR-code badge generation, verification, and audit reports.',
    challenge: 'Preventing race conditions and overbooking during high-traffic registration windows for limited-capacity seminars.',
    solution: 'Designed ACID-compliant relational schemas in MySQL using row-level locking (SELECT ... FOR UPDATE) inside database transactions, ensuring registration slots are allocated atomically.',
    metrics: [
      { label: 'Concurrent Users', value: '500+' },
      { label: 'QR Scan Speed', value: '0.2s' },
      { label: 'Data Integrity', value: 'ACID Compliant' }
    ],
    github: 'https://github.com/chauda2006/student-event-management',
    demo: '#'
  },
  {
    id: 'algo-visualizer',
    title: 'Cyber-Matrix Algorithm Visualizer',
    category: 'creative',
    categoryLabel: 'CREATIVE CODE',
    role: 'Front-End Engineer & Visual Designer',
    tagline: 'Interactive 60FPS simulation of sorting algorithms and graph pathfinding algorithms.',
    image: './assets/images/visualizer-preview.svg',
    tech: ['JavaScript (ES6+)', 'HTML5 Canvas', 'CSS Custom Properties', 'Data Structures'],
    overview: 'An educational visualizer translating abstract algorithms—including Quicksort, Mergesort, and Dijkstra Shortest Path—into glowing cyber-neon step-by-step animations with variable speed controls.',
    challenge: 'Decoupling animation rendering loops from recursive algorithm execution to allow real-time pause, step-back, and execution rate alterations.',
    solution: 'Converted algorithm execution into an async generator pipeline yielding array snapshots that an event-driven Canvas animation loop renders smoothly.',
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Algorithms', value: '8 Types' },
      { label: 'Payload', value: '< 20 KB' }
    ],
    github: 'https://github.com/chauda2006/cyber-matrix-visualizer',
    demo: '#'
  },
  {
    id: 'neon-universe',
    title: 'Neon Art Universe Portfolio',
    category: 'creative',
    categoryLabel: 'CREATIVE CODE',
    role: 'Lead Architect & Designer',
    tagline: 'Git-ready cyber-luxury personal universe blending mechanical geometry and web engineering.',
    image: './assets/images/portfolio-core-preview.svg',
    tech: ['HTML5 Semantic', 'Modular CSS3', 'Vanilla JS', 'SVG Vector Art', 'GitHub Pages'],
    overview: 'The personal website for Châu Tiến Đạt, carefully designed with a Crimson Red, Emerald Green, and Obsidian Black palette. Emphasizes purposeful motion, accessibility, and high performance.',
    challenge: 'Balancing rich glowing visual aesthetics and mechanical animations with near-instant load speeds and zero external dependencies.',
    solution: 'Crafted standalone vector SVG assets, CSS GPU-accelerated transforms, Web Audio API sound synthesis, and strict semantic HTML architecture.',
    metrics: [
      { label: 'Lighthouse Score', value: '98+' },
      { label: 'Dependencies', value: 'Zero (Vanilla)' },
      { label: 'Accessibility', value: 'WCAG AA' }
    ],
    github: 'https://github.com/chauda2006/chauda2006.github.io',
    demo: 'https://chauda2006.github.io'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initProjectFiltering();
  initProjectModal();
});

/* ==========================================================================
   FILTERING LOGIC
   ========================================================================== */
function initProjectFiltering() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   CASE STUDY MODAL
   ========================================================================== */
function initProjectModal() {
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImage = document.getElementById('modal-image');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalRole = document.getElementById('modal-role');
  const modalOverview = document.getElementById('modal-overview');
  const modalChallenge = document.getElementById('modal-challenge');
  const modalSolution = document.getElementById('modal-solution');
  const modalTechStack = document.getElementById('modal-tech-stack');
  const modalMetrics = document.getElementById('modal-metrics');
  const modalGithubLink = document.getElementById('modal-github-link');

  if (!modalOverlay) return;

  function openModal(projectId) {
    const data = PROJECTS_DATA.find(p => p.id === projectId);
    if (!data) return;

    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalCategory.textContent = data.categoryLabel;
    modalTitle.textContent = data.title;
    modalRole.textContent = `ROLE: ${data.role}`;
    modalOverview.textContent = data.overview;
    modalChallenge.textContent = data.challenge;
    modalSolution.textContent = data.solution;
    modalGithubLink.href = data.github;

    // Populate Tech stack
    modalTechStack.innerHTML = data.tech
      .map(t => `<span class="tech-chip">${t}</span>`)
      .join('');

    // Populate Metrics
    modalMetrics.innerHTML = data.metrics
      .map(m => `
        <div class="highlight-item">
          <div class="spec-item-num" style="font-size: 1.3rem;">${m.value}</div>
          <div class="spec-item-label">${m.label}</div>
        </div>
      `)
      .join('');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Bind to cards
  document.querySelectorAll('.open-case-study-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}
