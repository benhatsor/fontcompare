
const introScreen = document.querySelector('.intro.screen');
const uploadButtons = introScreen.querySelectorAll('.upload.button');

let font1, font2;

uploadButtons.forEach(button => {
  
  button.addEventListener('click', async () => {
    
    const font = await uploadFont();
    
    if (button.classList.contains('font1')) {
      
      font1 = font;
      
    } else if (button.classList.contains('font2')) {
      
      font2 = font;
      
    }
    
    button.classList.add('selected');
    
  });
  
});


// utils

function uploadFont() {
  
  let input = document.createElement('input');
  input.type = 'file';
  input.accept = 'font/*';
  
  return new Promise(resolve => {
    
    input.addEventListener('change', () => {
      
      if (this.files && this.files[0]) {
        
        const file = this.files[0];
        
        resolve(file);
        
      }
      
    });
    
  });
  
}

