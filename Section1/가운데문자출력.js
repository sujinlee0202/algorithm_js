const solution = (str) => {
  let centerIdx = Math.floor(str.length/2)
  if(str.length%2 === 0) {
    return str[centerIdx-1]+str[centerIdx]
  } else {
    return str[centerIdx]
  }
}

let str = 'sttaupuatdy'
console.log(solution(str))

/*
다른 풀이 : str.substring(startIndex, endIndex) / str.substr(startIndex, count)
if(str.length%2 === 0) {
  return str.substring(centerIdx-1, centerIdx+1)
} else {
  return str.substring(centerIdx, centerIdx+1)
}

if(str.length%2 === 0) {
  return str.substr(centerIdx, 1)
} else {
  return str.substr(centerIdx-1, 2)
}
*/