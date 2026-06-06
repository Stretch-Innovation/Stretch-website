function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
}

function initNavScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function parseStatValue(raw: string) {
  const match = raw.match(/^([^0-9]*)([0-9]+)(.*)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    target: parseInt(match[2], 10),
    suffix: match[3],
  };
}

function animateCount(el: HTMLElement, target: number, prefix: string, suffix: string, duration = 1800) {
  const start = performance.now();
  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    el.textContent = `${prefix}${current}${suffix}`;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const raw = el.dataset.count ?? '';
        const parsed = parseStatValue(raw);
        if (parsed) {
          animateCount(el, parsed.target, parsed.prefix, parsed.suffix);
        } else {
          el.textContent = raw;
        }
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

function init() {
  initScrollReveal();
  initNavScroll();
  initCounters();
}

init();
document.addEventListener('astro:page-load', init);
