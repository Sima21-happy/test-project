function Person(name,age){
    this.name=name;
    this.age=age;

   this.getName=()=>{
        return this.name;
    } 
    
}

Person.prototype.getAge=()=>{
    return age;
}

let person1=new Person("sima",19);
console.log(person1.getAge());