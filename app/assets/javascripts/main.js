$( document ).on('turbolinks:load', function() {
	  console.log("It works on each visit!")

	// create a wrapper around native canvas element (with id="c")
	var canvas = new fabric.Canvas('c');

	// create a rectangle object
	var rectA = new fabric.Rect({
	  left: 100,
	  top: 100,
	  fill: 'red',
	  width: 20,
	  height: 20
	});

rectA.toObject = function () {
	return {
		letter: "A",
		left: this.left
	};
};
	// create a rectangle object
	var rectB = new fabric.Rect({
	  left: 200,
	  top: 200,
	  fill: 'green',
	  width: 20,
	  height: 20
	});

	rectB.toObject = function () {
	return {
		letter: "B",
		left: this.left
	};
};
	// "add" rectangle onto canvas
	canvas.add(rectA, rectB);


	// rectA.on('selected', function() {
	// 	console.log(this.letter);
	// 	console.log(canvas.getObjects());
	// 	// console.log(options.e.clientX, options.e.clientY);
	// 	// console.log(options.letter);
	// });

	// var runAjax = function () { newAjax(canvas)};



	rectA.on('selected', newAjax);








function newAjax(event) {
	
	
	// console.log(this);
	// console.log(event);

	var letters = canvas._objects;

	var action = "/welcome/show";
	var method = "GET";
	
 	var banana = JSON.stringify(letters);
	var data = {array: banana};
	console.log(data);
	$.ajax({
		url: action,
		method: method,
		data: data,
		dataType: 'json'
	})
	.done(function(response) {
		console.log(response)
		$('#coordinates').empty();
		$('#coordinates').append(response);
		
	})
	.fail(function(error) {
		console.log(error);
		alert(error.status);
	});

};


});