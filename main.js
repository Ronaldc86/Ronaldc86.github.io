
const hamburger = document.querySelector(".hamburger");
  const ul = document.querySelector("ul");
  const btn = document.querySelector(".btn");
  const emptyVal = document.querySelector(".emptyVal");
  
// Add event listeners
 hamburger.addEventListener("click", mobileMenu);
 btn.addEventListener("click", mobileMenu);
 emptyVal.addEventListener("click", mobileMenu);

function mobileMenu() {

hamburger.classList.toggle("active");
ul.classList.toggle("active");
emptyVal.classList.toggle("active");

}

btn.addEventListener("click", myFunction);

let shopping = [];
function myFunction(){
  
  // Create Li
let li = document.createElement('li');
li.className = "myLi";

  // Get values
let title = document.getElementById('title').value;
let date = document.getElementById('date').value;
let priority = document.getElementById('priority').value;
let textArea = document.getElementById('textArea').value;


  // Create text
let text = document.createTextNode(title);
li.appendChild(text);
let text1 = document.createTextNode(date);
li.appendChild(text1);
let text2 = document.createTextNode(priority);
li.appendChild(text2);
let text3 = document.createTextNode(textArea);
li.appendChild(text3);


  // Clear Validation message
 document.getElementById('empty').innerHTML = '';

  
// Order validation
if(title === ''){
  document.getElementById('empty').innerHTML = 'Table N° is required';
}else if(date === ''){
document.getElementById('empty').innerHTML = 'Start time is required';
}else if(textArea === ''){
document.getElementById('empty').innerHTML = 'Order is required';

}else if(priority === ''){
document.getElementById('empty').innerHTML = 'Priority is required';
}
else if(priority === 'Low'){
   
    document.getElementById('myUL').appendChild(li).style.backgroundColor = "green"; 
  document.getElementById('myUL').appendChild(li).innerHTML = `
    
 Table N°:  ${title}<br/>
 Start Time: ${date}<br/>
 Prioridad: ${priority}<br/>
 Order: ${textArea}<br/>
    `
     }
   else if(priority === 'Medium'){
    
   
    document.getElementById('myUL').appendChild(li).style.backgroundColor = "orange"; 
  document.getElementById('myUL').appendChild(li).innerHTML = `
    
 Table N°: ${title}<br />
 Start Time: ${date}<br />
 Prioridad: ${priority}<br />
 Order: ${textArea}<br />
    `
  }
  
  else if(priority === 'High'){
    
   
    document.getElementById('myUL').appendChild(li).style.backgroundColor = "red"; 
  document.getElementById('myUL').appendChild(li).innerHTML = `
    
 Table N°: ${title}<br />
 Start Time: ${date}<br />
 Prioridad: ${priority}<br />
 Order: ${textArea}<br />
    `
  
  }
  else {
    
  
  }
 
   

   

  
  
 
  
  // Clear inputs
  
  

       // Create close button to append LI
 let closeBtn = document.getElementsByTagName('LI');
 let i;
 for (i = 0; i < closeBtn.length; i++) {
 let btn = document.createElement('button');
 let texto = document.createTextNode('Delete');
  btn.className = 'btnClose';
  btn.appendChild(texto);
  closeBtn[i].appendChild(btn);
  
  
      }
             // Create a done button to append LI
 let doneBtn = document.getElementsByTagName('LI');
 let index;
 for (index = 0; index < doneBtn.length; index++) {
 let btn1 = document.createElement('button');
 let texto1 = document.createTextNode('Active');
  btn1.className = 'doneBtnActive';
  btn1.appendChild(texto1);
  doneBtn[index].appendChild(btn1);
  
  
      }
      
      
 // Click on a close button to hide the current list item
 let close = document.getElementsByClassName("btnClose");
 for (i = 0; i < close.length; i++) 
 
 
 {
   
 close[i].onclick = function() {
  let div = this.parentElement;
  div.style.display = "none";
  
   }
  }
  // done//

let change = document.getElementsByClassName('doneBtnActive');
 for (index = 0; index < change.length; index++) 
 
 
 {
   
 change[index].onclick = function() {
  let div1 = this;
  div1.innerHTML = 'Closed';
  div1.style.backgroundColor = "darkgrey";
 
 
  // Store
 
  
  
   }
  }
  const newIssue = { title, date, priority, textArea };

  
}
  