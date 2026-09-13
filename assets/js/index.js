const carousel = document.querySelector('#carousel');
const carouselItem = document.querySelector('.carouselItem');

function carouselGoNext(){
    if(carouselItem.offsetWidth + carousel.scrollLeft >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
        return;
    }

    carousel.scrollTo({
        left: carousel.scrollLeft + carouselItem.offsetWidth,
        behavior: 'smooth'
    });
}

function carouselGoBack(){
    if(carousel.scrollLeft <= 0) {
        carousel.scrollLeft = carousel.scrollWidth;
        return;
    }
    
    carousel.scrollTo({
        left: carousel.scrollLeft - carouselItem.offsetWidth,
        behavior: 'smooth'
    });
}