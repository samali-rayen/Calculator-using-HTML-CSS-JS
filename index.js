let start=document.getElementById("on-off")
let screen=document.getElementById("screen-el")
let button=document.getElementById("num-el")
let total=0
let tableOperation=[]
let isOpen=false
start.addEventListener("click",function(){
    if(isOpen===false){
        screen.innerHTML=`<p class='zeros'>0000000000000000000</p>`
    isOpen=true
    setTimeout(function() {
        screen.innerHTML="";
    }, 1000);
    }else{
        isOpen=false
        screen.innerHTML=""
        tableOperation=[]
    }
    
    
})
function addNum9() {
    if(isOpen){tableOperation.push(9)
    console.log(tableOperation)
    renderscreen()}
    
}
function addNum8() {
    if(isOpen){tableOperation.push(8)
    console.log(tableOperation)
    renderscreen()}
    
}
function addNum7() {
    if(isOpen){ tableOperation.push(7)
    console.log(tableOperation)
    renderscreen()}
   
}
function addNum6() {
    if(isOpen){tableOperation.push(6)
    console.log(tableOperation)
    renderscreen()}
    
}
function addNum5() {
    if(isOpen){tableOperation.push(5)
    console.log(tableOperation)
    renderscreen()}
    
}
function addNum4() {
    if(isOpen){tableOperation.push(4)
    console.log(tableOperation)
    renderscreen()}
    
}
function addNum3() {
    if(isOpen){tableOperation.push(3)
    console.log(tableOperation)
    renderscreen()}
    
}
function addNum2() {
    if(isOpen){tableOperation.push(2)
    console.log(tableOperation)
    renderscreen()}
    
}
function addNum1() {
    if(isOpen){tableOperation.push(1)
    console.log(tableOperation)
    renderscreen()}
    
}
function addNum0() {
    if(isOpen){tableOperation.push(0)
    console.log(tableOperation)
    renderscreen()}
    
}
function renderscreen(){
    screen.innerHTML=""
    for(let i=0;i<tableOperation.length;i++){
        screen.innerHTML+=`<span>${tableOperation[i]}</span>`
    }
}
function plus(){
    if(isOpen){
        tableOperation.push('+')
        renderscreen()
        }
    }
function equal(){
    if(isOpen){
        total=tableOperation[0]
        for(let i=1;i<tableOperation.length;i++){
            if(tableOperation[i]==="+" && i<tableOperation.length-1){
                total+=tableOperation[i+1]
            }else{
                total+=tableOperation[i]
            }
        }
    console.log(total)
    screen.innerHTML=total
    }
}

