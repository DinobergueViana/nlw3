// cria o mapa
const map = L.map('mapid').setView([-27.2205683,-49.6451598], 15);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//cria icone de marcação
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor:[170, 2]
});


// cria popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeith: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

// cria e adiciona uma marcação no mapa 
L
    .marker([-27.2205683,-49.6451598], { icon })
    .addTo(map)
    .bindPopup(popup)