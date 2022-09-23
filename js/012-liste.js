
let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi Olusturdugumuz oge"

ulDOM.append(liDOM)

ulDOM.prepend(liDOM)
