var scene = document.getElementById('scene');
console.log(scene);
var parallaxInstance = new Parallax(scene);
console.log(parallaxInstance);
console.log("Parallax listo.");


function facebook () {
    window.open("https://www.facebook.com/profile.php?id=100070947710040","_blank");
}

function instagram () {
    window.open("https://www.instagram.com/","_blank");
}

function twitter () {
    window.open("https://twitter.com/","_blank");
}

function youtube () {
    window.open("https://www.youtube.com/","_blank");
}


function registrar () {

}


function iniciarSesion () {
    document.getElementById("sec-1").style.display = "none";
    document.getElementById("footer-main").style.display = "none";
    sesionIniciada();
    document.getElementById("nav-acciones").innerHTML = `<li class="nav-item" id="cierre-sesion">
                    <a class="nav-link color-link" aria-current="page" onclick="cargarAcciones()">Cerrar Sesión</a>
                </li>
           
                <li class="nav-item">
                    <a class="nav-link color-link" href="#" tabindex="-1" aria-disabled="true">Trabaja con nosotros</a>
                </li>
                <li class="nav-item dropdown navI1">
                    <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        Redes sociales
                    </a>
                    <ul class="dropdown-menu bg-custom2" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item text-light"
                               href="https://www.facebook.com/SmartMarket-105036392025665/">Facebook</a></li>
                        <li><a class="dropdown-item text-light" href="https://twitter.com/SmartMarketHn">Twitter</a>
                        </li>
                        <li><a class="dropdown-item text-light" href="https://www.instagram.com/__smartmarket__/">Instagram</a>
                        </li>
                        <li><a class="dropdown-item text-light"
                               href="https://www.youtube.com/channel/UCLIBZHe3GFknl-S9F4lBGvA">Youtube</a></li>
                    </ul>
                </li>`
}


function cargarAcciones () {
    document.getElementById("sec-2").style.display = "none";
    document.getElementById("sec-1").style.display = "block";
    document.getElementById("nav-acciones").innerHTML = `
    <li class="nav-item" id="inicio-sesion">
                    <a class="nav-link color-link" data-bs-toggle="modal" data-bs-target="#sesionar">Iniciar sesión</a>
                </li>
                <li class="nav-item" id="registro">
                    <a class="nav-link color-link" data-bs-toggle="modal" data-bs-target="#registrar">Registrarse</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link color-link" href="#" tabindex="-1" aria-disabled="true">Trabaja con nosotros</a>
                </li>
                <li class="nav-item dropdown navI1">
                    <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        Redes sociales
                    </a>
                    <ul class="dropdown-menu bg-custom2" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item text-light"
                               href="https://www.facebook.com/SmartMarket-105036392025665/">Facebook</a></li>
                        <li><a class="dropdown-item text-light" href="https://twitter.com/SmartMarketHn">Twitter</a>
                        </li>
                        <li><a class="dropdown-item text-light" href="https://www.instagram.com/__smartmarket__/">Instagram</a>
                        </li>
                        <li><a class="dropdown-item text-light"
                               href="https://www.youtube.com/channel/UCLIBZHe3GFknl-S9F4lBGvA">Youtube</a></li>
                    </ul>
                </li>`

}

function sesionIniciada () {
    document.getElementById("sec-2").style.display = "block";
}

cargarAcciones();

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaW9ubWJjIiwiYSI6ImNsYTdvazZyeDAyMnUzcHAydnVnM2c4cXAifQ.7ZvWxaq47EkfPY-LUOA7zw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [-87.1857, 14.0656],
    zoom: 14,
});

const size = 200;

// This implements `StyleImageInterface`
// to draw a pulsing dot icon on the map.
const pulsingDot = {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),

// When the layer is added to the map,
// get the rendering context for the map canvas.
    onAdd: function () {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
    },

// Call once before every frame where the icon will be used.
    render: function () {
        const duration = 1000;
        const t = (performance.now() % duration) / duration;

        const radius = (size / 2) * 0.3;
        const outerRadius = (size / 2) * 0.7 * t + radius;
        const context = this.context;

// Draw the outer circle.
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
            this.width / 2,
            this.height / 2,
            outerRadius,
            0,
            Math.PI * 2
        );
        context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
        context.fill();

// Draw the inner circle.
        context.beginPath();
        context.arc(
            this.width / 2,
            this.height / 2,
            radius,
            0,
            Math.PI * 2
        );
        context.fillStyle = 'rgba(255, 100, 100, 1)';
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

// Update this image's data with data from the canvas.
        this.data = context.getImageData(
            0,
            0,
            this.width,
            this.height
        ).data;

// Continuously repaint the map, resulting
// in the smooth animation of the dot.
        map.triggerRepaint();

// Return `true` to let the map know that the image was updated.
        return true;
    }
};

map.on('load', () => {
    map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

    map.addSource('dot-point', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-87.1857, 14.0656] // icon position [lng, lat]
                    }
                }
            ]
        }
    });
    map.addLayer({
        'id': 'layer-with-pulsing-dot',
        'type': 'symbol',
        'source': 'dot-point',
        'layout': {
            'icon-image': 'pulsing-dot'
        }
    });
});



/*14.100750029078071, -87.19155521604904*/


// function chat () {
//     document.getElementById("chat").innerHTML = `<div id="messenger"></div>`
//         const weavy = new Weavy({
//         url: "https://mariondev.weavy.io",
//         tokenFactory: async (refresh) => "wyu_QWh2Ln5Rsz1GFnPlVuRvgRVBd55Ee10tfMW0",
//     });
//
//         const messenger = weavy.app({
//         uid: "messenger-demo",
//         type: "messenger",
//         container: "#messenger",
//     });
//
// }
