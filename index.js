const btnSubmit = document.querySelector('button');
const userNameInputField = document.querySelector('#username');
const userAgeInputField = document.querySelector('#age');
const loginMessage = document.querySelector('.login-message');


btnSubmit.addEventListener('click', () =>{
  const name = userNameInputField.value
  const age = userAgeInputField.value

  if (name === "harry") {
    nameresult = true
  }
    else (nameresult = false)
    
  
  if (age === "11") {
    ageresult = true
  }
    else (ageresult = false)
  
   
  let result; 
  
  if (nameresult === true && ageresult === true) {
    loginMessage.textContent = "Whalecum, garry"
  }
  else if (nameresult === true && ageresult === false) {
    loginMessage.textContent = "Wraung age, garry"
  }
  else if (nameresult === false && ageresult === true){
    loginMessage.textContent = "Wraung name, 11yrs boy"
  }
  else { 
    loginMessage.textContent = "oi matey, should u be here"
  }
  


});








