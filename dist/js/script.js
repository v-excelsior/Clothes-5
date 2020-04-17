let mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    centerInsufficientSlides: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const dragBtn = document.querySelector('.header__drag-container');
const menu = document.querySelector('.header__nav-sections');
let defaultMenuTop = menu.getBoundingClientRect().top;
let curentMenuTop;

dragBtn.addEventListener('touchstart', function (e) {
    e.preventDefault();

    let shiftY = e.touches[0].clientY - menu.getBoundingClientRect().top;

    moveAt(e);

    function moveAt(e) {
        curentMenuTop = e.touches[0].clientY - shiftY;
        if (curentMenuTop > 0) {
            curentMenuTop = 0;
        }
        if (curentMenuTop < defaultMenuTop) {
            curentMenuTop = defaultMenuTop;
        }
        menu.style.top = curentMenuTop + 'px';
    }

    dragBtn.ontouchmove = moveAt;
    
    document.ontouchend = function () {
        document.removeEventListener('touchmove', moveAt);
        document.touchend = null;
        menu.removeAttribute('style');
        if (curentMenuTop > (defaultMenuTop / 2)) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }
        menu.style.transition = "0.3s";
        menu.ontransitionend = () => {
            menu.removeAttribute('style');
        }
        setTimeout(() => { menu.removeAttribute('style');},300)
        // prevent single click without move
    };
});

dragBtn.addEventListener('click', menuVisibilityHandler)

function menuVisibilityHandler(e){
    if (menu.classList.contains('active')){
        menu.classList.remove('active')
    } else {
        menu.classList.add('active');
    }
}