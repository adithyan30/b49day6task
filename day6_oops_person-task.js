//Write a “person” class to hold all the details.

class Person {

    constructor (name,age,location,graduation,college,hobbies)
    {
        this.name = name;
        this.age = age;
        this.location = location;
        this.graduation = graduation;
        this.college = college;
        this.hobbies = hobbies;
    }

    res()
    {
        return `My name is: ${this.name}
                 My age is ${this.age}
                 I am from ${this.location}
                 I graduated in ${this.graduation}
                 I did my UG from ${this.college}
                 My hobby is ${this.hobbies}`
                       

    }

}

obj = new Person("adithyan",29,"virudhachalam","BE Mechanical","magna college of engineering","cricket")
console.log(obj.res());