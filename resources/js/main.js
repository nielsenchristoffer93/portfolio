/* --------- NAVBAR --------- */

// Add the sticky class when you reach the scroll position
// Remove it when you leave the scroll position
window.addEventListener("scroll", () => {
  // Get the navbar.
  const navbar = document.getElementsByClassName("navbar")[0];

  // Get the offset position of the navbar.
  const sticky = navbar.offsetTop;

  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

/* --------- NAVBAR MENU --------- */
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".navbar-list");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navMenu.classList.toggle("active");
});

/* --------- FOR PROJECT FILTER MENU --------- */
const projectFilterItems = document.querySelectorAll(".project-filter li");
projectFilterItems.forEach(function (projectFilterItem) {
  projectFilterItem.addEventListener("click", (event) => {
    // console.log(event.target);

    const clickedItem = event.target; // Get the clicked list item.
    const classNameToAdd = "project-filter-active";

    // Add the class to the clicked item.
    clickedItem.classList.add(classNameToAdd);

    // Remove the class from other list items.
    projectFilterItems.forEach((otherItem) => {
      if (otherItem !== clickedItem) {
        otherItem.classList.remove(classNameToAdd);
      }
    });
  });
});

/* --------- FOR PROJECT FILTER --------- */
function docReady(fn) {
  // See if DOM is already available.
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // Call on next available tick.
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  // Select all elements with the class 'list'.
  const listItems = document.querySelectorAll(".list");

  // Add a click event listener to each list item.
  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      const value = this.getAttribute("data-filter");
      const projectBoxes = document.querySelectorAll(".project-box");

      if (value === "all") {
        // Show all project boxes.
        projectBoxes.forEach((box) => {
          box.style.display = "block";
        });
      } else {
        // Hide non-matching project boxes and show matching ones.
        projectBoxes.forEach((box) => {
          if (!box.classList.contains(value)) {
            box.style.display = "none";
          } else {
            box.style.display = "block";
          }
        });
      }
    });
  });
});

/* --------- LIGHT / DARK MODE TOGGLE --------- */
const darkModeToggle = document.querySelector(".checkbox-label");
const logoImg = document.getElementsByClassName("logo")[0];
const signatureImage = document.querySelector(".about-section__text-container img");
let darkMode = false;
darkModeToggle.addEventListener("click", () => {
  if (!darkMode) {
    // Change logo image.
    logoImg.src = "./resources/images/CN_New_White.svg";
    logoImg.alt = "CN_New_White.svg";

    // Change signature Image
    signatureImage.src = "./resources/images/CN_Signature_White.svg";
    signatureImage.alt = "CN_Signature_White.svg";

    // Change root colors.
    document.documentElement.style.setProperty(
      "--color-primary-100",
      "#5ac3b0"
    );
    document.documentElement.style.setProperty(
      "--color-primary-100-rgb",
      "90, 195, 176"
    );
    document.documentElement.style.setProperty(
      "--color-primary-200",
      "#70cab8"
    );
    document.documentElement.style.setProperty(
      "--color-primary-300",
      "#84d1c1"
    );
    document.documentElement.style.setProperty(
      "--color-primary-400",
      "#97d7ca"
    );
    document.documentElement.style.setProperty(
      "--color-primary-500",
      "#a9ded2"
    );
    document.documentElement.style.setProperty(
      "--color-primary-600",
      "#bae5db"
    );

    document.documentElement.style.setProperty(
      "--color-surface-100",
      "#121212"
    );
    document.documentElement.style.setProperty(
      "--color-surface-200",
      "#282828"
    );
    document.documentElement.style.setProperty(
      "--color-surface-300",
      "#3f3f3f"
    );
    document.documentElement.style.setProperty(
      "--color-surface-400",
      "#575757"
    );
    document.documentElement.style.setProperty(
      "--color-surface-500",
      "#717171"
    );
    document.documentElement.style.setProperty(
      "--color-surface-600",
      "#8b8b8b"
    );

    document.documentElement.style.setProperty(
      "--color-font-primary",
      "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--color-font-primary-rgb",
      "255, 255, 255"
    );
    document.documentElement.style.setProperty(
      "--color-font-secondary",
      "#eeeeee"
    );
    document.documentElement.style.setProperty(
      "--color-font-tertiary",
      "#dddddd"
    );

    darkMode = true;
  } else {
    // Change logo image.
    logoImg.src = "./resources/images/CN_New_Black.svg";
    logoImg.alt = "CN_New_Black.svg";

    // Change signature Image
    signatureImage.src = "./resources/images/CN_Signature_Black.svg";
    signatureImage.alt = "CN_Signature_Black.svg";

    // Change root colors.
    document.documentElement.style.setProperty(
      "--color-primary-100",
      "#00bfa5"
    );
    document.documentElement.style.setProperty(
      "--color-primary-100-rgb",
      "0, 191, 165"
    );
    document.documentElement.style.setProperty(
      "--color-primary-200",
      "#5ac3b0"
    );
    document.documentElement.style.setProperty(
      "--color-primary-300",
      "#64ceb8"
    );
    document.documentElement.style.setProperty(
      "--color-primary-400",
      "#7ed5c2"
    );
    document.documentElement.style.setProperty(
      "--color-primary-500",
      "#95ddcc"
    );
    document.documentElement.style.setProperty(
      "--color-primary-600",
      "#ace4d6"
    );

    document.documentElement.style.setProperty(
      "--color-surface-100",
      "#fefefe"
    );
    document.documentElement.style.setProperty(
      "--color-surface-200",
      "#ededed"
    );
    document.documentElement.style.setProperty(
      "--color-surface-300",
      "#dcdcdc"
    );
    document.documentElement.style.setProperty(
      "--color-surface-400",
      "#d3d3d3"
    );
    document.documentElement.style.setProperty(
      "--color-surface-500",
      "#cbcbcb"
    );
    document.documentElement.style.setProperty(
      "--color-surface-600",
      "#c2c2c2"
    );

    document.documentElement.style.setProperty(
      "--color-font-primary",
      "#000000"
    );
    document.documentElement.style.setProperty(
      "--color-font-primary-rgb",
      "000, 000, 000"
    );
    document.documentElement.style.setProperty(
      "--color-font-secondary",
      "#111111"
    );
    document.documentElement.style.setProperty(
      "--color-font-tertiary",
      "#222222"
    );

    darkMode = false;
  }
});

