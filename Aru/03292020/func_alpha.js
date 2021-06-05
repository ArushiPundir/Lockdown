for (i = -3; i <= 3; i++) {
    let x = '';

    for (j = -3; j <= 3; j++) {
        let outString = "#"// j;
        if (i % 2 != 0) {
            outString = "&";
        }
       if((i%2!= 0) && (i-j>=0)){
        outString = "#"; 
       }
        x = x + " " + outString;

    }

  //  console.log(x);
     console.log(i + " => " + x);
}
