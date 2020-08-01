function openForm() {
  document.getElementById("myForm").style.display = "block";
}


function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function check(){
const name=document.getElementById("uname").value;
const pass=document.getElementById("psw").value;
if((name=="Priya"|| name=="Swati")&&pass==12457){
  window.stop();
   window.location.assign("develop.html");
}
else{
  alert("Wrong username or Password");
}
}

function post(){
  var title=document.getElementById("title").value;
  console.log(title);
  var author=document.getElementById("ath").value;
  console.log(author);
  var text=document.getElementById("text").value;
  console.log(text);
  var option=document.getElementById("choose").value;
  console.log(option);

  if(option=="Personal"){
    
  }
}
