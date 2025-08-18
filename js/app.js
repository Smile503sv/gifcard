// Datos del carrusel y productos:
const destacados = [
  { img: "https://i.ebayimg.com/images/g/8kEAAOSw4H5oBwax/s-l1600.webp", nombre: "PlayStation Store", texto: "Recarga tu cuenta PlayStation y compra juegos, suscripciones, DLC y más en segundos. Tarjetas digitales con entrega inmediata." },
  { img: "https://cdn.topuplive.com/uploads/images/goods/v4/f/F-81.webp", nombre: "Xbox Gift Card", texto: "Agrega saldo a tu cuenta Xbox y compra juegos, membresías y más. Elige el monto y recíbelo al instante." },
  { img: "https://cdn.coinsbee.com/version2/dist/assets/img/brands/Netflix.webp", nombre: "Netflix Gift Card", texto: "Paga tu suscripción o regala Netflix a quien quieras. ¡Sin tarjeta, sin riesgos!" },
  { img: "https://cdn.topuplive.com/uploads/images/goods/20240911/1726048096_PpXJIUWYpb.webp", nombre: "Google Play", texto: "Compra apps, juegos, películas y más en Google Play. Entrega rápida, sin complicaciones." }
];

const productos = [
  { cod: 'play', nombre: 'PlayStation Store', img: 'https://i.ebayimg.com/images/g/8kEAAOSw4H5oBwax/s-l1600.webp', descrip: `¡Recarga tu cuenta PlayStation y compra juegos, suscripciones, DLC y más en segundos! La tarjeta PSN es la forma más fácil y segura de disfrutar todo el contenido de PlayStation Store. Ideal para regalar o comprar sin tarjeta de crédito.` },
  { cod: 'xbox', nombre: 'Xbox Gift Card', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-81.webp', descrip: `Añade saldo a tu cuenta Xbox para comprar juegos, contenido, membresías y más. Sin tarjetas de crédito, sin complicaciones. Canjea fácilmente desde tu consola o en línea. ¡Perfecto para gamers!` },
  { cod: 'itunes', nombre: 'Apple / iTunes', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', descrip: `Compra apps, juegos, música, películas y más en App Store y iTunes. El regalo ideal para usuarios de iPhone, iPad y Mac. Código digital, entrega inmediata.` },
  { cod: 'gplay', nombre: 'Google Play', img: 'https://cdn.topuplive.com/uploads/images/goods/20240911/1726048096_PpXJIUWYpb.webp', descrip: `Añade saldo a tu cuenta Google Play y compra apps, juegos, películas, libros y más. Canjea el código al instante desde tu dispositivo Android.` },
  { cod: 'nintendo', nombre: 'Nintendo eShop', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-79.webp', descrip: `Compra juegos, contenido extra y más para Nintendo Switch, 3DS y Wii U. Código digital para canjear fácil en la eShop.` },
  { cod: 'freefire', nombre: 'Free Fire Diamonds', img: 'https://cdn.topuplive.com/uploads/images/goods/20241023/1729667219_hMwSxSTqq6.webp', descrip: `Recarga diamantes para tu cuenta Free Fire al instante. Obtén skins, personajes, armas y más. Entrega rápida y segura.` },
  { cod: 'roblox', nombre: 'Roblox Gift Card-US', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-153.webp', descrip: `Agrega Robux o membresía Premium a tu cuenta Roblox. Compra accesorios, juegos y contenido exclusivo.` },
  { cod: 'steam', nombre: 'Steam Wallet', img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg', descrip: `Saldo para tu cuenta Steam. Compra juegos, DLCs, contenido y más. Canjea el código en segundos.` },
  { cod: 'amazon', nombre: 'Amazon Gift Card', img: 'https://i.ebayimg.com/images/g/luAAAeSwUqdoZwUW/s-l1600.webp', descrip: `Compra millones de productos en Amazon con esta tarjeta. Ideal para regalos o compras personales.` },
  { cod: 'fortnite', nombre: 'Fortnite V-Bucks', img: 'https://net-revolution.com/wp-content/uploads/Recargar-Fortnite-desde-Venezuela.png', descrip: `Consigue V-Bucks para comprar skins, pases de batalla y contenido exclusivo en Fortnite. Código digital, entrega inmediata.` },
  { cod: 'netflix', nombre: 'Netflix Gift Card', img: 'https://cdn.coinsbee.com/version2/dist/assets/img/brands/Netflix.webp', descrip: `Paga tu suscripción Netflix o regálala a quien quieras. Canjea el código y disfruta tus series y películas favoritas.` },
  { cod: 'visa', nombre: 'Visa Prepaid', img: 'https://i.ebayimg.com/images/g/oLsAAeSwyPZocSrH/s-l1600.webp', descrip: `Tarjeta prepago Visa para compras en línea en cualquier tienda que acepte Visa. Segura, anónima y fácil de usar.` },
  { cod: 'pubg', nombre: 'PUBG G-COIN', img: 'https://cdn.topuplive.com/uploads/images/goods/v4/f/F-154.webp', descrip: `Recarga G-COIN y compra ítems y pases de temporada en PUBG. Código digital, entrega rápida.` },
  { cod: 'fifa', nombr

::contentReference[oaicite:0]{index=0}

