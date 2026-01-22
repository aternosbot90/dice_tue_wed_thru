let btn = document.querySelector("button")
let h2 = document.querySelector("h2")
let h1 = document.querySelector('h1')
let progressbar = document.querySelector('.progress-bar')



let count = 0;
let second = 10;
btn.addEventListener("click",function(){
    let donwload = setInterval(function(){
        if(count<=99){
        count++
        h2.textContent = `${count}%`
        progressbar.style.width = `${count}%`
    }
        else{
        btn.textContent = "Downloaded"
        btn.disabled = true;
        h1.textContent = "Task Completed"
        clearInterval(donwload)
    }
    },(second*1000)/100)

})