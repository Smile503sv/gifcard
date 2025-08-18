const productos = [
  { cod: 'play', nombre: 'PlayStation Store', img: 'https://i.ebayimg.com/images/g/8kEAAOSw4H5oBwax/s-l1600.webp', descrip: 'Recarga tu cuenta PlayStation.', precios: [10,25,50,100] },
  { cod: 'xbox', nombre: 'Xbox Gift Card', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-81.webp', descrip: 'Agrega saldo a tu cuenta Xbox.', precios: [10,25,50] },
  { cod: 'itunes', nombre: 'Apple / iTunes', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', descrip: 'Compra apps, música, películas.', precios: [15,25,50] },
  { cod: 'gplay', nombre: 'Google Play', img: 'https://cdn.topuplive.com/uploads/images/goods/20240911/1726048096_PpXJIUWYpb.webp', descrip: 'Añade saldo a Google Play.', precios: [10,25,50] },
  { cod: 'nintendo', nombre: 'Nintendo eShop', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-79.webp', descrip: 'Compra juegos para Nintendo.', precios: [10,20,50] },
  { cod: 'freefire', nombre: 'Free Fire Diamonds', img: 'https://cdn.topuplive.com/uploads/images/goods/20241023/1729667219_hMwSxSTqq6.webp', descrip: 'Recarga diamantes Free Fire.', precios: [100,310,520] },
  { cod: 'roblox', nombre: 'Roblox Gift Card-US', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-153.webp', descrip: 'Compra Robux o Premium.', precios: [10,25,50] },
  { cod: 'steam', nombre: 'Steam Wallet', img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg', descrip: 'Saldo para Steam.', precios: [5,10,20,50] },
  { cod: 'amazon', nombre: 'Amazon Gift Card', img: 'https://i.ebayimg.com/images/g/luAAAeSwUqdoZwUW/s-l1600.webp', descrip: 'Compra en Amazon.', precios: [10,25,50] },
  { cod: 'fortnite', nombre: 'Fortnite V-Bucks', img: 'https://net-revolution.com/wp-content/uploads/Recargar-Fortnite-desde-Venezuela.png', descrip: 'V-Bucks para Fortnite.', precios: [100,500] },
  { cod: 'netflix', nombre: 'Netflix Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Netflix.webp', descrip: 'Paga Netflix o regálala.', precios: [25,50] },
  { cod: 'visa', nombre: 'Visa Prepaid', img: 'https://i.ebayimg.com/images/g/oLsAAeSwyPZocSrH/s-l1600.webp', descrip: 'Tarjeta Visa prepago.', precios: [20,50] },
  { cod: 'pubg', nombre: 'PUBG G-COIN', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-154.webp', descrip: 'G-Coins para PUBG.', precios: [60,120] },
  { cod: 'fifa', nombre: 'FC 25 Coins', img: 'https://cdn.topuplive.com/uploads/images/goods/20250523/1747992886_jOcre8DD1t.webp', descrip: 'Monedas para FC 25.', precios: [1000,2000] },
  { cod: 'brawl', nombre: 'Brawl Stars', img: 'https://cdn.topuplive.com/uploads/images/goods/20250521/1747819357_UA0cSxeWlT.webp', descrip: 'Gemas para Brawl Stars.', precios: [100,500] },
  { cod: 'apex', nombre: 'Apex Legends Mobile', img: 'https://net-revolution.com/wp-content/uploads/Recargar-Apex-Legends-Venezuela.jpg', descrip: 'Monedas para Apex Mobile.', precios: [120,240] },
  { cod: 'crypto', nombre: 'Crypto Voucher (US)', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Crypto-Voucher.webp', descrip: 'Vouchers para criptomonedas.', precios: [50,100] },
  { cod: 'binance', nombre: 'Binance Gift Card (Global)', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Binance-Gift-Card.webp', descrip: 'Saldo en Binance.', precios: [50,100] },
  { cod: 'eneba', nombre: 'Eneba Gift Card (US)', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Eneba.webp', descrip: 'Códigos para Eneba.', precios: [10,25,50] },
  { cod: 'lol', nombre: 'League of Legends Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/League-of-Legends.webp', descrip: 'RP para LoL.', precios: [500,1000] },
  { cod: 'twitch', nombre: 'Twitch Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Twitch.webp', descrip: 'Para donaciones o suscripción.', precios: [10,25] },
  { cod: 'razer', nombre: 'Razer Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Razer.webp', descrip: 'Razer Gold para gamers.', precios: [25,50] },
  { cod: 'target', nombre: 'Target Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Target.webp', descrip: 'Para comprar en Target.', precios: [25,50] },
  { cod: 'ebay', nombre: 'eBay Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/eBay.webp', descrip: 'Comprar en eBay.', precios: [25,50] }
];

let carrito = [];

function renderProductos() {
  const cont = document.getElementById('products-container');
  cont.innerHTML = '';
  productos.forEach((prod, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>${prod.descrip}</p>
      <select id="monto-${i}">${prod.precios.map(m => `<option value="${m}">$${m} USD</option>`).join('')}</select>
      <button onclick="agregarCarrito(${i})">Agregar al carrito</button>
    `;
    cont.appendChild(card);
  });
}

function agregarCarrito(i) {
  const monto = +document.getElementById(`monto-${i}`).value;
  carrito.push({ nombre: productos[i].nombre, monto });
  actualizarCarrito();
}

function actualizarCarrito() {
  const cont = document.getElementById('cart-items');
  cont.innerHTML = carrito.map(it => `<div>${it.nombre} - $${it.monto} USD</div>`).join('');
  document.getElementById('cart-total').textContent =
    'Total: $' + carrito.reduce((a, b) => a + b.monto, 0) + ' USD';
}

document.getElementById('cart-btn').onclick = () => {
  document.getElementById('cart-panel').classList.add('open');
  document.getElementById('cart-bg').classList.add('open');
};

document.getElementById('cart-close').onclick = () => {
  document.getElementById('cart-panel').classList.remove('open');
  document.getElementById('cart-bg').classList.remove('open');
};

document.getElementById('pay-wa').onclick = () => {
  if (!carrito.length) return alert('Carrito vacío');
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  if (!usuario) return alert('Inicia sesión primero');
  let pedidos = JSON.parse(localStorage.getItem('pedidos') || "[]");
  pedidos.push({
    id: Date.now(),
    email: usuario.email,
    items: carrito,
    estado: 'pendiente'
  });
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
  carrito = [];
  actualizarCarrito();
  alert('Pedido realizado');
};

function closeAuth() {
  document.getElementById('modal-auth').style.display = 'none';
}

function submitAuth(e) {
  e.preventDefault();
  const email = document.getElementById('auth-email').value.trim();
  const tipo = document.getElementById('modal-title').textContent;
  if (tipo.includes('Registrarse')) {
    const role = email.includes('admin') ? 'admin' : 'cliente';
    localStorage.setItem('usuario', JSON.stringify({ email, role }));
    alert('Registrado como ' + role);
  } else {
    const u = JSON.parse(localStorage.getItem('usuario'));
    if (!u || u.email !== email) return alert('Usuario no encontrado');
    alert('Sesión iniciada');
  }
  closeAuth();
  renderCuenta();
}

function renderCuenta() {
  const u = JSON.parse(localStorage.getItem('usuario'));
  const sec = document.getElementById('cuenta');
  if (!u) {
    sec.innerHTML = `
      <h2>Mi Cuenta</h2>
      <button onclick="document.getElementById('modal-title').textContent='Registrarse';document.getElementById('modal-auth').style.display='flex'">Registrarse</button>
      <button onclick="document.getElementById('modal-title').textContent='Iniciar Sesión';document.getElementById('modal-auth').style.display='flex'">Iniciar Sesión</button>
    `;
  } else {
    sec.innerHTML = `<h2>Bienvenido, ${u.email}</h2>`;
    if (u.role === 'admin') renderPanelAdmin();
  }
}

function renderPanelAdmin() {
  const pedidos = JSON.parse(localStorage.getItem('pedidos') || "[]");
  const sec = document.getElementById('cuenta');
  sec.innerHTML += '<h3>Panel Admin</h3>' + pedidos.map((p, i) => `
    <div><b>${p.email}</b> - ${p.estado} <button onclick="cambiarEstado(${i})">Cambiar estado</button></div>
  `).join('');
}

function cambiarEstado(i) {
  const pedidos = JSON.parse(localStorage.getItem('pedidos'));
  const estados = ['pendiente', 'completado', 'reembolsado'];
  const current = pedidos[i].estado;
  pedidos[i].estado = estados[(estados.indexOf(current) + 1) % estados.length];
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
  renderCuenta();
}

renderProductos();
renderCuenta();
