(() => {
  // เริ่มเขียนโค้ด

  // 1. Lexical scope & Dynamic scope
  // function printName() {
  //   console.log(this);
  // }

  // printName();

  // 2. How to know what is "this"?
  // function printName() {
  //   console.log(this);
  //   console.log(`My name is ${this.name}`)
  // }

  //// 2.1 Invoker object
  // const person1 = { name: "Somsak", printName};
  // const person2 = { name: "Somsri", printName};

  // person1.printName();
  // person2.printName();

  //// 2.2 Global object (window, global)
  // name = "Global";
  // printName();

  //// 2.3 Constructor function
  // function Person(name) {
  //   this.name = name;
  //   this.printName = printName;
  // }

  // const person501 = new Person("Sommai");
  // const person502 = new Person("Sombon");

  // person501.printName();

  // 3. call(), apply(), and bind()
  function printName(nationality, city) {
    console.log(this);
    console.log(`My name is ${this.name}. I'm ${nationality} and living in ${city}`);
  }

  function Person(name, nationality, city) {
    this.name = name;
    this.nationality = nationality;
    this.city = city;

    printName(this.nationality, this.city);
    printName.call(this, this.nationality, this.city);
    printName.apply(this, [this.nationality, this.city]);

    const printPersonName = printName.bind(this);
    printPersonName(this.nationality, this.city);
  }

  const person601 = new Person("Somjit", "Thai", "Chiang Rai");
})();
