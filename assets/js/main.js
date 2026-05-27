/* ─── Matrix rain ───────────────────────────────────────────── */
(function () {
  var canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var cols, drops;
  var chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ'.split('');
  var fontSize = 14;

  function init() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.floor(canvas.width / fontSize);
    drops = Array(cols).fill(1);
  }

  function draw() {
    ctx.fillStyle = 'rgba(5,7,8,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px JetBrains Mono, monospace';
    for (var i = 0; i < drops.length; i++) {
      var ch = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  init();
  window.addEventListener('resize', init);
  setInterval(draw, 50);
})();

/* ─── Footer timestamp ──────────────────────────────────────── */
(function () {
  var el = document.getElementById('footer-time');
  if (!el) return;
  function update() {
    var now = new Date();
    var opts = { timeZone: 'Europe/Istanbul', hour12: false };
    var date = now.toLocaleDateString('tr-TR', { ...opts, year: 'numeric', month: '2-digit', day: '2-digit' });
    var time = now.toLocaleTimeString('tr-TR', { ...opts, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    var parts = date.split('.');
    el.textContent = parts[2] + '-' + parts[1] + '-' + parts[0] + ' ' + time;
  }
  update();
  setInterval(update, 1000);
})();
/* ─── Typewriter ────────────────────────────────────────────── */
function typewriter(el, texts, typingSpeed, deletingSpeed, delayBetween) {
  var idx = 0, charIdx = 0, deleting = false;
  var cursor = document.createElement('span');
  cursor.className = 'cursor';
  cursor.textContent = '\u2588';

  function tick() {
    var current = texts[idx];
    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        el.appendChild(cursor);
        setTimeout(function () { deleting = true; tick(); }, delayBetween);
        return;
      }
    } else {
      if (cursor.parentNode === el) el.removeChild(cursor);
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        idx = (idx + 1) % texts.length;
      }
    }
    setTimeout(tick, deleting ? deletingSpeed : typingSpeed);
  }
  tick();
}

/* ─── Hero typewriter ───────────────────────────────────────── */
(function () {
  var el = document.getElementById('hero-typewriter');
  if (!el) return;
  typewriter(el,
    ['> Bug Hunter', '> Security Researcher', '> Security Analyst', '> Penetration Tester', '> Freelance Cyber Security', '> Programmer'],
    50, 25, 1400
  );
})();

/* ─── Section heading typewriter on scroll ──────────────────── */
(function () {
  var headings = document.querySelectorAll('.section-heading[data-title]');
  if (!headings.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !entry.target.dataset.typed) {
        entry.target.dataset.typed = '1';
        var label = entry.target.querySelector('.section-heading-label');
        var full = entry.target.dataset.title;
        label.textContent = '';
        var i = 0;
        (function type() {
          if (i < full.length) {
            label.textContent += full[i++];
            setTimeout(type, 30);
          }
        })();
      }
    });
  }, { threshold: 0.2 });
  headings.forEach(function (h) { observer.observe(h); });
})();

/* ─── Scroll path tracking ──────────────────────────────────── */
(function () {
  var pathEl = document.getElementById('current-path');
  if (!pathEl) return;
  var sections = ['about','platforms','skills','projects','blog','activity','hire'];
  window.addEventListener('scroll', function () {
    var current = '~/';
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 200) current = '~/' + id;
    });
    pathEl.textContent = ' ' + current;
  }, { passive: true });
})();

/* ─── Fade-up on scroll ─────────────────────────────────────── */
(function () {
  var els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  els.forEach(function (el) { observer.observe(el); });
})();

/* ─── Copy to clipboard ─────────────────────────────────────── */
function copyText(text, label) {
  navigator.clipboard.writeText(text).then(function () {
    var toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = label + ' copied to clipboard';
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 2800);
  });
}
