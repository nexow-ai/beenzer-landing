/**
 * One clock for the whole page: Lenis smooths the scroll and feeds
 * ScrollTrigger from GSAP's ticker, so the globe, the phone and the reveals
 * all read the same scroll position on the same frame.
 *
 * With prefers-reduced-motion, Lenis tracks input 1:1, nothing reveals and
 * the CSS in global.css keeps every block visible.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;

function headerOffset() {
  return -(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72) - 12;
}

/** Scroll to an element or a y position through Lenis when it runs, natively otherwise. */
export function scrollToTarget(target: HTMLElement | number) {
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === 'number' ? 0 : headerOffset(), duration: 1.6 });
    return;
  }
  const y = typeof target === 'number' ? target : target.getBoundingClientRect().top + window.scrollY + headerOffset();
  window.scrollTo({ top: y, behavior: reducedMotion() ? 'auto' : 'smooth' });
}

function smoothScroll() {
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, allowNestedScroll: true });
  // Lenis rewrites <html>'s classes each time scrolling starts or stops
  // (lenis-scrolling, lenis-smooth), and every rewrite restyles the whole
  // page mid-scroll. The site only needs "lenis" and "lenis-stopped".
  const root = document.documentElement;
  const instance = lenis;
  const updateClassName = () => {
    root.classList.add('lenis');
    root.classList.toggle('lenis-stopped', instance.isStopped);
  };
  // Private in Lenis's types (1.3.26), but its own code calls it through the instance.
  (instance as unknown as { updateClassName: () => void }).updateClassName = updateClassName;
  updateClassName();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  window.addEventListener('scroll-lock', () => lenis?.stop());
  window.addEventListener('scroll-unlock', () => lenis?.start());
}

/** Links to a section of the page they are on scroll there instead of reloading. */
function sectionLinks() {
  document.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="#"]');
    if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;
    event.preventDefault();
    history.pushState(null, '', url.hash);
    scrollToTarget(target);
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
}

function reveals() {
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 90%',
    once: true,
    onEnter: (elements) =>
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.08,
        overwrite: true,
      }),
  });

  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        gsap.set(el, { visibility: 'visible' });
        return gsap.from(self.lines, {
          yPercent: 115,
          duration: 1.3,
          ease: 'expo.out',
          stagger: 0.09,
          delay: Number(el.dataset.splitDelay ?? 0),
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      },
    });
  });
}

/** Blocks with looping animations pause them while off-screen: [data-anim] in global.css. */
function pauseOffscreen() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.target.setAttribute('data-anim', e.isIntersecting ? 'on' : 'off')),
    { rootMargin: '120px 0px' },
  );
  document.querySelectorAll('[data-anim]').forEach((el) => io.observe(el));
}

/**
 * Browsers fetch a video's poster as soon as they parse it. These sit far
 * down the page: give each its poster when it comes within a screen or two.
 */
function lazyPosters() {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const video = e.target as HTMLVideoElement;
        video.poster = video.dataset.poster ?? '';
        io.unobserve(video);
      }),
    { rootMargin: '150% 0px' },
  );
  document.querySelectorAll('video[data-poster]').forEach((v) => io.observe(v));
}

export function startMotion() {
  sectionLinks();
  pauseOffscreen();
  lazyPosters();
  if (reducedMotion()) return;
  document.documentElement.classList.add('motion');
  smoothScroll();
  // Fonts change line breaks, and line breaks move every trigger below them.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  reveals();

  // Arriving on /#section from another page: let layout settle, then glide there.
  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => setTimeout(() => scrollToTarget(target), 60));
  }
}
