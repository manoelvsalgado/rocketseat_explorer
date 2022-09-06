import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonPlay,
  buttonStop,
  buttonAdd,
  buttonSub,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

const controls = Controls({
  buttonPlay,
  buttonAdd,
  buttonSub,
  buttonStop,
  minutes
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})
