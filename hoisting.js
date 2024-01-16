

// let name;

// console.log(name);
// name='sima';
// console.log(name);


// const name='sima';
// console.log(name);


//javascript closure
//function that is used to find the variable  find the value in outer scope
//the outer function can't access the value from the inner scope

// function firstFunction(){
   
//     console.log(name);
   
//     function getName(){//inner function
//         let name='sima';
//     }

//     getName();//getName fucntion call
// }
// firstFunction();

 
// Make a GET request using the Fetch API
// 


// fetch('https://dummyjson.com/products/1').then(res => 
//     res.json()).then((jason)=>{

//     let image = jason.images;
//     console.log(image[0]);
//     }
   
// )



// const arr=[1,2,3,4,5,6,7];

// let[a,d,...rest]=arr;
// console.log(a);
// console.log(d);
// //rest operator
// console.log(rest);

// //spread operator
// let num1=[1,2,3,4,5,6,7];
// let num2=[8,9,10,11,12,13];

// let combinedNum=[...num1,...num2];
// console.log(combinedNum);

const student={
    name:"sima",
    age:19,
    roll:6,

    //this can't use with the arrow function
    Address:function(){
            return this.name;
    },
    subject :{
        subjetc1:"DSA",
        subject2:"C++",
        subject3:"Java"
   }
   
    
}

//?=optional chaining opertor
// console.log(subject.);
console.log(student.Address?.());


//here firstName is the new variable assign to name
// let {name:firstName,age:Age,Address="USA"}=student;
// console.log(firstName);
// console.log(Age);
// console.log(Address);

// let combineObject={...student,...Student};
// console.log(combineObject);




// function sum(...num){
//     return  num.reduce((a,b)=>a+b
        
//     )
// }
// console.log(sum(1,2,3,4))