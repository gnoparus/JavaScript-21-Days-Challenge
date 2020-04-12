(() => {
  // เริ่มเขียนโค้ด
  function run() {
    const bodyElem = document.querySelector("body");
    const eyeElems = document.querySelectorAll(".eye");

    console.log(bodyElem);
    console.log(eyeElems);

    function onMouseMove({pageX, pageY}) {
      // console.log(`${pageX}, ${pageY}`)

      eyeElems.forEach((eyeElem) => {
        // console.log(eyeElem.getBoundingClientRect());
        const { left, top } = eyeElem.getBoundingClientRect();
        
        const eyeCenterX = left + eyeElem.offsetWidth / 2;
        const eyeCenterY = top + eyeElem.offsetHeight / 2;
        
        const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY);

        const angle = radian * 180 / Math.PI * -1;
        // console.log(angle);
        eyeElem.style.transform = `rotate(${angle}deg)`
      });
    }

    bodyElem.addEventListener("mousemove", onMouseMove)
  }
  run();  
})();
