/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/

const blurlHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurlHeader);

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_8smme3r",
      "template_3nrk7n3",
      "#contact-form",
      "zskfsW5aOhVLCdYgw"
    )
    .then(
      () => {
        // Show sent message

        contactMessage.textContent = "Mensagem enviada com sucesso! ✅";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        //Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent =
          "Erro ao enviar mensagem! (service error) ❌";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__data, .experience`);
sr.reveal(`.home__img`);
sr.reveal(`.home__scroll`, { delay: 800 });
sr.reveal(".work__card", { interval: 50 });
sr.reveal(".about__content", { origin: "right" });
sr.reveal(".about__img", { origin: "right" });
