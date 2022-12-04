const solution = (arr) => {
  return [...new Set(arr)]
}

const arr = [5, 'good', 'time', 'good', 'time', 'student', 5, 10, '5']
console.log(solution(arr))