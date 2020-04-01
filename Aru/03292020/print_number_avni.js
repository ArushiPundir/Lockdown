//const colors = require('colors');

let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

let firstDayOfMonth = 1;
let lastDayOfMonth = 30;


for (i = 0; i <= 6; i++) {

    let x = '';

    for (j = 0; j < 5; j++) {
        //  x = x + " (" + i + "," + j+")";
        //  x = x + " " + j;
        // x = x + " " + day;
       // x = x + " " + ((7 * j) + (i + firstDayOfMonth));
        let  day = ((7 * j)-3 + (i + firstDayOfMonth));
        let  dayText = day;

        if((day < firstDayOfMonth) || (day > lastDayOfMonth))
        {
            dayText = ' ';
        }

        x = x + " " + dayText;

        //console.log(day);

    }

    console.log(days[i] + " => " + x);

}