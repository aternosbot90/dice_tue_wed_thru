let select = document.querySelector('select')
let span = document.querySelector('span')
let h1 = document.querySelector('h1')

select.addEventListener('change', function(e){
    if(e.target.value !== ""){
        console.log(e.target.value)
        span.textContent =  e.target.value
    }
    
})
