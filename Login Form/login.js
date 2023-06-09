const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');
const homeElement = document.querySelector(".home");
let active = false;

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

window.addEventListener('load', () => {
    homeElement.classList.remove('hidden');
    setTimeout(() => {
        homeElement.classList.add('visible');
    }, 500);
});


btnPopup.addEventListener('click', () => {
    active = !active
    if (active) {
        wrapper.classList.add('active-popup');
        homeElement.classList.add('hidden');
    }
    else {
        wrapper.classList.remove('active-popup');
        setTimeout(() => {
            homeElement.classList.remove('hidden');
            setTimeout(() => {
                homeElement.classList.add('visible');
            }, 100);
        }, 500);

    }

});

iconClose.addEventListener('click', () => {
    active = !active
    if (active) {
        wrapper.classList.add('active-popup');
        homeElement.classList.add('hidden');
    }
    else {
        wrapper.classList.remove('active-popup');
        homeElement.classList.remove('hidden');

    }
});


// alert("Do you want to Exit?")



// const hamburger = document.querySelector('.hamburger');
// hamburger.addEventListener('click', () => {
//     wrapper.classList.toggle('active');
//   });