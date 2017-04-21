// JavaScript Document
function correct_layout () {
	if(document.getElementById('center').offsetHeight) {
		var div_heights = new Array(
			document.getElementById('center').offsetHeight,
			document.getElementById('left').offsetHeight,
			document.getElementById('right').offsetHeight
	);
	div_heights = div_heights.reverse(div_heights.sort(num_sort));
	var style_height = div_heights[0] + "px";
		document.getElementById('center').style.height = style_height;
		document.getElementById('left').style.height = style_height;
		document.getElementById('right').style.height = style_height;
	}
}
function num_sort(a,b) {
	return a-b;
}