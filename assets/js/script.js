// Displaying the date today on top of the page
var currentDate = dayjs();
$("#currentDay").text(currentDate.format('dddd, MMMM D'))

// timeblocks for regular hours and business hours
function createTimeBlocks() {
    var container = $(".container");

    // Current hour/block using day.js
    var currentHour = day.js().hour();

    //creating array for standard hours and business hours
    var businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
    var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]

    // set loop to start from 9-17 hrs
    // for (let i = 9; i < 17; i++) {
    //     var block = $('<div class= "row"' + 'id="' + i + '">')
    //     $(".container").append(block)

    //this one didn't work, trying a different way
    // }




    workHours.forEach((hour, index) => {
        var timeBlock = $('<div>').addClass('row time-block')
        var hourCol = $('<div>').addClass('col-md-1 hour').text(hour)
        var textAreaCol = $('<textarea>').addClass('col-md-10 description')

        if (index + 9 < currentHour) {
            textAreaCol.addClass('past')
        } else if (index + 9 === currentHour) {
            textAreaCol.addClass('present')
        } else {
            textAreaCol.addClass('future')
        }


    var saveBtnCol = $("<button>")
        .addClass("col-2 saveBtn")
        .html('<i class="far fa-save"></i> Save');

    //24 hour clock format 
    function formatHour(hour) {
        return dayjs().hour(hour).format("H"); // single digit 24 hour format 
    }

    // get previous input from local storage 
    var savedEvent = localStorage.getItem(formatHour(hour));
    if (savedEvent) {
        textAreaCol.val(savedEvent);
    }

})

    // save information to timeblocks 

    //save button and event listener 






    // call for function 
    createTimeBlocks()


}

//For assigning colours to timeblocks based on past/future activity
