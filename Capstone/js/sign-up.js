let submitForm = document.getElementById("signUpForm");
submitForm.addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();
  let firstName = validateFirstName();
  let lastName = validateLastName();
  let email = validateEmail();
  // let password = "";
  // let confirm = false;

  if (firstName && lastName && email) {
    alert("First Name: " + firstName + 
          "\nLast Name: " + lastName +
          "\nEmail: " + email 
    );
  }
}

function validateFirstName() {
  let firstNameTag = document.getElementById("firstNameLabel");
  let pTag = document.createElement("p");
  let firstNameText = document.signUpForm.firstName.value;

  firstNameTag.appendChild(pTag);
  pTag.style.color = "red";

  if (firstNameText == "") {
    pTag.innerHTML = "First name cannot be empty";
    return false;

  } else if (firstNameText.includes(" ")) {
    pTag.innerHTML = "No spaces allowed";
    return false;

  } else {
    return firstNameText;
  }
}

function validateLastName() {
  let lastNameTag = document.getElementById("lastNameLabel");
  let pTag = document.createElement("p");
  let lastNameText = document.signUpForm.lastName.value;

  lastNameTag.appendChild(pTag);
  pTag.style.color = "red";

  if (lastNameText == "") {
    pTag.innerHTML = "Last name cannot be empty";
    return false;

  } else if (lastNameText.includes(" ")) {
    pTag.innerHTML = "No spaces allowed";
    return false;

  } else {
    return lastNameText;
  }
}

function validateEmail() {
  let emailTag = document.getElementById("emailLabel");
  let pTag = document.createElement("p");
  let emailText = document.signUpForm.email.value;
  let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');

  emailTag.appendChild(pTag);
  pTag.style.color = "red";

  if (emailText == "") {
    pTag.innerHTML = "Email cannot be empty";
    return false;

  } else if (emailText.includes(" ")) {
    pTag.innerHTML = "No spaces allowed";
    return false

  } else if (!emailRegex.test(emailText)) {
    pTag.innerHTML = "Not an email";
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