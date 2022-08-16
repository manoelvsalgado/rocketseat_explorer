const screen2 = document.querySelector('#screen2');
const screen1 = document.querySelector('#screen1');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
let randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', enterKey);

//funções
function handleTryClick(event) {
  event.preventDefault(); //significa 'não faça o padrão' //
  
  const inputNumber = document.querySelector('#inputNumber');
  
  if(Number(inputNumber.value) == randomNumber){
    toggleScreen();
    
    screen2.querySelector('h2').innerText = (`Você acertou em ${xAttempts} tentativas!`)
  }   
  inputNumber.value = "";
  xAttempts++
}

function handleResetClick() {
  randomNumber = Math.round(Math.random() * 10);
  toggleScreen();
  xAttempts = 1;
  
};

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
};

function enterKey(e) {
  if((e.key == 'Enter') && (screen1.classList.contains('hide'))) {
  handleResetClick();
  }
}



  

