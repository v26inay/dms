(function() {

    var bar = $('.bar');
    var percent = $('.percent');
    var status = $('#status');

    $('form').ajaxForm({
        beforeSend: function() {
            status.empty();
            var percentVal = '0%';
            bar.width(percentVal)
            percent.html(percentVal);
        },
        uploadProgress: function(event, position, total, percentComplete) {
            $("#mybutton").attr("disabled", true);
            $("#mybutton").val('Uploading...');
            var percentVal = percentComplete + '%';
            bar.width(percentVal)
            percent.html(percentVal);
        },
        complete: function(xhr) {
            bar.width("100%");
            percent.html("100%");
            status.html(xhr.responseText);
            $("html, body").animate({ scrollTop: $(document).height()-$(window).height() }, 500);
            $('#form').resetForm();
            $("#mybutton").val('Upload');
            $('#mybutton').attr("disabled", false);
        }
    });
})();