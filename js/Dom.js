//dom manipulation
//html se element select karna
//text badalna
//attribute badalna
//class add karna
//style badalna
//event listener add karna


// let h1 = document.querySelector('h1')
// h1.textContent = 'hello world'
// h1.innerHTML = "hey"
// h1.innerText = "bye world"

// let h2 = document.getElementById("heading")
// h2.textContent = 'hello world'

// let div = document.querySelector('.box')
// div.innerHTML = "<p>hello world</p>"

// console.log(div);

// let img = document.querySelector('img')
// // img.src = "https://images.unsplash.com/photo-1767520832109-aee2a0d72f49?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// img.setAttribute('src',"https://images.unsplash.com/photo-1767520832109-aee2a0d72f49?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
// console.log(img.getAttribute('src'));
// img.removeAttribute('height')

// const user = {
//     name: "New York",
//     country: "USA",
//      loc:{
//           latitude: 40.7128,
//     longitude: -74.0060
//      }
// }

// console.log(user?.loc?.latitude);

//dynamic dom

// let h1 = document.createElement('h1')
// h1.textContent = "hello world"
// let p = document.createElement('p')
// p.textContent = "this is a paragraph"
// let div = document.querySelector("#container")
// div.append(h1)
// div.prepend(p)

// style and classlist(add remove toggle)


// let h1 = document.createElement('h1')
// h1.textContent = "hello world"
// h1.style.color = 'red'
// h1.style.fontSize = '45px'
// h1.style.backgroundColor = 'yellow'
// h1.style.padding = '10px'
// h1.style.border = '1px solid black'
// h1.style.borderRadius = '10px'
// h1.style.boxShadow = '0 0 10px black'
// let div = document.querySelector("#container")

// for(let i = 0; i<5; i++){
//      let h1 = document.createElement('h1')
//      h1.textContent = "hello world"
//      h1.style.color = 'red'
//      h1.style.fontSize = '45px'
//      h1.style.backgroundColor = 'yellow'
//      h1.style.padding = '10px'
//      h1.style.border = '1px solid black'
//      h1.style.borderRadius = '10px'
//      h1.style.boxShadow = '0 0 10px black'
//      div.append(h1)
// }

// let h1 = document.querySelector('h1')
// h1.classList.add('head')
// h1.classList.remove('head')
// h1.classList.toggle('head')


// let btn = document.querySelectorAll('.btn')
// console.log(btn.forEach(function(val){
//      console.log(val.textContent);
//      val.addEventListener('click', function(e){
//           console.log(e);
//      })
// }));

// let li = document.querySelectorAll('li')
// console.log(li);
// for(let i=0; i<li.length; i++){
//      console.log(li[i].textContent);
// }

//events and event handling

//browser mein page par koi bhu harkat karo event raise ho jaayega
//kuch screen par ho aur apko reaction dena hi to us waqt aapko event handle karna aana chahiye
//event matlab koi action hua
//event listener ka matlab hai apne koi action ka reaction dena

let btn = document.querySelectorAll('.btn')
let click = document.querySelector('#click')
let submit = document.querySelector('#submit')
let save = document.querySelector('#save')
let login = document.querySelector('#login')

btn.forEach(function(val){
     val.addEventListener('click', function(e){
         if(e.target.textContent == "Click"){
          click.classList.toggle('click')
         }
         if(e.target.textContent == "submit"){
          submit.classList.toggle('submit')
         }
         if(e.target.textContent == "Save"){
          save.classList.toggle('save')
         }
         if(e.target.textContent == "Login"){
          login.classList.toggle('login')
         }
     })
})