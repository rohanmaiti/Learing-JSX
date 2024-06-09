let arr = [1,2,3,4];
var [a,...b] = arr;
console.log(a)
console.log(b)

let array02  = [1,234,52,34,5,3,5,6,2];
array02.sort();
console.log(array02);

array02.sort((a,b)=>b-a);
console.log(array02);


// important concept of sorting 
let arrOfObj = [
    {
        price:100
    },
    {
        price:200
    },
    {
        price:140
    },
    {
        price:120
    },
    {
        price:300
    }

]

arrOfObj.sort((a,b)=>b.price - a.price);
console.log(arrOfObj);

let array03 = [1,53,4,2,6,7,8]
array03.reverse();
console.log(array03)