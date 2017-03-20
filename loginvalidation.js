

function validateForm() {
        var un = document.loginform.fname.value;
        var pw = document.loginform.lname.value;
        var username = "username"; 
        var password = "password";
        if ((un == username) && (pw == password)) {
           
            return false;
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
        }
      }
