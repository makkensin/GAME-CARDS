
import './style.css';


const arrayCartas = [
  {
    id: 1,
    color: "red",
  },
  {
    id: 2,
    color: "orange",
  },
  {
    id: 3,
    color: "blue",
  },
  {
    id: 4,
    color: "pink",
  },
  {
    id: 5,
    color: "black",
  },
  {
    id: 6,
    color: "red",
  },
  {
    id: 7,
    color: "orange",
  },
  {
    id: 8,
    color: "blue",
  },
  {
    id: 9,
    color: "pink",
  },
  {
    id: 10,
    color: "black",
  }
];

let contador = 0;
let carta1;
let carta2;


const selecionar = (carta, datosCarta) => {
  if (contador < 2) {
    contador++;
    console.log(`carta seleccionada ${contador}`);
    carta.style.backgroundColor = datosCarta.color;
    carta.style.backgroundImage = "none";
  }

  if (contador === 1) {
     carta1 = datosCarta;
  }
  
  if (contador === 2) {
     carta2 = datosCarta;
  }
  console.log(carta1);
  console.log(carta2);
}

const divApp = document.querySelector("#app");

arrayCartas.forEach((carta) => {
  const divCarta = document.createElement("div");
  divCarta.className = "carta";
  divCarta.addEventListener("click", () => selecionar(divCarta, carta));
  divApp.appendChild(divCarta);
})


