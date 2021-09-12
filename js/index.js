const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const aboutSection = document.querySelector('#about');
const tl = gsap.timeline({paused:true});

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

tl.to('.about-me__img', { duration: 0.5, scale: 1.04, opacity: 1})

aboutSection.addEventListener('mouseenter', ()=>{
    tl.play();
})

aboutSection.addEventListener('mouseleave', ()=>{
    tl.reverse();
})

