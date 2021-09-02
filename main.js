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


// Add event listener
btn.addEventListener("click", myFunction);
function myFunction(){
id+=1
  // Create Li
let li = document.createElement('li');
li.className = "myLi";

  // Get values
let table = document.getElementById('table').value;
var d = new Date().toLocaleTimeString();
     document.getElementById("date").value;

let priority = document.getElementById('priority').value;
let textArea = document.getElementById('textArea').value;


  // Create text
let text = document.createTextNode(table);
li.appendChild(text);
let text1 = document.createTextNode(d);
li.appendChild(text1);
let text2 = document.createTextNode(priority);
li.appendChild(text2);
let text3 = document.createTextNode(textArea);
li.appendChild(text3);


  // Clear Validation message
 document.getElementById('empty').innerHTML = '';

  
// Validation Empty inputs
if(table === ''){
  document.getElementById('empty').innerHTML = 'Table N° is required';
}
else if(priority === ''){
document.getElementById('empty').innerHTML = 'Priority is required';

}else if(textArea === ''){
document.getElementById('empty').innerHTML = 'Order is required';

}

// Push data and validate priority
else if(priority === 'Low'){
   
    document.getElementById('myUL').appendChild(li).style.backgroundColor = "green"; 
  document.getElementById('myUL').appendChild(li).innerHTML = `
    
<div class="table"> Table N°:  ${table} </div>
 <div class="time"> Start Time:  ${d} </div>
 <div class="priority"> Priority:  ${priority} </div>
 
 <div class="textArea"> ${textArea} </div>
 <button class="btnClose" data-id="${id}">Delete</button>
 <button class="doneBtnActive" data-id="${id}">Active</button>

    `
    $data.push({
      id,
      table,
      d,
      priority,
      textArea,
      status: 'Active'
    })
    localStorage.setItem("__orders", JSON.stringify($data))
     }
   else if(priority === 'Medium'){
    
   
    document.getElementById('myUL').appendChild(li).style.backgroundColor = "orange"; 
  document.getElementById('myUL').appendChild(li).innerHTML = `
    
 <div class="table"> Table N°:  ${table} </div>
 <div class="time"> Start Time:  ${d} </div>
 <div class="priority"> Priority:  ${priority} </div>
  <div class="order">Order: </div>
 <div class="textArea">  ${textArea} </div>
 <button class="btnClose" data-id="${id}">Delete</button>
 <button class="doneBtnActive" data-id="${id}">Active</button>
    `
  $data.push({
      id,
      table,
      d,
      priority,
      textArea,
      status: 'Active'
  })
  localStorage.setItem("__orders", JSON.stringify($data))
  }
  
  else if(priority === 'High'){
    
   
    document.getElementById('myUL').appendChild(li).style.backgroundColor = "red"; 
  document.getElementById('myUL').appendChild(li).innerHTML = `
    
 <div class="table"> Table N°:  ${table} </div>
 <div class="time"> Start Time:  ${d} </div>
 <div class="priority"> Priority:  ${priority} </div>
  <div class="order">Order: </div>
 <div class="textArea">  ${textArea} </div>
 <button class="btnClose" data-id="${id}">Delete</button>
 <button class="doneBtnActive" data-id="${id}">Active</button>
    `
  $data.push({
      id,
      table,
      d,
      priority,
      textArea,
      status: 'Active'
    })
  localStorage.setItem("__orders", JSON.stringify($data))
  }
  else {
    
  
  }
}
 
 // Get item from localstorage
 
let $data = localStorage.getItem("__orders")
let id = 0
if (!$data) $data = []
else {
  $data = JSON.parse($data)
  $data.forEach(function (rowData, idx) {
  if (!rowData) return
  id+=1
  console.log(rowData)
  let li = document.createElement('li');
  li.className = "myLi";

  // Get values from local storage and add html
  if(rowData.priority === 'Low'){
      document.getElementById('myUL').appendChild(li).style.backgroundColor = "green"; 
      document.getElementById('myUL').appendChild(li).innerHTML = `
        
     <div class="table"> Table N°:  ${rowData.table} </div>
      <div class="time"> Start Time:  ${rowData.d} </div>
      <div class="priority"> Priority:  ${rowData.priority} </div>
      <div class="order">Order: </div>
      <div class="textArea">   ${rowData.textArea} </div>
     <button class="btnClose" data-id="${id}">Delete</button>
     <button class="doneBtnActive" data-id="${id}" style="${rowData.status=='Closed'?'background:darkgrey':''}">${rowData.status}</button>
     
        `
    }
  else if(rowData.priority === 'Medium'){  
      document.getElementById('myUL').appendChild(li).style.backgroundColor = "orange"; 
      document.getElementById('myUL').appendChild(li).innerHTML = `
        
       <div class="table"> Table N°:  ${rowData.table} </div>
      <div class="time"> Start Time:  ${rowData.d} </div>
      <div class="priority"> Priority:  ${rowData.priority} </div>
       <div class="order">Order: </div>
      <div class="textArea">   ${rowData.textArea} </div>
     <button class="btnClose" data-id="${id}">Delete</button>
     <button class="doneBtnActive" data-id="${id}" style="${rowData.status=='Closed'?'background:darkgrey':''}">${rowData.status}</button>
     
        `
    }
  else if(rowData.priority === 'High'){
      document.getElementById('myUL').appendChild(li).style.backgroundColor = "red"; 
      document.getElementById('myUL').appendChild(li).innerHTML = `
        
       <div class="table"> Table N°:  ${rowData.table} </div>
      <div class="time"> Start Time:  ${rowData.d} </div>
      <div class="priority"> Priority:  ${rowData.priority} </div>
       <div class="order">Order: </div>
      <div class="textArea">  ${rowData.textArea} </div>
     <button class="btnClose" data-id="${id}">Delete</button>
     <button class="doneBtnActive" data-id="${id}" style="${rowData.status=='Closed'?'background:darkgrey':''}">${rowData.status}</button>
     
        `
    }
  })
}


// lookup by class

function hasClass( target, className ) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

 // Clear inputs
      
  const newIssue = { table, priority, textArea };

  


// setup click event listeners for dynamic buttons such as active and delete
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'btnClose')) {
      let myID = e.target.getAttribute('data-id')
      $data.forEach(function (rowData, idx) {
        if (!rowData) return;
        if (rowData.id == myID) delete $data[idx]
      })
      e.target.parentElement.style.display = "none"
      e.target.parentElement.remove()
      
    }
    if (hasClass(e.target, 'doneBtnActive')) {
      console.log(e.target)
      e.target.innerHTML = 'Closed';
      e.target.style.backgroundColor = "darkgrey";
      let myID = e.target.getAttribute('data-id')
      $data.forEach(function (rowData, idx) {
        if (!rowData) return;
        if (rowData.id == myID) $data[idx].status = 'Closed'
      })
    }
    
    localStorage.setItem("__orders", JSON.stringify($data))
}, false);

