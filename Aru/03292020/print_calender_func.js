

function getCalender(firstDayOfMonth, noOfDaysInAMonth)
{
    let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    const noOfDaysInWeek = 7;

    for (i = 0; i <= (noOfDaysInWeek - 1); i++) {

        let x = '';
    
        for (j = 0; j <= 5; j++) {
    
            let day = ((noOfDaysInWeek * j) - firstDayOfMonth + i + 2 );
            let dayText = day;
    
            if ((day < 1) || (day > noOfDaysInAMonth)) {
                dayText = ' ';
            }
    
            x = x + " " + dayText;
        }
    
        console.log(days[i] + " => " + x);
    }
}

// let firstDayOfMonth = 7; // Range 1 - 7
// let noOfDaysInAMonth = 31; // Range 28 - 31

getCalender(7, 31);
