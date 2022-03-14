function checke() {
  const pix = document.getElementById("pix")
  const ticket = document.getElementById("ticket")
  const card = document.getElementById("card")

  const contentPix = document.getElementById("contentPix")
  const contentTicket = document.getElementById("contentTicket")
  const contentCard = document.getElementById("contentCard")

  if(pix.checked === true) {
    contentPix.classList.add("containerPayGreen");
    contentTicket.classList.remove("containerPayGreen");
    contentCard.classList.remove("containerPayGreen");
    console.log("pix");
  } if(ticket.checked === true) {
    contentTicket.classList.add("containerPayGreen");
    contentPix.classList.remove("containerPayGreen");
    contentCard.classList.remove("containerPayGreen");
    console.log("Boleto");
  } if(card.checked === true) {
    contentCard.classList.add("containerPayGreen");
    contentTicket.classList.remove("containerPayGreen");
    contentPix.classList.remove("containerPayGreen");
    console.log("card");
  }
}


function get() {
  let getValue = document.getElementById("value");
  let texto = getValue.value;

  return document.getElementById("p").innerHTML = parseFloat(texto)
}

window.onload = checke()