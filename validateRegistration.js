function validateUserName(newUserName) {
	var minChars = 5;
	var regEx = /[A-Za-z0-9\-\_\ ]{5,}/;
	if (newUserName.length < minChars || !regEx.test(newUserName)) {
		alert("User name must be at least 5 characters long and consist of only letters, numbers, underscores, dashes and spaces.");
		return false;
	}
	else {return true;}
}

function validateEmail(newUserEmail) {
	var regEx = /[A-Za-z0-9.]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
	if (!regEx.test(newUserEmail)) {
		alert(newUserEmail + " is not a valid email address.");
		return false;
	}
	else {return true;}
}

function validatePassword(newUserPassword) {
	var minChars = 4
	if (newUserPassword.length < minChars) {
		var alertMsg = "Password must be at least " + minChars + " characters.";
		alert(alertMsg);
		return false;
	}
	else {return true;}
}

function validateRegistration() {
	
	var newUserName = document.getElementById('newUsername').value;
	var newUserPassword = document.getElementById('newPassword').value;
	var newUserEmail = document.getElementById('newEmail').value;
	
	return validateUserName(newUserName) && validatePassword(newUserPassword) && validateEmail(newUserEmail);
}
