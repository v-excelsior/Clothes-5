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


// dragBtn.addEventListener('touchstart', function (e) {
//     e.preventDefault();
//     let shiftY = e.touches[0].clientY - e.target.closest('div').getBoundingClientRect().top;

//     moveAt(e);

//     function moveAt(e) {
//         currentButtonPosition = e.touches[0].clientY - shiftY;
//         if (currentButtonPosition < 0) {
//             currentButtonPosition = 0;
//         }
//         if (currentButtonPosition > 320) {
//             currentButtonPosition = 320;
//         }
//         dragBtn.style.top = currentButtonPosition + 'px';
//         sectionsList.style.top = currentButtonPosition - sectionsList.offsetHeight + 'px';
//     }

// // function drugToEnd(){
// //     dragBtn.style.top = currentButtonPosition + 'px';
// //     sectionsList.style.top = currentButtonPosition - sectionsList.offsetHeight + 'px';
// // }
// function dragToEnd(curentPos) {
//     let posChanger = setInterval(() => {
//         curentPos += 2;
//         dragBtn.style.top = curentPos + 'px';
//         sectionsList.style.top = curentPos - sectionsList.offsetHeight + 'px';
//         if (curentPos >= 320) clearInterval(posChanger);
//     },1)
// }

// function dragToStart(curentPos){
//     let posChanger = setInterval(() => {
//         curentPos -= 2;
//         dragBtn.style.top = curentPos + 'px';
//         sectionsList.style.top = curentPos - sectionsList.offsetHeight + 'px';
//         if (curentPos <= 0) clearInterval(posChanger);
//     },1)
// }

//     dragBtn.addEventListener('touchmove', moveAt);

//     document.ontouchend = function () {
//         console.log(currentButtonPosition)
//         document.removeEventListener('touchmove', moveAt);
//         document.touchend = null;
//         if (currentButtonPosition > 150) {
//             dragToEnd(currentButtonPosition);
//         } else {
//             dragToStart(currentButtonPosition);
//         }
//     };
// });

// dragBtn.ondragstart = function () {
//     return false;
// };

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
        setTimeout(() => { menu.removeAttribute('style');},300) // prevent single click without move
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