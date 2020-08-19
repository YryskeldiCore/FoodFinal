function slider({slide, arrNext, arrPrev, totalCount, currentCount, container, wrapper, field}){
    const slides = document.querySelectorAll(slide),
    arrowNext = document.querySelector(arrNext),
    arrowPrev = document.querySelector(arrPrev),
    total = document.querySelector(totalCount),
    current = document.querySelector(currentCount),
    slider = document.querySelector(container),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;

    // vars
    let slideIndex = 1,
        offset = 0,
        dots = [];
    // End vars

    // Functions
    function hideDotActive(){
        dots.forEach(dot => {
            dot.classList.add('dot');
            dot.classList.remove('dot_active');
        });
    }

    function showDotActive(){
        dots[slideIndex - 1].classList.add('dot_active');
    }

    function currentSlide(){
        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function deleteNoDigits(str){
        return +str.replace(/\D/g, '');
    }
    // End F-s

    if (slides.length < 10){
        current.textContent = `0${slideIndex}`;
        total.textContent = `0${slides.length}`;
    } else {
        current.textContent = slideIndex;
        total.textContent = slides.length;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    const indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');
    slider.style.position = 'relative';
    slider.append(indicators);

    for(let i = 0; i < slides.length; i++){
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-close-to', i + 1);
        if(i == 0){
            dot.classList.add('dot_active');
        }
        indicators.append(dot);
        dots.push(dot);
    }

    arrowPrev.addEventListener('click', () => {
        if(offset == 0){
            offset = deleteNoDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNoDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == 1){
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        currentSlide();
        hideDotActive();
        showDotActive();
    });

    arrowNext.addEventListener('click', () => {
        if(offset == deleteNoDigits(width) * (slides.length - 1)){
            offset = 0;
        } else {
            offset += deleteNoDigits(width);
        }
        
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == slides.length){
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        currentSlide();
        hideDotActive();
        showDotActive();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            let dataSlideTo = e.target.getAttribute('data-close-to');
            slideIndex = dataSlideTo;

            offset = deleteNoDigits(width) * (dataSlideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            currentSlide();
            hideDotActive();
            showDotActive();
        }); 
    });
}

export default slider;