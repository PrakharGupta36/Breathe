let mobile = document.getElementById("mobile"),
  navImage = document.getElementById("nav-img"),
  navMain = document.getElementById("nav-main"),
  navButton = document.getElementById("nav-button"),
  heroTitle = document.getElementById("hero-title"),
  wallpaper = document.getElementById("vanta-canvas-1");
mobile.onclick = () => {
  "grid" === navMain.style.display
    ? ((wallpaper.style.display = "block"),
      (heroTitle.style.display = "grid"),
      (navMain.style.display = "none"),
      (document.body.style.backgroundColor = "none"),
      (navButton.style.display = "none"),
      (navImage.src = "assets/icons/hamburger.svg"),
      navMain.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1e3,
        iterations: 1,
      }),
      navButton.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1e3,
        iterations: 1,
      }),
      navImage.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1e3,
        iterations: 1,
      }),
      heroTitle.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1e3,
        iterations: 1,
      }),
      wallpaper.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1e3,
        iterations: 1,
      }))
    : ((navMain.style.display = "grid"),
      (wallpaper.style.display = "none"),
      (heroTitle.style.display = "none"),
      (document.body.style.backgroundColor = "#0f0f3a"),
      (navButton.style.display = "grid"),
      (navImage.src = "assets/icons/close.svg"),
      navMain.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1e3,
        iterations: 1,
      }),
      heroTitle.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1e3,
        iterations: 1,
      }),
      navButton.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1e3,
        iterations: 1,
      }),
      navImage.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1e3,
        iterations: 1,
      }),
      wallpaper.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1e3,
        iterations: 1,
      }));
};
