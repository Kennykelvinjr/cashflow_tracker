document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  const phoneNumber = document.getElementById("phone-number").value;
  console.log("Phone number:", phoneNumber);
  alert(`Phone number submitted: ${phoneNumber}`);
});


document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  const phoneNumber = document.getElementById("phone-number").value;
  const password = document.getElementById("password").value;

  if (phoneNumber && password) {
    console.log("Phone number:", phoneNumber);
    console.log("Password:", password);
    alert(`Login successful for phone number: ${phoneNumber}`);
  } else {
    alert("Please fill in all required fields.");
  }
});
