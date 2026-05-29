const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {

  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });

});

/* صور الجاليري تظهر بشكل ناعم */

const images = document.querySelectorAll('.gallery-container img');

images.forEach(img => {

  img.addEventListener('mouseover', () => {
    img.style.filter = 'brightness(105%)';
  });

  img.addEventListener('mouseout', () => {
    img.style.filter = 'brightness(100%)';
  });

});