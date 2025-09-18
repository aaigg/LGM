// Configuration des vidéos YouTube de la communauté LGM
// Vidéos mises en avant + liste générale avec titres provisoires

const featuredVideos = [
  { id: "hNLRM2K3V1c", title: "Vidéo mise en avant #1 — Titre provisoire" },
  { id: "vU3rbvj5fUw", title: "Vidéo mise en avant #2 — Titre provisoire" },
  { id: "OH15L7PE6ZU", title: "Vidéo mise en avant #3 — Titre provisoire" }
];

const allVideos = [
  { id: "ylBQbqnx-SM", title: "Titre provisoire" },
  { id: "yWmr_6trVYQ", title: "Titre provisoire" },
  { id: "1G2GW1I-i4c", title: "Titre provisoire" },
  { id: "A7Cj8Trzeeo", title: "Titre provisoire" },
  { id: "hNLRM2K3V1c", title: "Titre provisoire" },
  { id: "vU3rbvj5fUw", title: "Titre provisoire" },
  { id: "OH15L7PE6ZU", title: "Titre provisoire" },
  { id: "iImCh314ut0", title: "Titre provisoire" },
  { id: "6rG7QhD_IVs", title: "Titre provisoire" },
  { id: "qC9BdeaL568", title: "Titre provisoire" }
];

const featuredSet = new Set(featuredVideos.map(v => v.id));
const videos = allVideos.filter(v => !featuredSet.has(v.id));

function renderVideos() {
  const grid = document.querySelector(".video-grid");
  if (!grid) return;
  grid.innerHTML = videos.map(v => `
    <article class="video">
      <div class="iframe-wrap">
        <iframe src="https://www.youtube.com/embed/${v.id}" title="${v.title}" allowfullscreen></iframe>
      </div>
      <div class="meta">${v.title}</div>
    </article>
  `).join("");
}

function renderFeatured(){
  const el = document.getElementById("featured");
  if(!el) return;
  el.innerHTML = featuredVideos.map(v => `
    <article class="video" style="box-shadow:0 0 0 2px #ffe082 inset;border-radius:12px;">
      <div class="iframe-wrap">
        <iframe src="https://www.youtube.com/embed/${v.id}" title="${v.title}" allowfullscreen></iframe>
      </div>
      <div class="meta" style="font-weight:700">${v.title}</div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderVideos();
});