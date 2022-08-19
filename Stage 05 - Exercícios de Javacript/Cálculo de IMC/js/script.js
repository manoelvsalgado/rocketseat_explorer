import { Modal } from './modal.js'
import { AlertError } from './alert-error'
import { IMC, notANumber } from "./utils.js"

// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(weight, height)
  displayResultMessage(result)

  Modal.message.innerText = message
  Modal.open()
}

function displayResultMessage(result) {
  const message = `seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}