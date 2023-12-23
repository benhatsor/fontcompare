
const introScreen = document.querySelector('.intro.screen');
const uploadButtons = introScreen.querySelectorAll('.upload.button');
const compareButton = introScreen.querySelector('.compare.button');

let font1, font2;

uploadButtons.forEach(button => {
  
  const textEl = button.querySelector('.text');
  
  button.addEventListener('click', async () => {
    
    const font = await uploadFont();
    
    textEl.textContent = font.name;
    
    if (button.classList.contains('font1')) {
      
      font1 = font;
      
    } else if (button.classList.contains('font2')) {
      
      font2 = font;
      
    }
    
    
    button.classList.add('selected');
    
    if (bothButtonsSelected()) {
      
      compareButton.classList.remove('disabled');
      
    }
    
  });
  
  function bothButtonsSelected() {
    
    let resp = true;
    
    uploadButtons.forEach(button => {
      
      if (!button.classList.contains('selected')) {
        resp = false;
      }
      
    });
    
    return resp;
    
  }
  
});


// utils

function uploadFont() {
  
  let input = document.createElement('input');
  input.type = 'file';
  input.accept = 'font/*';
  
  return new Promise(resolve => {
    
    input.addEventListener('change', () => {
            
      if (input.files && input.files[0]) {
        
        const file = input.files[0];
        
        resolve(file);
        
      }
      
    });
    
    input.click();
    
  });
  
}

