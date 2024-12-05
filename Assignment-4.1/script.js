function swapTheme() {
    const currDiv=document.getElementById('app');
    const currBtn=document.getElementById('swap');
    currDiv.classList.toggle('night');
    currBtn.classList.toggle('button_night');
   
   }