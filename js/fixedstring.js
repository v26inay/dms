var readOnlyLength = $('#box1').val().length;

$('#output').text(readOnlyLength);

$('#box1').on('keypress, keydown', function(event) {
	var $field = $(this);
	$('#output').text(event.which + '-' + this.selectionStart);
	if ((event.which != 37 && (event.which != 39))
		&& ((this.selectionStart < readOnlyLength)
			|| ((this.selectionStart == readOnlyLength) && (event.which == 8)))) {
		return false;
}
});