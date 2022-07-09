const switchBtn = document.getElementById("switch");
const pricePkt = document.querySelectorAll("#price");
let click = true;

function priceYear() {
  for (let i = 0; i < pricePkt.length; i++) {
    pricePkt[0].innerHTML = "<sup>Rp.</sup>297.000<span>/bln</span>";
    pricePkt[1].innerHTML = "<sup>Rp.</sup>513.000<span>/bln</span>";
    pricePkt[2].innerHTML = "<sup>Rp.</sup>829.000<span>/bln</span>";
  }
}
function priceMonth() {
  for (let i = 0; i < pricePkt.length; i++) {
    pricePkt[0].innerHTML = "<sup>Rp.</sup>25.000<span>/bln</span>";
    pricePkt[1].innerHTML = "<sup>Rp.</sup>43.000<span>/bln</span>";
    pricePkt[2].innerHTML = "<sup>Rp.</sup>70.000<span>/bln</span>";
  }
}

switchBtn.addEventListener("click", () => {
  let toggle = document.getElementById("toggle");
  if (click == true) {
    toggle.style.left = "3px";
    toggle.style.right = "";
    priceYear();
    click = false;
  } else {
    toggle.style.left = "";
    toggle.style.right = "3px";
    priceMonth();
    click = true;
  }
});
