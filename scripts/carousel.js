const posts = [
  {
    url: "./icons/post1.png",
    title: "Hello World",
    username: "u/NirmalTyagi",
  },
  {
    url: "./icons/post1.png",
    title: "Hello World",
    username: "u/NirmalTyagi",
  },
  {
    url: "./icons/post1.png",
    title: "Hello World",
    username: "u/NirmalTyagi",
  },
  {
    url: "./icons/post1.png",
    title: "Hello World",
    username: "u/NirmalTyagi",
  },
];

const AMAs = [
  {
    url: "./icons/arjun.jpg",
    name: "Dhvani Bhanushali",
    career: "Pop Singer",
  },
  {
    url: "./icons/arjun.jpg",
    name: "Arjun Kanungo",
    career: "Musician/Actor",
  },
  {
    url: "./icons/arjun.jpg",
    name: "Parul Gulati",
    career: "Actor & Entrepreneur",
  },
];

const postsCard = (url, title, username) => {
  return `
  <div class="carousel-item">
      <div class="col-12 col-lg-4 col-sm-6 p-3">
          <div class="card">
              <img
                  class="card-img-top custom-img"
                  src=${url}
                  alt="Card image cap"
              />
              <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">
                      ${username}
                  </p>
                  <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
              </div>
          </div>
      </div>
  </div>
  `;
};

const AMACard = (url, name, career) => {
  return `
    <div class="carousel-item">
        <div class="col-12 col-lg-4 col-sm-6 p-3">
            <div class="card">
                <img
                    class="card-img-top custom-img"
                    src=${url}
                    alt="Card image cap"
                />
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">
                        ${career}
                    </p>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                </div>
            </div>
        </div>
    </div>
    `;
};

function fetchTopPosts() {
  const carousel = document.querySelector("#postCarousel .carousel-inner");
  posts.forEach((post, index) => {
    const renderedItem = postsCard(post.url, post.title, post.username);
    const carouselItem = document.createElement("div");
    carouselItem.innerHTML = renderedItem.trim();

    if (index === 0) {
      carouselItem.querySelector(".carousel-item").classList.add("active");
    }
    carousel.appendChild(carouselItem.firstChild);
  });
}
function fetchAMAs() {
  const carousel = document.querySelector("#AMACarousel .carousel-inner");
  AMAs.forEach((ama, index) => {
    const renderedItem = AMACard(ama.url, ama.name, ama.career);
    const carouselItem = document.createElement("div");
    carouselItem.innerHTML = renderedItem.trim();

    if (index === 0) {
      carouselItem.querySelector(".carousel-item").classList.add("active");
    }
    carousel.appendChild(carouselItem.firstChild);
  });
}
fetchTopPosts();
fetchAMAs();
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
