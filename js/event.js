// let form = document.querySelector('form')

// form.addEventListener('click', function(){
//     alert('clicked')
// })

// let a = document.querySelector('.a')
// let b = document.querySelector('.b')
// let c = document.querySelector('.c')
// let btn = document.querySelector('button')

// a.addEventListener("click", function(){
//     console.log("clciked on a");
    
// })

// b.addEventListener("click", function(){
//     console.log("clciked on b");
    
// })

// c.addEventListener("click", function(){
//     console.log("clciked on c");
    
// })

// btn.addEventListener("click", function(){
//     console.log("clciked on btn");
// })

//jispe event aayega agar uspar listner nahi hua to humhara event uske parent par listner dhundega aur aise karte karte upar ki taraf move karega


// let ul = document.querySelector('ul')

// ul.addEventListener('click', function(dets){
//     dets.target.classList.toggle("lt")
// })

let a = document.querySelector('.a')
let b = document.querySelector('.b')
let c = document.querySelector('.c')
let btn = document.querySelector('button')

a.addEventListener("click", function(){
    console.log("clciked on a");
    
},true)

b.addEventListener("click", function(){
    console.log("clciked on b");
    
},true)

c.addEventListener("click", function(){
    console.log("clciked on c");
    
},true)

btn.addEventListener("click", function(){
    console.log("clciked on btn");
})

//jab bhi aap click karte ho ya koi bhi event raise karte ho to aapka jo event flow do phases me chalta hai

//phase1: event top level element se neeche ki tarag jaaega
//phase2: event neeche se top level element tak jaaega
