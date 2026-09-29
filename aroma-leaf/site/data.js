/* Aroma-Leaf — données produits, contacts et illustrations (partagées par le site et les visuels) */
(function () {
  const CONTACT = {
    brand: "Aroma-Leaf",
    tagline: "Thés & cafés d'exception, from Kenya",
    phones: ["+226 76 76 61 56", "+226 70 72 89 94"],
    whatsapp: "22676766156", // numéro WhatsApp principal (à confirmer)
    place: "Ouaga 2000, Ouagadougou",
    facebook: "Aroma-Leaf from KENYA",
    facebookUrl: "https://www.facebook.com/search/top?q=Aroma-Leaf%20Ouagadougou",
  };

  /* ---------- Illustrations (SVG, viewBox 0 0 200 200) ---------- */
  const leaf = (x, y, len, w, rot, fill, vein) =>
    `<g transform="translate(${x} ${y}) rotate(${rot})"><path d="M0 0 C ${w / 2} ${-len * 0.28}, ${w / 2} ${-len * 0.78}, 0 ${-len} C ${-w / 2} ${-len * 0.78}, ${-w / 2} ${-len * 0.28}, 0 0 Z" fill="${fill}"/>` +
    (vein ? `<path d="M0 -2 L0 ${-len * 0.9}" stroke="${vein}" stroke-width="1.6" stroke-linecap="round" fill="none"/>` +
      [0.3, 0.5, 0.7].map(t => `<path d="M0 ${-len * t} l${w * 0.22} ${-len * 0.1} M0 ${-len * t} l${-w * 0.22} ${-len * 0.1}" stroke="${vein}" stroke-width="1" stroke-linecap="round" fill="none" opacity=".7"/>`).join("") : "") +
    `</g>`;

  const petalRing = (n, fill, len, w, extra = "") =>
    Array.from({ length: n }, (_, i) =>
      `<g transform="rotate(${(360 / n) * i})"><path d="M0 0 C ${w} ${-len * 0.25}, ${w * 1.1} ${-len * 0.85}, 0 ${-len} C ${-w * 1.1} ${-len * 0.85}, ${-w} ${-len * 0.25}, 0 0 Z" fill="${fill}" ${extra}/></g>`
    ).join("");

  const lemonSlice = (x, y, r, rind, flesh, pith) => {
    const segs = Array.from({ length: 9 }, (_, i) => {
      const a0 = (i * 40 + 4) * Math.PI / 180, a1 = ((i + 1) * 40 - 4) * Math.PI / 180, rr = r * 0.8;
      return `<path d="M${Math.cos(a0) * 4} ${Math.sin(a0) * 4} L${Math.cos(a0) * rr} ${Math.sin(a0) * rr} A${rr} ${rr} 0 0 1 ${Math.cos(a1) * rr} ${Math.sin(a1) * rr} Z" fill="${flesh}"/>`;
    }).join("");
    return `<g transform="translate(${x} ${y})"><circle r="${r}" fill="${rind}"/><circle r="${r * 0.9}" fill="${pith}"/>${segs}<circle r="3" fill="${pith}"/></g>`;
  };

  const teaSprig = (x, y, s, dark, mid, vein) =>
    `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 40 C 2 10, 4 -20, 0 -60" stroke="${dark}" stroke-width="4" fill="none" stroke-linecap="round"/>` +
    leaf(0, -56, 36, 16, 0, mid, vein) + leaf(1, -20, 62, 30, -48, dark, vein) + leaf(2, 5, 66, 32, 52, mid, vein) + leaf(1, 28, 50, 26, -62, dark, vein) + `</g>`;

  const ILLUS = {
    black: () =>
      `<ellipse cx="100" cy="168" rx="70" ry="10" fill="#000" opacity=".18"/>` +
      teaSprig(100, 112, 1.25, "#a55d27", "#cf8a45", "#f3d19c") +
      `<path d="M62 44 c-6 -10 6 -14 0 -26 M100 30 c-6 -10 6 -14 0 -26 M138 44 c-6 -10 6 -14 0 -26" stroke="#f3dcb0" stroke-width="3" fill="none" stroke-linecap="round" opacity=".55"/>`,
    spiced: () =>
      `<g transform="rotate(-22 100 100)"><rect x="30" y="86" width="140" height="22" rx="11" fill="#8a4a22"/><rect x="30" y="90" width="140" height="6" rx="3" fill="#a9622f"/><ellipse cx="168" cy="97" rx="7" ry="11" fill="#5e2e12"/><path d="M168 90 a4 5 0 1 1 -1 10" stroke="#a9622f" stroke-width="2" fill="none"/>` +
      `<rect x="36" y="112" width="128" height="18" rx="9" fill="#7a3f1b"/><ellipse cx="162" cy="121" rx="6" ry="9" fill="#4e240d"/></g>` +
      [[58, 58], [138, 150], [150, 60]].map(([x, y]) => `<g transform="translate(${x} ${y})"><rect x="-2.5" y="0" width="5" height="26" rx="2.5" fill="#3b1e0e"/>${petalRing(4, "#4a2512", 10, 5)}<circle r="4" fill="#2a1408"/></g>`).join("") +
      [[70, 150, -30], [112, 40, 20]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="8" ry="15" transform="rotate(${r} ${x} ${y})" fill="#7f9a45"/><path d="M${x} ${y - 12} v24" transform="rotate(${r} ${x} ${y})" stroke="#5f7a2e" stroke-width="1.2"/>`).join(""),
    gingerLemon: () =>
      `<path d="M34 138 c-8 -16 6 -28 20 -22 c4 -14 20 -18 28 -8 c10 -10 28 -6 30 8 c14 -2 22 12 14 24 c-6 10 -18 10 -26 6 c-8 8 -24 8 -30 0 c-12 6 -30 4 -36 -8z" fill="#d8b079"/>` +
      `<path d="M52 128 q6 -4 12 0 M84 118 q6 -4 12 0 M106 134 q5 -4 10 0" stroke="#a97d45" stroke-width="2" fill="none" stroke-linecap="round"/>` +
      lemonSlice(128, 78, 46, "#f1c21b", "#ffe36b", "#fff6c9") + leaf(170, 116, 40, 20, 40, "#3f8a3a", "#7fc070"),
    hibiscus: () =>
      leaf(56, 170, 60, 30, -40, "#2f6b3a", "#6fa56f") + leaf(150, 168, 54, 28, 46, "#3a7b43", "#6fa56f") +
      `<g transform="translate(100 96)">${petalRing(5, "#c3102f", 70, 34)}${petalRing(5, "#e0243f", 54, 24, 'opacity=".55"')}<circle r="16" fill="#7a0418"/>` +
      `<path d="M0 0 C 6 -18, 10 -34, 22 -50" stroke="#f3c94a" stroke-width="3" fill="none" stroke-linecap="round"/>` +
      [[22, -50], [26, -44], [17, -46], [20, -56]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.2" fill="#f6d34d"/>`).join("") + `</g>`,
    mint: () =>
      `<path d="M100 186 C 98 150, 102 110, 100 40" stroke="#2c6e4a" stroke-width="5" fill="none" stroke-linecap="round"/>` +
      leaf(100, 44, 40, 26, 0, "#5fbf8a", "#2c6e4a") + leaf(100, 78, 58, 38, -58, "#3fa06d", "#1f5a3a") + leaf(100, 78, 58, 38, 58, "#48ad78", "#1f5a3a") +
      leaf(100, 124, 70, 46, -64, "#2f8a5a", "#1b4f33") + leaf(100, 124, 70, 46, 64, "#37955f", "#1b4f33") + leaf(100, 166, 62, 42, -70, "#277a4e", "#18452d"),
    jasmine: () =>
      leaf(70, 150, 56, 28, -60, "#2f6b3a", "#6fa56f") + leaf(132, 156, 52, 26, 56, "#2f6b3a", "#6fa56f") +
      [[78, 88, 1], [132, 72, .75], [128, 128, .62]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})">${petalRing(5, "#fffdf6", 46, 15, 'stroke="#e7dcc0" stroke-width="1.5"')}<circle r="7" fill="#e9d36a"/></g>`).join("") +
      `<circle cx="160" cy="44" r="22" fill="#6a2a5a"/><circle cx="160" cy="44" r="16" fill="#f0b53a"/>` + [[154, 40], [164, 38], [160, 50], [152, 50], [168, 48]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.4" fill="#2a1a10"/>`).join(""),
    greenLemon: () =>
      leaf(60, 170, 70, 34, -30, "#6aa832", "#b9dd7b") + leaf(146, 172, 62, 30, 34, "#5a9a2a", "#b9dd7b") +
      lemonSlice(100, 94, 62, "#e8c418", "#fbe46a", "#fff7cf"),
    vanilla: () =>
      [[-18, "#3b2311"], [-8, "#4a2c15"], [2, "#2f1c0d"]].map(([r, c]) => `<path d="M40 170 C 70 120, 110 70, 168 36" transform="rotate(${r} 100 100)" stroke="${c}" stroke-width="8" fill="none" stroke-linecap="round"/>`).join("") +
      `<g transform="translate(78 70)">${petalRing(6, "#fff4cf", 40, 14, 'stroke="#e8d49a" stroke-width="1.5"')}<circle r="9" fill="#f1cf5a"/></g>`,
    passionLime: () =>
      `<circle cx="80" cy="104" r="54" fill="#5b1f4f"/><circle cx="80" cy="104" r="46" fill="#f2a93b"/><circle cx="80" cy="104" r="38" fill="#f7c35a"/>` +
      Array.from({ length: 16 }, (_, i) => { const a = i * 2.4, d = 8 + (i * 7) % 28; return `<ellipse cx="${80 + Math.cos(a) * d}" cy="${104 + Math.sin(a) * d}" rx="3" ry="4" fill="#2a160c"/>`; }).join("") +
      lemonSlice(148, 70, 32, "#4c9a2a", "#a7d948", "#e6f5b8") + leaf(150, 160, 44, 22, 40, "#3d7d2a", "#8cc66a"),
  };

  const PRODUCTS = [
    {
      id: "pure-kenya", illus: "black", color: "#6b2e16", ink: "#fff7ea", family: "Thé noir",
      name: "Pure Kenya Tea", short: "Thé noir du Kenya",
      line: "Le thé noir des hauts plateaux de Kericho.",
      desc: "Un thé noir corsé à la liqueur cuivrée. Chaque sachet est emballé un par un pour garder tout son arôme. Il se boit pur, avec du lait ou bien sucré, dès le matin.",
      notes: ["Corsé", "Malté", "Se boit avec du lait"],
      offers: [{ label: "25 sachets", price: 2000 }, { label: "50 sachets", price: 3500 }],
      extra: "Grands formats disponibles sur demande.",
    },
    {
      id: "spiced", illus: "spiced", color: "#8a3f1a", ink: "#fff5e8", family: "Thé aux épices",
      name: "Spiced Tea", short: "Thé aux 6 épices",
      line: "Cannelle, gingembre, clou de girofle, poivre noir, cardamome et muscade.",
      desc: "Six épices sur une base de thé noir kényan : une tasse chaude et parfumée, dans l'esprit du chaï. Il est parfait l'après-midi ou après le repas.",
      notes: ["Chaleureux", "Parfumé", "Façon chaï"],
      offers: [{ label: "20 sachets", price: 3500 }],
    },
    {
      id: "ginger-lemon", illus: "gingerLemon", color: "#b8860b", ink: "#fffbea", family: "Infusion",
      name: "Ginger & Lemon", short: "Gingembre & citron",
      line: "Le piquant du gingembre, la fraîcheur du citron.",
      desc: "Une infusion vive et tonique qui associe la chaleur du gingembre à la note acidulée du citron. Elle se boit chaude avec un peu de miel, ou bien glacée.",
      notes: ["Vif", "Tonique", "Acidulé"],
      offers: [{ label: "20 sachets", price: 3500 }],
    },
    {
      id: "hibiscus", illus: "hibiscus", color: "#9e0f2c", ink: "#fff1f2", family: "Infusion",
      name: "Pure Hibiscus", short: "100 % hibiscus",
      line: "Le bissap, en version premium et prêt en 5 minutes.",
      desc: "Une infusion 100 % fleurs d'hibiscus à la robe rubis et au goût acidulé. On la déguste chaude, ou bien glacée comme un bissap maison.",
      notes: ["Rubis", "Acidulé", "Chaud ou glacé"],
      offers: [{ label: "20 sachets", price: null }],
    },
    {
      id: "mint", illus: "mint", color: "#1f6b4c", ink: "#effaf3", family: "Thé vert",
      name: "Green Tea Mint", short: "Thé vert menthe",
      line: "Exaltant et apaisant, la menthe fraîche sur un thé vert du Kenya.",
      desc: "Un thé vert léger relevé de menthe fraîche. C'est l'allié des pauses de la journée : une tasse qui réveille et qui détend en même temps.",
      notes: ["Frais", "Exaltant", "Apaisant"],
      offers: [{ label: "25 sachets", price: 3000 }],
    },
    {
      id: "passion-jasmine", illus: "jasmine", color: "#0f7c78", ink: "#eefcfb", family: "Thé vert",
      name: "Green Tea Passion & Jasmine", short: "Passion & jasmin",
      line: "Thé vert, jasmin en fleur et fruit de la passion.",
      desc: "Un thé vert floral et fruité : le jasmin apporte la douceur, le fruit de la passion une touche exotique. Il accompagne élégamment le goûter.",
      notes: ["Floral", "Fruité", "Élégant"],
      offers: [{ label: "Boîte de sachets", price: 3000 }],
    },
    {
      id: "green-lemon", illus: "greenLemon", color: "#4f8a1c", ink: "#f6fde9", family: "Thé vert",
      name: "Green Tea Lemon", short: "Thé vert citron",
      line: "Frais, léger et citronné.",
      desc: "Un thé vert léger au citron, frais et désaltérant. Il est aussi délicieux chaud qu'en thé glacé pendant les journées de chaleur.",
      notes: ["Frais", "Léger", "Désaltérant"],
      offers: [{ label: "Boîte de sachets", price: 3000 }],
    },
    {
      id: "vanilla", illus: "vanilla", color: "#b07d12", ink: "#fffaeb", family: "Thé noir parfumé",
      name: "Vanilla Tea", short: "Thé vanille",
      line: "La douceur de la vanille sur un thé du Kenya.",
      desc: "Un thé gourmand et rond, parfumé à la vanille. Il se prête aux moments de douceur et plaît à ceux qui découvrent le thé.",
      notes: ["Gourmand", "Doux", "Rond"],
      offers: [{ label: "25 sachets", price: 3000 }],
    },
    {
      id: "passion-lime", illus: "passionLime", color: "#8e1f63", ink: "#fff0f8", family: "Thé parfumé",
      name: "Passion & Lime", short: "Passion & citron vert",
      line: "Fruit de la passion et citron vert, un duo tropical.",
      desc: "Un thé fruité et pétillant qui marie la gourmandise du fruit de la passion à la vivacité du citron vert.",
      notes: ["Tropical", "Fruité", "Vif"],
      offers: [{ label: "Boîte de sachets", price: null }],
    },
  ];

  const fcfa = n => (n == null ? "Prix sur demande" : n.toLocaleString("fr-FR").replace(/ | /g, " ") + " FCFA");
  const svg = (key, cls = "") => `<svg class="${cls}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${ILLUS[key]()}</svg>`;
  const waLink = p => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Bonjour Aroma-Leaf, je souhaite commander : ${p ? "Kericho Gold " + p.name : "vos thés"}.`)}`;

  /* Logo Aroma-Leaf (redessiné) : deux feuilles + bourgeon dans un médaillon */
  const logoMark = (gold = "#c9a24a", bg = "none") =>
    `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="60" cy="60" r="56" fill="${bg}" stroke="${gold}" stroke-width="2.5"/><circle cx="60" cy="60" r="49" fill="none" stroke="${gold}" stroke-width="1" opacity=".55"/>` +
    `<g transform="translate(60 88)"><path d="M0 0 C0 -12 0 -26 0 -44" stroke="${gold}" stroke-width="3" stroke-linecap="round" fill="none"/>` +
    leaf(0, -40, 22, 10, 0, gold) + leaf(0, -6, 44, 22, -42, gold, bg === "none" ? "#0000" : bg) + leaf(0, -6, 44, 22, 42, gold, bg === "none" ? "#0000" : bg) + `</g></svg>`;

  window.AL = { CONTACT, PRODUCTS, ILLUS, svg, fcfa, waLink, logoMark };
})();
