// Displaying the date today on top of the page
var currentDate = dayjs();
$("#currentDay").text(currentDate.format('dddd, MMMM D'))

// timeblocks for regular hours and business hours
function createTimeBlocks() {
    var container = $(".container");

    // Current hour/block using day.js
    var currentHour = day.js().hour();

    //creating array for standard hours and business hours
    var businessHours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]


    // set loop to start from 9-17 hrs
    // for (let i = 9; i < 17; i++) {
    //     var block = $('<div class= "row"' + 'id="' + i + '">')
    //     $(".container").append(block)

    //this one didn't work, trying a different way
    // }


    businessHours.forEach((hour, index) => {
        var timeBlock = $('<div>').addClass('row time-block')
        var hourCol = $('<div>').addClass('col-md-1 hour').text(hour)
        var textAreaCol = $('<textarea>').addClass('col-md-10 description')

        // Append elements to container
        timeBlock.append(hourCol, textAreaCol, saveBtnCol);
        container.append(timeBlock);


        if (index + 9 < currentHour) {
            textAreaCol.addClass('past')
        } else if (index + 9 === currentHour) {
            textAreaCol.addClass('present')
        } else {
            textAreaCol.addClass('future')
        }

        // loading old event from local storage 
        var savedEvent = localStorage.getItem(hour)
        if (savedEvent) {
            textAreaCol.val(savedEvent)
        }

        var saveBtnCol = $('<div>').addClass('col-md-1 saveBtn')
        var saveBtn = $('<i>').addClass('fas fa-save')

        // click event for save button
        saveBtn.on('click', function () {
            var eventText = textAreaCol.val()
            localStorage.setItem(hour, eventText)
        })

        saveBtnCol.append(saveBtn)
    })

    // nested unction for assigning colours to timeblocks based on past/future activity 
    // function colorBlock() {
    //     var currentTime = dayjs().hour()

    //     $('.description').each(function () {
    //         var hourId = parseInt($(this).attr("id"))
    //         for (var i = 0; i < hours.length; i++) {
    //             if (hourId === currentTime) {
    //                 $(this).addClass("present")
    //                 $(this).removeClass("past, future")
    //             } else if (hourId < currentTime) {
    //                 $(this).addClass("past")
    //                 $(this).removeClass("present, future")
    //             } else {
    //                 $(this).addClass("future")
    //                 $(this).removeClass("past, present")
    //             }
    //         }
    //     })
    // }

    // call nested function
    // colourBlock()




    // call for function 
    createTimeBlocks()


}

