import {
  buttonPlay,
  buttonAdd,
  buttonSub,
  buttonStop
} from "./elements.js"

export default function({controls, timer, sound}) {

  buttonPlay.addEventListener('click', function() {
    timer.countdown()
  })

  buttonStop.addEventListener('click', function() {
    timer.reset()
  })

  buttonAdd.addEventListener('click', function() {
    let newMinutes = controls.addMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  buttonSub.addEventListener('click', function() {
    let newMinutes = controls.addMinutes()
  
    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

}