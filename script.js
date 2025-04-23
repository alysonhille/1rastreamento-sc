let map;
let markers = [];

const cidades = [
  { nome: 'Florianópolis', lat: -27.5954, lng: -48.5480 },
  { nome: 'Joinville', lat: -26.3044, lng: -48.8487 },
  { nome: 'Blumenau', lat: -26.9178, lng: -49.0715 },
  { nome: 'Chapecó', lat: -27.1000, lng: -52.6152 },
  { nome: 'Itajaí', lat: -26.9101, lng: -48.6705 },
  { nome: 'Lages', lat: -27.8156, lng: -50.3264 },
  { nome: 'Criciúma', lat: -28.6775, lng: -49.3697 },
  { nome: 'São José', lat: -27.6136, lng: -48.6366 },
  { nome: 'Jaraguá do Sul', lat: -26.4851, lng: -49.0661 }
];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -27.5, lng: -49.5 },
    zoom: 7
  });

  cidades.forEach((cidade, i) => {
    const marker = new google.maps.Marker({
      position: cidade,
      map: map,
      label: `${i + 1}`,
      title: `Carga ${i + 1} - ${cidade.nome}`
    });
    markers.push({ marker, index: i });
  });

  // Simular movimento das cargas
  setInterval(moveCargas, 5000);
}

function moveCargas() {
  markers.forEach(obj => {
    const destinoIndex = Math.floor(Math.random() * cidades.length);
    const destino = cidades[destinoIndex];

    obj.marker.setPosition({ lat: destino.lat, lng: destino.lng });
    obj.marker.setTitle(`Carga ${obj.index + 1} - ${destino.nome}`);
  });
}
