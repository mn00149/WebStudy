let name = '홍'
console.log(name)
const maxNum = 5

let a =12
let b =12.1

console.log(`value:${a}, type: ${typeof a}`)
console.log(`value:${b}, type: ${typeof b}`)

const infinity = 1/0
const negainfinity = -1/0
const nAn = "ni"+2

const canRead = true
const test = 3<1
console.log(`value: ${canRead}, type: ${typeof canRead}`)
console.log(`value: ${test}, type: ${typeof test}`)

let nothing = null
console.log(`value: ${nothing}, type: ${typeof nothing}`)
let x
console.log(`value: ${x}, type: ${typeof x}`)

const symbol1 = Symbol('id')
const symbol2 = Symbol('id')

console.log(symbol1 === symbol2)

const gsymbol1 = Symbol.for('id')
const gsymbol2 = Symbol.for('id')
console.log(gsymbol1 === gsymbol2)

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)
console.log(`value: ${gsymbol1.description}, type: ${typeof gsymbol1}`)

let text = 'hello'
console.log(text.charAt(0))
console.log(`value: ${text}, type: ${typeof text}`)
text = 1
console.log(`value: ${text}, type: ${typeof text}`)
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`)
//+ 기호 떄문에 문자열로 변환 된다
text = '7' + 5
console.log(`value: ${text}, type: ${typeof text}`)

const obj = {name: '오인웅',
             age: 20
            }
console.log(`value: ${obj.name}, type: ${typeof obj}`)

function pl(str){
    document.write(`${str} <br><br>`)
}
let i =3
let j = 4
pl(`plus:${i+j}`)
