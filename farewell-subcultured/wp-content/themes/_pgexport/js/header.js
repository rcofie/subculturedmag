// when I scroll down the page at a certain point...
// add a class to make the header white

const headerTags = document.querySelector('header.background');

const toggleHeader = function () {
  const pixels = window.pageYOffset;

  if (pixels > 60) {
    headerTags.classList.add('scrolled');
  } else {
    headerTags.classList.remove('scrolled');
  }
};

const fadeBox = function () {
  const pixels = window.pageYOffset;
  const alpha = Math.min(pixels / 1000, 0.25);
};

fadeBox();
toggleHeader();

document.addEventListener('scroll', function () {
  toggleHeader();
  fadeBox();
});
