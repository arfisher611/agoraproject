/*
    Controls all the date/time calculations and the countdown timer

    FileName: js/datetime.js
*/

/*
    Gets the current date

    @return String, the current date MM/DD/YYYY
*/
function getDate(){
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();

    // MM/DD/YYY
    var output = (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day + '/' +
        d.getFullYear();

    return output;
}

/*
    Adds Zero to the front of any single digit number

    @return String, the given number with a 0 in front if it was less than 10
*/
function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}


/*
    Converts military time to standard time

    @return int, standardized hours
*/
function standardize(i){
    if(i > 12){
        i = i - 12;
    }
    else{
        if(i == 0) i = 12;
    }
    return i;
}

/*
    Returns "AM" or "PM" based on time of day

    @return, String, "AM" or "PM"
*/
function ampm(i){
    if(i >= 12) return "PM";
    else return "AM";
}

/*
    Gets current time in HH:MM:SS ?M format

    @return String, current time
*/
function getTime() {
    var d = new Date();
    var h = standardize(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var q = ampm(d.getHours());
    return h + ":" + m + ":" + s + " " + q;
}

/*
    Creates and runs the countdown clock
*/
function countdown(){
    var d = new Date(); //current date/time in ms
    var endTime = d.getTime() + 432000000; //5 days in milliseconds
    endTime = new Date(endTime);
    //Sets the end time to midnight
    endTime.setHours( 24 );
    endTime.setMinutes( 0 );
    endTime.setSeconds( 0 );
    endTime.setMilliseconds( 0 );
    endTime = endTime.getTime();

    //Runs every 1000ms or 1 second
    var timer = setInterval(function() {
        //current time
        let now = new Date().getTime();
        //difference between current and end time
        let t = endTime - now;  

        //Will stop countdown once it reaches zero
        if (t >= 0) {

            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((t % (1000 * 60)) / 1000);

            document.getElementById("timer-days").innerHTML = days + 
            "<span class='label'>DAY(S)</span>";
            
            document.getElementById("timer-hours").innerHTML= ("0" + hours).slice(-2) +
            "<span class='label'>HR(S)</span>";
            
            document.getElementById("timer-mins").innerHTML= ("0" + mins).slice(-2) +
            "<span class='label'>MIN(S)</span>";
            
            document.getElementById("timer-secs").innerHTML= ("0" + secs).slice(-2) +
            "<span class='label'>SEC(S)</span>";
        }
        else {

            document.getElementById("timer").innerHTML = "The countdown is over!";
        
        }
    }, 1000);
}

//Functions as a kind of main method for this file.
$(document).ready(function(){
    $(".date").html(getDate());
    $(".time").html(getTime());
    countdown();
});
