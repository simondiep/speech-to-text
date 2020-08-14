var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";

const instructionsDiv = document.getElementById("instructions");
const outputDiv = document.querySelector(".output");
const bg = document.querySelector("html");

document.onclick = function () {
  recognition.start();
  outputDiv.textContent = "...";
  instructionsDiv.textContent = "Say something";
};

recognition.onresult = function (event) {
  const word = event.results[0][0].transcript;
  outputDiv.textContent = word;
  bg.style.backgroundColor = word;
};

recognition.onspeechend = function () {
  recognition.stop();
  instructionsDiv.textContent = "Tap the screen";
};
