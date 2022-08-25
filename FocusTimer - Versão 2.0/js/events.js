import {
  buttonPlay,
  buttonAdd,
  buttonSub,
  buttonStop
} from "./elements.js"

export default function({controls, timer}) {

  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
  })

  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
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