(() => {
  // เริ่มเขียนโค้ด

  // 1. Class vs Prototype 
  console.log("---- 1. Class vs Prototype  ----");

  class Person {
  }

  const p1 = new Person();
  console.log(p1);
  

  // 2. What's prototype?
  console.log("---- 2. What's prototype?  ----");

  const name = "Somchai";
  console.log(name.__proto__);

  const arr = [];
  console.log(arr.__proto__);  


  // 3. Prototype chain
  console.log("---- 3. Prototype chain ----");
  const name2 = "Somsak";
  
  console.log("From String Prototype: ", name2.toLowerCase());
  console.log("From Object Prototype: ", name2.toLocaleString());


  // 4. Extend a prototype
  console.log("---- 4. Extend a prototype ----");

  const name3 = "Somkid";

  function sayHello(val) {
    console.log(`Hello, ${val}`);
  }

  String.prototype.sayHello = sayHello;

  console.log(name3.__proto__);
  name3.sayHello("World!!!");
  
})();
