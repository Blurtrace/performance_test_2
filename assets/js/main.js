//Seleccionamos los elementos por su id
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

// Cuando el usuario hace clic en la hamburguesa...
hamburger.addEventListener('click', function () {
    // ...alternamos la clase "open" en el menú móvil.
    // Si "open" no existe → la agrega (menú se abre)
    // Si "open" ya existe → la quita (menú se cierra)
    navMobile.classList.toggle('open');
});

// Función para cerrar el menú al tocar un enlace
function closeMenu() {
    navMobile.classList.remove('open');
}


document.querySelectorAll('a[href^="#"]').forEach(function(enlace) {
    enlace.addEventListener('click', function (e) {
    e.preventDefault(); // cancelamos el salto brusco
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
    }
    });
});