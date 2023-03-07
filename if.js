const shoesPrice = 40000
if (shoesPrice < 50000 ) { //true
    console.log('이 신발을 사겠습니다')  // 들여쓰기는 if 문의 body 코드**
}
// else 는 if 를 만족하지 않은 값을 실행하기위해사용.


const capPrice = 50000
if (capPrice < 40000) {
	console.log('이 모자를 사겠습니다')
} else {
	console.log('너무 비싸요!')
}

const pantsPrice = 50000
if (pantsPrice < 50000) {
	console.log('이 바지를 사겠습니다')
} else if (pantsPrice <= 45000 ){
	console.log('고민 해볼게요')
} else {
	console.log('이 바지를 사지않겠습니다')
}


// 퀴즈

const homeDistance = 3
if (homeDistance < 2 ) {
	console.log('걸어가자')
} else if (homeDistance >= 2 , homeDistance < 5 ) { // , 말고 논리 연산자 &&(and를 사용)
	console.log('택시를 타자')
} else {
	console.log('기차를 타자')
}
