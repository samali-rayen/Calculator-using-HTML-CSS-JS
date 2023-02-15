let start=document.getElementById("on-off")
let del=document.getElementById("deleteButton")
let result
let isON=false
start.addEventListener("click",function() {
    if(isON===false){
        document.getElementById("result").value="00000000000000000000"
        isON=true
    setTimeout(function(){
        document.getElementById("result").value=""
    },100)
    }else{
        document.getElementById("result").value=""
        isON=false
    }
})//the setTimeout function is used to simulate turning on and off the calculator
del.addEventListener("click",function(){

})