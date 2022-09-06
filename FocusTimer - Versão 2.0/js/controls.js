export default function Controls({
  buttonPlay,
  buttonAdd,
  buttonSub,
  buttonStop,
  minutes
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
    subMinutes,
  }
}