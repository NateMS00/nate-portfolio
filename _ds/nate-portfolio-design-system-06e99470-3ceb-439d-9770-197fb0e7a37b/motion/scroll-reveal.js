/* Scroll reveal — Nate Portfolio Design System
 *
 * Reveals section headings and subtitles once, the first time they enter the
 * viewport: opacity 0 -> 1, translateY(20px) -> 0, ~550ms ease-out, with a
 * ~90ms stagger between siblings in the same section. Values come from
 * tokens/motion.css; this file only decides WHAT reveals and WHEN.
 *
 * Usage
 *   <link rel="stylesheet" href=".../tokens/motion.css">
 *   <script src=".../motion/scroll-reveal.js"></script>
 *   <div data-reveal-root> ... your page ... </div>
 *
 * Inside a [data-reveal-root], every section (section, .about-section,
 * [data-reveal-section]) has its heading-level children revealed in document
 * order. Opt a single element in or out explicitly with data-reveal / 
 * data-reveal="off".
 *
 * prefers-reduced-motion: nothing is touched — content renders in its final
 * state. Same with no IntersectionObserver support.
 *
 * API: window.NateScrollReveal.refresh() — re-scan after routing or injecting
 * new content (already-revealed elements are never reset).
 */
(function(){
  var DEFAULT_TARGETS = [
    '.section-eyebrow', '.section-title', 'h1.title', '.kicker', '.dek',
    '.sec-head', '.about-label', '.about-hero h1', '.about-hero .bio',
    'p.body-text', '.exp-head'
  ].join(',');
  var SECTIONS = 'section,.about-section,[data-reveal-section]';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var observer = null;

  function reveal(el){
    el.classList.add('is-revealed');
  }

  function collect(){
    var groups = [];
    var roots = document.querySelectorAll('[data-reveal-root]');
    for (var r = 0; r < roots.length; r++){
      var sections = roots[r].querySelectorAll(SECTIONS);
      for (var s = 0; s < sections.length; s++){
        var found = sections[s].querySelectorAll(DEFAULT_TARGETS + ',[data-reveal]');
        var list = [];
        for (var i = 0; i < found.length; i++){
          var el = found[i];
          if (el.getAttribute('data-reveal') === 'off') continue;
          if (el.closest(SECTIONS) !== sections[s]) continue;
          list.push(el);
        }
        if (list.length) groups.push(list);
      }
    }
    return groups;
  }

  function init(){
    if (reduce || !('IntersectionObserver' in window)) return;
    if (!observer){
      observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      }, {rootMargin: '0px 0px -8% 0px', threshold: 0.12});
    }
    collect().forEach(function(group){
      group.forEach(function(el, i){
        if (el.dataset.dsRevealBound) return;
        el.dataset.dsRevealBound = '1';
        el.classList.add('ds-reveal');
        if (i > 0) el.style.transitionDelay = 'calc(var(--reveal-stagger) * ' + i + ')';
        observer.observe(el);
      });
    });
  }

  window.NateScrollReveal = {refresh: init};
  // The script may load before OR after the markup exists (static pages, client-side
  // routing, streaming runtimes), so schedule several passes instead of assuming one.
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('load', init);
  requestAnimationFrame(init);
  setTimeout(init, 200);
  setTimeout(init, 900);
  init();
})();
