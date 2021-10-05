const btnMobile = document.getElementById('btnmobile');
const nav = document.getElementById('menu');
/*
function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');
    btnMobile.classList.toggle('active');
}*/

btnMobile.addEventListener('click', function() {
    nav.classList.toggle('active');
    btnMobile.classList.toggle('active');
})

document.onclick = function(e) {
    if(e.target.id !== 'btnmobile' && e.target.id !== 'menu') {
        btnMobile.classList.remove('active');
        nav.classList.remove('active');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
