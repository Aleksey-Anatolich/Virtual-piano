const PIANO = document.body;
const PIANOKEY = document.querySelectorAll('.piano-key');

PIANO.addEventListener('mousedown', startEventKey, false);
PIANO.addEventListener('mouseup', stopEventKey);

function startEventKey(event) {
    console.log("start");
    if (event.target.classList.contains("piano-key")){
        event.target.classList.add("piano-key-active");
        playAudio();
        console.log("key");
    }
    PIANOKEY.forEach(function (elem) {
        elem.addEventListener("mouseover", playAudio);
        elem.addEventListener("mouseout", stopAudio);
    });
}
function stopEventKey() {
    console.log("stop");
    PIANOKEY.forEach(function (elem) {
        elem.classList.remove("piano-key-active");
        elem.removeEventListener("mouseover", playAudio);
        elem.removeEventListener("mouseout", stopAudio);
    });
}
function playAudio() {
    event.target.classList.add("piano-key-active");
    const note = event.target.dataset.note;
    const audio = new Audio();
    audio.src = `assets/audio/${note}.mp3`;
    audio.currentTime = 0;
    audio.play();
}
function stopAudio() {
     event.target.classList.remove("piano-key-active");
}

const btnLetters = document.querySelector('.btn-letters');
const btnNotes = document.querySelector('.btn-notes');

btnLetters.addEventListener('click', lettersON);
btnNotes.addEventListener('click', notesON);

function lettersON() {
    btnLetters.classList.add('btn-active');
    PIANOKEY.forEach((elem)=>elem.classList.add('lit'));
    btnNotes.classList.remove('btn-active');
}
function notesON(){
    btnLetters.classList.remove('btn-active');
    PIANOKEY.forEach((elem)=>elem.classList.remove('lit'));
    btnNotes.classList.add('btn-active');
}

const fullScreen = document. querySelector('.fullscreen');
fullScreen.addEventListener('click', bigWindow);

function bigWindow () {
    if (!document.fullscreenElement){
        document.documentElement.requestFullscreen();
    }
    else document.exitFullscreen();
}

window.addEventListener('keydown', keyStartPlay);
window.addEventListener('keyup', keyStopPlay);

function keyStartPlay(e) {
    if (e.repeat)  return;
    const key = document.querySelector(`.piano-key[data-code="${e.code}"]`);
    if (key){
        key.classList.add("piano-key-active");
        playAudio1(key);
    }
}
function keyStopPlay() {
    PIANOKEY.forEach(function (elem) {
        elem.classList.remove("piano-key-active");
    });
}
function playAudio1(key) {
    const note = key.dataset.note;
    const audio = new Audio("assets/audio/" + `${note}` +".mp3");
    audio.play();
}

