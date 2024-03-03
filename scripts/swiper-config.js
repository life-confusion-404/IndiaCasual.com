import { buildEvents } from "./events.js";
import { AMAS, EVENTS, POSTS } from "./helper.js";
import { build } from "./swiper.js";

document.addEventListener("DOMContentLoaded", function () {
  const swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  const additional = {
    breakpoints: {
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  };
  postSwiper = new Swiper(".posts-swiper-container", {
    ...swiperConfig,
    ...additional,
  });
  amaSwiper = new Swiper(".ama-swiper-container", {
    ...swiperConfig,
    ...additional,
  });
  const allYears = Object.keys(EVENTS);

  amaSwiper.on("slideChange", function () {
    console.log("Post Swiper Active Index:", amaSwiper.activeIndex);
  });
  build(".posts-swiper-container", POSTS);
  build(".ama-swiper-container", AMAS);

  let currentYear = 2024;
  document.querySelector(".year-inc").addEventListener("click", function () {
    const yearElement = document.querySelector(".year");
    if (currentYear == parseInt(allYears[allYears.length - 1])) {
      return;
    }
    currentYear += 1;
    yearElement.innerHTML = `
      <span data-aos="fade-left" data-aos-duration="500">
        ${currentYear}
      </span>
    `;
    buildEvents(EVENTS[currentYear]);
  });
  document.querySelector(".year-dec").addEventListener("click", function () {
    const yearElement = document.querySelector(".year");
    if (currentYear == parseInt(allYears[0])) {
      return;
    }
    currentYear -= 1;
    yearElement.innerHTML = `
    <span data-aos="fade-right" data-aos-duration="500">
      ${currentYear}
    </span>
  `;
    buildEvents(EVENTS[currentYear]);
  });
  buildEvents(EVENTS[currentYear]);
});
