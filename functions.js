//functions are need when we need to  perfom the same action many places 
//javascript provides the built in functions such as 'parseInt()'and parseFloat()

//to decalre the function we use the 'functio' keyword 


function sum(){
    console.log("Hello");
}sum();

// return type fucntion

function sum(x,y){
    return x+y;
}
let add=sum(3,4);
console.log(add);

//compare function that return the multiple values

function compare(a,b){
    if(a>b){
        return 1;
    }
    else{
        return 0;
    }
}compare(8,6);

//inside the function we can accsess the object like argument
//the argument object behave like the array
//we can use the [] to access the argument
//this add the arguments

function addition(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}
let additions=addition(1,3,4);//8
console.log(additions);


//function hoisting
//the javascript engine physically move the function declaration top of the code
showMe();

function showMe(){
    console.log("A hoisting example");
}


//fucntions are the first class citizens 
//that means you can store the fucntions ,pass them to other function as argumentand 
//and return them from other function as value


//storing a function in variable
// console.log(diff);


//passing the function to another function

 
function adds(a, b) {
    return a + b;
}

let sum = adds; //storing the function to variable

function average(a, b, fn) {  //function inside another fucntion
    return fn(a, b) / 2;
}

let result = average(10, 20, sum);

console.log(result);