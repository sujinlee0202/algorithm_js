const solution = (str) => {
  return [...new Set(str)].join('')
}

let str = 'ksekkset'
console.log(solution(str))