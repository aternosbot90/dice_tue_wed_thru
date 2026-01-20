let main = document.getElementById('main')
let form = document.querySelector('form')
let input = document.querySelectorAll('input')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(input[0].value);
    // console.log(input[1].value);
    // console.log(input[2].value);
    
let container = document.createElement('div')
container.classList.add('container')

let icon = document.createElement('div')
icon.classList.add('icon')
let img = document.createElement('img')
img.setAttribute('src', `${input[0].value}`)
icon.appendChild(img);

let btn = document.createElement('button')
btn.textContent = 'X'
btn.style.color = "white"
btn.addEventListener("click", ()=>{
    container.remove()
})

container.appendChild(btn)

let h3 = document.createElement('h3')
h3.textContent = input[1].value

let p = document.createElement('p')
p.textContent = input[2].value

container.appendChild(icon)
container.appendChild(h3)
container.appendChild(p)

main.appendChild(container)

input.forEach((inp)=>{
   if(inp.type == 'text'){
    inp.value = ""
   } 
 })

})


