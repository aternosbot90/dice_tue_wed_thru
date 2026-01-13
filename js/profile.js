let container = document.querySelector('.container')

let topp = document.createElement('div')
topp.classList.add('top')

let profileimg = document.createElement('img')
profileimg.classList.add('profile-img')
profileimg.setAttribute('src',"https://images.unsplash.com/photo-1766352811776-e7fbcdb1b350?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

let profileback = document.createElement('div')
profileback.classList.add('profile-back')

let bottom  = document.createElement('div')
bottom.classList.add('bottom')

let h1 = document.createElement('h1')
h1.textContent = "Frontend-Developer"

let h3 = document.createElement('h3')
h3.textContent = "Tech Job-Seeker"

let socialicons = document.createElement('div')
socialicons.classList.add('social-icons')

let img1 = document.createElement('img')
img1.classList.add('social-icon')
img1.setAttribute('src',"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png")

let img2 = document.createElement('img')
img2.classList.add('social-icon')
img2.setAttribute('src',"https://cdn-icons-png.flaticon.com/512/25/25231.png")

let img3 = document.createElement('img')
img3.classList.add('social-icon')
img3.setAttribute('src',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTF0LK36qQIxPG1A8AtO4e1O5BmQ01723kQ&s")


socialicons.appendChild(img1)
socialicons.appendChild(img2)
socialicons.appendChild(img3)

let button = document.createElement('button')
button.textContent = "Message"

bottom.appendChild(h1)
bottom.appendChild(h3)
bottom.appendChild(socialicons)
bottom.appendChild(button)

container.appendChild(topp)
container.appendChild(profileimg)
container.appendChild(profileback)
container.appendChild(bottom)
