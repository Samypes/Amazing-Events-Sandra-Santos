const arrayEvents = data.events
const contenedor = document.getElementById("contenedorCards")

for (let events  of arrayEvents) {
  const card = document.createElement("div")
card.classList.add("card")
card.style.width = "18rem"
card.innerHTML =`<img src="${events.image}" class="card-img-top" alt="cards">
<div class="card-body bg-blue" >
  <h5 class="card-title">${events.name}</h5>
  <p class="cartext" >"${events.description}."
  </p>
  <p> ${events.price}</p>
  <a href="Details.html" class="btn btn-primary">Details</a>
</div>`
contenedor.appendChild(card)

}

