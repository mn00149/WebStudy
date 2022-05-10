const fruits = '사과, 키위, 바나나, 체리';
//const result = fruits.split(',');//,단위로 나누어 배열에저장
const result = fruits.split(',',2);//2 리턴받을 사이즈지정

console.log(result);

const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array);
{
    const array = [1, 2, 3, 4, 5];
    //const result = array.splice(0, 2); //삭제된 값 리턴(1,2)
    const result = array.slice(2, 5); //새로운 배열 생성
    console.log(result);
    console.log(array);
}