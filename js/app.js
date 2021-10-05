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
