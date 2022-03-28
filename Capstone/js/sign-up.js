function validate() {
  let firstName;
  let lastName;
  let email;
  let password;
  let username;

  if (document.signUpForm.firstName === "") {
    alert("First name is blank.");
    document.signUpForm.firstName.focus();
    return false;
  } else {
    firstName = document.getElementById("firstName").value;
  }

  if (document.signUpForm.lastName === "") {
    alert("Last name is blank.");
    document.signUpForm.lastName.focus();
    return false;
  } else {
    lastName = document.getElementById("lastName").value;
  }

  if (document.signUpForm.email === "") {
    alert("Email is blank.");
    document.signUpForm.email.focus();
    return false;
  } else {
    email = document.getElementById("email").value;
  }

  if (document.signUpForm.password === "") {
    alert("Password is blank.");
    document.signUpForm.password.focus();
    return false;
  } else {
    password = document.getElementById("password").value;
  }

  if (document.signUpForm.username === "") {
    alert("Username is blank.");
    document.signUpForm.email.focus();
    return false;
  } else {
    username = document.getElementById("username").value;
  }

  console.log(firstName, lastName, email, password, username);
  return true;
}

let signUpForm = document.getElementById("signUpForm");
signUpForm.addEventListener("submit", validate());