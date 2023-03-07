let a = 2 + 2;

switch (a) {
    case 3:
        console.log('비교하려는 값보다 작습니다.');
        break;
    case 4:
        console.log('비교하려는 값과 일치합니다.');
        break;
    case 5:
        console.log('비교하려는 값보다 큽니다.');
        break;
    default:
        console.log("어떤 값인지 파악이 되지 않습니다.");
}

//

let arg = String("값을 입력해주세요.");
switch (arg) {
    case '0':
    case '1':
        console.log('0이나 1을 입력하셨습니다.');
        break;

    case '2':
        console.logt('2를 입력하셨습니다.');
        break;

    case 3:
        console.log('이 코드는 절대 실행되지 않습니다!');
        break;
    default:
        console.log('알 수 없는 값을 입력하셨습니다.')
}