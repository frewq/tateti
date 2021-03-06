//TATETI

let turno = true;
let jugar = true;
let resetear = false;
let arr = [];
let oportunidades = 9;

document.querySelectorAll('.numero').forEach(i =>
  i.addEventListener('click', e => {
    tateti(e);
  })
);

function tateti(ev) {
  switch (turno) {
    case true:
      if (
        ev.target.innerHTML != 'X' &&
        ev.target.innerHTML != 'O' &&
        jugar == true
      ) {
        ev.target.innerHTML = 'X';
        turno = false;
        pintar(ev, 'X');
        unTurnomenos();
        preguntarSiGano(ev, 'X');
      }
      break;
    case false:
      if (
        ev.target.innerHTML != 'X' &&
        ev.target.innerHTML != 'O' &&
        jugar == true
      ) {
        ev.target.innerHTML = 'O';
        turno = true;
        pintar(ev, 'O');
        unTurnomenos();
        preguntarSiGano(ev, 'O');
      }
      break;
  }
}

function unTurnomenos() {
  oportunidades -= 1;
  if (oportunidades == 0) {
    oportunidades = 9;
    document.getElementById('resultado').innerHTML +=
      "<button id='reiniciar'>Reiniciar</button>";
    document
      .getElementById('reiniciar')
      .addEventListener('click', () => reiniciar());
  }
}

function preguntarSiGano(ev, XO) {
  arr[ev.target.attributes.valor.value] = XO;

  if (arr[0] == `${XO}` && arr[1] == `${XO}` && arr[2] == `${XO}`) gano(XO);
  if (arr[3] == `${XO}` && arr[4] == `${XO}` && arr[5] == `${XO}`) gano(XO);
  if (arr[6] == `${XO}` && arr[7] == `${XO}` && arr[8] == `${XO}`) gano(XO);
  if (arr[0] == `${XO}` && arr[3] == `${XO}` && arr[6] == `${XO}`) gano(XO);
  if (arr[1] == `${XO}` && arr[4] == `${XO}` && arr[7] == `${XO}`) gano(XO);
  if (arr[2] == `${XO}` && arr[5] == `${XO}` && arr[8] == `${XO}`) gano(XO);
  if (arr[0] == `${XO}` && arr[4] == `${XO}` && arr[8] == `${XO}`) gano(XO);
  if (arr[2] == `${XO}` && arr[4] == `${XO}` && arr[6] == `${XO}`) gano(XO);

  //comprueba si hay empate
}

function pintar(ev, color) {
  // ev.target.attributes.valor.value
  document
    .getElementById(ev.target.attributes.valor.value)
    .setAttribute('color', `${color}`);
}

function gano(XO) {
  jugar = false;
  oportunidades = 9;

  document.getElementById('resultado').innerHTML = `'${XO}' ¡Ha el ganado!`;
  document.getElementById('resultado').innerHTML +=
    "<button id='reiniciar'>Reiniciar</button>";
  document
    .getElementById('reiniciar')
    .addEventListener('click', () => reiniciar());
}

function reiniciar() {
  //arreglar i
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).innerHTML = '+';
    document.getElementById(i).setAttribute('color', '');
    arr[i] = '';
  }

  document.getElementById('resultado').innerHTML = '';
  jugar = true;
}
