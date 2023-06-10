// Define empty arrays to store usernames and passwords
let usernames = [];
let passwords = [];

// Retrieve usernames and passwords from local storage if they exist
if (localStorage.getItem('usernames')) {
  usernames = JSON.parse(localStorage.getItem('usernames'));
}

if (localStorage.getItem('passwords')) {
  passwords = JSON.parse(localStorage.getItem('passwords'));
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Get the entered username and password values
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Add the username and password to the arrays
  usernames.push(username);
  passwords.push(password);

  
  // Save the updated arrays to local storage
  localStorage.setItem('usernames', JSON.stringify(usernames));
  localStorage.setItem('passwords', JSON.stringify(passwords));
  alert('success');
  

  
  // Clear the form inputs
  usernameInput.value = '';
  passwordInput.value = '';

 
}

// Add an event listener to the f
document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signupForm');
  signupForm.addEventListener('submit', handleFormSubmit);
});
   
