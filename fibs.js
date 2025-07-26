const  fibs = (n) => {
    if( n  < 2){
        return n
    }
    else {
        return fibs(n - 1) + fibs(n - 2);
    }
   
    /*
    let fibsArray = new Array(n);
    fibsArray[0] = 0;
    if (n > 1) {
        fibsArray[1] = 1;
    }
    for (let i = 2; i < fibsArray.length; i++){
        fibsArray[i] = fibsArray[i - 1] + fibsArray[i - 2];
    }
    return fibsArray;*/
}
console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
