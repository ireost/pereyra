const hamburguesa = document.querySelector('.hamburguesa');
const navList = document.querySelector('.nav-list2');
hamburguesa.addEventListener('click', () => {
    navList.classList.toggle('active');
});


const imagenes = document.getElementById('imagenes');
const totalImagenes = document.querySelectorAll('.imagen').length;
let index = 0;

function mostrarImagen() {
    const desplazamiento = -index * 500; // 500 es el ancho de cada imagen
    imagenes.style.transform = `translateX(${desplazamiento}px)`;
}

function siguiente() {
    index = (index + 1) % totalImagenes;
    mostrarImagen();
}

function anterior() {
    index = (index - 1 + totalImagenes) % totalImagenes;
    mostrarImagen();
}

document.getElementById('next').addEventListener('click', siguiente);
document.getElementById('prev').addEventListener('click', anterior);


// setInterval(siguiente, 4000);