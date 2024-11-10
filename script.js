let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;


    index = (index + step + totalSlides) % totalSlides;

  
    const offset = -index * 100;  
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}
