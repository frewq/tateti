//TATETI

let turno = true;
let arr = [];

document.querySelectorAll(".numero").forEach(i => i.addEventListener("click", (e) => {
  tateti(e)
}));


function tateti(ev) {
  switch (turno) {
    case true:
      if (ev.target.innerHTML != "X" && ev.target.innerHTML != "O") {
        ev.target.innerHTML = "X";
        turno = false;
        pintar(ev, 'X');
        preguntarSiGano(ev, 'X');
      }
      break;
    case false:
      if (ev.target.innerHTML != "X" && ev.target.innerHTML != "O") {
        ev.target.innerHTML = "O";
        turno = true;
        pintar(ev, 'O');
        preguntarSiGano(ev, 'O');
      }
      break;
  }
};

function preguntarSiGano(ev, XO) {

  arr[ev.target.attributes.valor.value - 1] = XO;

  if (arr[0] == `${XO}` && (arr[1] == `${XO}`) && (arr[2] == `${XO}`)) gano(XO);
  if (arr[3] == `${XO}` && (arr[4] == `${XO}`) && (arr[5] == `${XO}`)) gano(XO);
  if (arr[6] == `${XO}` && (arr[7] == `${XO}`) && (arr[8] == `${XO}`)) gano(XO);
  if (arr[0] == `${XO}` && (arr[3] == `${XO}`) && (arr[6] == `${XO}`)) gano(XO);
  if (arr[1] == `${XO}` && (arr[4] == `${XO}`) && (arr[7] == `${XO}`)) gano(XO);
  if (arr[2] == `${XO}` && (arr[5] == `${XO}`) && (arr[8] == `${XO}`)) gano(XO);
  if (arr[0] == `${XO}` && (arr[4] == `${XO}`) && (arr[8] == `${XO}`)) gano(XO);
  if (arr[2] == `${XO}` && (arr[4] == `${XO}`) && (arr[6] == `${XO}`)) gano(XO);
}

function pintar(ev, color) {
  // ev.target.attributes.valor.value
  document.getElementById(ev.target.attributes.valor.value).setAttribute("color", `${color}`);
}

function gano(XO) {
  document.getElementById("resultado").innerHTML = `${XO} Es el ganador`;
}