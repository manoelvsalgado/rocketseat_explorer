const students = [
  {
    name: "João",
    grade1: 10,
    grade2: 4,
  },
  {
    name: "Maria",
    grade1: 8,
    grade2: 8,
  },
  {
    name: "José",
    grade1: 5,
    grade2: 6,
  }
]

const approval = "Parabéns, você passou no concurso!"
const reproval = "Infelizmente, você não passou no concurso."

function average(grade1, grade2) {
  return ((grade1 + grade2) / 2).toFixed(2)
}

function printResult(student) {
  return `${student.name}, você ficou com média ${average(student.grade1, student.grade2)}`
}

for (let student of students) {
  let resultMessage = printResult(student)
  alert(resultMessage)
  if (average(student.grade1, student.grade2) >= 7) {
    alert (approval)
  } else { 
    alert (reproval)
  }
}


