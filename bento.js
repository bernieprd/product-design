document.addEventListener('DOMContentLoaded', () => {

  // ─── Behavior 1: Project card tap-to-reveal overlay (touch only) ───────────

  const isTouch = window.matchMedia('(hover: none)').matches;

  if (isTouch) {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
      card.addEventListener('click', e => {
        if (card.classList.contains('overlay-active')) {
          // Second tap — allow navigation
          return;
        }
        // First tap — reveal overlay
        e.preventDefault();
        projectCards.forEach(c => c.classList.remove('overlay-active'));
        card.classList.add('overlay-active');
      });
    });

    document.addEventListener('click', e => {
      if (!e.target.closest('.project-card')) {
        projectCards.forEach(c => c.classList.remove('overlay-active'));
      }
    });
  }

  // ─── Lightbox open/close helpers ────────────────────────────────────────────

  const lightbox = document.getElementById('lightbox');
  const lightboxContent = lightbox.querySelector('.lightbox-content');
  const lightboxPanel = lightbox.querySelector('.lightbox-panel');
  const lightboxBackdrop = lightbox.querySelector('.lightbox-backdrop');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  const openLightbox = () => {
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.setAttribute('hidden', '');
    lightboxContent.innerHTML = '';
    document.body.style.overflow = '';
  };

  lightboxBackdrop.addEventListener('click', closeLightbox);
  lightboxClose.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !lightbox.hasAttribute('hidden')) {
      closeLightbox();
    }
  });

  // Swipe down to close on mobile
  let touchStartY = 0;
  lightboxPanel.addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  lightboxPanel.addEventListener('touchmove', e => {
    if (e.touches[0].clientY - touchStartY > 80) {
      closeLightbox();
    }
  }, { passive: true });

  // ─── Behavior 2: Preview lightbox ───────────────────────────────────────────

  const previews = {
    calendar: {
      meta: 'Rover · 2023',
      title: 'Calendar',
      images: []
    },
    filters: {
      meta: 'Rover · 2021',
      title: 'Suggesting filters based on prompt',
      images: []
    }
  };

  const buildPreviewContent = key => {
    const data = previews[key];
    if (!data) return;

    const meta = document.createElement('span');
    meta.className = 'lightbox-meta';
    meta.textContent = data.meta;

    const title = document.createElement('h2');
    title.className = 'lightbox-title';
    title.textContent = data.title;

    lightboxContent.appendChild(meta);
    lightboxContent.appendChild(title);

    if (data.images.length > 0) {
      data.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        lightboxContent.appendChild(img);
      });
    } else {
      const placeholder = document.createElement('p');
      placeholder.className = 'lightbox-text';
      placeholder.textContent = 'Preview images coming soon.';
      lightboxContent.appendChild(placeholder);
    }
  };

  document.querySelectorAll('.preview-card[data-preview]').forEach(card => {
    const open = () => {
      const key = card.dataset.preview;
      buildPreviewContent(key);
      openLightbox();
    };
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

  // ─── Behavior 3: Overflow read-more ─────────────────────────────────────────

  document.querySelectorAll('.overflow-readmore').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.overflowTarget;
      let sourceCard;

      if (target === 'bio') {
        sourceCard = document.querySelector('#card-bio .card-inner');
      } else if (target === 'experience') {
        sourceCard = document.querySelector('#card-experience .card-inner');
      }

      if (!sourceCard) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'lightbox-text';
      wrapper.appendChild(sourceCard.cloneNode(true));
      lightboxContent.appendChild(wrapper);
      openLightbox();
    });
  });

});
