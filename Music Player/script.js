const log = (arg) => console.log(arg);

const image = document.querySelector("img");

const title = document.querySelector("#title");

const artist = document.querySelector("#artist");

const music = document.querySelector("audio");

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

// Event listener for previous and next buttons.
previousButton.addEventListener("click", prevSong);
nextButton.addEventListener("click", nextSong);
