const options = {
    dragging: false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

// cria o mapa
const map = L.map('mapid', options).setView([-27.2205683,-49.6451598], 15);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//cria icone de marcação
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor:[170, 2]
});

// cria e adiciona uma marcação no mapa 
L
    .marker([-27.2205683,-49.6451598], { icon })
    .addTo(map)