const obj1 = {}
const obj2 = new Object()

let print = (person) => {
    console.log(person.name)
    console.log(person.age)
}

const baby = {
    name : 'Oh',
    age : 28
}

const person1 = {name : "Bob1", age : 2}
const person2 = {name : "Bob2", age : 3}
const person3 = {name : "Bob3", age : 4}
const person4 = new Person('bob4', 4)
console.log(person4)

function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
  }

console.log('name' in baby)
console.log('age' in baby)
console.log('random' in baby)

for(let key in baby){
    console.log(key)
}

const array = [1,2,3,4]
for(let value in array){
    console.log(value)
}

const user = {
    name : '인웅',
    age : 29
}

const user2 = user

console.log(user)

user2.name = "홍길동"

console.log(user)

const user3 = {}

for(let key in user){
    user3[key] = user[key]
}

user.name = "rla"

console.log(user3.name)
console.log(user.name)
console.clear()

const user4 = Object.assign({}, user)
user.name="김김김"
console.log(user)
console.log(user4)

const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //같은 속성인 color : 'blue'가  color : 'red'를 덮어 쓴다.
console.log(mixed.size);
