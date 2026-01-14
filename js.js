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
  if(b===0) return "Cannot divide by zero";
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
  lastEnteredNum=undefined;
  mainDisplay.innerText="";
  bufferDisplay.innerText="";
  selectOperator=false;
}

function deletee(){

}

let v="";
let lastEnteredNum;
selectOperator=false;

let mainDisplay=document.querySelector(".display .main");
let bufferDisplay=document.querySelector(".display .buffer");











// trying to add keyboard clicks 
// document.addEventListener("keydown",(e)=>{
//   let numbers="1234567890";
//   let operators="/+-^*";

//   if(numbers.includes(e.key)){
//     document.querySelector(e.key).click();


//   }
// })


// press '=' event listener 
document.querySelector(".equals").addEventListener("click",()=>{

  b=parseInt(lastEnteredNum);
  bufferDisplay.innerText+=b+'=';
  mainDisplay.innerHTML=operate(a,b,op);

})


//pressed number on main display - event listeners 
  document.querySelector(".buttons .sec1 .bottom").addEventListener("click",(e)=>{

    if(e.target.classList.contains("num")) {
      v+=e.target.innerText;
      lastEnteredNum=v;
      mainDisplay.innerText=v;
      selectOperator=true;


    }});



  //clear and delete event listeners 
  document.querySelector(".buttons .sec1 .top").addEventListener("click",(e)=>{
    if(e.target.classList.contains("clear")) clear();
    if(e.target.classList.contains("delete")) deletee();
  })



  // function event listener
  document.querySelector(".buttons .sec2").addEventListener("click",(e)=>{
  if(e.target.innerText!==op && !selectOperator) {op=e.target.innerText;
    let x=bufferDisplay.innerText;
    bufferDisplay.innerText=x.slice(0,x.length-1)+op;

  }

   if(selectOperator){
    if(a===undefined){
      op=e.target.innerText;
      bufferDisplay.innerText=v+op;
      a=parseInt(lastEnteredNum);
      v="";
    }
    else{
      b=parseInt(lastEnteredNum);
      a=operate(a,b,op);
      op=e.target.innerText;
      bufferDisplay.innerText=`${a}${op}`;
      mainDisplay.innerText=a;
      v="";
    }
  }
  selectOperator=false;
  })
  


  let a ;
  let b ;
  let op;



  //currently trying to do operator multiple clicks and failing!

  //exceptions to deal with :
  // - equal after equal
  // - 2= , 2+ = etc
  // - make delete button functional 
  // - make keyboard to press
  // - make decimal button functional;
