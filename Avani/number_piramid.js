for (i = 0; i <= 5; i++) {
    let x = '';

    for (j = -5; j <= 5; j++) {
        let outString = j;

        if (outString < 0) {
            outString *= -1;
        }

        if (outString > i) {
            outString = " ";
        }
        x = x + " " + outString;

    }

    console.log(x);
}
