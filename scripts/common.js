function fetchFooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error fetching footer:", error));
}

window.onload = function () {
  fetchFooter();
};
