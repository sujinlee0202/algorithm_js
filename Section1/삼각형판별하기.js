const solution = (a, b, c) => {
  let answer = '';
  const arr = [a, b, c];

  arr.sort((a, b) => a - b)

  if(arr[0]+arr[1] <= arr[2]) {
    answer = "NO"
  } else {
    answer = "YES"
  }

  return answer;
}

console.log(solution(13, 33, 17))