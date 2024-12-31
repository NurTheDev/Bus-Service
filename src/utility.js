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
