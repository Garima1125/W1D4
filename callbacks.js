function findWaldo(arr, found) {
    arr.forEach(findWaldo(i){
      	 console.log(i);
     
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
      });       
    }
 }


function actionWhenFound(i) {
  console.log("Found Waldo at index" + " " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);