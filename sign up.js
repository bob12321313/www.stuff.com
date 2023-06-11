// Define empty arrays to store usernames and passwords
let usernames = [];
let passwords = [];
let names = [];

// Retrieve usernames and passwords from local storage if they exist
if (localStorage.getItem('usernames')) {
  usernames = JSON.parse(localStorage.getItem('usernames'));
}

if (localStorage.getItem('passwords')) {
  passwords = JSON.parse(localStorage.getItem('passwords'));
}

if (localStorage.getItem('names')) {
  names = JSON.parse(localStorage.getItem('names'));
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form submission
  
  const nameInput = document.getElementById('name');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  
  if (passwords.includes(usernameInput);) {
      alert('username/password already exists');
}
  if (usernames.includes(usernameInput)) {
      alert('username/password already exists');
}
  else {

  const name = nameInput.value;
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Add the username and password to the arrays
  names.push(name);
  usernames.push(username);
  passwords.push(password);

  
  // Save the updated arrays to local storage
  localStorage.setItem('names', JSON.stringify(names));
  localStorage.setItem('usernames', JSON.stringify(usernames));
  localStorage.setItem('passwords', JSON.stringify(passwords));
  alert('success');
  
  }
  
  // Clear the form inputs
  nameInput.value = '';
  usernameInput.value = '';
  passwordInput.value = '';

 
}


document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signupForm');
  signupForm.addEventListener('submit', handleFormSubmit);
});
   
