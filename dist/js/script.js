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
//Я просто тренируюсь :) Можно удалить
// let buttons = document.querySelectorAll('.button');

// for (let button of buttons) {
//     button.addEventListener('mouseover', handleButtonStyle);
//     button.addEventListener('mouseout', handleButtonStyle);
// }
// function handleButtonStyle(e) {
//     if (e.target.classList.contains('button-white')) {
//         toggleClasses(e.target,'button-white','button-black');
//         return;
//     }
//     if (e.target.classList.contains('button-black')) {
//         toggleClasses(e.target, 'button-black', 'button-trans');
//         return;
//     }
//     if (e.target.classList.contains('button-trans')) {
//         toggleClasses(e.target,'button-trans','button-black');
//         return;
//     }
// }
// function toggleClasses(element, ...classes) {
//     for (let toggledClass of classes) {
//         element.classList.toggle(toggledClass);
//     }
// }

