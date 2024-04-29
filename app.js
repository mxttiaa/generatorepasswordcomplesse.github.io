const schermo = document.getElementById("dysplayPassword");
const numeroCaratteri = document.getElementById("numeroCaratteri");
const minuscoli = document.getElementById("minuscoli");
const maiuscoli = document.getElementById("maiuscoli");
const numerici = document.getElementById("numeri");
const speciali = document.getElementById("speciali");

const pulsanteGenera = document.getElementById("generaPassword");

const pulsanteCopia = document.getElementById("tastoCopia");



const listaMin = "abcdefghijklmnopqrstuvwxyz";
const listaMaiu = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const listaNum = "0123456789";
const listaSpec = "\\|!£$%&/()=?^+*°§[]{}#;,.:/'";

const DivMin = document.getElementById("div2");
const DivMaiu = document.getElementById("div3");
const DivNum = document.getElementById("div4");
const DivSpec = document.getElementById("div5");


const SpuntaMin = document.getElementById("spunta2");
const SpuntaMaiu = document.getElementById("spunta3");
const SpuntaNum = document.getElementById("spunta4");
const SpuntaSpec = document.getElementById("spunta5");



DivMin.addEventListener("click", ()=>{
    if(minuscoli.checked === false){
        minuscoli.checked = true;
        SpuntaMin.className = "spunta";
    }else {
        minuscoli.checked = false;
        SpuntaMin.classList.remove("spunta");
    }
    generaPassword();
})

pulsanteGenera.addEventListener("click", generaPassword);

function generaPassword(){
    if (numeroCaratteri.value<4) numeroCaratteri.value = 4;
    if (numeroCaratteri.value>20) numeroCaratteri.value = 20;
   let primaStringa = "";
   let password = "";
   if(minuscoli.checked) primaStringa += listaMin;
   if (maiuscoli.checked) primaStringa += listaMaiu
   if (numerici.checked) primaStringa += listaNum;
   if (speciali.checked) primaStringa += listaSpec;
   for(let i = 0; i<numeroCaratteri.value; i++ ){
    password +=primaStringa.charAt(
        Math.floor(Math.random()* primaStringa.length)
    );
    }
    schermo.innerHTML = password;
}

generaPassword();

