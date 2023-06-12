export const username1 = document.getElementById('username');
export const password1 = document.getElementById('password');

const usernames = JSON.parse(localStorage.getItem('usernames'));
const passwords = JSON.parse(localStorage.getItem('passwords'));
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  
  const usernameField = document.getElementById('username');
  const passwordField = document.getElementById('password');

  const username = usernameField.value.trim();
  const password = passwordField.value.trim();
  
  export var username1 = username;
  export var password1 = password;

  
  if (username === '' || password === '') {
  
    const error = document.getElementById('error-message');
    error.textContent = 'Please enter a username and password.';
    return;
  }
  

if (usernames.includes(username)) {
  const check = usernames.indexOf(username);
  const cd_password = passwords.slice(check, check + 1);
  if (cd_password.includes(password)) {
  
  document.getElementById('link').style.display='block';
  alert(`Login successful ${username}!`);
  if (username === 'beck' && password === 'beb') {
        document.getElementById('admin').style.display='block';
     }
    
  }
 }
  
loginForm.reset();
});
