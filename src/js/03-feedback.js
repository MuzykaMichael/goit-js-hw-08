
const throttle = require('lodash.throttle');

const controls = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input'),
  messageTextarea: document.querySelector('textarea'),
};

const data = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};

controls.emailInput.value = data.email;
controls.messageTextarea.value = data.message;
controls.form.addEventListener('input', throttle(onFormInput, 500));
controls.form.addEventListener('submit', onBtnSbmt);

function onFormInput(e) {
  if (e.target.nodeName === 'INPUT') {
    data.email = e.target.value;
  }

  if (e.target.nodeName === 'TEXTAREA') {
    data.message = e.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onBtnSbmt(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert("Всі поля повинні бути заповнені!")
  }
  
  else {const userData = {
    email: email.value,
    message: message.value,
  };

  console.log(userData);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');}
}