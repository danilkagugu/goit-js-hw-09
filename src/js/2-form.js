const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaInput);

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
}

function onTextareaInput(e) {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    const parsedSavedMessage = JSON.parse(savedMessage);
    form.elements.email.value = parsedSavedMessage.email;
    form.elements.message.value = parsedSavedMessage.message;
  }
}
