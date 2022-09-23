/*
let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi Olusturdugumuz oge"

ulDOM.append(liDOM)

ulDOM.prepend(liDOM)
*/

let Quidem = document.querySelector("#Quidem")
Quidem.classList.add("text-primary")
console.log(Quidem.classList)
Quidem.classList.add("title")
Quidem.classList.add("new info", "second class")
