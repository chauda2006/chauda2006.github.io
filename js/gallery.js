/**
 * NEON ART UNIVERSE — ART GALLERY CONTROLLER & LIGHTBOX
 * Author: Châu Tiến Đạt
 */

const GALLERY_DATA = [
  {
    title: 'Cybernetic Gear Core',
    subtitle: 'Digital Vector • Parametric Synthesis',
    description: 'An intricate mechanical study combining slow-rotating gear constellations with illuminated crimson and emerald circuit pathways.',
    image: './assets/images/gallery/art-gear-core.svg',
    medium: 'Scalable Vector Graphic (SVG)',
    year: '2026'
  },
  {
    title: 'Neon Crimson Drifter',
    subtitle: 'Synthwave Concept • Retro-Futuristic Vector',
    description: 'A study of cybernetic speed and energy trails navigating through an obsidian perspective horizon under a segmented digital sun.',
    image: './assets/images/gallery/art-crimson-drift.svg',
    medium: 'Vector Illustration & Gradient Grids',
    year: '2026'
  },
  {
    title: 'Emerald Data Stream',
    subtitle: 'Kinetic Cipher • Cybernetic Pipeline Art',
    description: 'Visualizing packet flow across micro-architectural conduits. Emerald data packets coursing through dark substrate memory arrays.',
    image: './assets/images/gallery/art-emerald-stream.svg',
    medium: 'Algorithmic Vector Art',
    year: '2026'
  },
  {
    title: 'Obsidian Labyrinth',
    subtitle: 'Isometric Schematic • Computational Architecture',
    description: 'An isometric architectural blueprint exploring interconnected data nodes, bridging monolithic structures with laser transmission bridges.',
    image: './assets/images/gallery/art-blueprint.svg',
    medium: 'Isometric Technical Vector',
    year: '2026'
  },
  {
    title: 'Synapse & Silicon',
    subtitle: 'Bio-Digital Hybrid • Neural Interface Concept',
    description: 'Exploring the boundary where organic dendrites intertwine with silicon traces, establishing an instantaneous neural-computational bridge.',
    image: './assets/images/gallery/art-synapse.svg',
    medium: 'Hybrid Neural Vector',
    year: '2026'
  },
  {
    title: 'Aurora Protocol',
    subtitle: 'Parametric Crystal • Harmonic Wave Matrix',
    description: 'Multifaceted polyhedral crystal suspended in electromagnetic rings, scattering crimson and emerald photons into obsidian space.',
    image: './assets/images/gallery/art-aurora.svg',
    medium: 'Geometric Polyhedral Art',
    year: '2026'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initGalleryLightbox();
});

function initGalleryLightbox() {
  const lightboxOverlay = document.getElementById('gallery-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxSubtitle = document.getElementById('lightbox-subtitle');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxMeta = document.getElementById('lightbox-meta');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  if (!lightboxOverlay) return;

  let currentIndex = 0;

  function showItem(index) {
    if (index < 0) index = GALLERY_DATA.length - 1;
    if (index >= GALLERY_DATA.length) index = 0;
    currentIndex = index;

    const item = GALLERY_DATA[currentIndex];
    lightboxImage.src = item.image;
    lightboxImage.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxSubtitle.textContent = item.subtitle;
    lightboxDesc.textContent = item.description;
    lightboxMeta.textContent = `${item.medium} • ${item.year} • Item ${currentIndex + 1} of ${GALLERY_DATA.length}`;
  }

  function openLightbox(index) {
    showItem(index);
    lightboxOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Bind gallery items
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.getAttribute('data-index'), 10) || 0;
      openLightbox(index);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showItem(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showItem(currentIndex + 1));

  lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (!lightboxOverlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showItem(currentIndex - 1);
    if (e.key === 'ArrowRight') showItem(currentIndex + 1);
  });
}
