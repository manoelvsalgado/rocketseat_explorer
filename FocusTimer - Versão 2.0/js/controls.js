export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonAdd,
  buttonSub,
  buttonStop
}) {

  function addMinutes() {
    let newMinutes = minutes + 5
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  function subMinutes() {
    let newMinutes = minutes - 5
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  return {
    addMinutes,
    subMinutes
  }
}