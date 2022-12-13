 //Navigation bar effects on scroll
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', this.window.scrollY > 0);
});

//Portfolio section - Modal
const serviceModals = document.querySelectorAll('.service-modal');
const learnmoreBts = document.querySelectorAll('.learn-more-btn');
const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

let modal = function(modalClick){
    serviceModals[modalClick].classList.add('active');
}

learnmoreBts.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener('click', () => {
        modal(i);
    })
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener('click', () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove('active');
        });
    });
});


const portfolioModals = document.querySelectorAll('.portfolio-model');
const imgCards = document.querySelectorAll('.img-card');
const portfolioCloseBtns = document.querySelectorAll('.portfolio-close-btn');

let portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add('active');
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener('click', () => {
        portfolioModal(i);
    })
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener('click', () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove('active');
        });
    });
});

//Our clients - Swiper
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//Website dark/light theme

//Scroll to top button

//Navigation menu items active on page scroll

//Responsive navigation menu toggle

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations