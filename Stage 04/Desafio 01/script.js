let n1 = prompt("Digite um número.")
let n2 = prompt("Digite mais um número.")

let sum = Number(n1) + Number(n2)
let sub = Number(n1) - Number(n2)
let mul = Number(n1) * Number(n2)
let div = Number(n1) / Number(n2)
let res = Number(n1) % Number(n2)

let even = sum % 2 == 0

let equal = n1 === n2

alert(
`A soma desses números é ${sum}.\n 
A subtração desses números é ${sub}.\n
A multiplicação desses números é ${mul}.\n
A divisão desses números é ${div}.\n
O resto da divisão desses números é ${res}.`
)

if(even) {
  alert("A soma é par.")
} else {
  alert("A soma é ímpar.")
}

if(equal) {
  alert("Os números são iguais.")
} else {
  alert("Os números são diferentes.")
}