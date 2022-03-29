let submitForm = document.getElementById("signUpForm");
submitForm.addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();
  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  let confirm = false;

  if (validateFirstName()) firstName = validateFirstName();
  if (validateLastName()) lastName = validateLastName();
  if (validateEmail()) email = validateEmail();
  if (validatePassword()) password = validatePassword();
  if (confirmPassword(password)) confirm = true;

  if (firstName != "" && lastName != "" && email != "" && password != "" && confirm) {
    alert("First Name: " + firstName + 
          "; Last Name: " + lastName +
          "; Email: " + email +
          "; Password: " + password);
  }
}

function validateFirstName() {
  let firstNameTag = document.getElementById("firstNameLabel");
  let pTag = document.createElement("p");

  let firstNameText = document.signUpForm.firstName.value;

  if (firstNameText == "") {
    document.signUpForm.firstName.focus();
    firstNameTag.appendChild(pTag);
    pTag.innerHTML = "First name cannot be empty";
    pTag.style.color = "red";

    return false
  } else if (firstNameText.includes(" ")) {
    document.signUpForm.firstName.focus();
    firstNameTag.appendChild(pTag);
    pTag.innerHTML = "No spaces allowed";
    pTag.style.color = "red";

    return false
  } else {
    return firstNameText;
  }
}

function validateLastName() {
  let lastNameTag = document.getElementById("lastNameLabel");
  let pTag = document.createElement("p");

  let lastNameText = document.signUpForm.lastName.value;

  if (lastNameText == "") {
    document.signUpForm.lastName.focus();
    lastNameTag.appendChild(pTag);
    pTag.innerHTML = "Last name cannot be empty";
    pTag.style.color = "red";

    return false;
  } else if (lastNameText.includes(" ")) {
    document.signUpForm.lastName.focus();
    lastNameTag.appendChild(pTag);
    pTag.innerHTML = "No spaces allowed";
    pTag.style.color = "red";
    
    return false
  } else {
    return lastNameText;
  }
}

function validateEmail() {
  let emailTag = document.getElementById("emailLabel");
  let pTag = document.createElement("p");

  let emailText = document.signUpForm.email.value;

  let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

  if (emailText == "") {
    document.signUpForm.email.focus();
    emailTag.appendChild(pTag);
    pTag.innerHTML = "Email cannot be empty";
    pTag.style.color = "red";

    return false;
  } else if (emailText.includes(" ")) {
    document.signUpForm.email.focus();
    emailTag.appendChild(pTag);
    pTag.innerHTML = "No spaces allowed";
    pTag.style.color = "red";
    
    return false
  } else if (!emailRegex.test(emailText)) {
    document.signUpForm.email.focus();
    emailTag.appendChild(pTag);
    pTag.innerHTML = "Not an email";
    pTag.style.color = "red";
    
    return false
  } else {
    return emailText;
  }
}

function validatePassword() {
  let passwordTag = document.getElementById("passwordLabel");
  let pTag = document.createElement("p");

  let passwordText = document.signUpForm.password.value;

  let passwordRegex = new RegExp("(?=.*?[a-zA-z])(?=.*?[0-9])");

  if (passwordText == "") {
    document.signUpForm.password.focus();
    passwordTag.appendChild(pTag);
    pTag.innerHTML = "Password cannot be empty";
    pTag.style.color = "red";

    return false;
  } else if (passwordText.includes(" ")) {
    document.signUpForm.password.focus();
    passwordTag.appendChild(pTag);
    pTag.innerHTML = "No spaces allowed";
    pTag.style.color = "red";
    
    return false;
  } else if (passwordText.length < 8 || passwordText.length > 20) {
    document.signUpForm.password.focus();
    passwordTag.appendChild(pTag);
    pTag.innerHTML = "Password must be between 8-20 characters";
    pTag.style.color = "red";
    
    return false;
  } else if (!passwordRegex.test(passwordText)) {
    document.signUpForm.password.focus();
    passwordTag.appendChild(pTag);
    pTag.innerHTML = "Password must contain a letter and a number";
    pTag.style.color = "red";

    return false;
  } else {
    return passwordText;
  }
}

function confirmPassword(password) {
  let confirmTag = document.getElementById("confirmPasswordLabel");
  let pTag = document.createElement("p");

  let confirmText = document.signUpForm.passwordConfirmation.value;

  if (confirmText !== password) {
    document.signUpForm.passwordConfirmation.focus();
    confirmTag.appendChild(pTag);
    pTag.innerHTML = "Doesn't match password";
    pTag.style.color = "red";

    return false;
  } else {
    return true;
  }
}