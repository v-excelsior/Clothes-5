let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
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


const dragBtn = document.querySelector('.header__drag-btn');
const sectionsList = document.querySelector('.header__sections');
const headerHeight = document.querySelector('.header').offsetHeight;
let currentButtonPosition;



// dragBtn.onmousedown = function (e) {
//     e.preventDefault();
//     let shiftY = e.clientY - e.target.getBoundingClientRect().top;
//     console.log(shiftY);
//     console.log(e.clientY);
//     moveAt(e);

//     function moveAt(e) {
//         currentButtonPosition = e.clientY - shiftY;
//         if (currentButtonPosition < headerHeight) {
//             currentButtonPosition = headerHeight;
//         }
//         if (currentButtonPosition > 330) {
//             currentButtonPosition = 330;
//         }
//         dragBtn.style.top = currentButtonPosition + 'px';
//         sectionsList.style.top = currentButtonPosition - headerHeight - sectionsList.offsetHeight + 'px';
//     }

//     function onMouseMove(e) {
//         moveAt(e);
//     }

//     document.addEventListener('mousemove', onMouseMove);

//     document.onmouseup = function () {
//         document.removeEventListener('mousemove', onMouseMove);
//         document.onmouseup = null;
//     };
// };



dragBtn.addEventListener('touchstart', function (e) {
    e.preventDefault();
    let shiftY = e.touches[0].clientY - e.target.getBoundingClientRect().top;

    moveAt(e);

    function moveAt(e) {
        currentButtonPosition = e.touches[0].clientY - shiftY;
        if (currentButtonPosition < headerHeight) {
            currentButtonPosition = headerHeight;
        }
        if (currentButtonPosition > 320) {
            currentButtonPosition = 320;
        }
        dragBtn.style.top = currentButtonPosition + 'px';
        sectionsList.style.top = currentButtonPosition - sectionsList.offsetHeight + 'px';
    }

    function onMouseMove(e) {
        moveAt(e);
    }

    dragBtn.addEventListener('touchmove', onMouseMove);

    document.onmouseup = function () {
        document.removeEventListener('touchmove', onMouseMove);
        document.touchend = null;
    };
});

dragBtn.ondragstart = function () {
    return false;
};

