//console.log("hello");

// const { promises } = require("dns");

// const { resolve } = require("path");

//node filename
//npm init -y
//npm install nodemon
//npm start

//await =wait
//with await we must use the async fuction

// const axios=require('axios');


//  function  getKantipurData(){
//       //await and then can't use at same time
//     //then takes the callback function
//     //then =catch
//       const response=  axios.get('https://www.npmjs.com/package/axios');
//       console.log(response);
//        console.log("I am here");


// }
// getKantipurData();


function delay(){
    console.log("I am delay");
    const promise=new Promise((resolve)=>{
        setTimeout(()=>{
           
            resolve("I am resolved");
        },5000);
    })
    return promise;
  

}
delay()

// function fast(){
//     console.log("I am Fast");
// }

// const response=delay();
// console.log(response);

// async function run(){
//     let response=await delay();
//     console.log(response);
//     fast();
// }
// run();

 //all the values are

// let response=delay().then((data)=>{
//     console.log("This is success",data);

// }).catch((err)=>{
//     console.log("error",data);
// });
// console.log(response);


// async function run(){
//     try{
//         let response=await delay();
//         console.log(response);
//         fast();
//     }catch(err){
//         console.log("i am error",err);
//     }
// }
// run();
//create a promise make delay 
//use finally
