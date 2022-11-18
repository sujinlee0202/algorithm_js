const solution = (str) => {
  let answer = 0;

  for(let i=0; i<str.length; i++) {
    if(str[i] === str[i].toUpperCase()) {
      if(str[i] === ' ') continue;
      answer++;
    }
  }

  return answer;
}

let str = 'KoreaTimeGood DFDF'
console.log(solution(str))

// 하지만 위의 경우에 공백이 있을 경우 공백도 카운팅된다.
// 그럴 경우를 대비해 if(str[i] === ' ') continue; 추가해봤다.