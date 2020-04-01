console.log("----------");

for (i = 1; i < 9; i++) {
    let x = '';
    let outChar = "#";
    for (j = 1; j < 9; j++) {

        if((i+j)%2 == 0)
     // if((j)%2 == 0)
        {
            outChar = "#";  
        }
        else
        {
            outChar = " ";
        }

        x = x + '' + outChar;
        // x = x+''+j;
    }
    console.log("|" + x + "|");
}
console.log("----------");