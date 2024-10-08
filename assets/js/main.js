const navMenu = document.getElementById("nav-menu"),
  navToogle = document.getElementById("nav-toggle"),
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

window.addEventListener("scroll", addActiveLink);

// increment counter
function startCounter(counter) {
  // Get the target number
  const targetNumber = counter.getAttribute("data-target");
  const increment = setInterval(() => {
    counter.textContent++;
    if (counter.textContent == targetNumber) {
      clearInterval(increment);
    }
  }, 1000 / targetNumber);
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
  loop: false,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Scrolltop
const scrolltop = document.getElementById("scrolltop");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 300) {
    scrolltop.classList.add("scrolltop--show");
  } else {
    scrolltop.classList.remove("scrolltop--show");
  }
});

// Dark Theme

// check for selected theme in localStorage
let theme = localStorage.getItem("theme");

const themeToggle = document.getElementById("theme-toggle");

const enableDarkTheme = () => {
  // Add the dark theme class to the body
  document.body.classList.add("dark-theme");
  // change the theme toggle icon
  themeToggle.classList.replace("ri-moon-line", "ri-sun-line");
  // update the selected theme in localStorage
  localStorage.setItem("theme", "dark-theme");
};

const disableDarkTheme = () => {
  // Add the dark theme class to the body
  document.body.classList.remove("dark-theme");
  // change the theme toggle icon
  themeToggle.classList.replace("ri-sun-line", "ri-moon-line");
  // update the selected theme in localStorage
  localStorage.setItem("theme", null);
};

// check if the user previously enables the dark theme
// to load the dark theme
if (theme === "dark-theme") {
  enableDarkTheme();
}

themeToggle.addEventListener("click", () => {
  // get the selected theme
  theme = localStorage.getItem("theme");
  if (theme !== "dark-theme") {
    enableDarkTheme();
  } else {
    disableDarkTheme();
  }
});

// ScrollReveal Animations

const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 1500,
  reset: true,
});

sr.reveal(".home__content, .about__img, .service__content, .contact__content", {
  origin: "left",
});

sr.reveal(".home__img, .about__content, .service__info, .contact__form", {
  origin: "right",
});

sr.reveal(
  ".skills__wrapper, .counter__wrapper, .portfolio__wrapper, .testimonial__wrapper, .blog__wrapper, .footer__content", {
    origin: "bottom",
  }
);

function loading() {
  const box = document.querySelectorAll(".box");
  box.forEach((box) => {
    box.classList.add("box-anim");
  });

  // const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  // var interval = 100;
  let cont = 0;
  /* box[0].style.animation = "box-anim";
  box[1].style.animation = "box-anim";
  box[2].style.animation = "box-anim"; */
  /* let interval = setInterval(() => {
    cont++;
    console.log(cont)
    if (cont == 10) {
      box[index].style.animation = "";
      clearInterval(interval);
    }
  }, 1000);  */
  setTimeout(() => {
    cont++;
    console.log(cont)
    if (cont == 1) {
      box.forEach((box) => {
        box.classList.remove("box-anim");
      });
    }
  }, 6000);
  /* box.forEach(function (item, index) {
    setTimeout(async function () {
      box[index].style.animation = "loading_anim 1s cubic-bezier(0,.59,.37,1)";
      await sleep(1000);
      box[index].style.animation = "";
    }, index * interval);
  }); */
};

function sendEmail() {
  const btn = document.getElementById('button');
  const box = document.querySelectorAll(".box");

  if (document.getElementById("name").value == "" ||
    document.getElementById("email").value == "" ||
    document.getElementById("messaje").value == "") {
    return false
  } else {
    box.forEach((box) => {
      box.classList.add("box-anim");
    });
  }
  document.getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      let cont = 0;
      //btn.value = `Enviando ...`;

      const serviceID = 'service_6escy8w';
      const templateID = 'template_imrut56';

      //loading();
      /* let interval = setInterval(loading, () => {
        cont++;
        console.log(cont)
        if (cont == 10) {
          clearInterval(interval);
        }
      }, 1000); */
      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          // btn.value = 'Enviar correo electrónico';
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("messaje").value = "";
          setTimeout(() => {
            cont++;
            if (cont == 1) {
              box.forEach((box) => {
                box.classList.remove("box-anim");
              });
            }
          }, 800);
        }, (err) => {
          btn.value = 'Enviar correo electrónico';
          alert(JSON.stringify(err));
        });
      //setInterval(loading, 1750);
    });
}

/* let link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = "http://127.0.0.1:5500/assets/css/style.css";

document.querySelector("head").appendChild(link) */