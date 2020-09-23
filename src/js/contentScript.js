function hideWeatherFeed() {
  const main = document.querySelector("#MainContent");

  if (main) {
    main.style.opacity = 0;
  }
}

function hideLinkedinHomeIcon() {
  const home = document.querySelector(".global-nav__primary-item");

  if (home) {
    home.remove();
  }
}

if (location.href === "https://weather.com/") {
  hideWeatherFeed();
} else if (location.href.includes("linkedin")) {
  hideLinkedinHomeIcon();
}
