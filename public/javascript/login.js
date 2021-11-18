//function to handle the login submission
async function signupFormHandler(event) {
    event.preventDefault();
  
    // create variables for our selectors
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    //if those variables come back as true then post them as a new user with the value
    if (username && email && password) {
      //making it an await fetch to clean up the code
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      //check the response status
      if (response.ok) {
        //redirect user to this location if the response is true 
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  //function for login request
  async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  
  //event listener to attach to the html 
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
  document.queryCommandIndeterm('#google-form').addEventListener('submmit');
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);