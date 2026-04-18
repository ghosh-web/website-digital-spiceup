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