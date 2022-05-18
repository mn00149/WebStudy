// 역직렬화 JSON -> Object , parse(json)
// 클라이언트가 서버로부터 JSON의 문자열 데이터를 받아서 객체로 변환해서 사용한다.
console.clear()
console.log(rabbit, typeof rabbit)
json = JSON.stringify(rabbit); //object -> JSON
const obj = JSON.parse(json); //JSON -> object
console.log(obj, typeof json);
//obj.jump()
console.log(rabbit.birthdate.getDate());
//JSON으로 변환할때 문자열로 변환되어 object로 파싱될때도 string값을 가진다
//console.log(obj.birthdate.getDate()); 
 
//파싱될때 추가적인 파라미터로 birthdate를 Date객체로 변환하게 할 수 있다.
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthdate' ? new Date(value) : value;
});
console.log(obj2.birthdate.getDate()); 