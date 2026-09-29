/* DAMIEN.WORLD — Main Logic + Running Purple Sand Animation */
(function () {
  const D = window.SITE, $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const pic = (src, t) => src ? `<img src="${esc(src)}" alt="${esc(t)}" loading="lazy">` : `<div class="ph" role="img" aria-label="${esc(t)}"></div>`;

  /* Build Content */
  if ($('#animalGrid')) $('#animalGrid').innerHTML = D.animals.map(a => `<article class="acard"><div class="im">${pic(a.img, a.title)}</div><div class="t"><h3>${esc(a.title)}</h3><p>${esc(a.text)}</p></div></article>`).join('');
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('scrollShelfWrapper');
  const cards = Array.from(document.querySelectorAll('.coverflow-card'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const filterPills = document.querySelectorAll('.filter-pill');

  let currentIndex = 0;

  function updateCarousel() {
    cards.forEach((card, index) => {
      card.className = 'coverflow-card';
      const offset = index - currentIndex;

      if (offset === 0) {
        card.classList.add('active');
      } else if (offset === -1) {
        card.classList.add('prev-1');
      } else if (offset === 1) {
        card.classList.add('next-1');
      } else if (offset === -2) {
        card.classList.add('prev-2');
      } else if (offset === 2) {
        card.classList.add('next-2');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  // Scroll Progress Tracking (Changes cards seamlessly as user scrolls down)
  window.addEventListener('scroll', () => {
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const wrapperHeight = wrapper.offsetHeight;
    const viewportHeight = window.innerHeight;

    // Distance scrolled inside wrapper section
    const scrollDistance = -rect.top;
    const maxScroll = wrapperHeight - viewportHeight;

    if (scrollDistance >= 0 && scrollDistance <= maxScroll) {
      const progress = scrollDistance / maxScroll; // Progress ratio: 0.0 to 1.0
      const newIndex = Math.min(
        cards.length - 1,
        Math.floor(progress * cards.length)
      );

      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        updateCarousel();
      }
    }
  });

  // Manual Arrow Controls
  nextBtn?.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn?.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Direct Card Clicks
  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  // Filter Pill Selector
  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      if (pill.classList.contains('view-more')) return;
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // Initial update
  updateCarousel();
});
  if ($('#pgrid')) $('#pgrid').innerHTML = D.projects.map(p => `<article class="pitem" data-cat="${esc(p.cat)}"><div class="im">${pic(p.img, p.title)}</div><div class="t"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div></article>`).join('');
  if ($('#awardList')) $('#awardList').innerHTML = D.awards.map(a => `<li><span class="yr">${esc(a.year)}</span><h3>${esc(a.title)}</h3><span>${esc(a.by)}</span></li>`).join('');
  if ($('#yr')) $('#yr').textContent = new Date().getFullYear();    /* Filter buttons */   $$('.filters button').forEach(btn => btn.addEventListener('click', () => {
    $$('.filters button').forEach(b => b.classList.toggle('on', b === btn)); $$
      ('.pitem').forEach(p => p.hidden = btn.dataset.f !== 'all' && p.dataset.cat !== btn.dataset.f);
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }));

  /* Contact Form */
  if ($('#contact')) {
    $('#contact').addEventListener('submit', e => {
      e.preventDefault();
      const f = new FormData(e.target);
      location.href = `mailto:${D.email}?subject=${encodeURIComponent('Message from ' + f.get('name'))}&body=${encodeURIComponent(f.get('msg') + '\n\n' + f.get('email'))}`;
    });
  }

  /* Animations */
  const loader = $('#loader');
  if (!window.gsap || reduce) {
    if (loader) loader.remove();
    $$('[data-n]').forEach(n => n.textContent = n.dataset.n);
    startPurpleSand(false);
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* Page intro */
  gsap.timeline()
    .to('#loader span', { opacity: 0, y: -20, duration: .4, delay: .3 })
    .to(loader, { yPercent: -100, duration: .6, ease: 'power4.inOut', onComplete: () => loader.remove() })
    .from('.w', { yPercent: 100, opacity: 0, stagger: .07, duration: .8, ease: 'power4.out' }, '-=.2');

  /* Reveals */
  $$('[data-reveal]').forEach(el => gsap.from(el, { y: 30, opacity: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90\%' } })); gsap.to('.spine-line b', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: true } });    /* Counter stats */   $$
    ('[data-n]').forEach(n => {
      const o = { v: 0 };
      gsap.to(o, { v: +n.dataset.n, duration: 1.8, ease: 'power2.out', onUpdate: () => n.textContent = Math.round(o.v).toLocaleString(), scrollTrigger: { trigger: n, start: 'top 90%' } });
    });

  /* Cursor tracking */
  if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
    const cx = gsap.quickTo('.cursor', 'x', { duration: .15 }), cy = gsap.quickTo('.cursor', 'y', { duration: .15 });
    addEventListener('mousemove', e => { cx(e.clientX - 6); cy(e.clientY - 6); });
  }

  /* Start running purple sand animation */
  startPurpleSand(true);

  /* ---------- RUNNING PURPLE SAND CANVAS ANIMATION ---------- */
  function startPurpleSand(animate) {
    const canvas = $('#bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, time = 0;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    addEventListener('resize', resize);

    // Create running sand particles
    const particleCount = 140;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 0.5,
      vx: Math.random() * 0.8 + 0.2, // Movement horizontal
      vy: Math.random() * 0.3 - 0.15,
      alpha: Math.random() * 0.6 + 0.2,
      waveOffset: Math.random() * Math.PI * 2
    }));

    function draw() {
      ctx.clearRect(0, 0, W, H);
      time += 0.008;

      // 1. Fluid Ambient Purple Mesh Gradient Orbs (Top Right Glow)
      const grad = ctx.createRadialGradient(W * 0.8, H * 0.25, 50, W * 0.75, H * 0.3, W * 0.55);
      grad.addColorStop(0, 'rgba(168, 85, 247, 0.28)'); // Violet
      grad.addColorStop(0.5, 'rgba(99, 91, 255, 0.18)'); // Indigo
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // 2. Running Purple Sand Stream Waves
      particles.forEach((p, i) => {
        if (animate) {
          p.x += p.vx;
          p.y += Math.sin(time * 2 + p.waveOffset) * 0.5 + p.vy;

          // Loop sand around screen
          if (p.x > W) p.x = 0;
          if (p.y < 0) p.y = H;
          if (p.y > H) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 58, 237, ${p.alpha * 0.65})`;
        ctx.shadowBlur = p.r * 3;
        ctx.shadowColor = 'rgba(99, 91, 255, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      if (animate) requestAnimationFrame(draw);
    }

    draw();
  }
})();