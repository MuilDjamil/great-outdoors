const initApp = () => {
  const navigationBar = document.querySelector('.navigation-bar');
  const burgerButton = document.getElementById('burger-button');
  const mobileNavigation = document.getElementById('mobile-navigation');

  burgerButton.addEventListener('click', () => {
    mobileNavigation.classList.toggle('hidden');
    burgerButton.classList.toggle('toggle-menu');
  });

  mobileNavigation.addEventListener('click', () => {
    mobileNavigation.classList.toggle('hidden');
    burgerButton.classList.toggle('toggle-menu');
  });

  window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY;
  
    if (verticalScrollPx > 100) {
      navigationBar.classList.remove('bg-transparent')
      navigationBar.classList.add('bg-[rgba(0,0,0,.7)]');
    } else {
      navigationBar.classList.add('bg-transparent');
      navigationBar.classList.remove('bg-[rgba(0,0,0,.7)]')
    }
  });
};

document.addEventListener('DOMContentLoaded', initApp);