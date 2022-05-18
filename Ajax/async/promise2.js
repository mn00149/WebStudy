const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000)
    })
    })