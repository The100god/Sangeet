console.log("Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("song/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));

let songs = [
  { songName: "Baithi Hai", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
  { songName: "Sun Sajni", filePath: "song/2.mp3", coverPath: "cover/2.jpg" },
  {
    songName: "Teri Aankhon Mein",
    filePath: "song/3.mp3",
    coverPath: "cover/3.jpg",
  },
  { songName: "Love Stereo", filePath: "song/4.mp3", coverPath: "cover/4.jpg" },
  {
    songName: "Teri Deewwaangi Mein",
    filePath: "song/5.mp3",
    coverPath: "cover/5.jpg",
  },
  {
    songName: "The Soul Of Alag",
    filePath: "song/6.mp3",
    coverPath: "cover/6.jpg",
  },
];

songItem.forEach((element, i) => {
  // console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerHtml = songs[i].songName;
});
// audioElement.play()

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
    // element.classList.add("fa-circle-play");
    // songItemPlay.forEach((element) => {
    //   songIndex = parseInt(element.target.id);
    //     // element.classList.add("fa-circle-play");
    //     songs[songIndex].classList.add("fa-circle-pause");
    //   });
    
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
    // element.classList.remove("fa-circle-pause");
    // songItemPlay.forEach((element) => {
    //   songIndex = parseInt(element.target.id);
    //     // element.classList.remove("fa-circle-play");
    //     songs[songIndex].classList.remove("fa-circle-pause");
    //   });
  }
});

const makeAllPlay = () => {
  songItemPlay.forEach((element) => {
    element.classList.add("fa-circle-play");
    element.classList.remove("fa-circle-pause");
  });
};
const makeAllPause = () => {
  songItemPlay.forEach((element) => {
    element.classList.add("fa-circle-play");
    element.classList.remove("fa-circle-pause");
  });
};

songItemPlay.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (audioElement.paused || audioElement.currentTime <= 0) {

        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `song/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        document.getElementsByClassName("songNameChange")[0].innerText =
        songs[songIndex].songName;
        gif.style.opacity = 1;
    }
    else{
        makeAllPause();
        audioElement.pause();
        songIndex = parseInt(e.target.id);
        audioElement.src = `song/${songIndex + 1}.mp3`;
        e.target.classList.add("fa-circle-play");
        e.target.classList.remove("fa-circle-pause");
        gif.style.opacity = 0;
        audioElement.currentTime = 0;
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
    }
  });
});

// Listen to events
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );

  myProgressBar.value = progress;
  // if (progress == 100) {
  //   audioElement.pause();
  //   masterPlay.classList.remove("fa-circle-pause");
  //   masterPlay.classList.add("fa-circle-play");
  //   gif.style.opacity = 0;
  //   myProgressBar.value = 0;
  // }
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

document.getElementById("next").addEventListener("click", () => {
  if (songIndex > 6) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `song/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  document.getElementsByClassName("songNameChange")[0].innerText =
    songs[songIndex].songName;
  gif.style.opacity = 1;
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `song/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  document.getElementsByClassName("songNameChange")[0].innerText =
    songs[songIndex].songName;
  gif.style.opacity = 1;
});
