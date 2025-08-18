// Datos tuyos
const productos = [
  {
    cod: 'play',
    nombre: 'PlayStation Store',
    img: 'https://i.ebayimg.com/images/g/8kEAAOSw4H5oBwax/s-l1600.webp',
    descrip: 'Recarga tu cuenta PlayStation...'
  },
  {
    cod: 'xbox',
    nombre: 'Xbox Gift Card',
    img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-81.webp',
    descrip: 'Agrega saldo a tu cuenta Xbox...'
  },
  {
    cod: 'steam',
    nombre: 'Steam Wallet',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg',
    descrip: 'Saldo para tu cuenta Steam...'
  },
  // Agrega todos tus productos aquí según tu listado
];

const montos = [10, 25, 50, 75, 100];
let carrito = [];

// Renderiza las tarjetas
document.addEventListener('DOMContentLoaded', () => {
  const cont = document.getElementById('products-container');
  productos.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>${p.descrip}</p>
      <select class="select-monto" data-idx="${i}">
        ${montos.map(m => `<option value="${m}">$${m} USD</option>`).join('')}
      </select>
      <button class="add-to-cart" data-idx="${i}">Agregar al carrito</button>
    `;
    cont.append(card);
  });

  // Eventos carrito
  agregarEventos();
});

function agregarEventos() {
  document.querySelectorAll('.add-to-cart').forEach(el => {
    el.onclick = () => {
      const i = el.dataset.idx;
      const monto = document.querySelector(`.select-monto[data-idx="${i}"]`).value;
      const prod = productos[i];
      const key = prod.cod + '-' + monto;
      const existe = carrito.find(x => x.key === key);
      if (existe) existe.cantidad++;
      else carrito.push({ key, nombre: prod.nombre, monto: Number(monto), cantidad: 1 });
      renderCart();
      toggleCart(true);
    };
  });

  document.getElementById('cart-btn').onclick = () => toggleCart(true);
  document.getElementById('cart-close').onclick = () => toggleCart(false);
  document.getElementById('cart-bg').onclick = () => toggleCart(false);
  document.getElementById('pay-wa').onclick = payWhatsApp;
}

function renderCart() {
  const itemsDiv = document.getElementById('cart-items');
  const totalDiv = document.getElementById('cart-total');
  itemsDiv.innerHTML = '';
  let total = 0;
  carrito.forEach((x, idx) => {
    total += x.monto * x.cantidad;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span>${x.nombre} $${x.monto} x${x.cantidad}</span>
      <button onclick="removeFromCart(${idx})">&times;</button>
    `;
    itemsDiv.append(div);
  });
  totalDiv.textContent = carrito.length ? `Total: $${total}` : 'Tu carrito está vacío';
}

function removeFromCart(i) {
  carrito.splice(i, 1);
  renderCart();
}

function toggleCart(open) {
  document.getElementById('cart-panel').classList.toggle('open', open);
  document.getElementById('cart-bg').classList.toggle('open', open);
}

function payWhatsApp() {
  if (!carrito.length) return alert('Tu carrito está vacío.');
  let msg = 'Hola, quiero comprar:\n';
  carrito.forEach(x => {
    msg += `- ${x.nombre} $${x.monto} x${x.cantidad}\n`;
  });
  const url = `https://wa.me/50371234567?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}
