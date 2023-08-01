function login() {
  var userValidation = "ilham";
  var passValidation = "ilham";
  var username = document.form.email.value;
  var pass = document.form.pass.value;

  if (username != userValidation || pass != passValidation) {
    document.getElementById("alert").style.display = "block";
    return false;
  } else {
    alert("anda berhasil login");
  }
}
