
let btnContact = document.getElementById("btn-contact")
let btnExpand = document.getElementById('btn-expand');
let btnClose = document.getElementById('btn-close');
let menuNav = document.getElementsByClassName('menu-nav')[0];
let menuList = document.getElementsByClassName('menu-list')[0];
let body = document.getElementsByTagName('body')[0]


function openMenu() {
    menuNav.classList.add('active')
    menuList.classList.toggle('menu-list-active')
    btnExpand.style.visibility = "hidden"
    btnClose.style.visibility = "visible"
    body.style.overflow = "hidden"
}

function closeMenu() {
    menuNav.classList.remove('active')
    menuList.classList.remove('menu-list-active');
    btnExpand.style.visibility = "visible"
    btnClose.style.visibility = "hidden"
    body.style.overflow = "visible"
}


function clicou() {
    console.log("clicou")
}

btnExpand.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);



window.sr = ScrollReveal({reset: true})

sr.reveal('.scrolling', {
    delay: 575,
    duration: 1000,
    origin: 'bottom',
    distance: '100px',
});
