const arr = [5, 3, 7, 11, 2, 15, 17]

const solution = (arr) => {
  let answer = arr[0];

  for(let i=0; i<arr.length-1; i++) {
    if(answer > arr[i]) {
      answer = arr[i]
    }
  }

  return answer;
}

// 매개변수가 number로 들어올 때
const solution2 = (a1, a2, a3, a4, a5, a6, a7) => Math.min(a1, a2, a3, a4, a5, a6, a7)

// 전개 연산자 사용
const solution3 = (arr) => Math.min(...arr)

// apply 사용
const solution4 = (arr) => Math.min.apply(null, arr)


console.log(solution(arr))
console.log(solution2(5, 3, 7, 11, 2, 15, 17))
console.log(solution3(arr))
console.log(solution4(arr))