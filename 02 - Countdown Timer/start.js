(() => {
  // เริ่มเขียนโค้ด

  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;

  const d = document.getElementById("days");
  const h = document.getElementById("hours");
  const m = document.getElementById("minutes");
  const s = document.getElementById("seconds");

  function countDown() {
    const now = new Date().getTime();
    const newYear = new Date("December 31, 2020 23:59:59").getTime();

    const unixTimeLeft = newYear - now;

    const days = Math.floor(unixTimeLeft / DAY);
    const hours = Math.floor(unixTimeLeft % DAY / HOUR);
    const minutes = Math.floor(unixTimeLeft % HOUR / MINUTE);
    const seconds = Math.floor(unixTimeLeft % MINUTE / SECOND);
    
    d.innerText = days;
    h.innerText = hours;
    m.innerText = minutes;
    s.innerText = seconds;

    // console.log(now);
    // console.log(newYear);
  }

  function run() {
    
    countDown();
    
    setInterval(() => {
      countDown();
    }, 1000);
  }

  run();
})();
