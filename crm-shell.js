// Společné postranní menu pro stránky CRM. Použití: <body data-page="dotace"> a <script src="crm-shell.js"></script>
(function () {
  const ico = {
    home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4.5a3.2 3.2 0 0 1 0 6.3M18 14.3c1.8.8 3 2.6 3 4.7"/>',
    plus: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
    doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.7 0-3 1-3 2.2 0 2.8 6 1.4 6 4.3 0 1.2-1.3 2.3-3 2.3-1.1 0-2.2-.6-2.7-1.6M12 6v2M12 16v2"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    check: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12l3 3 5-6"/>',
    back: '<path d="M15 18l-6-6 6-6"/>',
  };
  const svg = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ico[n]}</svg>`;
  const page = document.body.dataset.page;
  const item = (href, label, icon, id) => `<a class="sb-item${id === page ? ' active' : ''}" href="${href}">${svg(icon)}${label}</a>`;
  const html = `
  <nav id="sidebar" aria-label="Menu CRM">
    <a class="sb-logo" href="reentry-crm.html"><img src="img/logo/reentry-znak.svg" alt=""><span><b>REENTRY</b><span>Institut podmíněného propuštění</span></span></a>
    <div class="sb-nav">
      <div class="sb-label">Přehled</div>
      ${item('reentry-crm.html#dashboard', 'Přehled', 'home', 'dashboard')}
      <div class="sb-label">Klienti</div>
      ${item('reentry-crm.html#clients', 'Klienti', 'users', 'clients')}
      ${item('reentry-crm.html#new-client', 'Nový klient', 'plus', 'new-client')}
      <div class="sb-label">Analytika</div>
      ${item('reentry-crm.html#court-report', 'Zpráva pro soud', 'doc', 'court-report')}
      ${item('reentry-crm.html#stats', 'Statistiky a KPI', 'chart', 'stats')}
      <div class="sb-label">Organizace</div>
      ${item('crm-dotace.html', 'Dotace', 'coin', 'dotace')}
      ${item('crm-ucetnictvi.html', 'Účetnictví', 'book', 'ucetnictvi')}
      ${item('crm-dokumenty.html', 'Dokumenty', 'folder', 'dokumenty')}
      ${item('checklist.html', 'Checklist', 'check', 'checklist')}
      <div class="sb-label">Správa</div>
      ${item('reentry-crm.html#settings', 'Nastavení', 'gear', 'settings')}
      ${item('index.html', '← Web', 'back', 'web')}
    </div>
  </nav>
  <div id="overlay"></div>`;
  document.body.insertAdjacentHTML('afterbegin', html);
  const sb = document.getElementById('sidebar'), ov = document.getElementById('overlay');
  const toggle = open => { sb.classList.toggle('open', open); ov.classList.toggle('open', open); };
  document.addEventListener('click', e => {
    if (e.target.closest('.hamburger')) toggle(!sb.classList.contains('open'));
    else if (e.target === ov) toggle(false);
  });
  window.CRM = {
    esc: s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])),
    kc: n => (Number(n) || 0).toLocaleString('cs-CZ', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + ' Kč',
    dt: s => { if (!s) return ''; const [y, m, d] = String(s).split('-'); return d ? `${+d}. ${+m}. ${y}` : s; },
    today: () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; },
    daysTo: s => { if (!s) return null; const [y, m, d] = s.split('-').map(Number); const t = new Date(y, m - 1, d); const n = new Date(); n.setHours(0, 0, 0, 0); return Math.round((t - n) / 86400000); },
    download: (name, text, type = 'text/plain') => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500); },
  };
})();
