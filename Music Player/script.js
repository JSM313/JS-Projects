const image = document.querySelector("img");

const title = document.querySelector("#title");

const artist = document.querySelector("#artist");

const music = document.querySelector("audio");

const progressContainer = document.querySelector(".progress-container");

const currentTimeEl = document.getElementById("current-time");

const durationEl = document.getElementById("duration");

const progress = document.getElementById("progress");

const playButton = document.getElementById("play");

const previousButton = document.getElementById("prev");

const nextButton = document.getElementById("next");

const songs = [
  {
    name: "jacinto-1",
    displayName: "Electric Chill Machine",
    artist: "John Doe",
  },
  {
    name: "jacinto-2",
    displayName: "Seven Wonders",
    artist: "John Doe",
  },
  {
    name: "jacinto-3",
    displayName: "Exuberance",
    artist: "John Doe",
  },
  {
    name: "jacinto-4",
    displayName: "Curiosity",
    artist: "John Doe",
  },
];

// checking if playing the song
let isPlaying = false;

// Play Song
const playSong = () => {
  isPlaying = true;
  playButton.classList.replace("fa-play", "fa-pause");
  playButton.setAttribute("title", "Pause");
  music.play();
};

// Pause Song
const pauseSong = () => {
  isPlaying = false;
  playButton.classList.replace("fa-pause", "fa-play");
  playButton.setAttribute("title", "Play");
  music.pause();
};

// Listening for event listeners play /pause
playButton.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

const loadSong = (song) => {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
};

// Current Song
let songIndex = 0;

prevSong = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
};

nextSong = () => {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
};

// On load select first song
loadSong(songs[songIndex]);

// Update progress bar and time...

const updateProgressBar = (event) => {
  if (isPlaying) {
    const { duration, currentTime } = event.srcElement;

    // Update progress bar..

    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // Calculte duration display...

    const durationMinutes = Math.floor(duration / 60); //*(converting to minutes)...

    let durationSeconds = Math.floor(duration % 60);

    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }

    // Delay switching duration element to avoid NaN.....

    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    // Calculte current display...

    const currentMinutes = Math.floor(currentTime / 60); //*(converting to minutes)...

    let currentSeconds = Math.floor(currentTime % 60);

    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }

    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
};

const setProgressBar = (event) => {
  const width = event.srcElement.clientWidth;

  const clickX = event.offsetX;

  const { duration } = music;

  music.currentTime = (clickX / width) * duration; //gives the actual time at that point of the song...
};

// Event listener for previous and next buttons.
previousButton.addEventListener("click", prevSong);
nextButton.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);
