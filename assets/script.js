const navLinks = document.getElementById('nav-links');

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
function goToPortfolio(url) {
 window.open(url, '_blank')
}

function goToFigma(url) {
  window.open(url, '_blank')
}
function goToPage(url){
  window.location.href = url
}