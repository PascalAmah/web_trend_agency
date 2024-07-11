(function () {
  "use strict";

  //:::::::::::: MENU ITEMS DROPDOWN ::::::::::::
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header div a");

  window.addEventListener("scroll", () => {
    const top = window.scrollY;

    sections.forEach((sec) => {
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector("header div a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  });

  // Smooth scroll
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      const navHeight = document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: targetSection.offsetTop - navHeight,
        behavior: "smooth",
      });
    });
  });
  

  //:::::::::::: MENU ITEMS DROPDOWN ::::::::::::
  const menu = document.querySelector(".nav-links");
  const toggleMenu = document.querySelector(".toggle-menu");
  const checkbox = document.querySelector("#checkbox");
  const menuItems = document.querySelectorAll(".nav-links .nav-item");

  function closeMenu() {
    menu.style.height = "0"; // Hide the menu
    checkbox.checked = false; // Uncheck the checkbox
  }

  toggleMenu.addEventListener("click", function (event) {
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
      menu.style.height = "300px";
    } else {
      closeMenu();
    }

    event.stopPropagation();
  });

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (event) {
      closeMenu();
    });
  });

  document.body.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && event.target !== checkbox) {
      closeMenu();
    }
  });


  //:::::::::::: FAQ ITEMS DROPDOWN ::::::::::::
  document.querySelectorAll(".faq-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        document.querySelectorAll(".faq-checkbox").forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });

  //:::::::::::: SCROLL REVEAL ::::::::::::
  ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
    scale: 1,
  });

  ScrollReveal().reveal(".hero-content h1, .section-title, .cta-contents h3", {
    origin: "top",
  });
  ScrollReveal().reveal(
    ".hero-content .hero-btn, .services-content, .cta-button, .faq-item, .contact-content, .footer-col, .about-content-main, .content-details, .hero-content p, .about-image, .cta-contents p",
    {
      origin: "bottom",
    }
  );

  ScrollReveal().reveal(".count-box", {
    origin: "bottom",
    // reset: true,// Use reset if you want the animation to repeat when you scroll up and down
    beforeReveal: function (el) {
      const counter = el.querySelector(".counter");
      animateCounter(counter);
    },
  });

  //:::::::::::: COUNTER ::::::::::::
  function animateCounter(counter) {
    const duration = 1000; // duration in milliseconds
    const target = +counter.getAttribute("data-end");
    let count = 0;
    const increment = target / (duration / 16); // approximately 60 frames per second

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  }
})();
