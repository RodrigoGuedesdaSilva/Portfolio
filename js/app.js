const menu = document.querySelector('.hamb-menu');
const menuLink = document.querySelector('.menu');
const menuBoard = document.querySelector('.invisible-board');
const glassEffectH1 = document.querySelector('h1'); 
const glassEffectP = document.querySelector('p'); 
const glassEffectBtn = document.querySelector('.style-btn'); 

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuLink.classList.toggle('is-active');
    menuBoard.classList.toggle('activated'); 
    glassEffectH1.classList.toggle('glass-effect'); 
    glassEffectP.classList.toggle('glass-effect'); 
    glassEffectBtn.classList.toggle('glass-effect'); 
})