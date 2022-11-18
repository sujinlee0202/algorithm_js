const solution = (arr) => {
  let answer;
  const temp = [];
  let max = 0;

  for(let i=0; i<arr.length; i++) {
    temp.push(arr[i].length)
  }

  max = Math.max(...temp)
  
  return answer = arr[temp.indexOf(max)]
}

const arr = ['5', 'teacher', 'time', 'student', 'beautiful', 'good']
console.log(solution(arr))