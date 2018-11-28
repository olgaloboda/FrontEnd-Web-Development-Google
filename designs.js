// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
	var content = "";
	var row = $('#input_height').val();
	var col = $('#input_width').val();
	console.log("Values " + row + " " + col);
	for (var x = 0; x < row; x++) {
		content = '<tr>';
		for (var y = 0; y < col; y++) {
			content += '<td class="cell"></td>';
		}
		content += '</tr>';
		$('#pixel_canvas').append(content);
	}
}

$('#sizePicker').submit(function (event) {
	event.preventDefault();
	$('tr').remove();
	makeGrid();

});

$('table').on('click', '.cell', function(index) {
	var color = $('#colorPicker').val();
	$(this).css("background-color", color);
	console.log("Click " + color);
});