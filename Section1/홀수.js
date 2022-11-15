const solution = (arr) => {
  let answer = [];
  let min = 0, sum = 0;
  
  const newArr = arr.filter(x => x%2 !== 0)
  
  for(let i=0; i<newArr.length; i++) {
    sum = sum + newArr[i]
  }

  min = Math.min(...newArr)

  answer.push(sum)
  answer.push(min)

  return answer;
}

const arr = [12, 77, 38, 41, 53, 92, 85]
console.log(solution(arr))