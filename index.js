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
  var website = "/Nav";
  var website2 = "https://bing.com";
  var iframe = '<link rel="icon" href="https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico"><iframe src="' + website + '" style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;"></iframe>';
  var win = window.open("about:blank");
  win.document.write(iframe);
  win.document.title = "Home | Schoology";
  document.documentElement.innerHTML = '<title>Bing</title><iframe src="' + website2 + '" style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;"></iframe>';
}
