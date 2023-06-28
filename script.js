var animationContainer = document.getElementById('animation');
var animationData = bodymovin.loadAnimation({
  container: animationContainer,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets2.lottiefiles.com/packages/lf20_bzgbs6lx.json',
});

const gsapTimeline = gsap.timeline({ defaults: { duration: 1 } });
gsapTimeline
  .from('#animation', {
    duration: 3.5,
    opacity: 0,
    y: '100%',
    ease: 'bounce',
  })
  .to('.showcase-text', {
    duration: 3,
    y: '15%',
    x: '5%',
    ease: 'back',
  })
  .from('.header', { opacity: 0, y: '-100%', ease: 'bounce' })
  .from('.link', { opacity: 0, delay: 2, stagger: 0.5 })
  .from('.right', {
    x: '-100vw',
    ease: 'power2-in',
  })
  .from('.left', { x: '-100%' })
  .to('.footer', { y: 0, ease: 'elastic' });

gsap.fromTo(
  '.button',
  { opacity: 0, scale: 0, rotation: 720 },
  { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 }
);

// reverse
document.querySelector('.button2').addEventListener('click', () => {
  gsapTimeline.reverse();
});
