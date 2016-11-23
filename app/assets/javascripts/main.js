$( document ).on('turbolinks:load', function() {
  console.log("It works on each visit!")

// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');

// create a rectangle object
var rectA = new fabric.Rect({
  letter: "A",
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20
});

// create a rectangle object
var rectB = new fabric.Rect({
  letter: "B",
  left: 200,
  top: 200,
  fill: 'red',
  width: 20,
  height: 20
});

// "add" rectangle onto canvas
canvas.add(rectA, rectB);


rectA.on('selected', function() {
	console.log(this.letter);
	console.log(canvas.getObjects());
	// console.log(options.e.clientX, options.e.clientY);
	// console.log(options.letter);
});




});

