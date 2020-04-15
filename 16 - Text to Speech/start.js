(() => {
  // เริ่มเขียนโค้ด

  const message = new SpeechSynthesisUtterance();
  const imgElems = Array.from(document.querySelectorAll("img"));

  function onVoicesChanged(event) {

    const voices = speechSynthesis.getVoices();
    const voice = voices.find(voice => voice.lang === "th-TH");
    message.voice = voice;
    // console.log(voices);
  }

  function onClick(event) {
    // console.log(event.target);

    message.text = event.target.getAttribute("alt");
    speechSynthesis.speak(message);
  }

  function run() {
    speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
    imgElems.forEach(imgElem => { imgElem.addEventListener("click", onClick)});
  }

  run();

})();
