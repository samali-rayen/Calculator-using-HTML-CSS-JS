let start=document.getElementById("on-off")
let del=document.getElementById("deleteButton")
let result=document.getElementById("result")
let equation=""
let isON=false
start.addEventListener("click",function() {
    if(isON===false){
        result.value="00000000000000000000"
        isON=true
    setTimeout(function(){
        result.value=""
    },100)
    }else{
        result.value=""
        isON=false
    }
})//the setTimeout function is used to simulate turning on and off the calculator
del.addEventListener("click",function(){
    if(isON){
        result.value=""
        equation="" 
    }
   
})
function updateDisplay(value){
    if(isON){
        equation+=value
        result.value=equation   
    }
    
}
function equal(){
    if(isON){
        try{
        let answer=eval(equation);
        result.value=answer;
        equation="";
    }catch(error){
        alert('Invalid equation');
    }  
    }
}

// for the theme changement--------------------------------
let content=document.getElementsByTagName('body')[0];
let darkMode=document.getElementsById('dark-change');
darkMode.addEventListener('click',function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})