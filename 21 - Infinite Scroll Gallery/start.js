(() => {
  // เริ่มเขียนโค้ด

  const KEY = "98IHlaLV1epkT33pwv5vlftqzI9HEwobB9DeGTL9aFM";
  const galleryElem = document.querySelector(".gallery");
  const loaderElem = document.querySelector(".loader");

  let page = 2;

  function showLoader() {
    loaderElem.classList.add("visible");
    // loaderElem.className = "loader.visible";
    console.log(loaderElem);
  }

  function hideLoader() {
    loaderElem.classList.remove("visible");
    // loaderElem.className = "loader";
    console.log(loaderElem);
  }

  async function displayImages() {

    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=paris&client_id=${KEY}`)
    // console.log(response.json());
    const { results } = await response.json();
    // console.log(results);

    showLoader();

    // setTimeout(() => {
    //   console.log("3 seconds")
    // }, 3000);
    results.forEach(result => {
      const img = document.createElement("img");
      img.setAttribute("src", result.urls.small);
      galleryElem.appendChild(img)
    });

    page += 1;
    hideLoader();
  }

  function onScroll(event) {
    // const 
    
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    // console.log(scrollTop, clientHeight, scrollHeight );

    if (scrollTop + clientHeight > scrollHeight - 10) {
      displayImages();
    }

  }

  function run() {
   
    displayImages();

    document.addEventListener("scroll", onScroll);
  }

  run();
})();
