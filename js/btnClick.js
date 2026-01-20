let btn = document.getElementById('btn');
let hide = document.getElementById('hide');

btn.addEventListener('click', function(){
    hide.click();
});

hide.addEventListener("change", function(e){
    console.log(e.target.files[0].name);
    btn.textContent = e.target.files[0].name;
    btn.style.backgroundColor = "red";
    btn.style.boxShadow = "0 4px 8px rgb(243, 21, 9)";
})