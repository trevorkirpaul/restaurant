const inpName = document.getElementById('inpName');
const inpMessageTitle = document.getElementById('inpMessageTitle');
const inpMsg = document.getElementById('inpMsg');

const btnSubmitContact = document.getElementById('btnSubmitContactUs');
const btnSubmitAgain = document.getElementById('btnSubmitAnotherContact');

const formPane = document.getElementById('contactForm');
const formTitle = document.getElementById('titleForm');


console.log('yes, I know the form validation sucks.');

const inputs = [inpName, inpMessageTitle, inpMsg];


let validForm = false;

inputs.forEach((element) => {

  let originalVal;  

  element.addEventListener('click', (event) => {
    originalVal = event.target.value;
    event.target.value = '';
  })

  element.addEventListener('focusout', (event) => {
    if (event.target.value === '') {
      event.target.value = originalVal;
    }
  })

  element.addEventListener('change', (event) => {
    validForm = true;
  })

})




btnSubmitContact.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (validForm === true) {
    
    formPane.style.display = 'none';
    formTitle.innerText = 'Message Sent!';
    btnSubmitAgain.style.display = 'inline-block' 
  } else {
    inputs.forEach((element) => {

    })
  }

})



btnSubmitAgain.addEventListener('click', (event) => {
  formPane.style.display = 'block';
  event.target.style.display = 'none';

  inpName.value = 'Enter Your Name';
  inpMessageTitle.value = 'Message Title Goes Here';
  inpMsg.value = 'Enter Your Message';
})

