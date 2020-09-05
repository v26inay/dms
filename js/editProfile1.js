(function() {

  var status = $('#status');

  $('form').ajaxForm({
    beforeSubmit: function() {
      status.empty();
      var currentPassword,newPassword,confirmPassword;
      currentPassword = document.form.currentPassword;
      newPassword = document.form.newPassword;
      confirmPassword = document.form.confirmPassword;
      if (!currentPassword.value) {
        currentPassword.focus();
        document.getElementById("currentPassword").innerHTML = "Current password required.";
        return false;
      } else if (!newPassword.value) {
        document.getElementById("currentPassword").innerHTML = "";
        newPassword.focus();
        document.getElementById("newPassword").innerHTML = "Enter new password.";
        return false;
      } else if (!confirmPassword.value) {
        document.getElementById("newPassword").innerHTML = "";
        confirmPassword.focus();
        document.getElementById("confirmPassword").innerHTML = "Re-enter new password.";
        return false;
      } else if (newPassword.value != confirmPassword.value) {
        document.getElementById("confirmPassword").innerHTML = "";
        newPassword.value="";
        confirmPassword.value="";
        newPassword.focus();
        document.getElementById("confirmPassword").innerHTML = "Values must be same.";
        return false;
      }
      return true;
    },
    uploadProgress: function(event, position, total, percentComplete) {
      document.getElementById("currentPassword").innerHTML = "";
      document.getElementById("newPassword").innerHTML = "";
      document.getElementById("confirmPassword").innerHTML = "";
      $("#changepass").attr("disabled", true);
      $("#changepass").val('Changing...');
    },
    complete: function(xhr) {
      status.html(xhr.responseText);
      $("html, body").animate({ scrollTop: $(document).height()-$(window).height() }, 500);
      $('#form').resetForm();
      $("#changepass").val('Change Password');
      $('#changepass').attr("disabled", false);
    }
  });
})();