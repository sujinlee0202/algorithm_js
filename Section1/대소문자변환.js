const solution = (string) => {
  let answer = '';

  for(x of string) { // string을 하나씩 x에 저장
    x === x.toUpperCase() ? x = x.toLowerCase() : x = x.toUpperCase()

    answer += x
  }
  
  return answer;
}

let string = 'StuDY'
console.log(solution(string))