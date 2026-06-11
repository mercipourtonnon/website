// mercipourtonnon — site behaviors ported from the original static site.
// Loaded on every page (defer, body-end). Team-card flip is pure CSS;
// testimonial reveal is handled by Sovrium's scroll-animation runtime;
// smooth anchor scrolling is CSS (scroll-behavior + scroll-margin-top).
(function () {
  'use strict';

  // ── Workshop dates ────────────────────────────────────────────────────────
  var workshopDates = [
    new Date('2026-01-18T10:00:00'),
    new Date('2026-02-28T10:00:00'),
    new Date('2026-03-21T10:00:00'),
    new Date('2026-04-18T10:00:00'),
    new Date('2026-05-30T10:00:00'),
    new Date('2026-06-20T10:00:00')
  ];

  function getNextWorkshop() {
    // A session stays "next" for the whole day it happens; once all dates
    // have passed, return null so the static fallback text is kept rather
    // than displaying a stale date as "next" (bug in the old site).
    var startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    var next = workshopDates.find(function (d) { return d >= startOfToday; });
    return next || null;
  }

  function formatDate(date) {
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
  }

  function formatDateWithYear(date) {
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function injectDates() {
    var next = getNextWorkshop();
    if (!next) return;
    var heroDate = document.getElementById('hero-next-date');
    if (heroDate) heroDate.textContent = formatDate(next);
    var registrationDate = document.getElementById('registration-date');
    if (registrationDate) registrationDate.textContent = formatDateWithYear(next);
  }

  // ── Mobile menu: close when a menu link is clicked ───────────────────────
  // The hamburger / close button / overlay toggle #mobile-menu via Sovrium's
  // built-in toggleElement interaction (inline style.display). Menu links
  // navigate to anchors, so we just hide the menu on click.
  function initMobileMenuClose() {
    var menu = document.getElementById('mobile-menu');
    if (!menu) return;
    menu.addEventListener('click', function (e) {
      if (e.target.closest('.mobile-nav-link') || e.target.id === 'menu-overlay') {
        menu.style.display = 'none';
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.style.display !== 'none') {
        menu.style.display = 'none';
      }
    });
  }

  // ── Scroll-spy: highlight the nav link of the section in view ────────────
  function initScrollSpy() {
    var ids = ['atelier', 'temoignages', 'pour-qui', 'programme', 'infos-pratiques',
               'mission', 'valeurs', 'equipe', 'faq', 'newsletter'];
    var desktopLinks = document.querySelectorAll('.nav-link');
    var mobileLinks = document.querySelectorAll('.mobile-nav-link');
    if (!desktopLinks.length && !mobileLinks.length) return;
    var nav = document.querySelector('nav');

    function updateActiveNav() {
      var totalOffset = nav ? nav.offsetHeight : 0;
      var scrollPosition = window.scrollY + totalOffset + 100;
      var currentSection = '';

      ids.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) {
          var top = element.offsetTop;
          if (scrollPosition >= top && scrollPosition < top + element.offsetHeight) {
            currentSection = '#' + id;
          }
        }
      });

      desktopLinks.forEach(function (link) {
        var active = link.getAttribute('href') === currentSection;
        link.classList.toggle('!text-orange', active);
        link.classList.toggle('border-b-2', active);
        link.classList.toggle('border-orange', active);
      });

      mobileLinks.forEach(function (link) {
        var active = link.getAttribute('href') === currentSection;
        link.classList.toggle('!text-orange', active);
        link.classList.toggle('!bg-orange-light', active);
        link.classList.toggle('border-l-4', active);
        link.classList.toggle('border-orange', active);
      });
    }

    updateActiveNav();
    var scrollTimeout;
    window.addEventListener('scroll', function () {
      if (scrollTimeout) window.cancelAnimationFrame(scrollTimeout);
      scrollTimeout = window.requestAnimationFrame(updateActiveNav);
    });
  }

  function init() {
    injectDates();
    initMobileMenuClose();
    initScrollSpy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
