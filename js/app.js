const productos = [
  { cod: 'play', nombre: 'PlayStation Store', img: 'https://i.ebayimg.com/images/g/8kEAAOSw4H5oBwax/s-l1600.webp', descrip: '¡Recarga tu cuenta PlayStation y compra juegos, suscripciones, DLC y más en segundos!' },
  { cod: 'xbox', nombre: 'Xbox Gift Card', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-81.webp', descrip: 'Añade saldo a tu cuenta Xbox para comprar juegos, contenido y más.' },
  { cod: 'itunes', nombre: 'Apple / iTunes', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', descrip: 'Compra apps, juegos, música, películas y más en App Store y iTunes.' },
  { cod: 'gplay', nombre: 'Google Play', img: 'https://cdn.topuplive.com/uploads/images/goods/20240911/1726048096_PpXJIUWYpb.webp', descrip: 'Añade saldo a tu cuenta Google Play y compra apps, juegos, películas...' },
  { cod: 'nintendo', nombre: 'Nintendo eShop', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-79.webp', descrip: 'Compra juegos, contenido extra y más para Nintendo Switch, 3DS y Wii U.' },
  { cod: 'freefire', nombre: 'Free Fire Diamonds', img: 'https://cdn.topuplive.com/uploads/images/goods/20241023/1729667219_hMwSxSTqq6.webp', descrip: 'Recarga diamantes para Free Fire al instante.' },
  { cod: 'roblox', nombre: 'Roblox Gift Card-US', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-153.webp', descrip: 'Agrega Robux o membresía Premium a tu cuenta Roblox.' },
  { cod: 'steam', nombre: 'Steam Wallet', img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg', descrip: 'Saldo para tu cuenta Steam. Compra juegos, DLCs y contenido.' },
  { cod: 'amazon', nombre: 'Amazon Gift Card', img: 'https://i.ebayimg.com/images/g/luAAAeSwUqdoZwUW/s-l1600.webp', descrip: 'Compra millones de productos en Amazon con esta tarjeta.' },
  { cod: 'fortnite', nombre: 'Fortnite V-Bucks', img: 'https://net-revolution.com/wp-content/uploads/Recargar-Fortnite-desde-Venezuela.png', descrip: 'Consigue V-Bucks para Fortnite. Entrega inmediata.' },
  { cod: 'netflix', nombre: 'Netflix Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Netflix.webp', descrip: 'Paga tu suscripción Netflix o regálala.' },
  { cod: 'visa', nombre: 'Visa Prepaid', img: 'https://i.ebayimg.com/images/g/oLsAAeSwyPZocSrH/s-l1600.webp', descrip: 'Tarjeta prepago Visa para compras en línea.' },
  { cod: 'pubg', nombre: 'PUBG G-COIN', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-154.webp', descrip: 'Recarga G-COIN para contenido en PUBG.' },
  { cod: 'fifa', nombre: 'FC 25 Coins', img: 'https://cdn.topuplive.com/uploads/images/goods/20250523/1747992886_jOcre8DD1t.webp', descrip: 'Monedas para EA Sports FC 25 Ultimate Team.' },
  { cod: 'brawl', nombre: 'Brawl Stars', img: 'https://cdn.topuplive.com/uploads/images/goods/20250521/1747819357_UA0cSxeWlT.webp', descrip: 'Recarga gemas para Brawl Stars.' },
  { cod: 'apex', nombre: 'Apex Legends Mobile', img: 'https://net-revolution.com/wp-content/uploads/Recargar-Apex-Legends-Venezuela.jpg', descrip: 'Monedas para Apex Legends Mobile.' },
  { cod: 'crypto', nombre: 'Crypto Voucher (US)', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Crypto-Voucher.webp', descrip: 'Compra criptomonedas fácilmente con este cupón.' },
  { cod: 'binance', nombre: 'Binance Gift Card (Global)', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Binance-Gift-Card.webp', descrip: 'Saldo directo en tu cuenta Binance.' },
  { cod: 'eneba', nombre: 'Eneba Gift Card (US)', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Eneba.webp', descrip: 'Compra juegos digitales en Eneba.' },
  { cod: 'lol', nombre: 'League of Legends Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/League-of-Legends.webp', descrip: 'Compra Riot Points (LoL).' },
  { cod: 'twitch', nombre: 'Twitch Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Twitch.webp', descrip: 'Tarjeta para Twitch (suscripciones/cheers).' },
  { cod: 'razer', nombre: 'Razer Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Razer.webp', descrip: 'Razer Gold para gamers.' },
  { cod: 'target', nombre: 'Target Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Target.webp', descrip: 'Compra en Target con esta tarjeta.' },
  { cod: 'ebay', nombre: 'eBay Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/eBay.webp', descrip: 'Compra en eBay con tarjeta de regalo.' }
];

const montos = [10, 25, 50, 75, 100, 200, 500];
let carrito = [];

// Render productos
document.addEventListener('DOMContentLoaded', () => {
  const cont = document.getElementById('products-container');
  productos.forEach((prod, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>${prod.descrip}</p>
      <select id="monto-${i}">
        ${montos.map(m => `<option value="${m}">$${m} USD</option>`).join('')}
      </select>
      <button onclick="agregarAlCarrito(${i})">Agregar al carrito</button>
    `;
    cont.appendChild(card);
  });

  document.getElementById('cart-btn').onclick = mostrarCarrito;
  document.getElementById('cart-close').onclick = cerrarCarrito;
  document.getElementById('cart-bg').onclick = cerrarCarrito;
  document.getElementById('pay-wa').onclick = pagarWhatsApp;
});

function agregarAlCarrito(idx) {
  const monto = document.getElementById(`monto-${idx}`).value;
  const prod = productos[idx];
  carrito.push({ nombre: prod.nombre, monto: Number(monto) });
  mostrarCarrito();
}

function mostrarCarrito() {
  const itemsDiv = document.getElementById('cart-items');
  const totalDiv = document.getElementById('cart-total');
  itemsDiv.innerHTML = '';
  let total = 0;
  carrito.forEach(prod => {
    total += prod.monto;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.textContent = `${prod.nombre} - $${prod.monto}`;
    itemsDiv.appendChild(div);
  });
  totalDiv.textContent = `Total: $${total} USD`;
  document.getElementById('cart-panel').classList.add('open');
  document.getElementById('cart-bg').classList.add('open');
}

function cerrarCarrito() {
  document.getElementById('cart-panel').classList.remove('open');
  document.getElementById('cart-bg').classList.remove('open');
}

function pagarWhatsApp() {
  if (!carrito.length) return alert('Carrito vacío');
  let msg = 'Hola, quiero comprar:\n';
  carrito.forEach(item => msg += `- ${item.nombre} $${item.monto}\n`);
  window.open(`https://wa.me/50371234567?text=${encodeURIComponent(msg)}`, '_blank');
}