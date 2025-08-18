const destacados = [
  { img: "https://i.ebayimg.com/images/g/8kEAAOSw4H5oBwax/s-l1600.webp", nombre: "PlayStation Store", texto: "Recarga tu cuenta PlayStation..." },
  { img: "https://cdn.topuplive.com/uploads/images/goods/v4/f/F-81.webp", nombre: "Xbox Gift Card", texto: "Agrega saldo a tu cuenta Xbox..." },
  { img: "https://cdn.coinsbee.com/version2/dist/assets/img/brands/Netflix.webp", nombre: "Netflix Gift Card", texto: "Paga tu suscripción o regálala..." },
  { img: "https://cdn.topuplive.com/uploads/images/goods/20240911/1726048096_PpXJIUWYpb.webp", nombre: "Google Play", texto: "Compra apps, juegos, películas..." }
];

const productos = [
];

const montos = [10, 25, 50, 75, 100, 200, 500];

let carrito = [];
let carruselIdx = 0;

function renderCarrusel() {
  const slide = document.getElementById("carousel-slide");
  const dots = document.getElementById("carousel-dots");
  slide.innerHTML = "";
  dots.innerHTML = "";

  destacados.forEach((item, idx) => {
    slide.innerHTML += `
      <div class="carousel-item">
        <img src="${item.img}" alt="${item.nombre}">
        <div class="carousel-info">
          <h2>${item.nombre}</h2>
          <p>${item.texto}</p>
        </div>
      </div>
    `;
    dots.innerHTML += `<button onclick="carruselIr(${idx})" id="dot${idx}"></button>`;
  });
}

function carruselMostrar(idx) {
  const slide = document.getElementById("carousel-slide");
  slide.style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll(".carousel-dots button").forEach((b, i) =>
    b.classList.toggle("active", i === idx)
  );
  carruselIdx = idx;
}

function carruselIr(idx) {
  carruselMostrar(idx);
  clearInterval(window.carruselAuto);
  window.carruselAuto = setInterval(
    () => carruselIr((carruselIdx + 1) % destacados.length),
    4200
  );
}

function renderInicio() {
  document.getElementById("main-content").innerHTML = `
    <h2 style="text-align:center;margin-top:24px;">Bienvenido a gifcard-bp</h2>
    <p style="text-align:center;">¡Somos tu tienda de confianza... entrega inmediata.</p>
    <ul style="max-width:380px;margin:22px auto 0;font-size:1.13rem;">
      <li>+20 productos digitales</li>
      <li>Pago BAC Credomatic y WhatsApp</li>
      <li>Soporte rápido y entrega inmediata</li>
    </ul>
    <img src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" alt="Bienvenido" style="width:120px;margin:32px auto 0;display:block;">
  `;
  window.scrollTo(0, 0);
}

function renderProductos() {
  let html = `<h2 style="margin-bottom:14px;">Todos los productos</h2><div class="products">`;
  productos.forEach((prod, i) => {
    html += `
      <div class="product">
        <img src="${prod.img}" alt="${prod.nombre}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/542/542638.png'"/>
        <h2 onclick="verDetalleProducto(${i})">${prod.nombre}</h2>
        <p>Códigos digitales.<br>Entrega inmediata.</p>
        <select class="select-monto" id="monto-${i}">
          ${montos.map(m => `<option value="${m}">$${m} USD</option>`).join("")}
        </select>
        <button class="add-cart-btn" onclick="agregarAlCarrito(${i}, true)">Agregar al carrito</button>
      </div>
    `;
  });
  html += `</div>`;
  document.getElementById("main-content").innerHTML = html;
  window.scrollTo(0, 0);
}

function verDetalleProducto(idx) {
  const prod = productos[idx];
  document.getElementById("main-content").innerHTML = `
    <span class="back-link" onclick="renderProductos()">← Volver a productos</span>
    <div style="text-align:center;">
      <img class="product-detail-img" src="${prod.img}" alt="${prod.nombre}"/>
      <h2 class="product-detail-title">${prod.nombre}</h2>
    </div>
    <div class="product-detail-desc">${prod.descrip.replaceAll("\n", "<br>")}</div>
    <div style="margin:18px 0;">
      <label>Monto: </label>
      <select class="select-monto" id="detalle-monto">
        ${montos.map(m => `<option value="${m}">$${m} USD</option>`).join("")}
      </select>
      <button class="add-cart-btn" onclick="agregarAlCarrito(${idx}, false)">Agregar al carrito</button>
    </div>
  `;
  window.scrollTo(0, 0);
}

