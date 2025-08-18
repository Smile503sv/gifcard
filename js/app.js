// Productos reales
const productos = [
  { cod: 'play', nombre: 'PlayStation Store', img: 'https://i.ebayimg.com/.../s-l1600.webp', descrip: `¡Recarga tu cuenta PlayStation...` },
  { cod: 'xbox', nombre: 'Xbox Gift Card', img: 'https://cdn.topuplive.com/.../F-81.webp', descrip: `Añade saldo a tu cuenta Xbox...` },
  { cod: 'itunes', nombre: 'Apple / iTunes', img: 'https://upload.wikimedia.org/.../Apple_logo_black.svg', descrip: `Compra apps, juegos...` },
  { cod: 'gplay', nombre: 'Google Play', img: 'https://cdn.topuplive.com/.../1726048096_PpXJIUWYpb.webp', descrip: `Añade saldo a tu cuenta Google Play...` },
  { cod: 'nintendo', nombre: 'Nintendo eShop', img: 'https://cdn.topuplive.com/.../F-79.webp', descrip: `Compra juegos para Nintendo...` },
  { cod: 'freefire', nombre: 'Free Fire Diamonds', img: 'https://cdn.topuplive.com/.../1729667219_hMwSxSTqq6.webp', descrip: `Recarga diamantes para tu cuenta Free Fire...` },
  { cod: 'roblox', nombre: 'Roblox Gift Card-US', img: 'https://cdn.topuplive.com/.../F-153.webp', descrip: `Agrega Robux o membresía Premium...` },
  { cod: 'steam', nombre: 'Steam Wallet', img: 'https://upload.wikimedia.org/.../Steam_icon_logo.svg', descrip: `Saldo para tu cuenta Steam...` },
  { cod: 'amazon', nombre: 'Amazon Gift Card', img: 'https://i.ebayimg.com/.../luAAAeSwUqdoZwUW/s-l1600.webp', descrip: `Compra millones de productos en Amazon...` },
  { cod: 'fortnite', nombre: 'Fortnite V-Bucks', img: 'https://net-revolution.com/.../png', descrip: `Consigue V-Bucks para Fortnite...` },
  { cod: 'netflix', nombre: 'Netflix Gift Card', img: 'https://cdn.coinsbee.com/.../Netflix.webp', descrip: `Paga tu suscripción Netflix...` },
  { cod: 'visa', nombre: 'Visa Prepaid', img: 'https://i.ebayimg.com/.../oLsAAeSwyPZocSrH/s-l1600.webp', descrip: `Tarjeta prepago Visa para compras...` },
  { cod: 'pubg', nombre: 'PUBG G-COIN', img: 'https://cdn.topuplive.com/.../F-154.webp', descrip: `Recarga G-COIN para PUBG...` },
  { cod: 'fifa', nombre: 'FC 25 Coins', img: 'https://cdn.topuplive.com/.../1747992886_jOcre8DD1t.webp', descrip: `Compra monedas para EA SPORTS FC 25...` },
  { cod: 'brawl', nombre: 'Brawl Stars', img: 'https://cdn.topuplive.com/.../1747819357_UA0cSxeWlT.webp', descrip: `Recarga gemas para Brawl Stars...` },
  { cod: 'apex', nombre: 'Apex Legends Mobile', img: 'https://net-revolution.com/.../jpg', descrip: `Compra monedas para Apex Legends Mobile...` },
  { cod: 'crypto', nombre: 'Crypto Voucher (US)', img: 'https://cdn.coinsbee.com/.../Crypto-Voucher.webp', descrip: `Compra criptomonedas fácilmente...` },
  { cod: 'binance', nombre: 'Binance Gift Card (Global)', img: 'https://cdn.coinsbee.com/.../Binance-Gift-Card.webp', descrip: `Recibe saldo en tu cuenta Binance...` },
  { cod: 'eneba', nombre: 'Eneba Gift Card (US)', img: 'https://cdn.coinsbee.com/.../Eneba.webp', descrip: `Compra juegos digitales en Eneba...` },
  { cod: 'League of Legends Gift Card', nombre: 'League of Legends Gift Card', img: 'https://cdn.coinsbee.com/.../League-of-Legends.webp', descrip: `League RP para Riot, compras y más...` },
  { cod: 'twitch', nombre: 'Twitch Gift Card', img: 'https://cdn.coinsbee.com/.../Twitch.webp', descrip: `Tarjeta para Twitch...` },
  { cod: 'razer', nombre: 'Razer Gift Card', img: 'https://cdn.coinsbee.com/.../Razer.webp', descrip: `Recarga Razer Gold para tus juegos...` },
  { cod: 'target', nombre: 'Target Gift Card', img: 'https://cdn.coinsbee.com/.../Target.webp', descrip: `Compra en Target con esta tarjeta...` },
  { cod: 'ebay', nombre: 'eBay Gift Card', img: 'https://cdn.coinsbee.com/.../eBay.webp', descrip: `Compra en eBay fácilmente...` },
];
const montos = [10, 25, 50, 75, 100, 200, 500];
let carrito = [];

