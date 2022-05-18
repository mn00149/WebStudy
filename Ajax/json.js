let json = JSON.stringify(true); //true -> 문자열
console.log(json);
json = JSON.stringify(['apple','banana']); //배열 -> 문자열
console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthdate : new Date(),
    jump : () => {console.log(`${this.name} can jump!!`)}
}

json = JSON.stringify(rabbit);//함수는 직렬화 안됨
console.log(json, typeof json);

