class Person{
    constructor(name, age){
        this.name = name
        this.age= age
    }

    speak(){
        console.log(`${this,this.name}~ hello`)
    }
}

const hong = new Person('hong', 25)
hong.speak()