
const introScreen = document.querySelector('.intro.screen');
const uploadButtons = introScreen.querySelectorAll('.upload.button');

uploadButtons.forEach(button => {
  
  button.addEventListener('click', () => {
    
    button.classList.toggle('selected');
    
  });
  
});

