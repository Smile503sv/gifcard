// Array completo de productos
const productos = [
  { cod: 'play', nombre: 'PlayStation Store', img: 'https://i.ebayimg.com/...s-l1600.webp', descrip: 'Recarga tu cuenta PlayStation...' },
  { cod: 'xbox', nombre: 'Xbox Gift Card', img: 'https://cdn.topuplive.com/...F-81.webp', descrip: 'Agrega saldo a tu cuenta Xbox...' },
  { cod: 'itunes', nombre: 'Apple / iTunes', img: 'https://upload.wikimedia.org/...Apple_logo_black.svg', descrip: 'Compra apps, juegos...' },
  { cod: 'gplay', nombre: 'Google Play', img: 'https://cdn.topuplive.com/...1726048096_PpXJIUWYpb.webp', descrip: 'Añade saldo a Google Play...' },
  { cod: 'nintendo', nombre: 'Nintendo eShop', img: 'https://cdn.topuplive.com/...F-79.webp', descrip: 'Compra juegos para Nintendo...' },
  { cod: 'freefire', nombre: 'Free Fire Diamonds', img: 'https://cdn.topuplive.com/...1729667219_hMwSxSTqq6.webp', descrip: 'Recarga diamantes en Free Fire...' },
  { cod: 'roblox', nombre: 'Roblox Gift Card-US', img: 'https://cdn.topuplive.com/...F-153.webp', descrip: 'Agrega Robux o Premium...' },
  { cod: 'steam', nombre: 'Steam Wallet', img: 'https://upload.wikimedia.org/...Steam_icon_logo.svg', descrip: 'Saldo para Steam...' },
  { cod: 'amazon', nombre: 'Amazon Gift Card', img: 'https://i.ebayimg.com/...luAAAeSwUqdoZwUW.webp', descrip: 'Compra en Amazon...' },
  { cod: 'fortnite', nombre: 'Fortnite V-Bucks', img: 'https://net-revolution.com/...png', descrip: 'V-Bucks para Fortnite...' },
  { cod: 'netflix', nombre: 'Netflix Gift Card', img: 'https://cdn.coinsbee.com/...Netflix.webp', descrip: 'Suscripción Netflix...' },
  { cod: 'visa', nombre: 'Visa Prepaid', img: 'https://i.ebayimg.com/...s-l1600.webp', descrip: 'Tarjeta Visa prepago...' },
  { cod: 'pubg', nombre: 'PUBG G-COIN', img: 'https://cdn.topuplive.com/...F-154.webp', descrip: 'G-Coins para PUBG...' },
  { cod: 'fifa', nombre: 'FC 25 Coins', img: 'https://cdn.topuplive.com/...jOcre8DD1t.webp', descrip: 'Monedas para FC 25...' },
  { cod: 'brawl', nombre: 'Brawl Stars', img: 'https://cdn.topuplive.com/...U...SxeWlT.webp', descrip: 'Gemas para Brawl Stars...' },
  { cod: 'apex', nombre: 'Apex Legends Mobile', img: 'https://net-revolution.com/...jpg', descrip: 'Monedas Apex Legends Mobile...' },
  { cod: 'crypto', nombre: 'Crypto Voucher (US)', img: 'https://cdn.coinsbee.com/...Crypto-Voucher.webp', descrip: 'Compra crypto fácilmente...' },
  { cod: 'binance', nombre: 'Binance Gift Card (Global)', img: 'https://cdn.coinsbee.com/...Binance-Gift-Card.webp', descrip: 'Saldo para Binance...' },
  { cod: 'eneba', nombre: 'Eneba Gift Card (US)', img: 'https://cdn.coinsbee.com/...Eneba.webp', descrip: 'Juegos digitales en Eneba...' },
  { cod: 'League of Legends Gift Card', nombre: 'League of Legends Gift Card', img: 'https://cdn.coinsbee.com/...League-of-Legends.webp', descrip: 'Riot RP para LoL...' },
  { cod: 'twitch', nombre: 'Twitch Gift Card', img: 'https://cdn.coinsbee.com/...Twitch.webp', descrip: 'Twitch bits y suscripciones...' },
  { cod: 'razer', nombre: 'Razer Gift Card', img: 'https://cdn.coinsbee.com/...Razer.webp', descrip: 'Razer Gold para gamers...' },
  { cod: 'target', nombre: 'Target Gift Card', img: 'https://cdn.coinsbee.com/...Target.webp', descrip: 'Compras en Target...' },
  { cod: 'ebay', nombre: 'eBay Gift Card', img: 'https://cdn.coinsbee.com/...eBay.webp', descrip: 'Compras en eBay...' }
];
const montos = [10,25,50,75,100,200,500];
let carrito = [];

