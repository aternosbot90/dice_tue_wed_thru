let input = document.querySelector('input');
let span = document.querySelector('span');

input.addEventListener("input", function(){
    span.textContent = 20-input.value.length
    if(span.textContent < 20){
        span.style.color = "green"
    }
    if(span.textContent < 14){
        span.style.color = "orange"
    }
    if(span.textContent <= 0){
        span.style.color = "red"
    }
})

