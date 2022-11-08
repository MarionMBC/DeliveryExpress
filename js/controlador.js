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
