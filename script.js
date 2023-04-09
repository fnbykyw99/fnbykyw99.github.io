// script.js
/*============================== toggle icon navbar ====================================*/
Letmenuicon = document.querySelector('#menu-icon');{}
Letnavbar = document.querySelector('navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*==============================scroll section active linka==============================*/
Letsection = document.querySelectorAll('section');
LetnavLink = document.querySelectorAll('header nav a');
 window.onscroll = () =>{
    sections.forEach(sec => {
        Lettop = window.scrollY;
        Letoffset =sec.offsetTop - 150;
        Letheight = sec.offsetHeight;
        Letid = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
           navLinks.forEach(links => {
            links.classList.remove('active');
            Document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
           });
        };
    });
    /*====================sticky Navbar=====================*/
    Letheader = document.querySelector ('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*============================== remove toggle icon and navbar when cick navbar links ====================================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
 };
 /*==============================scroll section active linka==============================*/
 scrollreveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });
 scrollreveal().reveal('home-content, .heading', {origin: 'top'});
 scrollreveal().reveal('home-img, services-container, portofolio-box, contact-form', {origin: 'bottom'});
 scrollreveal().reveal('home-content h1, about-img', {origin: 'left'});
 scrollreveal().reveal('home-content p, about-content', {origin: 'right'});

 /*============================== typed js ==============================*/
 const typed = new Typed ('multiple-text',{
    String: ['Frontend Developer', 'Photographer', 'Taylor'],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 1000,
    loop: true
 });