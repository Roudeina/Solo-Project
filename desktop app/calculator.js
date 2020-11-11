
function display(val) { 
    document.getElementById("result").value+=val 
};

function solve() { 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
};
  
function clear(){ 
    console.log("clear")
    document.getElementById("result").value=""
   
};

function sqrRoot(){
    let x = document.getElementById("result").value 
    let p=eval(x)
    let y= Math.sqrt(p)
    document.getElementById("result").value = y 
};

function square (){
    let x = document.getElementById("result").value 
    let y= Math.pow(eval(x),2)
    document.getElementById("result").value = y 
};

function cube (){
    let x = document.getElementById("result").value 
    let y= Math.pow(eval(x),3)
    document.getElementById("result").value = y 
}
function power (){
    let  n = prompt("Power Of ?");
    let x = document.getElementById("result").value 
    let y= Math.pow(eval(x),n)
    document.getElementById("result").value = y 
}
function postUp(val){
    
document.getElementById("result2").value+=val ;
        
}

