document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");

  if (name === "" || email === "" || password === "") {
    message.innerHTML = "All fields are required!";
    message.className = "error";
    return;
  }

  if (!email.includes("@")) {
    message.innerHTML = "Enter a valid email!";
    message.className = "error";
    return;
  }

  if (password.length < 6) {
    message.innerHTML = "Password must be at least 6 characters!";
    message.className = "error";
    return;
  }

  message.innerHTML = "Form submitted successfully!";
  message.className = "success";
});