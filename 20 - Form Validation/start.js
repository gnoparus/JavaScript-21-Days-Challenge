(() => {
  // เริ่มเขียนโค้ด
  const formElem = document.getElementById("form");

  const emailElem = document.getElementById("email");
  const passwordElem = document.getElementById("password");

  function displayError(elem, message) {
    const smallElem = elem.parentElement.querySelector("small");
    smallElem.innerText = message;
    elem.classList.add("invalid");    
    formElem.classList.add("invalid");    
  }
  function clearError(elem) {
    displayError(elem, "");
    elem.classList.remove("invalid");    
    formElem.classList.remove("invalid");    
  }

  function displaySuccess() {
    document.body.innerHTML = "";

    const pElem = document.createElement("p");
    pElem.innerText = "Logged in already!";
    pElem.className = "success";
    document.body.appendChild(pElem);
  }

  function validateLength(elem, min, max) {
    const val = elem.value;

    // console.log(val);
    if (val.length < min || val.length > max) {
      displayError(elem, `Length Error. ${elem.name} must be between ${min} and ${max} characters.`);
    }
  }

  function validateEmail(elem) {
    const regex = /\S+@\S+\.\S+/;
    
    if (!regex.test(elem.value)) {
      console.log("test not")
      displayError(elem, `Email must be valid.`);
    } else {
      console.log("tested ")
    }
  }

  function onSubmit(event) {
    event.preventDefault();

    clearError(emailElem);
    clearError(passwordElem);

    validateLength(emailElem, 10, 20);
    validateLength(passwordElem, 8, 16);

    validateEmail(emailElem);

    const isValidForm = !formElem.classList.contains("invalid");

    if (isValidForm) {
      displaySuccess();
    }
  }

  function run() {
    formElem.addEventListener("submit", onSubmit);
  }

  run();
})();
