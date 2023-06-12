const usernames = JSON.parse(localStorage.getItem('usernames'));
const passwords = JSON.parse(localStorage.getItem('passwords'));
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  
  const usernameField = document.getElementById('username');
  const passwordField = document.getElementById('password');

  const username = usernameField.value.trim();
  const password = passwordField.value.trim();
  
  sessionStorage.setItem('username', 'beck');
  sessionStorage.setItem('password', 'beb');

  
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
    
  }
 }
  
loginForm.reset();
});
