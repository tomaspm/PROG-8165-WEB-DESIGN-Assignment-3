
 	// Javascript function to validate the form when the submit button is clicked
function ValidateContactForm()
	 {
		 var re = /^[\S\s]{5,}$/;
	 var pw=/^[\S\s]{4,}$/;
	 var username = document.myForm.fname;
     var passwd = document.myForm.pwd;
	 var usernamestatus = re.exec(username.value);  
	  var pwdstatus = pw.exec(passwd.value); 
if (!usernamestatus || !pwdstatus )
	 {
		   alert("Fill all fields") ;
 
     if (!usernamestatus)
    {
       
        username.focus();
        return false;
    }
	

	 
	 if (!pwdstatus)
    {
       
        passwd.focus();
        return false;
    }
	 
	
	 
	 }
	 }
	 
	function ValidateUserName()
	{
		 var re = /^[\S\s]{5,}$/;
		 var username = document.myForm.fname;
		  var usernamestatus = re.exec(username.value);  
		  if (!usernamestatus)
    {
       document.getElementById("errmsg1").innerHTML="User name must be 5 characters long";
        username.focus();
        return false;
    }
		if (usernamestatus)
    {
       document.getElementById("errmsg1").innerHTML=""
  
        return true;
    }
	}
	 
	 function ValidatePassWord()
	 {
		 var pw=/^[\S\s]{4,}$/;
		  var passwd = document.myForm.pwd;
		    var pwdstatus = pw.exec(passwd.value); 
			 if (!pwdstatus)
    {
        document.getElementById("errmsg2").innerHTML="Password  must be 4 characters long";
		passwd.focus();
       
        return false;
    }
			
		  		 if (pwdstatus)
    {
        document.getElementById("errmsg2").innerHTML="";
		
       
        return true;
    }
	 
	 }
	