function renderContacto() {
  document.getElementById("main-content").innerHTML = `
    <h2>Contáctanos</h2>
    <p>¿Tienes preguntas...? <b>Contáctanos directamente por WhatsApp.</b></p>
    <div style="text-align:center;margin:32px 0;">
      <a href="https://wa.me/50371234567" target="_blank">
        <div style="display:flex;align-items:center;justify-content:center;gap:10px;background:#25d366;color:#fff;border-radius:8px;padding:13px 28px;font-size:1.15rem;font-weight:700;box-shadow:0 2px 10px rgba(39,174,96,0.13);">
          <img src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg" alt="WhatsApp" style="width:32px;height:32px;">
          Contactar por WhatsApp
        </div>
      </a>
    </div>
    <p style="font-size:1.13rem;margin-top:28px;">O si lo prefieres, escríbenos al correo: <b>ventas@gifsandbp.com</b></p>
  `;
  window.scrollTo(0, 0);
}

function handleNav(page) {
  document.querySelectorAll(".navbar-menu li a").forEach(el => el.classList.remove("active"));
  const el = document.querySelector(`.navbar-menu li a[data-page="${page}"]`);
  if (el) el.classList.add("active");

  if (page === "inicio") renderInicio();
  else if (page === "productos") renderProductos();
  else if (page === "contacto") renderContacto();
  else renderInicio();
}

function agregarAlCarrito(idx, desdeListado) {
  const monto = desdeListado
    ? document.getElementById(`monto-${idx}`).value
    : document.getElementById("detalle-monto").value;

  const prod = productos[idx];
  const key = `${prod.cod}-${monto}`;
  const encontrado = carrito.find(item => item.key === key);

  if (encontrado) encontrado.cantidad++;
  else carrito.push({ key, nombre: prod.nombre, cod: prod.cod, monto: Number(monto), cantidad: 1 });
  mostrarCarrito();
}

function mostrarCarrito() {
  const itemsDiv = document.getElementById("cart-items");
  const totalDiv = document.getElementById("cart-total");
  itemsDiv.innerHTML = "";
  let total = 0;

  carrito.forEach((item, idx) => {
    const subtotal = item.monto * item.cantidad;
    total += subtotal;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <span>${item.nombre} <b>$${item.monto}</b> x${item.cantidad}</span>
      <button class="cart-remove-btn" onclick="quitarDelCarrito(${idx})">&times;</button>
    `;
    itemsDiv.appendChild(itemDiv);
  });

  totalDiv.innerHTML = carrito.length
    ? `Total: <b>$${total}</b> USD`
    : '<span style="color:#888">Tu carrito está vacío.</span>';

  abrirCarrito();
}

function quitarDelCarrito(idx) {
  carrito.splice(idx, 1);
  mostrarCarrito();
}

function abrirCarrito() {
  document.getElementById("cart-panel").classList.add("open");
  document.getElementById("cart-bg").style.display = "block";
}

function cerrarCarrito() {
  document.getElementById("cart-panel").classList.remove("open");
  document.getElementById("cart-bg").style.display = "none";
}

function getWhatsAppLink() {
  const numero = "50371234567";
  let msg = "Hola, quiero comprar:\n";
  carrito.forEach(item =>
    (msg += `- ${item.nombre} $${item.monto} x${item.cantidad}\n`)
  );
  msg += "\n¿Puedes enviarme instrucciones de pago?";
  return `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
}

function pagarWhatsApp() {
  if (carrito.length === 0) alert("El carrito está vacío.");
  else window.open(getWhatsAppLink(), "_blank");
}

function pagarBAC() {
  if (carrito.length === 0) return alert("El carrito está vacío.");
  if (carrito.length > 1) return alert("Solo puedes pagar un producto por transacción BAC.");
  const url = getBACLink(carrito[0]);
  window.open(url, "_blank");
}

window.onhashchange = () =>
  handleNav((location.hash || "#inicio").replace("#", ""));

document.querySelectorAll(".navbar-menu li a").forEach(link => {
  link.onclick = function (e) {
    e.preventDefault();
    const page = this.getAttribute("data-page");
    location.hash = `#${page}`;
  };
});

renderCarrusel();
carruselMostrar(0);
window.carruselAuto = setInterval(() =>
  carruselIr((carruselIdx + 1) % destacados.length), 4200
);
handleNav((location.hash || "#inicio").replace("#", ""));

document.getElementById("cart-btn").onclick = mostrarCarrito;
document.getElementById("close-cart").onclick = cerrarCarrito;
document.getElementById("cart-bg").onclick = cerrarCarrito;
