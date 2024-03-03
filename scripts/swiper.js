function getCard(elem) {
    return `
          <div class="swiper-slide">
            <div class="card">
              <img
                class="card-img-top custom-img"
                src="${elem.url}"
                alt="Card image cap"
              />
              <div class="card-body text-center">
                <h5 class="card-title">${elem.title}</h5>
                <p class="card-text">${elem.subtitle}</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
              </div>
            </div>
          </div>
      `;
  }
  
  function build(id, elems) {
    const slider = document.querySelector(`${id} .swiper-wrapper`);
    elems.forEach((item) => {
      const renderedItem = getCard(item);
      const carouselItem = document.createElement("div");
      carouselItem.innerHTML = renderedItem.trim();
      slider.appendChild(carouselItem.firstChild);
    });
  }
  
  export { build };
  