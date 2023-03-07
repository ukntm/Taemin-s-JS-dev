// 연산자 //

console.log('My' + ' car')
console.log('1'+ 2)
console.log

const shoesPrice = 200000
console.log('이 신발의 가격은' + shoesPrice + '원 입니다')
console.log(`이 신발의 가격은 ${shoesPrice}원 입니다`)

// 템플릿 리터럴 `${}` 을 사용해서 문자열 데이터  간결하게 사용가능
// ** 2 제곱

const shirtsPrice =100000
const pantsPrice = 80000
let totalPrice = 0

totalPrice += shirtsPrice
console.log(totalPrice)

totalPrice += pantsPrice // totalPrice 에 pantsPrice 값을 더한을 재할당 +=
console.log(totalPrice)

totalPrice -= pantsPrice // totalPrice 에 pantsPrice 값을 뺀값을 재할당 -=
console.log(totalPrice)
