const arrayEvents = data.events;
const arrayDate = []
for (let events of arrayEvents) {
  if (events.date < "2023-01-01") {
    arrayDate.push(events)

    console.log();
  }
}

console.log(arrayDate);

const contenedor = document.getElementById("contenedorCards")

for (let events of arrayDate) {
  const card = document.createElement("div")
  card.classList.add("card")
  card.style.width = "18rem"
  card.innerHTML = `<img src="${events.image}" class="card-img-top" alt="cards">
<div class="card-body " >
  <h5 class="card-title">${events.name}</h5>
  <p class="cartext" >"${events.description}."
  </p>
  <p> ${events.price}</p>
  <a href="Details.html" class="btn btn-primary">Details</a>
</div>`
  contenedor.appendChild(card)

}