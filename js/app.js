const productos = [
  { cod: 'play', nombre: 'PlayStation Store', img: 'https://i.ebayimg.com/images/g/8kEAAOSw4H5oBwax/s-l1600.webp', descrip: 'Recarga tu cuenta PlayStation y compra contenido.' },
  { cod: 'xbox', nombre: 'Xbox Gift Card', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-81.webp', descrip: 'Recarga saldo para Xbox y suscripciones.' },
  { cod: 'itunes', nombre: 'Apple / iTunes', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', descrip: 'Compra apps, música, películas y más en Apple.' },
  { cod: 'gplay', nombre: 'Google Play', img: 'https://cdn.topuplive.com/uploads/images/goods/20240911/1726048096_PpXJIUWYpb.webp', descrip: 'Añade saldo a Google Play para apps y contenido.' },
  { cod: 'nintendo', nombre: 'Nintendo eShop', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-79.webp', descrip: 'Descarga juegos y contenido para Nintendo.' },
  { cod: 'freefire', nombre: 'Free Fire Diamonds', img: 'https://cdn.topuplive.com/uploads/images/goods/20241023/1729667219_hMwSxSTqq6.webp', descrip: 'Recarga diamantes para Free Fire.' },
  { cod: 'roblox', nombre: 'Roblox Gift Card-US', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-153.webp', descrip: 'Compra Robux o Premium en Roblox.' },
  { cod: 'steam', nombre: 'Steam Wallet', img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg', descrip: 'Añade saldo a Steam para juegos y DLC.' },
  { cod: 'amazon', nombre: 'Amazon Gift Card', img: 'https://i.ebayimg.com/images/g/luAAAeSwUqdoZwUW/s-l1600.webp', descrip: 'Compra millones de productos en Amazon.' },
  { cod: 'fortnite', nombre: 'Fortnite V-Bucks', img: 'https://net-revolution.com/wp-content/uploads/Recargar-Fortnite-desde-Venezuela.png', descrip: 'Consigue V-Bucks para Fortnite.' },
  { cod: 'netflix', nombre: 'Netflix Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Netflix.webp', descrip: 'Paga tu suscripción Netflix o regálala.' },
  { cod: 'visa', nombre: 'Visa Prepaid', img: 'https://i.ebayimg.com/images/g/oLsAAeSwyPZocSrH/s-l1600.webp', descrip: 'Tarjeta prepago Visa para comprar online.' },
  { cod: 'pubg', nombre: 'PUBG G-COIN', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-154.webp', descrip: 'Recarga G-Coins para PUBG.' },
  { cod: 'fifa', nombre: 'FC 25 Coins', img: 'https://cdn.topuplive.com/uploads/images/goods/20250523/1747992886_jOcre8DD1t.webp', descrip: 'Monedas para EA Sports FC 25 Ultimate Team.' },
  { cod: 'brawl', nombre: 'Brawl Stars', img: 'https://cdn.topuplive.com/uploads/images/goods/20250521/1747819357_UA0cSxeWlT.webp', descrip: 'Gemas para Brawl Stars.' },
  { cod: 'apex', nombre: 'Apex Legends Mobile', img: 'https://net-revolution.com/wp-content/uploads/Recargar-Apex-Legends-Venezuela.jpg', descrip: 'Monedas para Apex Legends Mobile.' },
  { cod: 'crypto', nombre: 'Crypto Voucher (US)', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Crypto-Voucher.webp', descrip: 'Códigos para comprar criptomonedas.' },
  { cod: 'binance', nombre: 'Binance Gift Card (Global)', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Binance-Gift-Card.webp', descrip: 'Regala saldo en Binance.' },
  { cod: 'eneba', nombre: 'Eneba Gift Card (US)', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Eneba.webp', descrip: 'Compra juegos digitales en Eneba.' },
  { cod: 'lol', nombre: 'League of Legends Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/League-of-Legends.webp', descrip: 'RP para League of Legends.' },
  { cod: 'twitch', nombre: 'Twitch Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Twitch.webp', descrip: 'Bits o suscripción para Twitch.' },
  { cod: 'razer', nombre: 'Razer Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Razer.webp', descrip: 'Razer Gold para gamers.' },
  { cod: 'target', nombre: 'Target Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Target.webp', descrip: 'Compra en Target con tarjeta de regalo.' },
  { cod: 'ebay', nombre: 'eBay Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/eBay.webp', descrip: 'Compra en eBay con esta tarjeta.' }
];

const montos = [10,25,50,75,100,200,500];
let carrito = [];

window.addEventListener('DOMContentLoaded', () => {
  renderProductos();
  setupNav();
  document.getElementById('cart-btn').onclick = () => toggleCart(true);
  document.getElementById('cart-close').onclick = () => toggleCart(false);
  document.getElementById('cart-bg').onclick = () => toggleCart(false);
  document.getElementById('pay-wa').onclick = comprarWhatsApp();
  document.getElementById('btn-register').onclick = () => openAuth('register');
  document.getElementById('btn-login').onclick = () => openAuth('login');
  document.getElementById('modal-close').onclick = closeAuth();
  document.getElementById('auth-form').onsubmit = submitAuth();
});

function renderProductos() {
  const cont = document.getElementById('products-container');
  cont.innerHTML = '';
  productos.forEach((prod,i) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${prod.img}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>${prod.descrip}</p>
      <select id="monto-${i}">${montos.map(m=>`<option value="${m}">$${m}</option>`).join('')}</select>
      <button onclick="agregarAlCarrito(${i})">Agregar al carrito</button>
    `;
    cont.appendChild(div);
  });
}

function agregarAlCarrito(i) {
  const m = Number(document.getElementById(`monto-${i}`).value);
  carrito.push({ nombre: productos[i].nombre, monto: m });
  actualizarCarrito();
}

function actualizarCarrito() {
  const items = document.getElementById('cart-items');
  const ttl = document.getElementById('cart-total');
  items.innerHTML = '';
  let tot=0;
  carrito.forEach(it => {
    tot += it.monto;
    const d = document.createElement('div');
    d.className = 'cart-item';
    d.textContent = `${it.nombre} - $${it.monto}`;
    items.appendChild(d);
  });
  ttl.textContent = `Total: $${tot} USD`;
}

function toggleCart(open) {
  document.getElementById('cart-panel').classList.toggle('open',open);
  document.getElementById('cart-bg').classList.toggle('open',open);
}

function comprarWhatsApp() {
  if(!carrito.length) return alert('Carrito vacío');
  let msg="Hola, quiero comprar:\n";
  carrito.forEach(it=>msg+=`- ${it.nombre} $${it.monto}\n`);
  window.open(`https://wa.me/50371234567?text=${encodeURIComponent(msg)}`,'_blank');
}

function setupNav(){
  document.querySelectorAll('.navbar a').forEach(el => {
    el.addEventListener('click',e=>{
      e.preventDefault();
      document.querySelectorAll('.navbar a').forEach(x=>x.classList.remove('active'));
      el.classList.add('active');
      document.querySelectorAll('.info-section').forEach(s=>s.style.display='none');
      document.getElementById(el.getAttribute('href').substring(1)).style.display='block';
      document.getElementById('productos').style.display = el.getAttribute('href') === '#productos' ? 'grid-section' : 'none';
    });
  });
}

function openAuth(type){
  document.getElementById('auth-modal').style.display='flex';
  document.getElementById('modal-title').textContent = type === 'login' ? 'Iniciar Sesión' : 'Registrarse';
}
function closeAuth(){
  document.getElementById('auth-modal').style.display='none';
}
function submitAuth(){
  return e=>{
    e.preventDefault();
    closeAuth();
    alert('Función ' + document.getElementById('modal-title').textContent + ' aún no disponible.');
  };
}
