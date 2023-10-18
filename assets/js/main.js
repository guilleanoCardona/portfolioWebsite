const navMenu = document.getElementById("nav-menu"),
  navToogle = document.getElementById("nav-toogle"),
  navLinks = document.querySelectorAll(".nav__link");

navToogle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeToogleIcon();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
    changeToogleIcon();
  });
});

// charge the nav toogle icon
function changeToogleIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToogle.classList.replace("ri-menu-4-line", "ri-close-line");
  } else {
    navToogle.classList.replace("ri-close-line", "ri-menu-4-line");
  }
}

// Activate nav link on scroll
function addActiveLink() {
  const section = document.querySelectorAll("section[id]");
  section.forEach((section) => {
    const scrollY = window.scrollY,
      sectionTop = section.offsetTop - 80,
      sectionHeight = section.offsetHeight,
      sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.add("nav__link--active");
    } else {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.remove("nav__link--active");
    }
  });
}

window.addEventListener("scroll", () => {});

// increment counter
function startCounter(counter) {
  // Get the target number
  const targetNumber = counter.getAttribute("data-target");
  const increment = setInterval(() => {
    counter.textContent++;
    if (counter.textContent == targetNumber) {
      clearInterval(increment);
    }
  }, 2000 / targetNumber);
}

const counterSection = document.querySelector(".counter");
const counters = document.querySelectorAll(".counter__number");
let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= counterSection.offsetTop - 400) {
    if (!started) {
      counters.forEach((counter) => startCounter(counter));
    }
    started = true;
  }
});

// Testimonial Swiper

const TestimonialSwiper = new Swiper(".testimonial__wrapper", {
  spaceBetween: 40,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
