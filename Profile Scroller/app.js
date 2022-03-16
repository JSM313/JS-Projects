const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "William Johnson",
    age: 38,
    gender: "male",
    lookingfor: "female",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
  {
    name: "Sara Williams",
    age: 34,
    gender: "female",
    lookingfor: "male",
    location: "Stamford NewYork",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    name: "Angela Martin",
    age: 30,
    gender: "female",
    lookingfor: "male",
    location: "Scranton Pensylvania",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
  },
];

const profiles = profileIterator(data);

// Call First Profile
nextProfile();

document.querySelector("#next").addEventListener("click", nextProfile);

// Next profile display.
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile != undefined) {
    //! Profile Display
    document.querySelector("#profileDisplay").innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
      </ul>`;

    // ! Image Display
    document.querySelector(
      "#imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    window.location.reload();
  }
}

//! Profile Iterator

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
