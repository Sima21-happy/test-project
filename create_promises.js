  function delay1(){
    const promise1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Resolve first");
        },5000)

    })
return promise1;

    // const response1=await promise1;
}
// delay1();


 function delay2(){
    const promise2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Resolve second");
        },5000)

    })
    return promise2;
    // const response2=await promise2;
}
// delay2();

async function delay3(){
    const promise3=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Resolve third");
        },1000)

    })
     return promise3;
    // const response3=await promise3;
}
delay3();

 function delay4(){
    const promise4=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Resolve fourth");
        },1000)
        
    })
    return promise4;
}
// delay4();

 function delay5(){
    const promise5=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Resolve fifth");
        },1000)
      

    })
    // console.log("hello");
   return promise5;
    // const response5=await promise5;
}
// delay5();
//here the promises execute after time
//  async function run(){
//         let d1=await delay1();
//         console.log(d1);
//         let d2=await delay2();
//         console.log(d2);
//         let d3=await delay3();
//         console.log(d3);
//         let d4=await delay4();
//         console.log(d4);
//         let d5=await delay5();
//         console.log(d5);
//  }
//   run();


//   delay1().then((data)=>{
//     console.log(data);
//   })


//   delay2().then((data)=>{
//     console.log(data);
//   })

//   delay3().then((data)=>{
//     console.log(data);
//   })
//   delay4().then((data)=>{
//     console.log(data);
//   })

//   delay5().then((data)=>{
//     console.log(data);
//   })


//it executes all the promises at first and then executes 
//Promise.all execute all promises at a time
async function run(){
    let result=await Promise.all([
    delay1(),
    delay2(),
    delay3(),
    delay4(),
    delay5()
]);
   console.log(result);
}
run();

