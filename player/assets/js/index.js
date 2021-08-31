const playbtn = document.querySelector(".play-btn");
const pausebtn = document.querySelector(".pause-btn");
const audio = document.querySelector("audio");
const nextbtn = document.querySelector(".nextbtn");
const backbtn = document.querySelector(".back-btn");
const image = document.querySelector("img");
const title = document.querySelector(".title");
const curtime = document.querySelector(".curtime");
const totime = document.querySelector(".totime");
const volume = document.querySelector(".mute-btn");
const volumemute = document.querySelector(".volume-mute-btn");
const redo = document.querySelector(".redo-btn");
const arrow = document.querySelector(".arrow-btn");
const progressbar = document.querySelector("progress");
const songs = ["Hamim", "amirrashvand", "kasrazahedi"];
let interval;
var songindex = 0;
loadmusic(songs[songindex]);
function loadmusic(song) {
  title.innerHTML = `${song}`;
  audio.src = `assets/music/${song}.mp3`;

  image.src = `assets/img/${song}.jpg`;
}

function play() {
  playbtn.style.display = "none";
  pausebtn.style.display = "block";

  audio.play();
}

function pause() {
  playbtn.style.display = "block";
  pausebtn.style.display = "none";
  audio.pause();
}
function next() {
  songindex++;
  if (songindex == 3) {
    songindex = 0;
  }
  loadmusic(songs[songindex]);

  audio.play();
  play();
}
function back() {
  songindex--;
  if (songindex < 0) {
    songindex = 2;
  }
  loadmusic(songs[songindex]);
  audio.play();
  play();
}
function mute() {
  audio.muted = true;
  volume.style.display = "none";
  volumemute.style.display = "block";
}
function volumeup() {
  audio.muted = false;
  volumemute.style.display = "none";
  volume.style.display = "block";
}
function repeat() {
  audio.loop = true;
  arrow.style.display = "none";
  redo.style.display = "block";
}
function norepeat() {
  audio.loop = false;
  redo.style.display = "none";
  arrow.style.display = "block";
}
var update = setInterval(function () {
  var min = Math.floor(audio.currentTime / 60);
  var sec = Math.floor(audio.currentTime % 60);
  if (sec < 10) {
    sec = "0" + String(sec);
  }
  if (min < 10) {
    min = "0" + String(min);
  }
  curtime.innerHTML = min + ":" + sec;

  var min = Math.floor(audio.duration / 60);
  var sec = Math.floor(audio.duration % 60);
  if (sec < 10) {
    sec = "0" + String(sec);
  }
  if (min < 10) {
    min = "0" + String(min);
  }
  totime.innerHTML = min + ":" + sec;

  if (curtime.innerHTML == totime.innerHTML && audio.loop == false) {
    songindex++;
    if (songindex == 3) {
      songindex = 0;
    }
    loadmusic(songs[songindex]);

    audio.play();
    play();
  }
}, 10);

var progrresupdate = setInterval(function () {
  var timeline = (audio.currentTime / audio.duration) * 100;
  progressbar.value = timeline;
}, 10);

function linetime(e){
  var percent = e.offsetX / this.offsetWidth;
  // audio.currentTime = percent * audio.duration;
  progressbar.value = percent / 100;
  console.log(percent)
  
}


