//localStorage:- appke browser ke andar data store karna jo ki browser band hone ke baad bhi delete nahi hoga 5mb

//sessionStorage:- ye aapka temporary data hota ha jo ki session refresh hone par delete ho jata hai 5mb

//cookie:-ye bhi data store karta hai and aapka data browser ke cookies naam ki property me save hota hai and ye cookies concept kam data ya light data ke liye hota hai 4kb


//localStorage:-

//store kase kare - setItem
//data fetch kaise kare - getItem
//data ko update kaise - setItem
//data ko remove kase kare - removeItem
//data ko clear kaise kare - clear

// localStorage.setItem('name',"dice")
// localStorage.setItem('name', "uday")
// localStorage.setItem('age', "25")
// localStorage.setItem('city', "delhi")

// let nm = localStorage.getItem('name');
// console.log(nm);
// let ag = localStorage.getItem('age');
// console.log(ag);
// let ct = localStorage.getItem('city');
// console.log(ct);

// localStorage.removeItem('name')

// sessionStorage.setItem("name", "uday")

//cookie:-
// document.cookie = "email=kunal@gmail.com"
// document.cookie = "name=Kunal"
// document.cookie = "age=25"
// document.cookie = "city=delhi"

// localStorage.setItem("name", "uday")
// localStorage.clear()

localStorage.setItem('name',JSON.stringify({
    name: "uday",
    age: 25,
    city: "delhi"
}))
let name = JSON.parse(localStorage.getItem('name'))
console.log(name.delhi)

