(() => {
  // เริ่มเขียนโค้ด

  // 1. NaN
  console.log("---- 1. NaN ----")

  if (null === null) {
    console.log("null equals null");
  }
  else {
    console.log("null not equals null");
  }


  if (1 === 1) {
    console.log("1 equals 1");
  }
  else {
    console.log("1 not equals 1");
  }

  if (NaN === NaN) {
    console.log("NaN equals NaN");
  }
  else {
    console.log("NaN not equals NaN");
  }

  const result1 = 1 / "hello";
  console.log("result = ", result1);

  if (result1 === NaN) {
    console.log("result1 equals NaN");
  }
  else {
    console.log("result1 not equals NaN");
  }

  if (Number.isNaN(result1)) {
    console.log("result1 isNaN");
  }
  else {
    console.log("result1 not isNaN");
  }


  // 2. Type Coercion

  console.log("---- 2. Type Coercion ----")
  if (3 > 2 > 1) {
    console.log("True 3 > 2 > 1");
  }
  else {
    console.log("False 3 > 2 > 1");
  }

  const result2 = 1 - '2';
  const result3 = 1 + '1';
  const result3_1 = 1 + Number.parseInt('1');

  console.log("result2 = ", result2);
  console.log("result3 = ", result3);
  console.log("result3_1 = ", result3_1);


  const result4 = true + true;

  console.log("result4 = ", result4);



  // 3. Interpreter & Compiler
  console.log("---- 3. Interpreter & Compiler ----")

  function getPerson() {
    return 
    { 
      name: "Somchai"
    };
  }
  
  console.log(getPerson());

  function getPerson2() {
    return { 
      name: "Somsak"
    };
  }
  
  console.log(getPerson2());


  // 4. Checking Object Type
  console.log("---- 4. Checking Object Type ----")

  const person = {};

  if (typeof person === "object") {
    console.log("type of person is object");
  }
  else {
    console.log("type of person is not object");
  }

  const personNull = null;

  if (typeof personNull === "object") {
    console.log("type of personNull is object");
  }
  else {
    console.log("type of personNull is not object");
  }

  const person2 = {};

  if (typeof person2 === "object" && person2 !== null) {
    console.log("type of person2 is object");
  }
  else {
    console.log("type of person2 is not object");
  }

})();
