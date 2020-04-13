(() => {
  // เริ่มเขียนโค้ด

  const KONAMI_CODE = [
    "ArrowUp", "ArrowUp", 
    "ArrowDown", "ArrowDown", 
    "ArrowLeft", "ArrowRight", 
    "ArrowLeft", "ArrowRight", 
    "b", "a"];

    let index = 0;

  function onKeyDown(event) {
    console.log(event.key);

    if (event.key == KONAMI_CODE[index]) {
      index += 1;
      if (index === KONAMI_CODE.length) {
        startSnowing();
      }
    }
    else {
      index = 0;
    }
  }

  function run() {
    // startSnowing();
    document.addEventListener("keydown", onKeyDown);
  }

  run();
})();
