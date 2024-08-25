var history = []
var outputBox = document.getElementById("output") ;

function Type(number) {
  if (outputBox.value == "0") {
    outputBox.value = number
  }
  
  else {
    document.getElementById("output").value += number; 
  }
}
function Clear(){
  outputBox.value = "0";
  history = [];
}

function Launch() {
  var website = "./Nav/h.html";
  var iframe = '<iframe src="' + website + '" style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;"></iframe>';
  var win = window.open("about:blank");
  win.document.write(iframe);
  win.document.title = "Elite Calculator";
  document.documentElement.innerHTML = iframe;
}