// Render de carrusel inicial (si deseas mantenerlo)
const destacados = productos.slice(0, 4).map(p => ({ img: p.img, nombre: p.nombre, texto: p.descrip }));
function renderCarrusel(){
  const slide = document.getElementById("carousel-slide");
  const dots = document.getElementById("carousel-dots");
  slide.innerHTML = ""; dots.innerHTML = "";
  destacados.forEach((item, idx) => {
    slide.innerHTML += `
      <div class="carousel-item">
        <img src="${item.img}" alt="${item.nombre}">
        <div class="carousel-info">
          <h2>${item.nombre}</h2>
          <p>${item.texto}</p>
        </div>
      </div>`;
    dots.innerHTML += `<button onclick="carruselIr(${idx})" id="dot${idx}"></button>`;
  });
  carruselMostrar(0);
  window.carruselAuto = setInterval(()=>carruselIr((carruselIdx+1)%destacados.length), 4200);
}
let carruselIdx = 0;
function carruselMostrar(idx){
  document.getElementById("carousel-slide").style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll(".carousel-dots button").forEach((b,i)=> b.classList.toggle("active", i==idx));
  carruselIdx = idx;
}
function carruselIr(idx){ clearInterval(window.carruselAuto); carruselMostrar(idx); window.carruselAuto = setInterval(()=>carruselIr((carruselIdx+1)%destacados.length), 4200); }

// Navegación y render de páginas
function handleNav(page){
  document.querySelectorAll('.navbar-menu a').forEach(a=>a.classList.remove('active'));
  document.querySelector(`.navbar-menu a[data-page="${page}"]`)?.classList.add('active');
  if(page==='productos') renderProductos();
  else if(page==='contacto') renderContacto();
  else renderInicio();
  window.scrollTo(0,0);
}

function renderInicio(){
  document.getElementById('main-content').innerHTML = `
    <h2>Bienvenido a gifcard‑bp</h2>
    <p style="text-align:center;">¡Tu tienda digital con +20 productos, pagos seguros y entrega inmediata!</p>`;
}

function renderProductos(){
  let html = `<h2>Todos los productos</h2><div class="products">`;
  productos.forEach((prod,i)=>{
    html += `
      <div class="product">
        <img src="${prod.img}" alt="${prod.nombre}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/542/542638.png'"/>
        <h2 onclick="verDetalleProducto(${i})">${prod.nombre}</h2>
        <p>Entrega inmediata por código digital</p>
        <select class="select-monto" id="monto-${i}">
          ${montos.map(m => `<option value="${m}">$${m} USD</option>`).join('')}
        </select>
        <button class="add-cart-btn" onclick="agregarAlCarrito(${i}, true)">Agregar al carrito</button>
      </div>`;
  });
  html += `</div>`;
  document.getElementById('main-content').innerHTML = html;
}

