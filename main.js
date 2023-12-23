
const introScreen = document.querySelector('.intro.screen');

const uploadButtons = introScreen.querySelectorAll('.upload.button');

const compareScreen = document.querySelector('.compare.screen');

const toggleButtons = compareScreen.querySelectorAll('.toggle.button');

const toggleText1 = toggleButtons[0].querySelector('.text'),
      toggleText2 = toggleButtons[1].querySelector('.text');



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
      
      showCompareScreen();
      
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


function showCompareScreen() {
  
  toggleText1.textContent = font1.name;
  toggleText2.textContent = font2.name;
  
  compareScreen.classList.add('visible');
  introScreen.classList.remove('visible');
  
}



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

