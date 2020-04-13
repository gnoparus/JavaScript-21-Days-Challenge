(() => {
  // เริ่มเขียนโค้ด

  const canvas = document.getElementById("painting");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const context = canvas.getContext("2d");

  let previousPoint = { x: 0, y: 0 };

  function getDistance(previousPoint, currentPoint) {
    return Math.sqrt((previousPoint.x-currentPoint.x) ** 2 + (previousPoint.y-currentPoint.y) ** 2)
  }

  function onMouseEnter({ pageX, pageY }) {
    previousPoint.x = pageX;
    previousPoint.y = pageY;
  }
  function onMouseMove({ pageX, pageY }) {
    const currentPoint = { x: pageX, y: pageY };

    // console.log(getDistance(previousPoint, currentPoint));
    const distance = getDistance(previousPoint, currentPoint);
    const opacity = Math.min(0.5, 1 / distance);
    
    context.beginPath();
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineWidth = Math.random() / distance * 40;
    context.strokeStyle = `rgba(222, 10, 10, ${opacity})`;

    context.moveTo(previousPoint.x, previousPoint.y);
    context.lineTo(currentPoint.x, currentPoint.y);
    context.stroke();
    context.closePath();

    previousPoint = currentPoint;
  }

  function run() {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseenter", onMouseEnter);
  }
  run();

})();
