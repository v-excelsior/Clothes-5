


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
        setTimeout(() => { menu.removeAttribute('style'); }, 300)
        // prevent single click without move
    };
});

dragBtn.addEventListener('click', menuVisibilityHandler)

function menuVisibilityHandler(e) {
    // if (menu.classList.contains('active')){
    //     menu.classList.remove('active')
    // } else {
    //     menu.classList.add('active');
    // }
    menu.classList.contains('active') ? menu.classList.remove('active') : menu.classList.add('active');
}



var slide = new Vue({
    el: '#slide',
    data: {
        items:[
            {   
                id: 1,
                name:"T-short with OWL",
                collection: "New",
                isAvailable: true,
                imgSrc:"img/new/1.jpg",
                onSale: false,
                oldPrice:"",
                price:"45"
            },
            {   
                id: 2,
                name:"Black pats",
                collection: "Old",
                isAvailable: true,
                imgSrc:"img/new/2.jpg",
                onSale: true,
                oldPrice:"90",
                price:"60"
            },
            {   
                id: 3,
                name:"T-short «Stranger things»",
                collection: "New",
                isAvailable: false,
                imgSrc:"img/new/3.jpg",
                onSale: true,
                oldPrice:"90",
                price:"70"
            },
            {   
                id: 4,
                name:"Pink sweatshirt",
                collection: "New",
                isAvailable: false,
                imgSrc:"img/new/4.jpg",
                onSale: false,
                oldPrice:"",
                price:"25"
            },
            {   
                id: 5,
                name:"Easy blouse",
                collection: "New",
                isAvailable: true,
                imgSrc:"img/new/5.jpg",
                onSale: true,
                oldPrice:"74",
                price:"39"
            },
            {   
                id: 6,
                name:"Hoodie «Rick and Morties»",
                collection: "Old",
                isAvailable: false,
                imgSrc:"img/new/6.jpg",
                onSale: false,
                oldPrice:"",
                price:"199"
            }
        ]
    }
})


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