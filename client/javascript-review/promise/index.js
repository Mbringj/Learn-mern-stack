

// promise

let promise = new Promise(function(resolve, reject) {
  
  setTimeout(() => resolve("done"), 1000)
});

// let promises = new Promise(function(resolve, reject) {

//   setTimeout(() => reject(new Error("Whoops Error appear !")), 1000);
// });

// promise.then(
//   function(result) {
//     // result
//   },
//   function(error) {
//     // error
//   }
// ).catch(err => {
//   return err;
// }).finally(function() {

// })

// le callback est le coeur de fonctionnement du javascript

// sa fait parti de choise a apprendre pour mieux comprendre le javascript

new Promise(function(resolve, reject) {
  console.log('befor');
  setTimeout(() => resolve(1), 2000);
  console.log('after');

  reject(new Error("whoops une erreur"));
}).then(function(result) {
  console.log(result);
  return result * 2;
}).then(function(result) {
  console.log(result);
  return result * 2;
}).then(function(result){
  console.log(result);
  return result * 2;
}); 




// class FetchUser extends Promise {
  
// }

// console.log(new FetchUser());

// le object comme fetch implemente les promesses

// Custom Error handling
// Custom 


try {
  // excute some code
} catch(error) {
  // get error and handle
}

// throw <error objects>

// throw ErrorZeroDivision()

// les proprietes des erreurs sont

// name error
// message error 
