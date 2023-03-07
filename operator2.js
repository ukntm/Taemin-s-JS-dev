// 비교연산자
console.log(1 < 2) //true
console.log(1 >= 2) //flase

// 논리연산자 || or / && and / ! not 조건문과사용!
let isOnSale = true
console.log(!isOnSale) //false
// === 일치연산자 대소문자 띄워쓰기 모두 일치해야 true 
// == 는 데이터 타입도 변환해서 확인 ===는 데이터 타입이 다르면 flase 로 나옴

// 퀴즈 Q.  상품 가격을 나타내는 2개의 변수를 선언하고 각각의 변수에 원하는 가격값을 할당해보아요.
// 두 상품을 더한 가격 역시 총가격을 나타내는 변수에 할당해봅니다. 
// 마지막으로 총가격의 20% 할인된 가격을 구해서 '총 몇 원에 물건을 구입합니다.' 라는 문자열을 출력합니다

const apple = 10000
const potato = 5000
let totalPrice = apple + potato
console.log(`총 ${totalPrice*0.8}원에 물건을 구입합니다.`) 

//-완-
