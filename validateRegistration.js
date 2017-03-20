function validateUserName() {
	var newUserName = document.getElementById('registrationForm').userName.value;
	var minChars = 5;
	var regEx = "[A-Za-z0-9\-\_\ ]{5,}";
	if (newUserName.length < minChars || !regularExpression.test(newUserName)) {
		alert("User name must be at least 5 characters long and consist of only letters, numbers, underscores, dashes and spaces.");
		return false;}
	else {return true;}
}

function validateEmail() {
	var newUserEmail = document.getElementById('registrationForm').email.value;
	var regEx = "\b[A-Za-z0-9.]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b";
	if (!regularExpression.test(newUserEmail)) {
		alert(newUserEmail + " is not a valid email address.");
		return false;
	}
	else {return true;}
}