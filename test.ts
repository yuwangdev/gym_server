function outer(num: number, inner: (n: number) => number) {

    console.log("take the number from outer function of " + num);
    
    return inner(num);

}

let result: number = outer(7, x=>{
    return x+7
});

setTi

console.log("result is " + result);