function validateUserName(newUserName) {
	var minChars = 5;
	var regEx = "[A-Za-z0-9\-\_\ ]{5,}";
	if (newUserName.length < minChars || !regularExpression.test(newUserName)) {
		alert("User name must be at least 5 characters long and consist of only letters, numbers, underscores, dashes and spaces.");
		return false;
	}
	else {return true;}
}

function validateEmail(newUserEmail) {
	var regEx = "\b[A-Za-z0-9.]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b";
	if (!regularExpression.test(newUserEmail)) {
		alert(newUserEmail + " is not a valid email address.");
		return false;
	}
	else {return true;}
}

function validatePassword(newUserPassword) {
	var minChars = 4
	if (newUserPassword.length < minChars) {
		alert("Password must be at least " + minChars " characters.");
		return false;
	}
	else {return true;}
}

function validateRegistration() {
	alert("Validating registration");
	var newUserName = document.getElementById('newUsername').value;
	var newUserPassword = document.getElementById('newPassword').value;
	var newUserEmail = document.getElementById('newEmail').value;
	
	return validateUserName(newUserName) && validatePassword(newUserPassword) && validateRegistration(newUserRegistration);
}