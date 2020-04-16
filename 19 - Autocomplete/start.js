(() => {
  // เริ่มเขียนโค้ด

  // Credit pcgeek86/Car Manufacturers.json https://gist.github.com/pcgeek86/78f4cad29dd16961ceeeee654127a0db
  const CAR_BRANDS = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    "Dacia",
    "Daewoo",
    "Daihatsu",
    "Dodge",
    "Donkervoort",
    "DS",
    "Ferrari",
    "Fiat",
    "Fisker",
    "Ford",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Iveco",
    "Jaguar",
    "Jeep",
    "Kia",
    "KTM",
    "Lada",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Landwind",
    "Lexus",
    "Lotus",
    "Maserati",
    "Maybach",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MG",
    "Mini",
    "Mitsubishi",
    "Morgan",
    "Nissan",
    "Opel",
    "Peugeot",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Rover",
    "Saab",
    "Seat",
    "Skoda",
    "Smart",
    "SsangYong",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo"
  ];

  const searchElem = document.querySelector(".search"); 
  let resultElem;

  function onClick(event) {
    searchElem.value = event.target.innerText;
    document.body.removeChild(resultElem);
  }

  function onInput(event) {
    const input = event.target.value;    
    
    // console.log(event.target.value);
    resultElem = document.querySelector(".results");
    if (resultElem) {
      document.body.removeChild(resultElem);
    }   

    resultElem = document.createElement("ul");
    resultElem.setAttribute("class", "results");
    document.body.appendChild(resultElem);

    CAR_BRANDS.forEach((brand) => {
      if (brand.toLowerCase().startsWith(input.toLowerCase())) {
        const li = document.createElement("li");
        li.innerText = brand;
        resultElem.appendChild(li);
        li.addEventListener("click", onClick);
      }      
    })
  }

  function run() {
    searchElem.addEventListener("input", onInput);
  }

  run();

})();
