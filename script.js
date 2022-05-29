function compareNumber(num1, num2) {
  if (!num1 || !num2) return 'set two numbers'
  const firstSentence = createFirstSentence(num1, num2)
  const secondSentence = createSecondSentence(num1, num2)

  return `${firstSentence} ${secondSentence}`
}

function createFirstSentence(num1, num2) {
  let equals = ''
  if (num1 !== num2) {
    equals = ' not'
  }

  return `The numbers ${num1} and ${num2} are${equals} equals.`
}

function createSecondSentence(num1, num2) {
  const sum = num1 + num2

  let result10 = 'less'
  let result20 = 'less'

  const compare10 = sum > 10
  const compare20 = sum > 20

  if (compare10) {
    result10 = 'greater'
  }
  if (compare20) {
    result20 = 'greater'
  }

  return `The result of the sum is ${sum}, and that is ${result10} than 10, and ${result20} than 20.`
}
console.log(compareNumber(20, 21))
