var myarray=[2, 9, 10, 5 ,1]
myarray.sort(function(a,b){ //Array now becomes [1, 2,5,9,10]
    return a - b;
})
console.log(myarray);