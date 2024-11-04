document.getElementById('proyecto1').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://github.com/ferlmdl/Desarrollo_web';
});
document.getElementById('proyecto2').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://github.com/ferlmdl/BDD';
});
let currentIndex = 0;
const projects = document.querySelectorAll('.proyecto');
const totalProjects = projects.length;

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < totalProjects - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarrusel();
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalProjects - 1;
    }
    updateCarrusel();
});

function updateCarrusel() {
    const carrusel = document.querySelector('.carrusel');
    const offset = -currentIndex * 100;
    carrusel.style.transform = `translateX(${offset}%)`;
}
