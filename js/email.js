(function() {

  var status = $('#status');

  $('form').ajaxForm({
    beforeSubmit: function() {
      status.empty();
      var toAddress,ccAddress,bccAddress;
      toAddress = document.form.toAddress;
      ccAddress = document.form.ccAddress;
      bccAddress = document.form.bccAddress;
      if (!toAddress.value.match(/^\s*(([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)(\s*;\s*|\s*$))*$/)) {
        document.getElementById("toAddress").innerHTML = "";
        toAddress.focus();
        document.getElementById("toAddress").innerHTML = "Invalid address(es).";
        return false;
      } else if (!ccAddress.value.match(/^\s*(([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)(\s*;\s*|\s*$))*$/)) {
        document.getElementById("toAddress").innerHTML = "";
        ccAddress.focus();
        document.getElementById("ccAddress").innerHTML = "Invalid address(es).";
        return false;
      } else if (!bccAddress.value.match(/^\s*(([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)(\s*;\s*|\s*$))*$/)) {
        document.getElementById("ccAddress").innerHTML = "";
        bccAddress.focus();
        document.getElementById("bccAddress").innerHTML = "Invalid address(es).";
        return false;
      }
      return true;
    },
    uploadProgress: function(event, position, total, percentComplete) {
      document.getElementById("toAddress").innerHTML = "";
      document.getElementById("ccAddress").innerHTML = "";
      document.getElementById("bccAddress").innerHTML = "";
      $("#sendmail").attr("disabled", true);
      $("#sendmail").val('Sending...');
    },
    complete: function(xhr) {
      status.html(xhr.responseText);
      $("html, body").animate({ scrollTop: $(document).height()-$(window).height() }, 500);
      $('#form').resetForm();
      $("#sendmail").val('Send E-mail');
      $('#sendmail').attr("disabled", false);
    }
  });
})();