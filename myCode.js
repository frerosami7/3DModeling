var button = document.getElementById("loginbutton");
button.addEventListener("click", storeData, false);

function storeData() {
	var email = document.getElementById('email');
	var pass = document.getElementById('pass');
  var stor = "email: " +email.value+" /password: "+pass.value;
  //alert(stor);
saveText(0.2, "Data.json", stor);
}


function saveText(ref, fname, text, mime)
{
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  saveAs(blob, fname);
  
  return false;

}
