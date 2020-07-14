function openForm() {
  document.getElementById("myForm").style.display = "block";
}


function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function check(){
var name=document.getElementById("uname");
var pass=document.getElementById("psw");
if(name=="Priya"|| name=="Swati"){
  if(pass=="12457"){
    return true
}
}
else{
  return false
}
}

