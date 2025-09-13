// Coordenadas aproximadas do Egito Antigo (Cairo)
// Use zoom inicial adequado para mostrar o Egito
const map = L.map('map', {
  zoomControl: false
}).setView([26.8206, 30.8025], 6);


// Camada do mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// Pontos de interesse no Egito Antigo
const pontos = [
  {
    nome: "Pirâmides de Gizé",
    coords: [29.9792, 31.1342],
    texto: "As Pirâmides de Gizé são uma das Sete Maravilhas do Mundo Antigo. Localizadas nos arredores do Cairo, incluem a Grande Pirâmide de Quéops.",
    imagem: "https://www.worldhistory.org/img/r/p/500x600/5687.jpg?v=1742296205"
  },
  {
    nome: "Templo de Karnak (Luxor)",
    coords: [25.7188, 32.6572],
    texto: "Luxor é famosa por seus templos antigos, como Karnak e o Vale dos Reis, onde muitos faraós foram enterrados.",
    imagem: "https://images.memphistours.com/large/3f46543f340fca6d19d744adde6569cc.jpg"
  },
  {
    nome: "Alexandria",
    coords: [31.2001, 29.9187],
    texto: "Fundada por Alexandre, o Grande, Alexandria foi um centro de conhecimento e cultura no mundo antigo.",
    imagem: "https://xtravel.com.br/wp-content/uploads/2024/04/flo-p-praia-alexandria-xtravel-unsplash.jpg"
  },
  {
    nome: "Abydos",
    coords: [26.1858, 31.8806],
    texto: "Abydos é um dos mais antigos locais sagrados do Egito, famoso pelo templo de Seti I e inscrições antigas.",
    imagem: "https://images.memphistours.com/large/407653046_templo%20de%20abydos%202.jpg"
  },
  {
    nome: "Templo de Philae (Assuã)",
    coords: [24.0260, 32.8894],
    texto: "Assuã é conhecida por seus monumentos antigos, como o Templo de Philae e a represa de Assuã.",
    imagem: "https://www.egiptoexclusivo.com/wp-content/uploads/2023/06/templo-fachada-philae.jpg"
  },
  {
    nome: "Saqqara",
    coords: [29.8717, 31.2165],
    texto: "Saqqara é uma vasta necrópole onde se encontra a famosa Pirâmide de Degraus de Djoser, a mais antiga pirâmide do Egito.",
    imagem: "https://cdn.britannica.com/47/189747-050-2A54A672/Step-Pyramid-complex-Djoser-Egypt-Saqqarah.jpg"
  }
];

// Adiciona marcadores e popups
pontos.forEach(ponto => {
  const marker = L.marker(ponto.coords).addTo(map);
  marker.bindPopup(`
    <h3>${ponto.nome}</h3>
    <p>${ponto.texto}</p>
    <img src="${ponto.imagem}" alt="${ponto.nome}" />
  `);
});

  
// Quando o usuário clicar no mapa, centraliza a visualização naquele ponto
map.on('click', function(e) {
  const latlng = e.latlng;
  map.setView(latlng, map.getZoom()); // mantém o mesmo nível de zoom
});