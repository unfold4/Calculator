function add(a,b){
  return a+b;
}
function subtract(a,b){
  return a-b;
}
function multiply(a,b){
  return a*b;
}
function divide(a,b){
  return a/b;
}
function power(a,b){
  return a**b;
}


function clear(){
  v="";
  a=undefined;
  b=undefined;
  mainDisplay.innerText="";
  bufferDisplay.innerText="";
}

function deletee(){

}



let mainDisplay=document.querySelector(".display .main");
let bufferDisplay=document.querySelector(".display .buffer");


//pressed number on main display - event listeners 
  document.querySelector(".buttons .sec1 .bottom").addEventListener("click",(e)=>{

    let pressed;
    if(e.target.classList.contains("num")) {
      pressed = e.target.innerText;
      mainDisplay.innerText+=pressed;
    }});



  //clear and delete event listeners 
  document.querySelector(".buttons .sec1 .top").addEventListener("click",(e)=>{
    if(e.target.classList.contains("clear")) clear();
    if(e.target.classList.contains("delete")) deletee();
  })



  // function event listener
  document.querySelector(".buttons .sec2").addEventListener("click",(e)=>{

  let allPossibleOperators = "*/+-^";
  //if mainDisplay empty and last letter of buffer isnt an operator then press and print an operator
   if(mainDisplay.innerText!==""  && !allPossibleOperators.includes(bufferDisplay.innerText[bufferDisplay.innerText.length-1]))
    
    {

    if(e.target.tagName==="BUTTON") {
      if(e.target.classList.contains("add"))  {
        bufferDisplay.innerText=mainDisplay.innerText;
        bufferDisplay.innerText+="+";
        op='+'
      }
      if(e.target.classList.contains("subtract"))  {
        if(mainDisplay.innerHTML!=="")mainDisplay.innerText+="-"
        op='-';}
      if(e.target.classList.contains("multiply"))  {
        if(mainDisplay.innerHTML!=="")mainDisplay.innerText+="*"
        op='*';}
      if(e.target.classList.contains("divide") ) {
        if(mainDisplay.innerHTML!=="")mainDisplay.innerText+="/"
        op='/';}
      if(e.target.classList.contains("power")) {
        if(mainDisplay.innerHTML!=="")mainDisplay.innerText+="^"
        op='^';}

        a = mainDisplay.innerText;

    };

  }

  })
  

  let a ;
  let b ;
  let op;

function operate(){






}

operate();
