console.log("5" == 5);   
console.log("5" === 5);  

let a;
let b = null;
console.log(a, typeof a); 
console.log(b, typeof b); 

const obj = {
    value: 42,
    regularFunc: function() {
        console.log("regularFunc:", this.value);
    },
    arrowFunc: () => {
        console.log("arrowFunc:", this.value); 
    }
};
obj.regularFunc();
obj.arrowFunc();

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[0] = 99;
console.log(arr1, arr2);

let arr3 = [1, 2, 3];
let arr4 = [...arr3];
arr4[0] = 88;
console.log(arr3, arr4); 