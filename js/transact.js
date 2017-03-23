function ValidateTransaction()
{

	var des =  /^[a-zA-Z0-9\s_]{10,}$/; 
	var desc = document.frm1.descp;
	var descstatus = des.exec(desc.value);  
	
	
	 

	
	if (!descstatus)
	 {
		   alert("Enter description...should be minimum 10 characters ..letters,digits,space and underscore permitted") ;
       desc.focus();
        return false;
		 
	 }
	
	 var x,y;
	 
    // Get the value of the input field with id="amt"
	x=document.frm1.amt;
    var am=document.frm1.amt;
	var amt1=document.frm1.amt.value;

	
    // If amt is Not a Number or less than 10000 or greater than 10000

	 if (isNaN(amt1) || amt1 < -10000.00 || amt1 > 10000.00) 
	 {
        alert("Amount should be between -10000.00 and 10000.00");
		am.focus();
		return false;
	 } 
	
	else 
	{
	  y = Math.round(amt1*Math.pow(10,2))/Math.pow(10,2);
	}
	 am.value=y;
	 am.focus();
	 
	 

}



function ValidateDescription()
{
	var des =  /^[a-zA-Z0-9\s_]{10,}$/; 
	var desc = document.frm1.descp;
	var descstatus = des.exec(desc.value);  
	if (!descstatus)
	{
	
	document.getElementById("errdescp").innerHTML="Description should be minimum 10 characters ..letters,digits,space and underscore permitted";
    desc.focus();
    return false;
		 
	 }
	  if (descstatus)
	 {
		document.getElementById("errdescp").innerHTML="";
        return true;
		 
	 }
	 
		
	
}




