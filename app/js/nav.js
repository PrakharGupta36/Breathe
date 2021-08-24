let mobile = document.getElementById("mobile");
let navImage = document.getElementById("nav-img");
let navMain = document.getElementById("nav-main");
let navButton = document.getElementById("nav-button");
let heroTitle = document.getElementById("hero-title");
let wallpaper = document.getElementById("vanta-canvas-1");
mobile.onclick = () => {
  if (navMain.style.display === "grid") {
      wallpaper.style.display = "block";
      
      navMain.style.display = "none";
      document.body.style.backgroundColor = "none";
      heroTitle.style.display = "grid";
      navButton.style.display = "none";
      navImage.src = "assets/icons/hamburger.svg";
      navMain.animate(
        [
          // keyframes
          { opacity: 0 },
          { opacity: 1 },
        ],
        {
          // timing options
          duration: 1000,
          iterations: 1,
        }
      );
      navButton.animate(
        [
          // keyframes
          { opacity: 0 },
          { opacity: 1 },
        ],
        {
          // timing options
          duration: 1000,
          iterations: 1,
        }
      );
      navImage.animate(
        [
          // keyframes
          { opacity: 0 },
          { opacity: 1 },
        ],
        {
          // timing options
          duration: 1000,
          iterations: 1,
        }
      );
      heroTitle.animate(
        [
          // keyframes
          { opacity: 0 },
          { opacity: 1 },
        ],
        {
          // timing options
          duration: 1000,
          iterations: 1,
        }
      );
      wallpaper.animate(
        [
          // keyframes
          { opacity: 0 },
          { opacity: 1 },
        ],
        {
          // timing options
          duration: 1000,
          iterations: 1,
        }
      );
    } else {
    navMain.style.display = "grid";
    wallpaper.style.display = "none";
    document.body.style.backgroundColor = "#0f0f3a";
    navButton.style.display = "grid";
    heroTitle.style.display = "none";
    navImage.src = "assets/icons/close.svg";
    navMain.animate(
      [
        // keyframes
        { opacity: 0 },
        { opacity: 1 },
      ],
      {
        // timing options
        duration: 1000,
        iterations: 1,
      }
    );
    heroTitle.animate(
      [
        // keyframes
        { opacity: 0 },
        { opacity: 1 },
      ],
      {
        // timing options
        duration: 1000,
        iterations: 1,
      }
    );
    navButton.animate(
      [
        // keyframes
        { opacity: 0 },
        { opacity: 1 },
      ],
      {
        // timing options
        duration: 1000,
        iterations: 1,
      }
    );
    navImage.animate(
      [
        // keyframes
        { opacity: 0 },
        { opacity: 1 },
      ],
      {
        // timing options
        duration: 1000,
        iterations: 1,
      }
    );
    wallpaper.animate(
      [
        // keyframes
        { opacity: 0 },
        { opacity: 1 },
      ],
      {
        // timing options
        duration: 1000,
        iterations: 1,
      }
    );
  }
};
