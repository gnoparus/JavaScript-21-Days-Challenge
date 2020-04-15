(() => {
  // เริ่มเขียนโค้ด

  const audioElem = document.querySelector("audio");
  const playBtnElem = document.querySelector(".play");
  const startTimeElem = document.querySelector(".start-time");
  const endTimeElem = document.querySelector(".end-time");
  const progressBarElem = document.querySelector(".progress-bar");

  
  function onClick(event) {
    if (audioElem.paused) {
      audioElem.play();
      playBtnElem.className = "pause";
    } else {
      audioElem.pause();
      playBtnElem.className = "play";
    }
  }

  function getDuration(time) {

    const minutes = Math.floor(time / 60 % 60).toString().padStart(2, "0");
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  function onTimeUpdate(event) {
       
    const currentTime = audioElem.currentTime;
    const currentTimeText = getDuration(currentTime);

    startTimeElem.innerText = currentTimeText;
    progressBarElem.value = currentTime;
   
    // console.log(duration);    
  }

  function onLoadedData(event) {
    // console.log(event);

    const endTime = audioElem.duration;
    const endTimeText = getDuration(endTime);

    endTimeElem.innerText = endTimeText;
    progressBarElem.max = endTime;
  }

  function onInput(event) {
    // console.log(event);

    audioElem.currentTime = progressBarElem.value;
  }

  function onEnded(event) {
    audioElem.currentTime = 0;
    audioElem.pause();
    playBtnElem.className = "play";
  }

  function run() {
    playBtnElem.addEventListener("click", onClick);
    audioElem.addEventListener("timeupdate", onTimeUpdate);
    audioElem.addEventListener("loadeddata", onLoadedData);
    audioElem.addEventListener("ended", onEnded);
    progressBarElem.addEventListener("input", onInput);
  }

  run();
})();
