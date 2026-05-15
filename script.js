/* ============================================================
   FASHIONATE BAGS — script.js
   ============================================================ */

'use strict';

/* ════════════════════════════════════
   PRODUCT DATA
════════════════════════════════════ */
const PRODUCTS = [
  // ── TOTE BAGS ──
  {
    id: 1, name: 'Cowhide Autumn Winter Bag', cat: 'Tote Bags',
    price: 68.76, reviews: 320, stars: 4.3,
    img: 'https://ae01.alicdn.com/kf/S3759608f875c4a2eb23f5ee6f34db5bf9.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4OFKVcx'
  },
  {
    id: 2, name: 'Van Gogh Series Tote Bag', cat: 'Tote Bags',
    price: 2.45, reviews: 980, stars: 4.6,
    img: 'https://ae01.alicdn.com/kf/S414fd09e252a4e90a07cc3326ab1b4a93.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4ab7dLh'
  },
  {
    id: 3, name: 'Travel Mesh Beach Bag with Zipper & Pocket', cat: 'Tote Bags',
    price: 7.20, reviews: 1540, stars: 4.2,
    img: 'https://ae01.alicdn.com/kf/S6a4193f27b5f4607a24e29f3e0e21669G.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3jRyukn'
  },
  {
    id: 4, name: 'Soft Leather Shoulder & Commuter Tote', cat: 'Tote Bags',
    price: 57.28, reviews: 210, stars: 2.0,
    img: 'https://ae01.alicdn.com/kf/Se9ae668958a14dfc8b1e4e12781ec6c9y.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3jQXt2P'
  },
  {
    id: 5, name: 'Casual Straw Wicker Woven Ladies Tote', cat: 'Tote Bags',
    price: 3.36, reviews: 2340, stars: 4.8,
    img: 'https://ae01.alicdn.com/kf/S56f393d3bf744cd0b275f71eefce0566b.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4Vkbu6j'
  },
  {
    id: 6, name: "Men's & Women's Denim Vintage Shoulder Bag", cat: 'Tote Bags',
    price: 57.28, reviews: 415, stars: 4.1,
    img: 'https://ae01.alicdn.com/kf/Sd409e353c52f4bffba771d9ee7566e29v.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4FqUV2r'
  },
  {
    id: 7, name: "4pcs Fashion Women's Bag Set", cat: 'Tote Bags',
    price: 37.66, reviews: 870, stars: 4.2,
    img: 'https://ae01.alicdn.com/kf/S77c9792cc8c04f7597e6028e0797d193Y.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4TZQakJ'
  },
  {
    id: 8, name: 'Cute Miffy Rabbit Tote Bag', cat: 'Tote Bags',
    price: 4.81, reviews: 1120, stars: 5.0,
    img: 'https://ae01.alicdn.com/kf/Sbf6568e439aa4a919571e44b635700e9H.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4TAtF6J'
  },

  // ── HANDBAGS ──
  {
    id: 9, name: 'Lightweight Summer Casual Crossbody Handbag', cat: 'Handbags',
    price: 15.79, reviews: 560, stars: 4.3,
    img: 'https://ae01.alicdn.com/kf/Sef1de049fb9c4147abd2e9c357923b9eE.jpg',
    link: 'https://s.click.aliexpress.com/e/_c2wlCyoB'
  },
  {
    id: 10, name: 'Leather Handbag Women', cat: 'Handbags',
    price: 50.19, reviews: 430, stars: 4.4,
    img: 'https://ae01.alicdn.com/kf/S82ad5648d28d44ecae79293d26ff05831.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3EanR3Z'
  },
  {
    id: 11, name: 'Luxury Designer Handbag', cat: 'Handbags',
    price: 22.67, reviews: 760, stars: 4.5,
    img: 'https://ae01.alicdn.com/kf/Sd73c45cbfaff4b63bf90988abb0b1a5ce.jpg',
    link: 'https://s.click.aliexpress.com/e/_c2IMc20R'
  },
  {
    id: 12, name: '3Pcs Quilted Mini Tote Bag Set', cat: 'Handbags',
    price: 6.72, reviews: 1890, stars: 4.6,
    img: 'https://ae01.alicdn.com/kf/S867b26c609954539b3e6476636dcde7dA.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3nO3kWL'
  },
  {
    id: 13, name: '2-Piece Niche Design Bag', cat: 'Handbags',
    price: 48.23, reviews: 340, stars: 4.2,
    img: 'https://ae01.alicdn.com/kf/S55c6bcc405d7484f811f79f589540f74w.jpg',
    link: 'https://s.click.aliexpress.com/e/_c43wpdKn'
  },
  {
    id: 14, name: 'Shoulder Bag Genuine Leather', cat: 'Handbags',
    price: 57.28, reviews: 280, stars: 4.3,
    img: 'https://ae01.alicdn.com/kf/Sd14c207af551472a867a57224ef557e5E.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4dlcbVH'
  },
  {
    id: 15, name: 'PU Leather Flap Crossbody Bag', cat: 'Handbags',
    price: 7.16, reviews: 2100, stars: 4.9,
    img: 'https://ae01.alicdn.com/kf/S94c5ad839752423c91b62adf586e3035g.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3aczldd'
  },
  {
    id: 16, name: 'Handbags Shoulder Bags', cat: 'Handbags',
    price: 83.36, reviews: 650, stars: 4.8,
    img: 'https://ae01.alicdn.com/kf/S28009ae492294ba5878bbed2de0f302dJ.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3bbXDWJ'
  },
  {
    id: 17, name: "Fashion Pink Flower Women's Bag", cat: 'Handbags',
    price: 4.33, reviews: 1450, stars: 4.0,
    img: 'https://ae01.alicdn.com/kf/Secb9fd12ec5746faa80f6df08a8ed588K.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4t4VZBt'
  },

  // ── SHOULDER BAGS ──
  {
    id: 18, name: 'Lightweight Everyday Sling Shoulder Bag', cat: 'Shoulder Bags',
    price: 99.50, reviews: 390, stars: 4.4,
    img: 'https://ae01.alicdn.com/kf/S601d89dd321d4612b778b8f29ebd78b90.jpg',
    link: 'https://s.click.aliexpress.com/e/_c38LeCAj'
  },
  {
    id: 19, name: 'Shoulder Bags for Men & Women', cat: 'Shoulder Bags',
    price: 19.18, reviews: 720, stars: 4.3,
    img: 'https://ae01.alicdn.com/kf/S03fc73fcfb874e9bbb61d5c82158b698a.jpg',
    link: 'https://s.click.aliexpress.com/e/_c35XJsXl'
  },
  {
    id: 20, name: 'Student School Laptop Shoulder Bag (Blue)', cat: 'Shoulder Bags',
    price: 19.18, reviews: 540, stars: 4.2,
    img: 'https://ae01.alicdn.com/kf/Sf60f386825e64c978f8ecd1b5939ffa7R.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4eXVQix'
  },
  {
    id: 21, name: 'Student School Laptop Shoulder Bag (Grey)', cat: 'Shoulder Bags',
    price: 19.18, reviews: 490, stars: 4.1,
    img: 'https://ae01.alicdn.com/kf/S7bd5325cde3345aebef75a08c114ce85Y.jpg',
    link: 'https://s.click.aliexpress.com/e/_c34VCfnD'
  },
  {
    id: 22, name: 'Laptop Shoulder Bag for Men & Women (Black)', cat: 'Shoulder Bags',
    price: 19.18, reviews: 610, stars: 4.3,
    img: 'https://ae01.alicdn.com/kf/S667422dd286e496daa413fee41f01d4cd.jpg',
    link: 'https://s.click.aliexpress.com/e/_c42UIeOF'
  },
  {
    id: 23, name: 'Laptop Shoulder Bag for Men & Women (Navy)', cat: 'Shoulder Bags',
    price: 19.18, reviews: 580, stars: 4.2,
    img: 'https://ae01.alicdn.com/kf/S659d0e88081f42afbfb0bcaba7113157P.jpg',
    link: 'https://s.click.aliexpress.com/e/_c34oGtSr'
  },
  {
    id: 24, name: 'Lightweight Shoulder Bag Unisex', cat: 'Shoulder Bags',
    price: 21.10, reviews: 830, stars: 4.3,
    img: 'https://ae01.alicdn.com/kf/S8c152f780e2c447e8ddcddac1bfe0b13c.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3l4q8Jd'
  },

  // ── CROSSBODY BAGS ──
  {
    id: 25, name: "Women's Crossbody Bag", cat: 'Crossbody Bags',
    price: 55.84, reviews: 370, stars: 4.5,
    img: 'https://ae01.alicdn.com/kf/S39933536a36642249ede06bffd6dcc95Z.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3CzDHrZ'
  },
  {
    id: 26, name: 'Soft Nylon Canvas Square Shoulder Bag', cat: 'Crossbody Bags',
    price: 3.46, reviews: 1200, stars: 4.3,
    img: 'https://ae01.alicdn.com/kf/S8aada3ce13d843609bafac3b93ec57e7a.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3efPtcb'
  },
  {
    id: 27, name: 'Long Tassel Handmade Crossbody', cat: 'Crossbody Bags',
    price: 4.30, reviews: 890, stars: 4.1,
    img: 'https://ae01.alicdn.com/kf/Sb4f23fd7eebc4bfd806da523ef12c22b3.png',
    link: 'https://s.click.aliexpress.com/e/_c4emilKX'
  },
  {
    id: 28, name: 'High Quality Spring Small Crossbody Bag', cat: 'Crossbody Bags',
    price: 3.40, reviews: 2560, stars: 4.9,
    img: 'https://ae01.alicdn.com/kf/Sde85409068ba455f9bebeb515a59ad53k.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3jazLeP'
  },
  {
    id: 29, name: 'Retro Straw Shoulder Crossbody Bag', cat: 'Crossbody Bags',
    price: 2.51, reviews: 1760, stars: 4.7,
    img: 'https://ae01.alicdn.com/kf/Sc916809366674596bb92a0d19c6853c92.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3lcDryx'
  },
  {
    id: 30, name: "High-End Women's Crossbody Bag", cat: 'Crossbody Bags',
    price: 61.77, reviews: 430, stars: 4.9,
    img: 'https://ae01.alicdn.com/kf/Sf11b9c5e6a504ffeb19936d4dd8275d0H.png',
    link: 'https://s.click.aliexpress.com/e/_c3Czr7HN'
  },
  {
    id: 31, name: 'New Korean Style Mini Crossbody Bag', cat: 'Crossbody Bags',
    price: 12.00, reviews: 1340, stars: 4.6,
    img: 'https://ae01.alicdn.com/kf/S46ff919f212e4b22b1fc3f74888d2379F.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3l4QWIF'
  },
  {
    id: 32, name: 'Neutral Style Crossbody Bag (Unisex)', cat: 'Crossbody Bags',
    price: 7.64, reviews: 980, stars: 4.0,
    img: 'https://ae01.alicdn.com/kf/S6376bec6d03645518a22f556db6dcdb59.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4oARrQP'
  },

  // ── SATCHEL BAGS ──
  {
    id: 33, name: 'Satchel Crossbody Shoulder Bag', cat: 'Satchel Bags',
    price: 9.86, reviews: 1100, stars: 5.0,
    img: 'https://ae01.alicdn.com/kf/S84738a6b1e70435f94f0dc459f3ed69a1.jpg',
    link: 'https://s.click.aliexpress.com/e/_c42IofER'
  },
  {
    id: 34, name: 'Bag For Girl Students', cat: 'Satchel Bags',
    price: 5.80, reviews: 870, stars: 5.0,
    img: 'https://ae01.alicdn.com/kf/Sb1ae1b1e4022495cb3e754d364cc5d43D.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4pgF6WT'
  },
  {
    id: 35, name: 'Mobile Phone Waist Satchel Bag', cat: 'Satchel Bags',
    price: 9.30, reviews: 660, stars: 4.2,
    img: 'https://ae01.alicdn.com/kf/S96e5369ed7af4170a3a3c532eae349a8w.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3ZKklZd'
  },
  {
    id: 36, name: 'Mini Cute Small Satchel Handbag', cat: 'Satchel Bags',
    price: 10.15, reviews: 740, stars: 4.2,
    img: 'https://ae01.alicdn.com/kf/Sf364543a7a0c4a088d529840ae94d6feV.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4X0mkMR'
  },
  {
    id: 37, name: 'Zency Women Leather Satchel Bag', cat: 'Satchel Bags',
    price: 58.98, reviews: 510, stars: 5.0,
    img: 'https://ae01.alicdn.com/kf/S26bb57d89b9b490bb5e24929cf808355G.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4raNqzh'
  },

  // ── HOBO BAGS ──
  {
    id: 38, name: 'Organizer Cable Storage Bag', cat: 'Hobo Bags',
    price: 3.41, reviews: 920, stars: 4.2,
    img: 'https://ae01.alicdn.com/kf/S11b2f74f944e4ef28701794f7cdefeb9y.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4r2BaZD'
  },
  {
    id: 39, name: 'Multifunctional Camping Storage Hobo Bag', cat: 'Hobo Bags',
    price: 6.14, reviews: 780, stars: 4.2,
    img: 'https://ae01.alicdn.com/kf/S4cb972a7ef024283b6244db942174319H.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4ezLvc3'
  },
  {
    id: 40, name: 'Cartoon Printed Fashion Hobo Bag', cat: 'Hobo Bags',
    price: 6.48, reviews: 640, stars: 4.3,
    img: 'https://ae01.alicdn.com/kf/S1b772933305741de8b8f42b578ef43a8k.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3vkxHk3'
  },
  {
    id: 41, name: 'Students School Pen Case Bag', cat: 'Hobo Bags',
    price: 3.97, reviews: 1560, stars: 5.0,
    img: 'https://ae01.alicdn.com/kf/S2fb22615c86b4890a55412c2f5cf94f61.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3zVq5TD'
  },
  {
    id: 42, name: 'Hello Kitty Cartoon Pencil Case Bag', cat: 'Hobo Bags',
    price: 3.06, reviews: 1230, stars: 4.2,
    img: 'https://ae01.alicdn.com/kf/Se1e87299fdc844468e7bfe754ec327ddB.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3eYyKGr'
  },

  // ── BUCKET BAGS ──
  {
    id: 43, name: 'Bucket Bag Shoulder Bag Holiday', cat: 'Bucket Bags',
    price: 4.65, reviews: 1380, stars: 4.5,
    img: 'https://ae01.alicdn.com/kf/S790d5cc78a5c49f38dc5a9d7cd4bfd81U.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3zKCZtV'
  },
  {
    id: 44, name: 'Korean Style Bucket Bag', cat: 'Bucket Bags',
    price: 4.16, reviews: 1670, stars: 4.8,
    img: 'https://ae01.alicdn.com/kf/Sb1ee8b6f2abc4b42885dd253b0fa83e3n.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3seGN8x'
  },
  {
    id: 45, name: 'Hand-Woven Pearl Bucket Bag', cat: 'Bucket Bags',
    price: 22.03, reviews: 890, stars: 4.2,
    img: 'https://ae01.alicdn.com/kf/S954813b2c8144c5eb88d011706818af88.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3ZYkstD'
  },
  {
    id: 46, name: 'Premium Small Bucket Bag', cat: 'Bucket Bags',
    price: 83.26, reviews: 310, stars: 4.6,
    img: 'https://ae01.alicdn.com/kf/S0b1038510c4242d6a9343dcf9b126ff8r.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3mYsv3v'
  },
  {
    id: 47, name: 'Shoulder Handbag Bucket Style', cat: 'Bucket Bags',
    price: 11.98, reviews: 730, stars: 4.1,
    img: 'https://ae01.alicdn.com/kf/S4311c36b38a8480296a23b7ffd90b7cbX.jpg',
    link: 'https://s.click.aliexpress.com/e/_c378t0sf'
  },

  // ── CLUTCH BAGS ──
  {
    id: 48, name: 'Yangmei Pearl Clutch Bag', cat: 'Clutch Bags',
    price: 7.34, reviews: 870, stars: 4.5,
    img: 'https://ae01.alicdn.com/kf/S9f03b3fc31bb4d94a2b6c42623ed6b20Y.png',
    link: 'https://s.click.aliexpress.com/e/_c4sUBbNN'
  },
  {
    id: 49, name: 'Messenger Clutch Bag', cat: 'Clutch Bags',
    price: 4.18, reviews: 2100, stars: 4.9,
    img: 'https://ae01.alicdn.com/kf/S619376cdc91444bab7d4253fe79043b9R.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4nL4ts3'
  },
  {
    id: 50, name: 'Clutch Bag for Girls (Pink)', cat: 'Clutch Bags',
    price: 4.33, reviews: 1430, stars: 4.7,
    img: 'https://ae01.alicdn.com/kf/Sf1ac9ce404a747bbb97da3128d1bcc7db.jpg',
    link: 'https://s.click.aliexpress.com/e/_c369M3g7'
  },
  {
    id: 51, name: 'Clutch Bag for Girls (Gold)', cat: 'Clutch Bags',
    price: 17.69, reviews: 960, stars: 4.6,
    img: 'https://ae01.alicdn.com/kf/S82ed30199a3649b191459ca03daa7629D.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3HAPwEF'
  },
  {
    id: 52, name: 'Clutch Evening Bag', cat: 'Clutch Bags',
    price: 37.95, reviews: 540, stars: 5.0,
    img: 'https://ae01.alicdn.com/kf/S129ef95f19e64ac0a65c370e127dc278V.jpg',
    link: 'https://s.click.aliexpress.com/e/_c44V0voj'
  },

  // ── WRISTLETS ──
  {
    id: 53, name: 'Leather Long Purse Wristlet', cat: 'Wristlets',
    price: 24.05, reviews: 870, stars: 4.2,
    img: 'https://ae01.alicdn.com/kf/S27d56826dde542618e5d6c96062be943d.jpg',
    link: 'https://s.click.aliexpress.com/e/_c34bnK8R'
  },
  {
    id: 54, name: 'Men Business Travel Wristlet Bag', cat: 'Wristlets',
    price: 5.18, reviews: 1240, stars: 4.6,
    img: 'https://ae01.alicdn.com/kf/Sf2b7045405f44293a92c73ec10da5199S.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4sBH9o7'
  },
  {
    id: 55, name: 'Stylish Hand Wristlet Bag', cat: 'Wristlets',
    price: 11.07, reviews: 560, stars: 4.4,
    img: 'https://ae01.alicdn.com/kf/S8fa7536bd04c4c59a3f2646e6a895784f.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3quqdyL'
  },
  {
    id: 56, name: 'Wristlet Wallets for Women', cat: 'Wristlets',
    price: 19.97, reviews: 1780, stars: 4.8,
    img: 'https://ae01.alicdn.com/kf/S1635e4e77ff4454884d25ac50f3d56d6D.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4rg6j6P'
  },
  {
    id: 57, name: 'Elegant Storage Pouch for Women', cat: 'Wristlets',
    price: 3.68, reviews: 2340, stars: 4.8,
    img: 'https://ae01.alicdn.com/kf/Sfd2f7d0649d74af786843f27dc8c532eL.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3RUHNRt'
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
          <span class="overlay-tag">View on AliExpress ↗</span>
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
          aria-label="Buy ${product.name} on AliExpress"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.96-1.61L23 6H6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Buy on AliExpress
        </a>
      </div>`;

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
   SCROLL REVEAL
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
