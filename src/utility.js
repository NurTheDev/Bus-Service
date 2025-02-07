const Selected = document.getElementById("selected");
const available = document.getElementById("available");
const seatFinal = document.querySelector("#seatFinal");
const addedSeat = document.querySelector("#addedSeat");
const totalPrice = document.querySelector("#price");

let getseatLeft = () => {
  let hi = seatLeft.innerText - 1;
  seatLeft.innerText = hi;
};

let getseatColor = (seat) => {
  if (seat.classList.contains("bg-accentColor")) {
    seat.classList.remove("bg-accentColor");
    seat.classList.add("bg-primaryColor");
  } else if (seat.classList.contains("bg-primaryColor")) {
    seat.classList.remove("bg-primaryColor");
    seat.classList.add("bg-accentColor");
  }
};

let getSeatSelected = (seat) => {
  const seatSelected = parseInt(Selected.innerText);
  const availableSeat = parseInt(available.innerText);
  const setSeat = parseInt(seatFinal.innerText);

  if (seat.classList.contains("bg-accentColor")) {
    Selected.innerText = seatSelected - 1;
    available.innerText = availableSeat + 1;
    seatFinal.innerText = setSeat - 1;

    // Find and remove the corresponding priceDiv
    const priceDivToRemove = document.querySelector(
      `#addedSeat .priceDiv[data-seat="${seat.innerText}"]`
    );
    if (priceDivToRemove) {
      addedSeat.removeChild(priceDivToRemove);
    }

    getPrice(setSeat - 1);
  } else if (seat.classList.contains("bg-primaryColor")) {
    Selected.innerText = seatSelected + 1;
    available.innerText = availableSeat - 1;
    seatFinal.innerText = setSeat + 1;

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("priceDiv");
    priceDiv.setAttribute("data-seat", seat.innerText); // Add data attribute to identify the seat

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = seat.innerText;
    p2.innerText = "Economy";
    p3.innerText = "550";
    priceDiv.appendChild(p1);
    priceDiv.appendChild(p2);
    priceDiv.appendChild(p3);
    priceDiv.classList.add("addedSeat");

    addedSeat.appendChild(priceDiv);
    getPrice(setSeat + 1);
  }
};

const getPrice = (price) => {
  const setPrice = price * 550;
  totalPrice.innerText = setPrice;
};
