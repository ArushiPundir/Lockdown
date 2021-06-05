function diamond(height, depth) {
    for (i = (-1 * height); i <= depth; i++) {
        let x = '';

        for (j = (-1 * height); j <= height; j++) {
            let outValue = j;
            let outString = "*"; //j;

            if (outValue < 0) {
                outValue *= -1;
            }

            if (outValue > (i + height)) {
                outString = " ";
            }

            if ((i < 0) && (i > (depth - height - 1))) {
                
                if (outValue <= (depth-i)) {
                    outString = "*";
                }
            }

            if (i > 0) {
                if (outValue > (depth - i)) {
                    outString = " ";
                }
            }


            x = x + " " + outString;

        }

        console.log(x);
        // console.log(i + " => " + x);
        //console.log(diamond());
    }
}

diamond(27, 10);