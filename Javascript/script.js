document.addEventListener("DOMContentLoaded", function () {
  // Hitta elementen
  const navbar = document.getElementById("navbar");
  const heroSection = document.getElementById("hero-section");
  const imageSection = document.getElementById("image-section");


  function showElement(element) {
    element.classList.add("visible");
  }


  setTimeout(function () {
    showElement(navbar);
  }, 500);

  setTimeout(function () {
    showElement(heroSection);
  }, 1000);

  setTimeout(function () {
    showElement(imageSection);
  }, 1500);
});






<script src="script.js"></script>
