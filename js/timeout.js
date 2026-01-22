// let a = setTimeout(function(){
//         console.log("hello");
// },1000)

// clearTimeout(a);


// let count = 10;
// let b = setInterval(function(){
    //     if(count>=0){
//         console.log(count);
//         count--;
//     }
//     else{
    //         clearInterval(b);
    //         console.log("count is over");
    //     }
    // },500)
//     let btn = document.querySelector("#start")
//     let reset = document.querySelector("#reset")
//     let h1 = document.querySelector("h1")

// btn.addEventListener("click", function(){
//     let count = 10;

// let interval = setInterval(function(){
//     if(count>=0){
//         count--;
//         h1.textContent = count;
//         h1.style.color = "green"

//     }
//     if(count<=5){
//         h1.style.color = "yellow"
//     }
//     if(count == 0){
//         clearInterval(interval);
//         h1.textContent  = "time's up"
//         h1.style.color = "red";
//     }
// },500)
// })

// btn.addEventListener("click", function(){
   
//     count = 10;
//     h1.textContent = count;
//     h1.style.color = "green";
//     clearInterval(interval);
// })

let h1 = document.querySelector("h1")
let btn = document.querySelector("#start")
let btn2 = document.querySelector('#reset')


btn.addEventListener('click', ()=>{

let count = 10;
let Interval = setInterval(()=>{
    if(count>=0){
        count--;
        h1.textContent = count
        h1.style.color = "green"
    }

    if(count<=5){
        h1.style.color = "Blue"
    }

    if(count == 0){
        clearInterval(Interval)
        h1.textContent = "Khatam Tata Bye Bye"
        h1.style.color = "red" 
    }
},500)

btn2.addEventListener('click', function(){

    clearInterval(Interval)
    count = 10
    h1.textContent = count
    h1.style.color = "Green"
})
})