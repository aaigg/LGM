// Boutique page initialization
// Sets year and renders product grid

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Catégories style "Member" (cartes cliquables)
  const CATEGORIES = [
    { title: 'LGM Software FiveM', desc: 'Suite outils FiveM (fictif).', anchor: '#lgm-software' },
    { title: 'Techniques LGM', desc: 'Guides et packs premium.', anchor: '#techniques' }
  ];

  const grid = document.getElementById('shopGrid');
  if (grid) {
    grid.innerHTML = CATEGORIES.map(c => `
      <a class="card" href="${c.anchor}" style="text-decoration:none;color:inherit">
        <div>
          <h3 style="margin:0 0 6px 0">${c.title}</h3>
          <p style="margin:0;opacity:.85;">${c.desc}</p>
        </div>
      </a>
    `).join('');
  }

  // Ancienne liste produits déplacée sous #techniques (si la section existe)
  const techSection = document.getElementById('techniquesGrid');
  if (techSection) {
    const PRODUCTS = [
      { title: 'Technique LGM #1', desc: 'Guide complet, mises à jour incluses.', price: '19,90€', url: '#' },
      { title: 'Technique LGM #2', desc: 'Exemples et cas pratiques.', price: '24,90€', url: '#' },
      { title: 'Pack Complet', desc: 'Toutes les techniques LGM à tarif réduit.', price: '59,90€', url: '#' },
    ];
    techSection.innerHTML = PRODUCTS.map(p => `
      <article class="card">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <p style="margin:10px 0; color:#ffe082; font-weight:700">${p.price}</p>
        <p><a class="btn btn-primary" href="${p.url}">Acheter</a></p>
      </article>
    `).join('');
  }
});