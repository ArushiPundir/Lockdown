// let days_6_Months = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getCalender(firstDayOfMonth, noOfDaysInAMonth) {
    let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    const noOfDaysInWeek = 7;
    let lastDayOfMonth = -1;

    for (i = 0; i <= (noOfDaysInWeek - 1); i++) {

        let x = '';

        for (j = 0; j <= 5; j++) {

            let day = ((noOfDaysInWeek * j) - firstDayOfMonth + i + 2);
            let dayText = day;

            if ((day < 1) || (day > noOfDaysInAMonth)) {
                dayText = ' ';
            }
            if (day == noOfDaysInAMonth) {
                lastDayOfMonth = i + 1;
            }
            // if (day < 10) {
            //     dayText = " " + dayText;
            // }
            x = x + " " + dayText;

        }

        console.log(days[i] + " => " + x);

        // days_6_Months[i] += " " + x;
    }
    return lastDayOfMonth;
}

// let firstDayOfMonth = 7; // Range 1 - 7
// let noOfDaysInAMonth = 31; // Range 28 - 31
let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
let noOfDaysInMonth = [
     /* jan */ 31,
     /* feb */ 29,
     /* march */ 31,
     /* april */ 30,
     /* may */ 31,
     /* june */ 30,
     /* july */ 31,
     /* aug */ 31,
     /* sept */ 30,
     /* oct */ 31,
     /* nov */ 30,
     /* dec */ 31
];

// let output = getCalender(4, 31);
// console.log(output);

let firstDayOfMonth = 4; // Range 1 - 7

for (m = 0; m < noOfDaysInMonth.length ; m++) {
    console.log(" ");
    console.log("[" + months[m] + " - Days " + noOfDaysInMonth[m] + "]");
    // getCalender(7, noOfDaysInMonth[m]);
    let output = getCalender(firstDayOfMonth, noOfDaysInMonth[m]);
    firstDayOfMonth = output + 1;
}

// for (m6 = 0; m6 < days_6_Months.length; m6++) {
//     console.log(days_6_Months[m6]);
// }
