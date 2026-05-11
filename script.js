/* ============================================================
   FASHIONATE BAGS — script.js
   ============================================================ */

'use strict';

/* ════════════════════════════════════
   PRODUCT DATA
════════════════════════════════════ */
const PRODUCTS = [
  {
    id: 1, name: 'Minimalist Canvas Weekend Tote', cat: 'Tote Bags',
    price: 34.99, reviews: 1234, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    link: 'https://www.amazon.com/s?k=minimalist+canvas+tote+bag&tag=YOUR_TAG'
  },
  {
    id: 2, name: 'Premium Leather Executive Tote', cat: 'Tote Bags',
    price: 89.99, reviews: 856, stars: 4.5,
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    link: 'https://www.amazon.com/s?k=leather+executive+tote&tag=YOUR_TAG'
  },
  {
    id: 3, name: 'Summer Woven Beach Tote', cat: 'Tote Bags',
    price: 29.99, reviews: 2103, stars: 3.5,
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
    link: 'https://www.amazon.com/s?k=woven+beach+tote&tag=YOUR_TAG'
  },
  {
    id: 4, name: 'Structured Italian Leather Handbag', cat: 'Handbags',
    price: 129.99, reviews: 567, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80',
    link: 'https://www.amazon.com/s?k=structured+italian+leather+handbag&tag=YOUR_TAG'
  },
  {
    id: 5, name: 'Quilted Chain Strap Designer Bag', cat: 'Handbags',
    price: 149.99, reviews: 423, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=600&q=80',
    link: 'https://www.amazon.com/s?k=quilted+chain+strap+bag&tag=YOUR_TAG'
  },
  {
    id: 6, name: 'Bamboo Handle Structured Handbag', cat: 'Handbags',
    price: 74.99, reviews: 321, stars: 4.5,
    img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80',
    link: 'https://www.amazon.com/s?k=bamboo+handle+handbag&tag=YOUR_TAG'
  },
  {
    id: 7, name: 'Everyday Slouchy Shoulder Bag', cat: 'Shoulder Bags',
    price: 54.99, reviews: 1456, stars: 3.5,
    img: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&q=80',
    link: 'https://www.amazon.com/s?k=slouchy+shoulder+bag&tag=YOUR_TAG'
  },
  {
    id: 8, name: 'Evening Chain Shoulder Purse', cat: 'Shoulder Bags',
    price: 79.99, reviews: 634, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1614179089445-9284f5a14c40?w=600&q=80',
    link: 'https://www.amazon.com/s?k=evening+chain+shoulder+purse&tag=YOUR_TAG'
  },
  {
    id: 9, name: 'Pebbled Leather Shoulder Bag', cat: 'Shoulder Bags',
    price: 85.99, reviews: 654, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1544816565-aa8c1166648f?w=600&q=80',
    link: 'https://www.amazon.com/s?k=pebbled+leather+shoulder+bag&tag=YOUR_TAG'
  },
  {
    id: 10, name: 'Boho Fringe Crossbody', cat: 'Crossbody Bags',
    price: 44.99, reviews: 982, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    link: 'https://www.amazon.com/s?k=boho+fringe+crossbody+bag&tag=YOUR_TAG'
  },
  {
    id: 11, name: 'Mini Leather Crossbody Bag', cat: 'Crossbody Bags',
    price: 59.99, reviews: 1120, stars: 4.5,
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    link: 'https://www.amazon.com/s?k=mini+leather+crossbody&tag=YOUR_TAG'
  },
  {
    id: 12, name: 'Croc Embossed Mini Crossbody', cat: 'Crossbody Bags',
    price: 56.99, reviews: 490, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
    link: 'https://www.amazon.com/s?k=croc+embossed+mini+bag&tag=YOUR_TAG'
  },
  {
    id: 13, name: 'Classic Top Handle Satchel', cat: 'Satchel Bags',
    price: 99.99, reviews: 789, stars: 3.5,
    img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80',
    link: 'https://www.amazon.com/s?k=top+handle+satchel+bag&tag=YOUR_TAG'
  },
  {
    id: 14, name: 'Structured Work Satchel', cat: 'Satchel Bags',
    price: 109.99, reviews: 432, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=600&q=80',
    link: 'https://www.amazon.com/s?k=structured+work+satchel&tag=YOUR_TAG'
  },
  {
    id: 15, name: 'Embroidered Boho Satchel', cat: 'Satchel Bags',
    price: 65.99, reviews: 556, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&q=80',
    link: 'https://www.amazon.com/s?k=embroidered+boho+satchel&tag=YOUR_TAG'
  },
  {
    id: 16, name: 'Vintage Suede Hobo Bag', cat: 'Hobo Bags',
    price: 67.99, reviews: 345, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1614179089445-9284f5a14c40?w=600&q=80',
    link: 'https://www.amazon.com/s?k=vintage+suede+hobo+bag&tag=YOUR_TAG'
  },
  {
    id: 17, name: 'Oversized Slouch Hobo Purse', cat: 'Hobo Bags',
    price: 49.99, reviews: 788, stars: 3.5,
    img: 'https://images.unsplash.com/photo-1544816565-aa8c1166648f?w=600&q=80',
    link: 'https://www.amazon.com/s?k=oversized+hobo+purse&tag=YOUR_TAG'
  },
  {
    id: 18, name: 'Soft Leather Hobo Bag', cat: 'Hobo Bags',
    price: 77.99, reviews: 419, stars: 4.5,
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    link: 'https://www.amazon.com/s?k=soft+leather+hobo+bag&tag=YOUR_TAG'
  },
  {
    id: 19, name: 'Drawstring Leather Bucket Bag', cat: 'Bucket Bags',
    price: 72.99, reviews: 512, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80',
    link: 'https://www.amazon.com/s?k=leather+bucket+bag&tag=YOUR_TAG'
  },
  {
    id: 20, name: 'Woven Straw Bucket Tote', cat: 'Bucket Bags',
    price: 38.99, reviews: 670, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
    link: 'https://www.amazon.com/s?k=woven+straw+bucket+bag&tag=YOUR_TAG'
  },
  {
    id: 21, name: 'Double Handle Bucket Bag', cat: 'Bucket Bags',
    price: 62.99, reviews: 287, stars: 3.5,
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    link: 'https://www.amazon.com/s?k=double+handle+bucket+bag&tag=YOUR_TAG'
  },
  {
    id: 22, name: 'Satin Evening Clutch', cat: 'Clutch Bags',
    price: 35.99, reviews: 890, stars: 4.5,
    img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80',
    link: 'https://www.amazon.com/s?k=satin+evening+clutch&tag=YOUR_TAG'
  },
  {
    id: 23, name: 'Beaded Statement Clutch', cat: 'Clutch Bags',
    price: 49.99, reviews: 234, stars: 5.0,
    img: 'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=600&q=80',
    link: 'https://www.amazon.com/s?k=beaded+statement+clutch&tag=YOUR_TAG'
  },
  {
    id: 24, name: 'Velvet Evening Clutch', cat: 'Clutch Bags',
    price: 42.99, reviews: 367, stars: 4.5,
    img: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&q=80',
    link: 'https://www.amazon.com/s?k=velvet+evening+clutch&tag=YOUR_TAG'
  },
  {
    id: 25, name: 'Leather Zip Wristlet', cat: 'Wristlets',
    price: 24.99, reviews: 1543, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1614179089445-9284f5a14c40?w=600&q=80',
    link: 'https://www.amazon.com/s?k=leather+zip+wristlet&tag=YOUR_TAG'
  },
  {
    id: 26, name: 'Floral Print Wristlet Clutch', cat: 'Wristlets',
    price: 19.99, reviews: 876, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1544816565-aa8c1166648f?w=600&q=80',
    link: 'https://www.amazon.com/s?k=floral+wristlet+clutch&tag=YOUR_TAG'
  },
  {
    id: 27, name: 'Metallic Chain Wristlet', cat: 'Wristlets',
    price: 28.99, reviews: 732, stars: 4.0,
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    link: 'https://www.amazon.com/s?k=metallic+chain+wristlet&tag=YOUR_TAG'
  }
];

