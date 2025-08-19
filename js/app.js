const productos = [
  { cod: 'play', nombre: 'PlayStation Store', img: 'https://i.ebayimg.com/images/g/8kEAAOSw4H5oBwax/s-l1600.webp', descrip: 'Recarga tu cuenta PlayStation.', precios: [10,25,50,100] },
  { cod: 'xbox', nombre: 'Xbox Gift Card', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-81.webp', descrip: 'Saldo Xbox.', precios: [10,25,50] },
  { cod: 'itunes', nombre: 'Apple / iTunes', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', descrip: 'Apps, música y más.', precios: [15,25,50] },
  { cod: 'gplay', nombre: 'Google Play', img: 'https://cdn.topuplive.com/uploads/images/goods/20240911/1726048096_PpXJIUWYpb.webp', descrip: 'Saldo Google Play.', precios: [10,25,50] },
  { cod: 'nintendo', nombre: 'Nintendo eShop', img: 'https://cdn-topuplive.com/uploads/images/goods/v4/f/F-79.webp', descrip: 'Compra para Nintendo.', precios: [10,20,50] },
  { cod: 'freefire', nombre: 'Free Fire Diamonds', img: 'https://cdn-topuplive.com/uploads/images/goods/20241023/1729667219_hMwSxSTqq6.webp', descrip: 'Diamantes Free Fire.', precios: [100,310,520] },
  { cod: 'roblox', nombre: 'Roblox Gift Card', img: 'https://cdn-topuplive.com/uploads/images/goods/v4/f/F-153.webp', descrip: 'Robux o Premium.', precios: [10,25,50] },
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
  document.getElementById('cart-total').textContent = 'Total: $' + carrito.reduce((a, b) => a + b.monto, 0) + ' USD';
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
    setAuthMode('login');
    return;
  }
  const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
  const order = { id: Date.now(), email: user.email, items: carrito, estado: 'pendiente' };
  pedidos.push(order);
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
  carrito = [];
  actualizarCarrito();
  alert('Pedido enviado. Revísalo en "Mi Cuenta".');
}

function closeAuth() {
  document.getElementById('auth-modal').style.display = 'none';
}

function setAuthMode(mode) {
  const reg = document.getElementById('fields-register'),
        log = document.getElementById('fields-login'),
        title = document.getElementById('modal-title'),
        toggle = document.getElementById('toggle-auth');
  if (mode === 'login') {
    title.textContent = 'Iniciar Sesión';
    reg.style.display = 'none';
    log.style.display = '';
    toggle.innerHTML = `¿No tienes cuenta? <span onclick="setAuthMode('register')">Regístrate</span>`;
  } else {
    title.textContent = 'Registrarse';
    reg.style.display = '';
    log.style.display = 'none';
    toggle.innerHTML = `¿Ya tienes cuenta? <span onclick="setAuthMode('login')">Iniciar Sesión</span>`;
  }
}

function submitAuth(e) {
  e.preventDefault();
  const isLogin = document.getElementById('modal-title').textContent === 'Iniciar Sesión';
  const users = JSON.parse(localStorage.getItem('usuarios') || '{}');
  if (isLogin) {
    const em = document.getElementById('login-email').value.trim();
    const pw = document.getElementById('login-pass').value;
    if (!users[em] || users[em].pass !== pw) return alert('Credenciales inválidas');
    localStorage.setItem('usuario', JSON.stringify({ email: em, ...users[em] }));
    alert('Sesión iniciada');
  } else {
    const nm = document.getElementById('auth-nombre').value.trim();
    const ap = document.getElementById('auth-apellido').value.trim();
    const em = document.getElementById('auth-email').value.trim();
    const tl = document.getElementById('auth-tel').value.trim();
    const di = document.getElementById('auth-dir').value.trim();
    const pw = document.getElementById('auth-pass').value;
    if (users[em]) return alert('Usuario ya registrado');
    users[em] = {
      nombre: nm,
      apellido: ap,
      telefono: tl,
      direccion: di,
      pass: pw,
      role: em.endsWith('@admin.com') ? 'admin' : 'cliente'
    };
    localStorage.setItem('usuarios', JSON.stringify(users));
    localStorage.setItem('usuario', JSON.stringify({ email: em, ...users[em] }));
    alert('Registro exitoso');
  }
  closeAuth();
  renderCuenta();
}

function logout() {
  localStorage.removeItem('usuario');
  renderCuenta();
}

function generarCodigo() {
  return 'DC-' + Math.random().toString(36).substr(2, 10).toUpperCase();
}

function enviarCodigo(email, orderId, codigo) {
  emailjs.send('service_i5vt2sq', 'template_order_confirmed', {
    email: email,
    order_id: orderId,
    codigo: codigo
  })
  .then(() => {
    alert(`Correo enviado a ${email} con código: ${codigo}`);
  })
  .catch((err) => {
    console.error(err);
    alert('Error enviando correo');
  });
}

function copiarCodigo(codigo) {
  navigator.clipboard.writeText(codigo)
    .then(() => alert(`Copiado: ${codigo}`))
    .catch(() => alert('Error copiando código'));
}

function cambiarEstado(i) {
  const ped = JSON.parse(localStorage.getItem('pedidos') || '[]');
  const est = ['pendiente', 'completado', 'reembolsado'];
  const j = est.indexOf(ped[i].estado);
  const nuevo = est[(j + 1) % est.length];
  ped[i].estado = nuevo;
  if (nuevo === 'completado') {
    const code = generarCodigo();
    ped[i].codigo = code;
    enviarCodigo(ped[i].email, ped[i].id, code);
  }
  localStorage.setItem('pedidos', JSON.stringify(ped));
  renderCuenta();
}

function renderCuenta() {
  const user = JSON.parse(localStorage.getItem('usuario'));
  const sec = document.getElementById('cuenta-content');
  if (!user) {
    sec.innerHTML = `
      <button onclick="setAuthMode('register'); document.getElementById('auth-modal').style.display='flex'">Registrarse</button>
      <button onclick="setAuthMode('login'); document.getElementById('auth-modal').style.display='flex'">Iniciar Sesión</button>`;
    return;
  }
  let html = `
    <p><strong>${user.nombre} ${user.apellido}</strong></p>
    <p>Email: ${user.email}</p>
    <p>Tel: ${user.telefono}</p>
    <p>Dir: ${user.direccion}</p>
    <button onclick="logout()">Cerrar sesión</button>
    <h3>Pedidos</h3>`;
  const ped = JSON.parse(localStorage.getItem('pedidos') || '[]');
  if (user.role === 'admin') {
    html += '<table><tr><th>ID</th><th>Cliente</th><th>Estado</th><th>Código</th><th>Acción</th></tr>';
    ped.forEach((p, i) => {
      html += `
      <tr>
        <td>${p.id}</td>
        <td>${p.email}</td>
        <td>${p.estado}</td>
        <td>${p.codigo || '-'}</td>
        <td><button onclick="cambiarEstado(${i})">Cambiar</button></td>
      </tr>`;
    });
    html += '</table>';
  } else {
    const mis = ped.filter(p => p.email === user.email);
    if (mis.length) {
      html += '<table><tr><th>ID</th><th>Estado</th><th>Código</th></tr>';
      mis.forEach(p => {
        html += `
        <tr>
          <td>${p.id}</td>
          <td>${p.estado}</td>
          <td>${
            p.estado === 'completado' && p.codigo
              ? `<strong style="color:#25d366">${p.codigo}</strong> <button onclick="copiarCodigo('${p.codigo}')">📋 Copiar</button>`
              : '-'
          }</td>
        </tr>`;
      });
      html += '</table>';
    } else {
      html += '<p>No tienes pedidos.</p>';
    }
  }
  sec.innerHTML = html;
}

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = '';
  document.querySelectorAll('.navbar a').forEach(a => a.classList.remove('active'));
  document.querySelector(`.navbar a[onclick*="${id}"]`).classList.add('active');
}

window.addEventListener('DOMContentLoaded', () => {
  emailjs.init('qWKSfZ8aUnEMTgaL2');
  renderProductos();
  renderCuenta();
});
