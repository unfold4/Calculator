function sum(a,b){
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


  function operate(a,b,op){
    if(op==='+') return sum(a,b);
    if(op==='-') return subtract(a,b);
    if(op==='*') return multiply(a,b);
    if(op==='/') return divide(a,b);
    if(op==='^') return power(a,b);
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

let v="";

let mainDisplay=document.querySelector(".display .main");
let bufferDisplay=document.querySelector(".display .buffer");


// press '=' event listener 
document.querySelector(".equals").addEventListener("click",()=>{
  b=parseInt(v);
  bufferDisplay.innerText+=b+'=';
  mainDisplay.innerHTML=operate(a,b,op)


})


//pressed number on main display - event listeners 
  document.querySelector(".buttons .sec1 .bottom").addEventListener("click",(e)=>{

    if(e.target.classList.contains("num")) {
      v+=e.target.innerText;
      mainDisplay.innerText=v;


    }});



  //clear and delete event listeners 
  document.querySelector(".buttons .sec1 .top").addEventListener("click",(e)=>{
    if(e.target.classList.contains("clear")) clear();
    if(e.target.classList.contains("delete")) deletee();
  })



  // function event listener
  document.querySelector(".buttons .sec2").addEventListener("click",(e)=>{

   if(mainDisplay.innerText!=="")
    
    {
    if(a===undefined){
      op=e.target.innerText;
      bufferDisplay.innerText=v+op;
      a=parseInt(v);
      v=""
    }
    else{
      b=parseInt(v);
      a=operate(a,b,op);
      op=e.target.innerText;
      bufferDisplay.innerText=`${a}${op}`;
      mainDisplay.innerText=a;
      v="";
    }
  }
  })
  


  let a ;
  let b ;
  let op;

