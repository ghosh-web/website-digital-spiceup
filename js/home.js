// nav

  function showSideBar() {
    document.getElementById("sidebarOverlay").classList.remove("d-none");
    document.getElementById("sidebar").classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("show");
    setTimeout(() => {
      document.getElementById("sidebarOverlay").classList.add("d-none");
      document.body.style.overflow = "auto";
    }, 300);
  }

  function toggleServices() {
    document.getElementById("serviceMenu").classList.toggle("d-none");
  }

  // nav end

  // loader start
      setTimeout(() => {
            document.querySelector(".loader-wrapper").classList.add("hide-loader");
            document.querySelector(".main-content").style.display = "block";
        }, 3000);

        // loader end


// Banner background images configuration
const bannerImages = [
  './img/banner6.webp',
  './img/banner8.webp',
  './img/banner7.webp',
  './img/banner5.webp',
  './img/banner4.webp',
  './img/banner11.webp',
  './img/banner12.webp',

];
document.addEventListener('DOMContentLoaded', function () {
  const banners = document.querySelectorAll('.banner');

  banners.forEach((banner, index) => {
    if (bannerImages[index]) {
      banner.style.backgroundImage = `url('${bannerImages[index]}')`;
    }
  });
});

let currentBanner = 0;
const banners = document.querySelectorAll('.banner');

function showNextBanner() {
  banners[currentBanner].classList.remove('active');
  currentBanner = (currentBanner + 1) % banners.length;
  banners[currentBanner].classList.add('active');
}
setInterval(showNextBanner, 6000);

function scrollToSection() {
  const heroSection = document.querySelector('.hero');
  const nextSection = heroSection.nextElementSibling;
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}
// end

// scroll
function scrollToSection() {
  document.querySelector('.about-section').scrollIntoView({ behavior: 'smooth' });
}
// end

// about

document.addEventListener("DOMContentLoaded", () => {
  // Selectors — adjust only if your classes are different
  const centerImage = document.querySelector(".center-image");
  const rotatingWrapper = document.querySelector(".rotating-wrapper");
  const rotatingImgs = document.querySelectorAll(".rotating-wrapper .label img");

  if (!centerImage || !rotatingWrapper) {
    console.warn("Rotation pause script: required elements not found.", { centerImage, rotatingWrapper });
    return;
  }

  // Utility to set play state on all relevant elements
  function setPaused(paused) {
    const state = paused ? "paused" : "running";
    rotatingWrapper.style.animationPlayState = state;
    rotatingImgs.forEach(img => img.style.animationPlayState = state);
    // Log to console for debugging
    console.log("rotation play state ->", state);
  }

  // Pause when mouse enters the center image; resume when it leaves
  centerImage.addEventListener("mouseenter", () => setPaused(true));
  centerImage.addEventListener("mouseleave", () => setPaused(false));

  // Optional: also pause when hovering anywhere over the circle container
  const circleContainer = document.querySelector(".circle-container");
  if (circleContainer) {
    circleContainer.addEventListener("mouseenter", () => setPaused(true));
    circleContainer.addEventListener("mouseleave", () => setPaused(false));
  }

  // Touch support: on touchstart toggle pause, on touchend resume
  centerImage.addEventListener("touchstart", (e) => {
    setPaused(true);
    // prevent double triggering of mouse events in some browsers
    e.preventDefault();
  }, { passive: false });
  centerImage.addEventListener("touchend", () => setPaused(false));
});
// opacity low 

const sections = document.querySelectorAll('.service');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;

  sections.forEach((section, index) => {
    const start = vh * index;
    const end = vh * (index + 1);
    const progress = (scrollY - start) / (end - start);

    if (scrollY >= start && scrollY < end) {
      section.style.transform = `translateY(${progress * -50}px)`;
      section.style.opacity = 1;
    } else if (scrollY < start) {
      section.style.opacity = 0;
    } else {
      section.style.opacity = 1;
      section.style.transform = 'translateY(-50px)';
    }
  });
});

// end

// why choose us

 document.querySelectorAll('.why-choose-us .feature-btn').forEach(btn => {
   btn.addEventListener('click', function () {
     const feature = this.querySelector('span').textContent;
     console.log('Selected feature:', feature);

     // Change the left-side tagline
     document.getElementById('tagline').textContent = this.dataset.tagline;

     // Button click animation
     this.style.transform = 'translateX(-15px) scale(0.95)';
     setTimeout(() => {
       this.style.transform = '';
     }, 300);
   });
 });



window.addEventListener("load", () => {
  const wrapper = document.getElementById("swiperWrapper");

  // First 10 original buttons
  const original = Array.from(wrapper.children).slice(0, 10);

  let totalHeight = 0;
  original.forEach(btn => {
    totalHeight += btn.offsetHeight + 20;   // 20px margin-bottom
  });

  wrapper.style.setProperty("--full-height", totalHeight + "px");
  wrapper.style.setProperty("--scroll-speed", "18s"); // Change speed if needed
});
// end



//  project

// Simple and working project tabs
document.addEventListener('DOMContentLoaded', function () {
  // Get all tab buttons and content panes
  const tabButtons = document.querySelectorAll('#nav-tab .nav-link');
  const tabContents = document.querySelectorAll('#nav-tabContent .tab-pane');

  // Function to hide all tabs
  function hideAllTabs() {
    tabContents.forEach(function (content) {
      content.classList.remove('show', 'active');
    });

    tabButtons.forEach(function (button) {
      button.classList.remove('active');
      button.setAttribute('aria-selected', 'false');
    });
  }

  // Function to show specific tab
  function showTab(targetId, clickedButton) {
    // Hide all first
    hideAllTabs();

    // Show clicked tab content
    const targetContent = document.querySelector(targetId);
    if (targetContent) {
      targetContent.classList.add('active', 'show');
    }

    // Mark button as active
    clickedButton.classList.add('active');
    clickedButton.setAttribute('aria-selected', 'true');
  }

  // Add click event to each tab button
  tabButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      showTab(targetId, this);
    });
  });

  // Show first tab by default
  if (tabButtons.length > 0) {
    const firstButton = tabButtons[0];
    const firstTarget = firstButton.getAttribute('href');
    showTab(firstTarget, firstButton);
  }
});


// project-col-three

  // Add hover event listeners to all project cards

    document.addEventListener('DOMContentLoaded', function() {
      const projectCards = document.querySelectorAll('.project-col-three');
      
      projectCards.forEach(card => {
        const img = card.querySelector('img');
        const images = JSON.parse(img.getAttribute('data-images'));
        const originalSrc = img.src;
        
        // Store original image
        img.dataset.originalSrc = originalSrc;
        
        // On mouse enter - show second image
        card.addEventListener('mouseenter', function() {
          if (images.length > 1) {
            img.style.opacity = '0';
            setTimeout(() => {
              img.src = images[1];
              img.style.opacity = '1';
            }, 100);
          }
        });
        
        // On mouse leave - return to original image
        card.addEventListener('mouseleave', function() {
          img.style.opacity = '0';
          setTimeout(() => {
            img.src = images[0];
            img.style.opacity = '1';
          }, 100);
        });
      });
    });

    // end

    // bottom arrow

      const scrollBtn = document.getElementById("scrollTopBtn");

  // Show button on scroll
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  };

  // Scroll to top on click
  scrollBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  // end