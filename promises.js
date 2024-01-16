//the state of promises in javascript
//1.pending=promise is still in the work
//2.fulfill=the promise resolve successfully
//3.rejected=the promise is fail with error 

function getData(){

//creating a promise
    const promise = new Promise((resolve, reject) => {
   //callback function
        setTimeout(() => {
      resolve('The promise resolved');
    }, 5000);
  });
  return promise;
}
// getData();


//then is used when promises are fulfill
const response=getData().then((data)=>{
    console.log("The data is Successfully Resolved\n", data);
}).catch((error)=>{

   //catch are use when promises are rejected
    console.log(" error  is occured ",error);
}).finally(()=>{
    //finally is used when either promises are fail or pass
    console.log("Resolved");
});





