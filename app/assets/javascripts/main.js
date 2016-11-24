$( document ).on('turbolinks:load', function() {
  console.log("It works on each visit!")

// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');

var imgElement = document.getElementById('my-image');
var imgInstance = new fabric.Image(imgElement, {
  left: 5,
  top: 350
});

$('#my-image').on('click', function(){
  canvas.add(imgInstance);
})

// create a rectangle object
// var rectA = new fabric.Rect({
//   letter: "A",
//   left: 100,
//   top: 100,
//   fill: 'red',
//   width: 20,
//   height: 20
// });

// var rectA = new fabric.Rect({
//   letter: "A",
//   left: 50, top: 50,
//   fill: fabric.Image.fromURL('images/A.png', function(img) {
//     canvas.add(img);
//   })
// });

// var rectB = new fabric.Rect({
//   letter: "B",
//   left: 200,
//   top: 200,
//   fill: fabric.Image.fromURL('images/A.png', function(img) {
//   canvas.add(img);
//   }),
//   width: 20,
//   height: 20
// });

// var rectC = new fabric.Rect({
//   letter: "C",
//   left: 200,
//   top: 200,
//   fill: fabric.Image.fromURL('images/A.png', function(img) {
//   canvas.add(img);
//   }),
//   width: 20,
//   height: 20
// });

// var rectD = new fabric.Rect({
//   letter: "D",
//   left: 200,
//   top: 200,
//   fill: fabric.Image.fromURL('images/A.png', function(img) {
//   canvas.add(img);
//   }),
//   width: 20,
//   height: 20
// });

// var rectE = new fabric.Rect({
//   letter: "E",
//   left: 200,
//   top: 200,
//   fill: fabric.Image.fromURL('images/A.png', function(img) {
//   canvas.add(img);
//   }),
//   width: 20,
//   height: 20
// });

// var rectF = new fabric.Rect({
//   letter: "F",
//   left: 200,
//   top: 200,
//   fill: fabric.Image.fromURL('images/A.png', function(img) {
//   canvas.add(img);
//   }),
//   width: 20,
//   height: 20
// });

// var rectG = new fabric.Rect({
//   letter: "G",
//   left: 200,
//   top: 200,
//   fill: fabric.Image.fromURL('images/A.png', function(img) {
//   canvas.add(img);
//   }),
//   width: 20,
//   height: 20
// });

// var rectH = new fabric.Rect({
//   letter: "H",
//   left: 200,
//   top: 200,
//   fill: fabric.Image.fromURL('images/A.png', function(img) {
//   canvas.add(img);
//   }),
//   width: 20,
//   height: 20
// });

// var rectI = new fabric.Rect({
//   letter: "I",
//   left: 200,
//   top: 200,
//   fill: fabric.Image.fromURL('images/A.png', function(img) {
//   canvas.add(img);
//   }),
//   width: 20,
//   height: 20
// });

// var rectJ = new fabric.Rect({
//   letter: "J",
//   left: 200,
//   top: 200,
//   fill: fabric.Image.fromURL('images/A.png', function(img) {
//   canvas.add(img);
//   }),
//   width: 20,
//   height: 20
// });

// var rectK = new fabric.Rect({
//   letter: "K",
//   left: 200,
//   top: 200,
//   fill: fabric.Image.fromURL('images/A.png', function(img) {
//   canvas.add(img);
//   }),
//   width: 20,
//   height: 20
// });

// var rectL = new fabric.Rect({
//   letter: "L",
//   left: 200,
//   top: 200,
//   fill: fabric.Image.fromURL('images/A.png', function(img) {
//   canvas.add(img);
//   }),
//   width: 20,
//   height: 20
// });

// var rectM = new fabric.Rect({
//   letter: "M",
//   left: 200,
//   top: 200,
//   fill: fabric.Image.fromURL('images/A.png', function(img) {
//   canvas.add(img);
//   }),
//   width: 20,
//   height: 20
// });



// var alphaBlock = new fabric.Image.fromURL('images/A.png', function(img) {
//   this.letter = "A"
//   canvas.add(img);
// });



// canvas.add(rectA, triangle);

rectA.on('selected', function() {
	console.log(this.letter);
	console.log(canvas.getObjects());
	// console.log(options.e.clientX, options.e.clientY);
	// console.log(options.letter);
});




});

