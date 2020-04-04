//const colors = require('colors');

let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

let firstDayOfMonth = 7; // Range 1 - 7
let noOfDaysInAMonth = 31; // Range 28 - 31

const noOfDaysInWeek = 7;

for (i = 0; i <= (noOfDaysInWeek - 1); i++) {

    let x = '';

    for (j = 0; j <= 5; j++) {
        //  x = x + " (" + i + "," + j+")";
        //  x = x + " " + j;
        // x = x + " " + day;
        // x = x + " " + ((7 * j) + (i + firstDayOfMonth));

        let day = ((noOfDaysInWeek * j) - firstDayOfMonth + i + 2 );
        let dayText = day;

        if ((day < 1) || (day > noOfDaysInAMonth)) {
            dayText = ' ';
        }

        x = x + " " + dayText;

        //console.log(day);
    }

    console.log(days[i] + " => " + x);
}