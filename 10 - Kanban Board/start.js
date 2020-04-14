(() => {
  // เริ่มเขียนโค้ด

  const taskElems = Array.from(document.querySelectorAll(".task"));
  const dropZoneElems = Array.from(document.querySelectorAll(".drop-zone"));

  let draggingElem;

  function onDragStart(event) {
    // console.log(event.target);
    // console.log(this);
    
    // dragingElem = event.target;
    draggingElem = this;
  }

  function onDrop(event) {
    console.log("Drop");

    // draggingElem.parent.removeChild(draggingElem);
    this.append(draggingElem);
    draggingElem = null;
  }

  function onDragOver(event) {
    // console.log(event);
    event.preventDefault();
  }

  function onDragEnter(event) {
    // console.log(event);
    event.preventDefault();
  }

  function run() {
    // console.log(taskElems);

    taskElems.forEach((taskElem) => {
      taskElem.addEventListener("dragstart", onDragStart);
    })

    dropZoneElems.forEach((dropZoneElem) => {
      dropZoneElem.addEventListener("drop", onDrop);
      dropZoneElem.addEventListener("dragover", onDragOver);
      dropZoneElem.addEventListener("dragenter", onDragEnter);
    }) 
  }

  run();
})();
