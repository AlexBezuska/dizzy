$(document).on('click', '.dizzy .arrow', function(e) {
	var thisDirection = $(this).data("direction");
	advanceSlider(thisDirection);
});

function advanceSlider(direction) {
	var first = $('.dizzy .item:first-child');
	var last = $('.dizzy .item:last-child');
	if (direction === "forward") {
		last.remove().insertBefore(first).css("margin-right", "4px");
	} else {
		first.remove().insertAfter(last).css("margin-right", "4px");
	}
}