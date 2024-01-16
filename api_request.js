// //get all products

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then((json)=>{
//     console.log(json);
// });

// //get single product
// fetch('https://dummyjson.com/products/5')
// .then(res=>
//     res.json()
// )
// .then((jason)=>{
    
//   let image=jason.images;
//   console.log(image[2]);
// });
          

//search products

// fetch('https://dummyjson.com/products/search?q=phone')
// .then(res=>
//     res.json()
//     ).then((jason)=>
//     console.log(jason)
//     );

//limit and skip products
//we can pass the limit and skip parameters to limit and skip the result

// fetch('https://dummyjson.com/products?limit=3&skip=9&select=title,price')
// .then(res=>
//     res.json())
// .then(jason=>
//         console.log(jason)
//     );


//get all products categories

// fetch('https://dummyjson.com/products/categories').then(res=>
//    res.json()
//    ).then(jason=>
//     console.log(jason)
//     );


//Add a new product
//adding a new product will not add it into the server
//it will simulate the POST request and will return the new created product with new id

// fetch('https://dummyjson.com/product/add' ,{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify({
//         title:'BMW car',
//     })

// }).then(res=>
//     res.json()
//     ).then(jason=>{
//         console.log(jason);
//     });


//     fetch('https://dummyjson.com/products/add',{
//         method:'POST',
//         headers:{'Content-Type':'application/json'},
//         body:JSON.stringify({
//             category:'samartphones',
//         })
//     }).then(res=>
//         res.json()
//         )
//         .then(json=>
//             console.log(json)
//         );



  //      Updating a Product

  //it will simulate a PUT/PATCH request and will return the product with modified data
//   fetch('https://dummyjson.com/products/1', {
//     method: 'PUT', /* or PATCH */
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       title: 'samsung'
//     })
//   })
//   .then(res => res.json())
//   .then(jasonFile=>{
//     console.log(jasonFile)
//   });

//delete a product

//it will simulate a DElETE request and will  'isDeleted' and 'deletedOn' keys

// fetch('https://dummyjson.com/products/1',{
//     method:'DELETE',
// }).then(res=>
//     res.json()
//     ).then(jason=>{
//         console.log(jason)
//     });


//      AUTH

//login user and get token

// fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
    
//     username:'kminchelle',
//     password: '0lelplR',

   
//   })
// })
// .then(res => res.json())
// .then(console.log);
            
//get current auth user

// fetch('https://dummyjson.com/auth/me', {
//   method: 'GET',
//   headers: {
//     'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', 
//   }, 
// })
// .then(res => res.json())
// .then(console.log);


//Dummy jason image

// fetch('https://dummyjson.com/image/150').then(response=>
//          response.json()
// ).then(jsonImage=>
//      console.log(jsonImage)
//   );