function getCard(side, event) {
    return `
          <div data-aos="flip-${side}" class="event_container ${side}">
            <div class="content card">
              <div class="eventHeader">
                <div class="HeaderLeft">
                  <h3>${event.title}</h3>
                </div>
                <div class="HeaderRight">
                  <h2></h2>
                </div>
              </div>
              <p class="eventText">${event.date}</p>
            </div>
          </div>
      `;
  }
  
  function buildEvents(elems) {
    const eventContainer = document.querySelector(".event");
    eventContainer.innerHTML = "";
    elems.forEach((item, index) => {
      let side = "left";
      if (index % 2) {
        side = "right";
      }
      const renderedItem = getCard(side, item);
      const containerItem = document.createElement("div");
      containerItem.innerHTML = renderedItem.trim();
      eventContainer.appendChild(containerItem.firstChild);
    });
  }
  
  export { buildEvents };
  