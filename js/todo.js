let inp = document.querySelector('.inp')
let btn = document.querySelector('.btn')
let list = document.querySelector('.list')


btn.addEventListener('click', function(){
      let li = document.createElement("li");
      li.textContent = inp.value;

      let del = document.createElement("button")
      del.textContent = "X";
      del.classList.add('del')
      del.addEventListener("click", function(){
          li.remove()
      })
      li.appendChild(del)
      list.appendChild(li)

      inp.value = ""
})

