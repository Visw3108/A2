let lastScrollTop = 0;
let scrollTimeout;
const navbar = document.querySelector('.custom-navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  clearTimeout(scrollTimeout);

  if (scrollTop > lastScrollTop) {
    navbar.classList.add('nav-hide');
  } else {
    navbar.classList.remove('nav-hide');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

  scrollTimeout = setTimeout(() => {
    navbar.classList.remove('nav-hide');
  }, 150);
});

function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('active');
}



const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000; // total animation time in ms
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * target);
      counter.textContent = currentCount;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        counter.textContent = target; // Ensure final number is exact
      }
    };

    requestAnimationFrame(animate);
  };

  updateCount();
});

