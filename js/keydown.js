let h1 = document.querySelector("h1")

window.addEventListener('keydown', function(e){
    if(e.key == " "){
        console.log("Spacebar pressed");
        h1.textContent = "Spacebar pressed";
    }
    else{
        console.log(e.key);
        h1.textContent = e.key;
    }
})