// Render productos
document.addEventListener('DOMContentLoaded', () => {
  const cont = document.getElementById('products-container');
  productos.forEach((p,i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>${p.descrip}</p>
      <select id="monto-${i}">
        ${montos.map(m => `<option value="${m}">$${m} USD</option>`).join('')}
      </select>
      <button onclick="agregarAlCarrito(${i}, true)">Agregar al carrito</button>
    `;
    cont.appendChild(card);
  });

  document.getElementById('cart-btn').onclick = mostrarCarrito;
  document.getElementById('cart-close').onclick = cerrarCarrito;
  document.getElementById('cart-bg').onclick = cerrarCarrito;
  document.getElementById('pay-wa').onclick = pagarWhatsApp;

  renderInicio();
});

// Funciones de carrito
function agregarAlCarrito(idx, desdeListado) {
  const monto = desdeListado
    ? document.getElementById(`monto-${idx}`).value
    : 0;
  const prod = productos[idx];
  const key = prod.cod + '-' + monto;
  const found = carrito.find(x => x.key === key);
  if (found) found.cantidad++;
  else carrito.push({ key, nombre: prod.nombre, monto: Number(monto), cantidad: 1 });
  mostrarCarrito();
}

function mostrarCarrito() {
  const itemsDiv = document.getElementById('cart-items');
  const totalDiv = document.getElementById('cart-total');
  itemsDiv.innerHTML = ''; let total = 0;
  carrito.forEach((x, i) => {
    total += x.monto * x.cantidad;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `<span>${x.nombre} $${x.monto} x${x.cantidad}</span><button onclick="quitarDelCarrito(${i})">&times;</button>`;
    itemsDiv.appendChild(div);
  });
  totalDiv.innerHTML = carrito.length ? `Total: <b>$${total}</b> USD` : '<span style="color:#888">Carrito vacío</span>';
  document.getElementById('cart-panel').classList.add('open');
  document.getElementById('cart-bg').style.display = 'block';
}

function quitarDelCarrito(idx) {
  carrito.splice(idx, 1);
  mostrarCarrito();
}

function cerrarCarrito() {
  document.getElementById('cart-panel').classList.remove('open');
  document.getElementById('cart-bg').style.display = 'none';
}

function pagarWhatsApp() {
  if (!carrito.length) return alert('Carrito vacío');
  let msg = 'Hola, quiero comprar:\n';
  carrito.forEach(x => msg += `- ${x.nombre} $${x.monto} x${x.cantidad}\n`);
  window.open(`https://wa.me/50371234567?text=${encodeURIComponent(msg)}`, '_blank');
}

// Navegación básica (Inicio, Productos, Contacto)
function renderInicio() {
  document.getElementById('products-container').innerHTML = '';
}

document.querySelectorAll('.navbar a').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  document.querySelectorAll('.navbar a').forEach(el => el.classList.remove('active'));
  a.classList.add('active');
  const section = a.getAttribute('href').substring(1);
  if (section === 'productos') {
    document.querySelector('.cards-section').scrollIntoView({ behavior: 'smooth' });
  }
}));