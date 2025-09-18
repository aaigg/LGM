// App global LGM — utilitaires et contenus dynamiques
// Sécurité: aucun eval, pas de inline JS, liens externes avec noopener

// Utilitaire: set footer year
(function setYear(){
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();

// Page Accueil: galerie YouTube avec miniatures
(function homeGallery(){
  var grid = document.getElementById('videosGrid');
  var player = document.getElementById('mainPlayer');
  if(!grid || !player) return;

  var VIDEO_IDS = [
    'ylBQbqnx-SM','yWmr_6trVYQ','1G2GW1I-i4c','A7Cj8Trzeeo','hNLRM2K3V1c','vU3rbvj5fUw','iImCh314ut0','Z0zslzdn0hc','MrLYZ246PG4','OH15L7PE6ZU','6rG7QhD_IVs','UQIbWK-UIOU','qC9BdeaL568'
  ];

  function thumbUrl(id){ return 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg'; }
  function embedUrl(id){ return 'https://www.youtube.com/embed/' + id + '?rel=0&autoplay=1'; }

  VIDEO_IDS.forEach(function(id, idx){
    var btn = document.createElement('button');
    btn.className = 'thumb';
    btn.type = 'button';
    btn.dataset.id = id;
    btn.innerHTML = '\n      <img src="'+thumbUrl(id)+'" alt="Miniature vidéo '+(idx+1)+'" loading="lazy" referrerpolicy="no-referrer" />\n      <div class="overlay">Regarder</div>\n    ';
    btn.addEventListener('click', function(){
      document.querySelectorAll('.thumb').forEach(function(t){ t.classList.remove('active'); });
      btn.classList.add('active');
      player.src = embedUrl(id);
      btn.scrollIntoView({behavior:'smooth', block:'center'});
    });
    grid.appendChild(btn);
  });

  if(VIDEO_IDS.length>0){
    player.src = embedUrl(VIDEO_IDS[0]);
    setTimeout(function(){ var first = document.querySelector('.thumb'); if(first) first.classList.add('active'); }, 50);
  }
})();

// Page Tutos: liste simple
(function tutos(){
  var list = document.getElementById('tutosList');
  if(!list) return;
  var TUTOS = [
    { title: 'Débuter avec LGM', desc: 'Présentation de la commu et des outils.', url: '#' },
    { title: 'Créer un projet', desc: 'Étapes clés pour lancer votre projet.', url: '#' },
    { title: 'Participer aux lives', desc: 'Comment interagir et poser vos questions.', url: '#' }
  ];
  list.innerHTML = TUTOS.map(function(t){
    return '\n      <article class="card">\n        <h3>'+t.title+'</h3>\n        <p>'+t.desc+'</p>\n        <p style="margin-top:10px"><a class="btn btn-primary" href="'+t.url+'" target="_blank" rel="noopener noreferrer">Ouvrir</a></p>\n      </article>\n    ';
  }).join('');
})();

// Page Boutique: produits
(function shop(){
  var grid = document.getElementById('shopGrid');
  if(!grid) return;
  var PRODUCTS = [
    { title: 'Technique LGM #1', desc: 'Guide complet, mises à jour incluses.', price: '19,90€', url: '#' },
    { title: 'Technique LGM #2', desc: 'Exemples et cas pratiques.', price: '24,90€', url: '#' },
    { title: 'Pack Complet', desc: 'Toutes les techniques LGM à tarif réduit.', price: '59,90€', url: '#' }
  ];
  grid.innerHTML = PRODUCTS.map(function(p){
    return '\n      <article class="card">\n        <h3>'+p.title+'</h3>\n        <p>'+p.desc+'</p>\n        <p style="margin:10px 0; color:#ffe082; font-weight:700">'+p.price+'</p>\n        <p><a class="btn btn-primary" href="'+p.url+'" target="_blank" rel="noopener noreferrer">Acheter</a></p>\n      </article>\n    ';
  }).join('');
})();// App global LGM — utilitaires et contenus dynamiques
// Sécurité: aucun eval, pas de inline JS, liens externes avec noopener

// Utilitaire: set footer year
(function setYear(){
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();

// Page Accueil: galerie YouTube avec miniatures
(function homeGallery(){
  var grid = document.getElementById('videosGrid');
  var player = document.getElementById('mainPlayer');
  if(!grid || !player) return;

  var VIDEO_IDS = [
    'ylBQbqnx-SM','yWmr_6trVYQ','1G2GW1I-i4c','A7Cj8Trzeeo','hNLRM2K3V1c','vU3rbvj5fUw','iImCh314ut0','Z0zslzdn0hc','MrLYZ246PG4','OH15L7PE6ZU','6rG7QhD_IVs','UQIbWK-UIOU','qC9BdeaL568'
  ];

  function thumbUrl(id){ return 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg'; }
  function embedUrl(id){ return 'https://www.youtube.com/embed/' + id + '?rel=0&autoplay=1'; }

  VIDEO_IDS.forEach(function(id, idx){
    var btn = document.createElement('button');
    btn.className = 'thumb';
    btn.type = 'button';
    btn.dataset.id = id;
    btn.innerHTML = '\n      <img src="'+thumbUrl(id)+'" alt="Miniature vidéo '+(idx+1)+'" loading="lazy" referrerpolicy="no-referrer" />\n      <div class="overlay">Regarder</div>\n    ';
    btn.addEventListener('click', function(){
      document.querySelectorAll('.thumb').forEach(function(t){ t.classList.remove('active'); });
      btn.classList.add('active');
      // Load muted to allow autoplay in most browsers, user can unmute with the button
      player.src = embedUrl(id) + '&mute=1';
      btn.scrollIntoView({behavior:'smooth', block:'center'});
    });
    grid.appendChild(btn);
  });

  if(VIDEO_IDS.length>0){
    // start first video muted so autoplay works
    player.src = embedUrl(VIDEO_IDS[0]) + '&mute=1';
    setTimeout(function(){ var first = document.querySelector('.thumb'); if(first) first.classList.add('active'); }, 50);
  }
})();

// Page Tutos: liste simple
(function tutos(){
  var list = document.getElementById('tutosList');
  if(!list) return;
  var TUTOS = [
    { title: 'Débuter avec LGM', desc: 'Présentation de la commu et des outils.', url: '#' },
    { title: 'Créer un projet', desc: 'Étapes clés pour lancer votre projet.', url: '#' },
    { title: 'Participer aux lives', desc: 'Comment interagir et poser vos questions.', url: '#' }
  ];
  list.innerHTML = TUTOS.map(function(t){
    return '\n      <article class="card">\n        <h3>'+t.title+'</h3>\n        <p>'+t.desc+'</p>\n        <p style="margin-top:10px"><a class="btn btn-primary" href="'+t.url+'" target="_blank" rel="noopener noreferrer">Ouvrir</a></p>\n      </article>\n    ';
  }).join('');
})();

// Page Boutique: produits
(function shop(){
  var grid = document.getElementById('shopGrid');
  if(!grid) return;
  var PRODUCTS = [
    { title: 'Technique LGM #1', desc: 'Guide complet, mises à jour incluses.', price: '19,90€', url: '#' },
    { title: 'Technique LGM #2', desc: 'Exemples et cas pratiques.', price: '24,90€', url: '#' },
    { title: 'Pack Complet', desc: 'Toutes les techniques LGM à tarif réduit.', price: '59,90€', url: '#' }
  ];
  grid.innerHTML = PRODUCTS.map(function(p){
    return '\n      <article class="card">\n        <h3>'+p.title+'</h3>\n        <p>'+p.desc+'</p>\n        <p style="margin:10px 0; color:#ffe082; font-weight:700">'+p.price+'</p>\n        <p><a class="btn btn-primary" href="'+p.url+'" target="_blank" rel="noopener noreferrer">Acheter</a></p>\n      </article>\n    ';
  }).join('');
})();

// Lecteur radio supprimé — remplacé par bouton simple intégré dans les pages HTML.
// Ce fichier ne gère plus de barre radio globale.