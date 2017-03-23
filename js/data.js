 	// Javascript function to validat the registration form
	
	
	function recheck()
	{
	
		
	
		
		var un = /^[a-zA-Z0-9\s_]{5,}$/;
		  var fn= /^[A-Z][a-z0-9\s]{0,}$/;
		  var ln= /^[A-Z][a-z0-9\s]{0,}$/;
		
		 var ema = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  
		
		 
	  var username = document.myForm.uname;
	  var firstname=document.myForm.fname;
	  var lastname=document.myForm.lname;
	  var emailid=document.myForm.email;
	  
var usernamestatus = un.exec(username.value);  
var firstnamestatus=fn.exec(firstname.value);
	 var lastnamestatus=ln.exec(lastname.value);
	 var emailstatus=ema.exec(emailid.value);
	 
	 if (!usernamestatus || !firstnamestatus || !lastnamestatus  || !emailstatus )
	 {
		   alert("Please fill all fields...") ;
		   
		   if (!usernamestatus)
	 {
		   
       username.focus();
       
		     return false;
	 }
      if (!firstnamestatus)
	 {
		   
       firstname.focus();
            return false;
	 }
	  if (!lastnamestatus)
	 {
		   
      lastname.focus();
      return false;
		 
	 }
	 if (!emailstatus)
	 {
		
       emailid.focus();
   
		     return false;
	 }
	  
    
		 
	 }
	 
    

	
 
	
		
	}
	
function ValidateUserName()
{
	 var username = document.myForm.uname;
	 var un = /^[a-zA-Z0-9\s_]{5,}$/;
	 var usernamestatus = un.exec(username.value);  
	 
	 if (!usernamestatus)
	 {
		  document.getElementById("errusername").innerHTML="User name should be minimum 5 characters ..letters,digits,space and underscore permitted";
       username.focus();
        return false;
		 
	 }
	  if (usernamestatus)
	 {
		  document.getElementById("errusername").innerHTML="";
      
        return true;
		 
	 }
	 
	 
}

function ValidateFirstName()
{
     var firstname=document.myForm.fname;	 
	 var fn= /^[A-Z][a-z0-9\s]{0,}$/;
	 var firstnamestatus=fn.exec(firstname.value);
	  if (!firstnamestatus)
	 {
		  document.getElementById("errfname").innerHTML="First name must start with capital letter, rest should be small letters and  digits, space permitted..";
      firstname.focus();
        return false;
		 
	 }
	  if (firstnamestatus)
	 {
		  document.getElementById("errfname").innerHTML="";
      
        return true;
		 
	 }
	
}

function ValidateLastName()
{
	  var lastname=document.myForm.lname;
	    var ln= /^[A-Z][a-z0-9\s]{0,}$/;
			 var lastnamestatus=ln.exec(lastname.value);
			   if (!lastnamestatus)
	 {
		   document.getElementById("errlname").innerHTML="Last name must start with capital letter, rest should be small letters and  digits, space permitted..";
      lastname.focus();
      return false;
		 
	 }
	  if (lastnamestatus)
	 {
		  document.getElementById("errlname").innerHTML="";
      
        return true;
		 
	 }
		
}

function ValidateEmail()
{
	
	 var ema = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	   var emailid=document.myForm.email;
	    var emailstatus=ema.exec(emailid.value);
	    if (!emailstatus)
	 {
		
      
   document.getElementById("erremail").innerHTML="Enter a valid email id";
  emailid.focus();
		     return false;
	 }
	     if (emailstatus)
	 {
		
  
   document.getElementById("erremail").innerHTML="";
		     return true;
	 }
	 
}
	
	
	
	
	
