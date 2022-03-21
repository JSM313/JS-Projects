const imageContainer = document.querySelector("#imageContainer");

const loader = document.querySelector("#loader");

let photosArray = [];
let ready = false;
let totalImages = 0;
let imagesLoaded = [];

// Unplash API

const count = 30;

const apiKey = "yCrb01WQ31kK5OPYz_qGCvYOhlEuA1u5EUbYA-b3zOY";

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded
imageLoaded = () => {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
};

// Helper function to set attributes on DOM elements.
const setAttributes = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

// Creating elements for links and photos, and adding them to the DOM

const displayPhotos = () => {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    // Create a tag to link to unsplash

    const link = document.createElement("a");

    setAttributes(link, {
      href: photo.links.html,
      target: "_blank",
    });

    // Create img tag for photos

    const image = document.createElement("img");

    setAttributes(image, {
      src: photo.urls.regular,
      alr: photo.alt_description,
      title: photo.alt_description,
    });

    // Put image inside a tag , then put both inside imagecontainer element

    link.appendChild(image);

    // Event listener, click when each is finished loading,
    image.addEventListener("load", imageLoaded);

    imageContainer.appendChild(link);
  });
};

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
    // console.log(photosArray);
  } catch (error) {
    console.log(error);
  }
}

// * Creating the infinite scrolling event

// Check to see if scrolling near bottom of page, load more photos,
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

// On load get photos...
getPhotos();
