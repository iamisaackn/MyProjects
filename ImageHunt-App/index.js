const accessKey = "P9XFeRp7ra5IhQvSCjRaGtmSxmcl1BKKTw8MenwK8S8";

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");
const body = document.body;

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = searchInputEl.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  console.log(url);

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
      searchResultsEl.innerHTML = "";
    }

    const results = data.results;

    results.forEach((result) => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("image-wrapper");

      const image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = result.alt_description;

      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.textContent = result.alt_description;

      imageWrapper.appendChild(image);
      imageWrapper.appendChild(imageLink);
      searchResultsEl.appendChild(imageWrapper);
    });

    page++;

    if (page > 1) {
      showMoreButtonEl.style.display = "block";
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    // Handle the error here, e.g., display an error message to the user
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();

  // Remove background image and set background color
  body.classList.add("inactive");
});

showMoreButtonEl.addEventListener("click", () => {
  searchImages();
});

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function() {
  body.classList.add("inactive");
  setTimeout(function() {
    body.style.transitionDuration = "10s";
  }, 100);
});