function verDetalleProducto(idx){
  const prod = productos[idx];
  document.getElementById('main-content').innerHTML = `
    <span class="back-link" onclick="renderProductos()">← Volver</span>
    <div style="text-align:center;">
      <img class="product-detail-img" src="${prod.img}" alt="${prod.nombre}"/>
      <h2 class="product-detail-title">${prod.nombre}</h2>
    </div>
    <div class="product-detail-desc">${prod.descrip}</div>
    <div>
      <select class="select-monto" id="detalle-monto">
        ${montos.map(m => `<option value="${m}">$${m} USD</option>`).join('')}
      </select>
      <button class="add-cart-btn" onclick="agregarAlCarrito(${idx}, false)">Agregar al carrito</button>
    </div>`;
}

function renderContacto(){
  document.getElementById('main-content').innerHTML = `
    <h2>Contáctanos</h2>
    <p style="text-align:center;">¿Preguntas? Escríbenos por WhatsApp o correo.</p>
    <div style="text-align:center;margin:20px;">
      <a href="https://wa.me/50371234567" target="_blank">
        <button class="add-cart-btn">WhatsApp</button>
      </a>
      <p>Correo: ventas@gifsandbp.com</p>
    </div>`;
}

// Carrito
function agregarAlCarrito(idx, desdeListado){
  const monto = desdeListado
    ? document.getElementById(`monto-${idx}`).value
    : document.getElementById('detalle-monto').value;
  const prod = productos[idx];
  const key = prod.cod + '-' + monto;
  const found = carrito.find(i=>i.key===key);
  if(found) found.cantidad++;
  else carrito.push({ key, nombre: prod.nombre, monto: Number(monto), cantidad: 1 });
  mostrarCarrito();
}

function mostrarCarrito(){
  const itemsDiv = document.getElementById('cart-items');
  const totalDiv = document.getElementById('cart-total');
  itemsDiv.innerHTML = ''; let total = 0;
  carrito.forEach((item,idx)=>{
    total += item.monto * item.cantidad;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `<span>${item.nombre} $${item.monto} x${item.cantidad}</span><button class="cart-remove-btn" onclick="quitarDelCarrito(${idx})">&times;</button>`;
    itemsDiv.appendChild(div);
  });
  totalDiv.innerHTML = carrito.length ? `Total: <b>$${total}</b> USD` : '<span style="color:#888">Carrito vacío.</span>';
  aperturaCarrito();
}

function quitarDelCarrito(i){ carrito.splice(i,1); mostrarCarrito(); }

function aperturaCarrito(){ document.getElementById('cart-panel').classList.add('open'); document.getElementById('cart-bg').style.display='block'; }
function cerrarCarrito(){ document.getElementById('cart-panel').classList.remove('open'); document.getElementById('cart-bg').style.display='none'; }

document.getElementById('cart-btn').onclick = mostrarCarrito;
document.getElementById('close-cart').onclick = cerrarCarrito;
document.getElementById('cart-bg').onclick = cerrarCarrito;

function getWhatsAppLink(){
  let msg = 'Hola, quiero comprar:\n';
  carrito.forEach(i => msg += `- ${i.nombre} $${i.monto} x${i.cantidad}\n`);
  return `https://wa.me/50371234567?text=${encodeURIComponent(msg)}`;
}

function pagarWhatsApp(){
  if(!carrito.length) return alert('Carrito vacío.');
  window.open(getWhatsAppLink(), '_blank');
}

function pagarBAC(){
  if(!carrito.length) return alert('Carrito vacío.');
  if(carrito.length>1) return alert('Solo 1 producto por pago BAC.');
  const item = carrito[0];
  window.open('#', '_blank'); // Aquí puedes personalizar el checkout BAC si quieres
}

// Iniciar aplicación
window.onhashchange = () => handleNav(location.hash.replace('#',''));
renderCarrusel();
handleNav((location.hash.replace('#','') || 'inicio'));