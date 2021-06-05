function isEven(n){
    if(n%2==0 && n>=0){
        return "true";
    }
    else if( n%2!= 0 && n>0) {
        return "false";
    }
    else {
        return "this is not a whole number";
    }
}
console.log(isEven(75));