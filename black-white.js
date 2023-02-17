const change=document.getElementById("switch");
const bod=document.querySelector("body");
change.addEventListener('click',function(){
    this.classList.change='bi bi-moon'
    if( this.classList.change='bi bi-brightness-low'){
        bod.style.background='linear-gradient(#544a7d,#ffd452)'
        bod.style.transition='2s'
    }else{
        bod.style.background='radial-gradient(circle, rgba(105,61,16,1) 0%, rgba(26,27,23,1) 100%)'
        bod.style.transition='2s';
    }
})
