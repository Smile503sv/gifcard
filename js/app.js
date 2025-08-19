const productos = [
  { cod: 'play', nombre: 'PlayStation Store', img: 'https://i.ebayimg.com/images/g/8kEAAOSw4H5oBwax/s-l1600.webp', descrip: 'Recarga tu cuenta PlayStation.', precios: [10,25,50,100,200] },
  { cod: 'xbox', nombre: 'Xbox Gift Card', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-81.webp', descrip: 'Saldo Xbox.', precios: [10,25,50,10,200] },
  { cod: 'itunes', nombre: 'Apple / iTunes', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', descrip: 'Apps, música y más.', precios: [15,25,50,100,200] },
  { cod: 'gplay', nombre: 'Google Play', img: 'https://cdn.topuplive.com/uploads/images/goods/20240911/1726048096_PpXJIUWYpb.webp', descrip: 'Saldo Google Play.', precios: [10,25,50,100] },
  { cod: 'nintendo', nombre: 'Nintendo eShop', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-79.webp', descrip: 'Compra para Nintendo.', precios: [10,20,50] },
  { cod: 'freefire', nombre: 'Free Fire Diamonds', img: 'https://cdn.topuplive.com/cdn-cgi/image/format=webp/uploads/images/goods/20241023/1729666505_ZU9ZylTbkv.png', descrip: 'Diamantes Free Fire.', precios: [1,5,10,20,50] },
  { cod: 'roblox', nombre: 'Roblox Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Roblox.webp', descrip: 'Robux o Premium.', precios: [10,25,50] },
  { cod: 'steam', nombre: 'Steam Wallet', img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg', descrip: 'Saldo Steam.', precios: [5,10,20,50,100] },
  { cod: 'amazon', nombre: 'Amazon Gift Card', img: 'https://i.ebayimg.com/images/g/luAAAeSwUqdoZwUW/s-l1600.webp', descrip: 'Compra en Amazon.', precios: [10,25,50,100,200] },
  { cod: 'fortnite', nombre: 'Fortnite V-Bucks', img: 'https://net-revolution.com/wp-content/uploads/Recargar-Fortnite-desde-Venezuela.png', descrip: 'V-Bucks Fortnite.', precios: [100,500] },
  { cod: 'netflix', nombre: 'Netflix Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Netflix.webp', descrip: 'Netflix o regalo.', precios: [25,50] },
  { cod: 'visa', nombre: 'Visa Prepaid', img: 'https://i.ebayimg.com/images/g/oLsAAeSwyPZocSrH/s-l1600.webp', descrip: 'Tarjeta Visa prepago.', precios: [20,50,100,200] },
  { cod: 'pubg', nombre: 'PUBG G-COIN', img: 'https://cdn.topuplive.com/cdn-cgi/image/width=180,height=240,dpr=2,format=webp/uploads/images/goods/v4/c/C-53.webp', descrip: 'G-Coins PUBG.', precios: [60,120] },
  { cod: 'fifa', nombre: 'FC 25 Coins', img: 'https://cdn.topuplive.com/cdn-cgi/image/format=webp/uploads/images/goods/20250523/1747992889_7pE52l6Bs4.webp', descrip: 'Monedas FC 25.', precios: [100,200] },
  { cod: 'brawl', nombre: 'Brawl Stars Gems', img: 'https://cdn.topuplive.com/cdn-cgi/image/format=webp/uploads/images/goods/20250731/1753956556_7PNlYiP9GT.webp', descrip: 'Gemas Brawl Stars.', precios: [100,500] },
  { cod: 'apex', nombre: 'Apex Legends Mobile', img: 'https://net-revolution.com/wp-content/uploads/Recargar-Apex-Legends-Venezuela.jpg', descrip: 'Monedas Apex Mobile.', precios: [120,240] },
  { cod: 'crypto', nombre: 'Crypto Voucher (US)', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Crypto-Voucher.webp', descrip: 'Compra cripto.', precios: [50,100,200,500] },
  { cod: 'binance', nombre: 'Binance Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Binance-Gift-Card.webp', descrip: 'Saldo Binance.', precios: [50,100,200,500] },
  { cod: 'eneba', nombre: 'Eneba Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Eneba.webp', descrip: 'Eneba juegos.', precios: [10,25,50,100] },
  { cod: 'lol', nombre: 'League of Legends Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/League-of-Legends.webp', descrip: 'RP LoL.', precios: [50,100] },
  { cod: 'twitch', nombre: 'Twitch Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Twitch.webp', descrip: 'Bits o suscripción Twitch.', precios: [10,25,50,100] },
  { cod: 'razer', nombre: 'Razer Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Razer.webp', descrip: 'Razer Gold gamer.', precios: [25,50,100,200] },
  { cod: 'target', nombre: 'Target Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Target.webp', descrip: 'Compras Target.', precios: [25,50,100,200] },
  { cod: 'ebay', nombre: 'eBay Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/eBay.webp', descrip: 'Comprar en eBay.', precios: [25,50,100,200] }
];

let carrito = [];

function renderProductos() {
  const cont = document.getElementById('products-container');
  cont.innerHTML = '';
  productos.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>${p.descrip}</p>
      <select id="monto-${i}">
        ${p.precios.map(m => `<option value="${m}">$${m} USD</option>`).join('')}
      </select>
      <button onclick="agregarCarrito(${i})">Agregar al carrito</button>
    `;
    cont.appendChild(div);
  });
}

function agregarCarrito(i) {
  const monto = +document.getElementById(`monto-${i}`).value;
  carrito.push({ nombre: productos[i].nombre, monto });
  actualizarCarrito();
}

function actualizarCarrito() {
  const cont = document.getElementById('cart-items');
  cont.innerHTML = carrito.map(item => `<div>${item.nombre} - $${item.monto} USD</div>`).join('');
  document.getElementById('cart-total').textContent =
    'Total: $' + carrito.reduce((a, b) => a + b.monto, 0) + ' USD';
}

function toggleCart(open) {
  document.getElementById('cart-panel').classList.toggle('open', open);
  document.getElementById('cart-bg').classList.toggle('open', open);
}

function checkout() {
  if (!carrito.length) return alert('Carrito vacío');

  const user = JSON.parse(localStorage.getItem('usuario'));
  if (!user) {               
    openAuth('login');
    return;
  }

  const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
  const nuevoPedido = {
    id: Date.now(),
    email: user.email,
    items: carrito,
    estado: 'pendiente'
  };
  pedidos.push(nuevoPedido);
  localStorage.setItem('pedidos', JSON.stringify(pedidos));

  carrito = [];
  actualizarCarrito();

  const numeroVendedor = '50379553318';
  const total = nuevoPedido.items.reduce((sum, item) => sum + item.monto, 0);
  const mensaje = encodeURIComponent(
    `¡Nuevo pedido recibido!\n\nCliente: ${user.nombre||''} ${user.apellido||''}\nEmail: ${user.email}\nTel: ${user.telefono||''}\nDirección: ${user.direccion||''}\nTotal: $${total} USD\n\nRevisa en tu panel de admin para más detalles.`
  );
  window.open(`https://wa.me/${numeroVendedor}?text=${mensaje}`, '_blank');

  alert('Pedido enviado. Revisa tu cuenta para más detalles.');
}

let AUTH_MODE = 'login';

function openAuth(mode = 'login') {
  setAuthMode(mode);
  document.getElementById('auth-modal').style.display = 'flex';
}
function closeAuth() {
  document.getElementById('auth-modal').style.display = 'none';
}

function setAuthMode(mode) {
  AUTH_MODE = (mode === 'register') ? 'register' : 'login';

  const reg = document.getElementById('fields-register');
  const log = document.getElementById('fields-login');
  const title = document.getElementById('modal-title');
  const toggle = document.getElementById('toggle-auth');

  if (AUTH_MODE === 'login') {
    title.textContent = 'Iniciar Sesión';
    log.style.display = '';
    reg.style.display = 'none';
    toggle.innerHTML = `¿No tienes cuenta? <a href="#" onclick="setAuthMode('register');return false;">Regístrate</a>`;
  } else {
    title.textContent = 'Registrarse';
    log.style.display = 'none';
    reg.style.display = '';
    toggle.innerHTML = `¿Ya tienes cuenta? <a href="#" onclick="setAuthMode('login');return false;">Iniciar Sesión</a>`;
  }
}

function submitAuth(e) {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem('usuarios') || '{}');

  if (AUTH_MODE === 'login') {
    const em = document.getElementById('login-email').value.trim();
    const pw = document.getElementById('login-pass').value;
    if (!users[em] || users[em].pass !== pw) { alert('Credenciales inválidas'); return; }
    localStorage.setItem('usuario', JSON.stringify({ email: em, ...users[em] }));
    alert('Sesión iniciada');
  } else {
    const nm = document.getElementById('auth-nombre').value.trim();
    const ap = document.getElementById('auth-apellido').value.trim();
    const em = document.getElementById('auth-email').value.trim();
    const tl = document.getElementById('auth-tel').value.trim();
    const di = document.getElementById('auth-dir').value.trim();
    const pw = document.getElementById('auth-pass').value;

    if (users[em]) { alert('Usuario ya registrado'); return; }

    users[em] = {
      nombre: nm, apellido: ap, telefono: tl, direccion: di, pass: pw,
      role: em.endsWith('@admin.com') ? 'admin' : 'cliente'
    };
    localStorage.setItem('usuarios', JSON.stringify(users));
    localStorage.setItem('usuario', JSON.stringify({ email: em, ...users[em] }));
    alert('Registro exitoso');
  }

  closeAuth();
  renderCuenta();
}

function renderCuenta() {
  const user = JSON.parse(localStorage.getItem('usuario'));
  const sec = document.getElementById('cuenta-content');

  if (!user) {
    sec.innerHTML = `
      <button onclick="openAuth('register')">Registrarse</button>
      <button onclick="openAuth('login')">Iniciar Sesión</button>
    `;
    return;
  }

  let html = `
    <p><strong>${user.nombre||''} ${user.apellido||''}</strong></p>
    <p>Email: ${user.email}</p>
    <p>Tel: ${user.telefono||''}</p>
    <p>Dir: ${user.direccion||''}</p>
    <button onclick="logout()">Cerrar sesión</button>
    <h3>Pedidos</h3>
  `;

  const pedidos = JSON.parse(localStorage.getItem('pedidos')||'[]');
  if (user.role === 'admin') {
    html += `<table>
      <tr><th>ID</th><th>Cliente</th><th>Estado</th><th>Acción</th></tr>`;
    pedidos.forEach((p,i) => {
      html += `
        <tr>
          <td>${p.id}</td>
          <td>${p.email}</td>
          <td>${p.estado}</td>
          <td><button class="button-small button-complete" onclick="cambiarEstado(${i})">Cambiar</button></td>
        </tr>`;
    });
    html += `</table>`;
  } else {
    html += `<table>
      <tr><th>ID</th><th>Estado</th></tr>`;
    pedidos.filter(p => p.email === user.email)
      .forEach(p => {
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
  const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
  const estados = ['pendiente', 'completado', 'reembolsado'];
  const idx = estados.indexOf(pedidos[i].estado);
  pedidos[i].estado = estados[(idx + 1) % estados.length];
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
