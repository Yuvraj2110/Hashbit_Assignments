//Write your code here
function createDiv(width, height, text) {
	let newDiv=document.createElement('div');
  newDiv.innerText=text;
  newDiv.style.width=`${width}px`;
  newDiv.style.height=`${height}px`;
  const parent=document.getElementById('container');
  parent.append(newDiv);
    
}
createDiv(200, 100, 'Sample div');


// Do not change this code
Window.createDiv = createDiv;