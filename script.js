const cards = [
 {name:"Charizard ex", set:"Obsidian Flames", price:350000},
 {name:"Pikachu", set:"151", price:75000},
 {name:"Mewtwo", set:"Pokemon GO", price:120000}
]

const container = document.getElementById("cards")

cards.forEach(card=>{
 const div = document.createElement("div")
 div.innerHTML = `
 <h2>${card.name}</h2>
 <p>Set: ${card.set}</p>
 <p>Price: Rp${card.price}</p>
 `
 container.appendChild(div)
})
document.getElementById("search").addEventListener("input",function(){

const value = this.value.toLowerCase()

container.innerHTML=""

cards
.filter(card=>card.name.toLowerCase().includes(value))
.forEach(card=>{

 const div = document.createElement("div")

 div.innerHTML=`
 <h2>${card.name}</h2>
 <p>Set: ${card.set}</p>
 <p>Price: Rp${card.price}</p>
 `

 container.appendChild(div)

})

})