/* --------- ANIMATE ELEMENTS ON SCROLL --------- */
function hasElementScrolledIntoView(element) {
  const docViewTop = window.scrollY;
  const docViewBottom = docViewTop + window.innerHeight;
  const elementRect = element.getBoundingClientRect();
  const elementTop = elementRect.top + window.scrollY;
  const elementBottom = elementTop + elementRect.height;

  /* console.log(
    `Has element ${element.className} scrolled into view? ` +
      (elementTop >= docViewTop && elementBottom <= docViewBottom)
  ); */

  return elementTop >= docViewTop && elementBottom <= docViewBottom;
}

/* --------- ANIMATE ELEMENTS ON SCROLL --------- */
docReady(function (event) {
  const skillElements = document.querySelectorAll(".skill");
  const aboutSectionProfileImg = document.querySelector(
    ".about-section__profile-img"
  );
  const aboutSectionTextContainer = document.querySelector(
    ".about-section__text-container"
  );
  const allTimelineListElements = document.querySelectorAll(".timeline ul li");
  const oddTimelineListElements = document.querySelectorAll(
    ".timeline ul li:nth-child(odd)"
  );
  const evenTimelineListElements = document.querySelectorAll(
    ".timeline ul li:nth-child(even)"
  );

  const projectBoxElements = document.querySelectorAll(".project-box");

  function animateElement(element, animationName) {
    if (hasElementScrolledIntoView(element)) {
      element.classList.add("animate__animated", animationName);
    }
  }

  document.addEventListener("scroll", () => {
    animateElement(aboutSectionProfileImg, "animate__fadeInLeft");
    animateElement(aboutSectionTextContainer, "animate__fadeInRight");

    skillElements.forEach((skillElement) => {
      animateElement(skillElement, "animate__fadeInUp");
    });

    if (window.innerWidth <= 767) {
      allTimelineListElements.forEach((timelineListElement) => {
        // console.log("timelineListElement: " + timelineListElement);
        animateElement(timelineListElement, "animate__fadeInRight");
      });
    } else {
      oddTimelineListElements.forEach((oddTimelineListElement) => {
        // console.log("oddTimelineListElement: " + oddTimelineListElement);
        animateElement(oddTimelineListElement, "animate__fadeIn");
      });

      evenTimelineListElements.forEach((evenTimelineListElement) => {
        // console.log("evenTimelineListElement: " + evenTimelineListElement);
        animateElement(evenTimelineListElement, "animate__fadeIn");
      });
    }

    projectBoxElements.forEach((projectBoxElement) => {
      animateElement(projectBoxElement, "animate__fadeInUp");
    });
  });
});


/* --------- DYNAMICALLY GENERATE SOCIAL MEDIA META IMAGE TAG --------- */

// Get the base URL dynamically
const baseUrl = 'https://nielsenchristoffer93.github.io/portfolio';

// Get the relative image path from the placeholder
const relativeImagePath = document.getElementById('og-image-placeholder').getAttribute('content');

// Construct the absolute URL
const absoluteImageUrl = baseUrl + relativeImagePath;

// Set the absolute URL as the og:image content
document.querySelector('meta[property="og:image"]').setAttribute('content', absoluteImageUrl);
