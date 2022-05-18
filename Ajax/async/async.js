//async: 코드블럭이 자동으로 Promise 객체를 반환

async function fetchUser(){
    return "study"
}

const user = fetchUser()
user.then(`user.then:${console.log()}`)
console.log(`user:${user}`);

//2. await

function delay(ms){
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function getApple(){
    await delay(1000)
    return 'apple'
}

async function getBanana(){
    await delay(1000)
    return 'Banana'
}

// function pickFruit(){
//     return getApple().then((apple) => {
//         return getBanana().then((banana) => `${apple} + ${banana}`)
//     })
// }

//개선된 pickFruit()

// async function pickFruit(){
//     try {
//         const apple = await getApple()
//         const banana = await getBanana()
//         return `${apple} + ${banana}`
//     } catch (error) {
//         console.log(error);
//     }
        
//      }

//병렬처리로 좀더 개선된 코드

// async function pickFruit(){
//      try {
//          const applePromise = await getApple()
//          const bananaPromise = await getBanana()

//          const apple = await  applePromise
//          const banana = await bananaPromise
//          return `${apple} + ${banana}`
//      } catch (error) {
//          console.log(error);
//      }
            
//       }

 function pickFruit() {
   return Promise.all([getApple(), getBanana()]) //배열로 병렬처리기능을 나열
     .then((fruits) => fruits.join(' + '));
 }

 function pickOnlyOnly(){
     return Promise.race([getApple(), getBanana()])
 }
 pickOnlyOnly().then(console.log)
pickFruit().then(console.log)