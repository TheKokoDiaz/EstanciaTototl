const carrusel = document.querySelector('#carrusel');
const carruselItem = document.querySelector('.carruselItem');

function carouselGoNext(){
    if(carruselItem.offsetWidth + carrusel.scrollLeft >= carrusel.scrollWidth) {
        carrusel.scrollLeft = 0;
        return;
    }

    carrusel.scrollTo({
        left: carrusel.scrollLeft + carruselItem.offsetWidth,
        behavior: 'smooth'
    });
}

function carouselGoBack(){
    if(carrusel.scrollLeft <= 0) {
        carrusel.scrollLeft = carrusel.scrollWidth;
        return;
    }
    
    carrusel.scrollTo({
        left: carrusel.scrollLeft - carruselItem.offsetWidth,
        behavior: 'smooth'
    });
}