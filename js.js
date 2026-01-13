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
  mainDisplay.innerText="";
  bufferDisplay.innerText="";
}

function deletee(){

}


let v="";

//'=' event listener
document.querySelector(".equals").addEventListener("click",()=>{
  bufferDisplay.innerText+=v;
  bufferDisplay.innerText+='=';
  let res=add(a,b);
  mainDisplay.innerText=res;


});

let mainDisplay=document.querySelector(".display .main");
let bufferDisplay=document.querySelector(".display .buffer");

//pressed number on main display - event listeners 
  document.querySelector(".buttons .sec1 .bottom").addEventListener("click",(e)=>{
    if(e.target.classList.contains("num")) {
      v += e.target.innerText;
      mainDisplay.innerText+=v;
      if(a===undefined)a=parseInt(v);
      else b=parseInt(v);
    }});

  //clear and delete event listeners 
  document.querySelector(".buttons .sec1 .top").addEventListener("click",(e)=>{
    if(e.target.classList.contains("clear")) clear();
    if(e.target.classList.contains("delete")) deletee();
  })

  // function event listener
  document.querySelector(".buttons .sec2").addEventListener("click",(e)=>{
    v="";
    if(e.target.tagName==="BUTTON") {
      if(e.target.classList.contains("add"))  {
   

        bufferDisplay.innerText=mainDisplay.innerText;
        if(mainDisplay.innerHTML!=="")bufferDisplay.innerText+="+";
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
  })
  

  let a ;
  let b ;
  let op;

function operate(){






}

operate();