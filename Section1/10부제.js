const solution = (day, car) => {
  let answer = 0;
  const newCar = car.map(x => x.toString())

  for(let i=0; i<car.length; i++) {
    if(newCar[i][1] === day.toString()) {
      answer++;
    }
  }

  return answer;
}

let day = 3;
const car = [25, 23, 11, 47, 53, 17, 33]

console.log(solution(day, car))

// 1의 자리는 10으로 나누기
const solution1 = (day, car) => {
  let answer = 0;

  for(let i=0; i<car.length; i++) {
    if(car[i]%10 === day) {
      answer++
    }
  }

  return answer;
}

console.log(solution1(day, car))