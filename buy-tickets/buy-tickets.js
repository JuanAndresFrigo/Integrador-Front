function calculateResume() {
  // Obtengo cantidad de tickets
  const numberOfTickets = document.querySelector("#cantidadControl").value;
  // Obtengo categoria
  const category = document.querySelector("#categoriaControl").value;
  // Calculo monto total
  const totalAmount = 200 * numberOfTickets;
  // Calculo monto final con descuento
  const finalAmount = totalWhitDisscount(totalAmount, category);
  // Seteo valor a la alerta de monto
  setTotalValue(finalAmount);
}

function totalWhitDisscount(totalAmount, category) {
  let amountToReturn = totalAmount;
  switch (category) {
    case "Estudiante":
      return amountToReturn -= (totalAmount * 80) / 100;
    case "Trainee":
      return amountToReturn -= (totalAmount * 50) / 100;
    default:
      return amountToReturn -= (totalAmount * 15) / 100;
  }
}

function setTotalValue(totalAmount) {
  let defaulValue = "Total a pagar: $";
  totalAmount > 0 ? (defaulValue += totalAmount) : (defaulValue += 0);

  let pepe = document.querySelector("#totalAlert");
  pepe.innerHTML = defaulValue;
}

function deleteTickets() {
  document.querySelector("#cantidadControl").value = 0;
  setTotalValue(0);
}
