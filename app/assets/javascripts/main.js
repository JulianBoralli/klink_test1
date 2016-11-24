$( document ).on('turbolinks:load', function() {
	  console.log("It works on each visit!")

	// create a wrapper around native canvas element (with id="c")
	var canvas = new fabric.Canvas('c');

	// create a rectangle object
	var rectA = new fabric.Rect({
	  data: "A",
	  left: 100,
	  top: 100,
	  fill: 'red',
	  width: 20,
	  height: 20
	});

	// create a rectangle object
	var rectB = new fabric.Rect({
	  data: "B",
	  left: 200,
	  top: 200,
	  fill: 'red',
	  width: 20,
	  height: 20
	});

	// "add" rectangle onto canvas
	canvas.add(rectA, rectB);


	// rectA.on('selected', function() {
	// 	console.log(this.letter);
	// 	console.log(canvas.getObjects());
	// 	// console.log(options.e.clientX, options.e.clientY);
	// 	// console.log(options.letter);
	// });




	rectA.on('selected', newAjax);

});






function newAjax(event) {
	
	
	console.log(this);
	console.log(event);

	var letter = $(this);
	var action = "/welcome/show";
	var method = "GET";
	// var data = JSON.stringify({letter: letter[0].data})
	var data = {letter: letter[0].data}
	console.log(data);
	$.ajax({
		url: action,
		method: method,
		data: data,
		dataType: 'json'
	})
	.done(function(response) {
		console.log(response)
		
		
	})
	.fail(function(error) {
		console.log(error);
		alert(error.status);
	});

};
