(() => {
  // เริ่มเขียนโค้ด

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new window.SpeechRecognition();
  const btnElem = document.querySelector(".control");
  const textElem = document.querySelector(".text");

  function onClick(event) {

    const isPausing = btnElem.classList.contains("record");

    if (isPausing) {
      recognition.start();
      btnElem.classList.remove("record");
      btnElem.classList.add("pause");
      textElem.innerText = "";
    } else {
      recognition.stop();
      btnElem.classList.add("record");
      btnElem.classList.remove("pause");
    }
  }

  function onResult(event) {

    // console.log("onResult", event);
    const transcript = event.results[0][0].transcript;

    textElem.innerText += " " + transcript;
    // console.log(transcript);
  }

  function onEnd() {
    recognition.start();    
  }

  function run() {
    recognition.lang = "en-US";

    recognition.addEventListener("result", onResult);
    recognition.addEventListener("end", onEnd);
    btnElem.addEventListener("click", onClick);
  }

  run();
})();
