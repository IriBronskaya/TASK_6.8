function myFunction(event) {
  let name = prompt('Представтесь пожалуйста, введите свои данные');  
  if(name){
    this.textContent = name
  }  
  event.preventDefault();
}

let el1 = document.getElementById("textname"); 
el1.addEventListener("click", myFunction);

let el2 = document.getElementById("textage"); 
el2.addEventListener("click", myFunction);
           
let el3 = document.getElementById("texthome"); 
el3.addEventListener("click", myFunction);
