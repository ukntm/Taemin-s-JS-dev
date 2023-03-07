let temperature = 20 // 변수 값이 계속 변하기 때문에 let 사용
while (temperature < 25) {
    console.log(`${temperature}도 정도면 적당한 온도입니다`)
    temperature++
}
//for (begin;condition;step) begin 선언 / condition 조건 / step 실행 while 보다 좀더 간단?
for (let temperature = 20; temperature < 25; temperature++) {
    console.log(`${temperature}도 정도면 적당한 온도입니다`)
}

// 조건문 + 반복문
for (let number = 1; number <= 10; number++) {
	if (number % 3 === 0) {
		console.log(`${number}는 3으로 나눠서 떨어지는 숫자입니다.`)
	}
}

// 퀴즈
for (let h1 = 1; h1 <= 20; h1++) {
    if (h1 % 2 === 0) {
        console.log(`숫자${h1}는 짝수입니다`)} 
        else {
            console.log(`숫자${h1}는 홀수입니다`)
        }
}
    
