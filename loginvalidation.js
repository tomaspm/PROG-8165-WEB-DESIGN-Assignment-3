

function validate()
{
 var usrname = document.forms["login"]["user"].value;
 var passworde = document.forms["login"]["pass"].value;

 if(usrname.length < 5)
 {
  window.alert("Username Invalid!!Should be atleast 5 character in length");
  return false;
 }
 else if(passworde.length < 4)
 {
  window.alert("Password must be 4 charecter in length");
  return false;
 }
 else
 {
  return true;
 }
}  
