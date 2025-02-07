const new15 = document.getElementById("new15");
const couple20 = document.getElementById("couple20");
const seat = document.querySelectorAll(".seat");
let seatLeft = document.getElementById("seatLeft");
new15.addEventListener("click", () => {
  navigator.clipboard
    .writeText(new15.innerText)
    .then(() => {
      alert(`copied  ${new15.innerText}`);
    })
    .catch(() => {
      alert(`Faild to copy ${new15.innerText}`);
    });
});
couple20.addEventListener("click", () => {
  navigator.clipboard
    .writeText(couple20.innerText)
    .then(() => {
      alert(`copied  ${couple20.innerText}`);
    })
    .catch(() => {
      alert(`Faild to copy ${couple20.innerText}`);
    });
});
seat.forEach((seat) => {
  seat.addEventListener("click", () => {
    getseatLeft();
    getseatColor(seat);
    getSeatSelected(seat);
  });
});
