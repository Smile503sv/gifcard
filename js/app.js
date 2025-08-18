const productos = [
  { cod: 'play', nombre: 'PlayStation Store', img: 'https://i.ebayimg.com/images/g/8kEAAOSw4H5oBwax/s-l1600.webp', descrip: 'Recarga tu cuenta PlayStation.', precios: [10,25,50,100] },
  { cod: 'xbox', nombre: 'Xbox Gift Card', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-81.webp', descrip: 'Saldo Xbox.', precios: [10,25,50] },
  { cod: 'itunes', nombre: 'Apple / iTunes', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', descrip: 'Apps, música y más.', precios: [15,25,50] },
  { cod: 'gplay', nombre: 'Google Play', img: 'https://cdn.topuplive.com/uploads/images/goods/20240911/1726048096_PpXJIUWYpb.webp', descrip: 'Saldo Google Play.', precios: [10,25,50] },
  { cod: 'nintendo', nombre: 'Nintendo eShop', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-79.webp', descrip: 'Compra para Nintendo.', precios: [10,20,50] },
  { cod: 'freefire', nombre: 'Free Fire Diamonds', img: 'https://cdn.topuplive.com/uploads/images/goods/20241023/1729667219_hMwSxSTqq6.webp', descrip: 'Diamantes Free Fire.', precios: [100,310,520] },
  { cod: 'roblox', nombre: 'Roblox Gift Card-US', img: 'https://cdn-topuplive.com/uploads/images/goods/v4/f/F-153.webp', descrip: 'Robux o Premium.', precios: [10,25,50] },
  { cod: 'steam', nombre: 'Steam Wallet', img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg', descrip: 'Saldo Steam.', precios: [5,10,20,50] },
  { cod: 'amazon', nombre: 'Amazon Gift Card', img: 'https://i.ebayimg.com/images/g/luAAAeSwUqdoZwUW/s-l1600.webp', descrip: 'Compra en Amazon.', precios: [10,25,50] },
  { cod: 'fortnite', nombre: 'Fortnite V-Bucks', img: 'https://net-revolution.com/wp-content/uploads/Recargar-Fortnite-desde-Venezuela.png', descrip: 'V-Bucks Fortnite.', precios: [100,500] },
  { cod: 'netflix', nombre: 'Netflix Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Netflix.webp', descrip: 'Netflix o regalo.', precios: [25,50] },
  { cod: 'visa', nombre: 'Visa Prepaid', img: 'https://i.ebayimg.com/images/g/oLsAAeSwyPZocSrH/s-l1600.webp', descrip: 'Tarjeta Visa prepago.', precios: [20,50] },
  { cod: 'pubg', nombre: 'PUBG G-COIN', img: 'https://cdn-topuplive.com/uploads/images/goods/v4/f/F-154.webp', descrip: 'G-Coins PUBG.', precios: [60,120] },
  { cod: 'fifa', nombre: 'FC 25 Coins', img: 'https://cdn-topuplive.com/uploads/images/goods/20250523/1747992886_jOcre8DD1t.webp', descrip: 'Monedas FC 25.', precios: [1000,2000] },
  { cod: 'brawl', nombre: 'Brawl Stars Gems', img: 'https://cdn-topuplive.com/uploads/images/goods/20250521/1747819357_UA0cSxeWlT.webp', descrip: 'Gemas Brawl Stars.', precios: [100,500] },
  { cod: 'apex', nombre: 'Apex Legends Mobile', img: 'https://net-revolution.com/wp-content/uploads/Recargar-Apex-Legends-Venezuela.jpg', descrip: 'Monedas Apex Mobile.', precios: [120,240] },
  { cod: 'crypto', nombre: 'Crypto Voucher (US)', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Crypto-Voucher.webp', descrip: 'Compra cripto.', precios: [50,100] },
  { cod: 'binance', nombre: 'Binance Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Binance-Gift-Card.webp', descrip: 'Saldo Binance.', precios: [50,100] },
  { cod: 'eneba', nombre: 'Eneba Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Eneba.webp', descrip: 'Eneba juegos.', precios: [10,25,50] },
  { cod: 'lol', nombre: 'League of Legends Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/League-of-Legends.webp', descrip: 'RP LoL.', precios: [500,1000] },
  { cod: 'twitch', nombre: 'Twitch Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Twitch.webp', descrip: 'Bits o suscripción Twitch.', precios: [10,25] },
  { cod: 'razer', nombre: 'Razer Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Razer.webp', descrip: 'Razer Gold gamer.', precios: [25,50] },
  { cod: 'target', nombre: 'Target Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Target.webp', descrip: 'Compras Target.', precios: [25,50] },
  { cod: 'ebay', nombre: 'eBay Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/eBay.webp', descrip: 'Comprar en eBay.', precios: [25,50] }
];

let carrito = [];

function renderProductos() {
  const cont = document.getElementById('products-container');
  cont.innerHTML = '';
  productos.forEach((p,i) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>${p.descrip}</p>
      <select id="monto-${i}">${p.precios.map(m => `<option value="${m}">$${m} USD</option>`).join('')}</select>
      <button onclick="agregarCarrito(${i})">Agregar al carrito</button>`;
    cont.appendChild(div);
  });
}

function agregarCarrito(i) {
  const monto = +document.getElementById(`monto-${i}`).value;
  carrito.push({ nombre: productos[i].nombre, monto });
  actualizarCarrito();
}

function actualizarCarrito() {
  const itm = document.getElementById('cart-items');
  itm.innerHTML = carrito.map(item=>`<div>${item.nombre} - $${item.monto} USD</div>`).join('');
  document.getElementById('cart-total').textContent =
    'Total: $' + carrito.reduce((a,b)=>a+b.monto,0) + ' USD';
}

function toggleCart(open) {
  document.getElementById('cart-panel').classList.toggle('open', open);
  document.getElementById('cart-bg').classList.toggle('open', open);
}

function checkout() {
  if (!carrito.length) return alert('Carrito vacío');
  const user = JSON.parse(localStorage.getItem('usuario'));
  if (!user) {
    document.getElementById('modal-title').textContent = 'Iniciar Sesión';
    document.getElementById('auth-modal').style.display = 'flex';
    return;
  }
  const pedidos = JSON.parse(localStorage.getItem('pedidos') || "[]");
  pedidos.push({ id: Date.now(), email: user.email, items: carrito, estado: 'pendiente' });
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
  carrito = [];
  actualizarCarrito();
  alert('Pedido enviado. Puedes verlo en "Mi Cuenta".');
}

function closeAuth() {
  document.getElementById('auth-modal').style.display = 'none';
}

function switchAuth() {
  const title = document.getElementById('modal-title');
  title.textContent = title.textContent.includes('Registrarse') ? 'Iniciar Sesión' : 'Registrarse';
}

function submitAuth(e) {
  e.preventDefault();
  const nombre = document.getElementById('auth-nombre')?.value || '';
  const apellido = document.getElementById('auth-apellido')?.value || '';
  const email = document.getElementById('auth-email').value;
  const telefono = document.getElementById('auth-tel')?.value || '';
  const direccion = document.getElementById('auth-dir')?.value || '';
  const pass = document.getElementById('auth-pass').value;
  const title = document.getElementById('modal-title').textContent;
  const users = JSON.parse(localStorage.getItem('usuarios') || "{}");

  if (title === 'Registrarse') {
    if (users[email]) return alert('Usuario ya registrado');
    users[email] = { pass, nombre, apellido, telefono, direccion };
    localStorage.setItem('usuarios', JSON.stringify(users));
  } else {
    if (!users[email] || users[email].pass !== pass) return alert('Credenciales incorrectas');
  }

  localStorage.setItem('usuario', JSON.stringify({
    email,
    nombre: users[email].nombre,
    apellido: users[email].apellido,
    telefono: users[email].telefono,
    direccion: users[email].direccion,
    role: email.endsWith('@admin.com') ? 'admin' : 'cliente'
  }));
  closeAuth();
  renderCuenta();
}

function renderCuenta() {
  const user = JSON.parse(localStorage.getItem('usuario'));
  const sec = document.getElementById('cuenta-content');
  if (!user) {
    sec.innerHTML = `
      <button onclick="document.getElementById('modal-title').textContent='Registrarse';document.getElementById('auth-modal').style.display='flex'">Registrarse</button>
      <button onclick="document.getElementById('modal-title').textContent='Iniciar Sesión';document.getElementById('auth-modal').style.display='flex'">Iniciar Sesión</button>`;
    return;
  }

  let html = `
    <p><strong>${user.nombre} ${user.apellido}</strong></p>
    <p>Email: ${user.email}</p>
    <p>Tel: ${user.telefono}</p>
    <p>Dir: ${user.direccion}</p>
    <button onclick="logout()">Cerrar sesión</button>`;

  const pedidos = JSON.parse(localStorage.getItem('pedidos') || "[]");
  if (user.role === 'admin') {
    html += `<h3>Panel Admin</h3><table><tr><th>ID</th><th>Cliente</th><th>Estado</th><th>Acción</th></tr>`;
    pedidos.forEach((p,i) => {
      html += `<tr>
        <td>${p.id}</td>
        <td>${p.email}</td>
        <td>${p.estado}</td>
        <td><button class="button-small button-complete" onclick="cambiarEstado(${i})">Cambiar</button></td>
      </tr>`;
    });
    html += `</table>`;
  } else {
    html += `<h3>Tus pedidos</h3><table><tr><th>ID</th><th>Estado</th></tr>`;
    pedidos.filter(p => p.email === user.email).forEach(p => {
      html += `<tr><td>${p.id}</td><td>${p.estado}</td></tr>`;
    });
    html += `</table>`;
  }

  sec.innerHTML = html;
}

function logout() {
  localStorage.removeItem('usuario');
  renderCuenta();
}

function cambiarEstado(i) {
  const pedidos = JSON.parse(localStorage.getItem('pedidos') || "[]");
  const estados = ['pendiente','completado','reembolsado'];
  pedidos[i].estado = estados[(estados.indexOf(pedidos[i].estado) + 1) % estados.length];
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
  renderCuenta();
}

function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = '';
  document.querySelectorAll('.navbar a').forEach(a => a.classList.remove('active'));
  document.querySelector(`.navbar a[onclick*="${id}"]`).classList.add('active');
}

renderProductos();
renderCuenta();
