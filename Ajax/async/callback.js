// console.log('1')

// setTimeout(()=>{console.log(2)},1000)

// console.log('3')

printImmediately = (print) => {
    print()
}

printImmediately(()=>console.log("hello"))

printWithDelay = (print, timeout) => {
    setTimeout(print, timeout)
}

printWithDelay(() => console.log("async"), 20000)