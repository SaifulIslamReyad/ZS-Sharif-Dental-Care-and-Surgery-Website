<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  function showSlide(index) {
      const offset = -100 * index; 
      document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
  }

  showSlide(currentSlide);

  setInterval(nextSlide, 2000);
});
=======
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  function showSlide(index) {
      const offset = -100 * index; 
      document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
  }

  showSlide(currentSlide);

  setInterval(nextSlide, 2000);
});
>>>>>>> 9461cc3fcbdb4931f93989d0c30d8f77b1830b3b
