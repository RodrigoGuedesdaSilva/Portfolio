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
