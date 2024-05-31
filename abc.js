window.addEventListener('scroll', function() {
  const floatingArea = document.querySelector('.floating-area');
  if (window.scrollY > 0) {
      floatingArea.style.display = 'none';
  } else {
      floatingArea.style.display = 'block';
  }
});



