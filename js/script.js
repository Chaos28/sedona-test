  var navMain = document.querySelector('.navigation-list');
  var navToggle = document.querySelector('.main-nav__toggle');
  var navToggleClose = document.querySelector('.main-nav__toggle-close');

  navMain.classList.remove('navigation-list--no-js');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('navigation-list--closed')) {
      navMain.classList.remove('navigation-list--closed');
      navMain.classList.add('navigation-list--opened');
      navToggleClose.classList.remove('main-nav__toggle-close--closed');
      navToggleClose.classList.add('main-nav__toggle-close--opened');
      navToggle.classList.add('main-nav__toggle--active');
    } else {
      navMain.classList.add('navigation-list--closed');
      navMain.classList.remove('navigation-list--opened');
      navToggleClose.classList.add('main-nav__toggle-close--closed');
      navToggleClose.classList.remove('main-nav__toggle-close--opened');
      navToggle.classList.remove('main-nav__toggle--active');
    }
});
    navToggleClose.addEventListener('click', function() {
    if (navMain.classList.contains('navigation-list--opened')) {
      navMain.classList.remove('navigation-list--opened');
      navMain.classList.add('navigation-list--closed');
      navToggleClose.classList.add('main-nav__toggle-close--closed');
      navToggleClose.classList.remove('main-nav__toggle-close--opened');
      navToggle.classList.remove('main-nav__toggle--active');
      }
});