const CATEGORIES = [
  'Tote Bags', 'Handbags', 'Shoulder Bags', 'Crossbody Bags',
  'Satchel Bags', 'Hobo Bags', 'Bucket Bags', 'Clutch Bags', 'Wristlets'
];

/* ════════════════════════════════════
   STATE
════════════════════════════════════ */
let currentCat = 'All';
const wishlist = new Set();

/* ════════════════════════════════════
   LOADER
════════════════════════════════════ */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hidden'), 1800);
});

/* ════════════════════════════════════
   MOBILE BURGER
════════════════════════════════════ */
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

/* Close nav on outside click */
document.addEventListener('click', (e) => {
  if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

/* ════════════════════════════════════
   STAR RENDERER
════════════════════════════════════ */
function renderStars(n) {
  let out = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(n))      out += '★';
    else if (i - 0.5 <= n)       out += '½';
    else                          out += '☆';
  }
  return out;
}

/* ════════════════════════════════════
   RENDER CATEGORIES
════════════════════════════════════ */
function buildCategories() {
  const grid = document.getElementById('catGrid');
  grid.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-card';
    btn.dataset.cat = cat;
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke-linejoin="round" stroke-width="1.5"/>
        <path d="M11 10a1 1 0 102 0 4 4 0 00-4-4" stroke-linecap="round" stroke-width="1.5"/>
      </svg>
      ${cat}`;
    btn.addEventListener('click', () => {
      filterProducts(cat);
      document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
    });
    grid.appendChild(btn);
  });
  updateCatActive();
}

function updateCatActive() {
  document.querySelectorAll('.cat-card').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === currentCat);
  });
  document.querySelectorAll('.nav-item').forEach(a => {
    a.classList.toggle('active', a.dataset.cat === currentCat);
  });
}

/* ════════════════════════════════════
   RENDER PRODUCTS
════════════════════════════════════ */
function renderProducts(list) {
  const grid      = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const eyebrow   = document.getElementById('collectionEyebrow');
  const title     = document.getElementById('collectionTitle');
  const sub       = document.getElementById('collectionSub');

  grid.innerHTML = '';

  /* Update header */
  if (currentCat === 'All') {
    eyebrow.textContent = 'Featured';
    title.textContent   = 'Premium Collection';
    sub.textContent     = `${list.length} premium styles handpicked for you`;
  } else {
    eyebrow.textContent = currentCat;
    title.textContent   = currentCat;
    sub.textContent     = `${list.length} premium style${list.length !== 1 ? 's' : ''} selected for you`;
  }

  if (list.length === 0) {
    noResults.classList.add('visible');
    return;
  }
  noResults.classList.remove('visible');

  list.forEach((product, index) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.style.animationDelay = `${(index % 8) * 0.07}s`;

    const isLiked = wishlist.has(product.id);

    card.innerHTML = `
      <div class="card-img-wrap">
        <img class="card-img" src="${product.img}" alt="${product.name}" loading="lazy" />
        <span class="card-category">${product.cat}</span>
        <button class="card-wish ${isLiked ? 'liked' : ''}" data-id="${product.id}" title="Add to wishlist">
          ${isLiked ? '♥' : '♡'}
        </button>
        <div class="card-overlay">
          <span class="overlay-tag">View on Amazon ↗</span>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-name">${product.name}</h3>
        <div class="card-stars">
          <span class="stars-icons">${renderStars(product.stars)}</span>
          <span class="stars-count">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="price-lbl">Price</span>
            <span class="price-val">$${product.price.toFixed(2)}</span>
          </div>
          <span class="stock-badge">In Stock</span>
        </div>
        <a
          class="card-buy-btn"
          href="${product.link}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy ${product.name} on Amazon"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.96-1.61L23 6H6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Buy on Amazon
        </a>
      </div>`;

    /* Wishlist toggle */
    card.querySelector('.card-wish').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleWish(product.id, card.querySelector('.card-wish'));
    });

    grid.appendChild(card);
  });
}

/* ════════════════════════════════════
   WISHLIST
════════════════════════════════════ */
function toggleWish(id, btn) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.textContent = '♡';
    btn.classList.remove('liked');
  } else {
    wishlist.add(id);
    btn.textContent = '♥';
    btn.classList.add('liked');
    /* micro bounce */
    btn.style.transform = 'scale(1.4)';
    setTimeout(() => btn.style.transform = '', 250);
  }
}

/* ════════════════════════════════════
   FILTER
════════════════════════════════════ */
function filterProducts(cat) {
  currentCat = cat;
  const list = cat === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  renderProducts(list);
  updateCatActive();

  /* Close mobile nav */
  burger.classList.remove('open');
  navLinks.classList.remove('open');
}

/* ════════════════════════════════════
   NAV CLICKS
════════════════════════════════════ */
document.querySelectorAll('.nav-item').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const cat = a.dataset.cat;
    filterProducts(cat);
    if (cat === 'All') {
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ════════════════════════════════════
   NAVBAR SCROLL STYLE
════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 20
    ? '0 4px 24px rgba(13,27,42,0.25)'
    : 'none';
}, { passive: true });

/* ════════════════════════════════════
   BACK TO TOP
════════════════════════════════════ */
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver)
════════════════════════════════════ */
function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ════════════════════════════════════
   INIT
════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildCategories();
  renderProducts(PRODUCTS);
  initScrollReveal();
});
