import throttle from 'lodash.throttle';
const formEl = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
// const formData = {};

populateTextArea();
formEl.addEventListener('submit', onFormSubmit);

formEl.addEventListener('input', throttle(onTextAreaInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(formEl);
  const elSubmit = {};
  formData.forEach((value, name) => (elSubmit[name] = value));
  console.log(elSubmit);
  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
  // console.log('Send feedback msg');
}
function onTextAreaInput(event) {
  let feedbackMessage = localStorage.getItem(STORAGE_KEY);
  if (feedbackMessage) {
    feedbackMessage = JSON.parse(feedbackMessage);
  } else {
    feedbackMessage = {};
  }
  feedbackMessage[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackMessage));
  // console.log(feedbackMessage);
}
function populateTextArea() {
  let savedMsg = localStorage.getItem(STORAGE_KEY);
  if (savedMsg) {
    savedMsg = JSON.parse(savedMsg);

    Object.entries(savedMsg).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}
