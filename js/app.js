const menu = document.getElementById('hamb-menu');
const line = document.querySelector('.line')
const menuLink = document.getElementById('menu');
const menuBoard = document.querySelector('.invisible-board');
const glassEffectH1 = document.querySelector('h1'); 
const glassEffectP = document.querySelector('p'); 
const glassEffectBtn = document.querySelector('.style-btn'); 

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    line.classList.toggle('active');
    menuLink.classList.toggle('is-active');
    menuBoard.classList.toggle('activated'); 
    glassEffectH1.classList.toggle('glass-effect'); 
    glassEffectP.classList.toggle('glass-effect'); 
    glassEffectBtn.classList.toggle('glass-effect'); 
})

document.onclick = function(e) {
    if(e.target.id !== 'hamb-menu' && e.target.id !== 'menu') {
        menu.classList.remove('active');
        line.classList.remove('active');
        menuLink.classList.remove('is-active');
        menuBoard.classList.remove('activated');
        glassEffectH1.classList.remove('glass-effect'); 
        glassEffectP.classList.remove('glass-effect'); 
        glassEffectBtn.classList.remove('glass-effect'); 
    }
}


// init Isotope
var $grid = $('#portfolio .container .row').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });

  var filterBtns = $('.filter-button-group').find('button');
  function resetFilterBtns() {
      filterBtns.each(function() {
          $(this).removeClass('active-filter-btn');
      });
  }
