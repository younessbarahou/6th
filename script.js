function check() {
    var newmail=document.getElementById('newmail') ;
    var error = document.getElementsByClassName('error');
    var email = document.getElementById('input');
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if (regex.test(email.value)) {
      console.log("Valid email address!");
      sessionStorage.setItem("email", email.value);
      window.open("submitted.html","_self");
      
    } else {
      console.log("Invalid email address!");
      for (var i = 0; i< error.length; i++){
        error[i].style.display='block';
        email.style.border = '1px solid hsl(4, 100%, 67%)';
        email.style.backgroundColor = 'hsl(4, 100%, 97%)';
      }
    }
}
function reset(){
    var email = document.getElementById('input');
    var error = document.getElementsByClassName('error');
      for (var i = 0; i< error.length; i++){
        error[i].style.display='none';
        email.style.border = '1px solid ';
        email.style.backgroundColor = 'hsl(0, 0%, 100%)';
      }
}
var email = document.getElementById('input').value;
sessionStorage.setItem("email", email);


