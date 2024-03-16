$(document).ready(function () {
    // Displaying the date today on top of the page
    var currentDate = dayjs();
    $("#currentDay").text(currentDate.format('dddd, MMMM D'))

    // timeblocks for regular hours and business hours
    function createTimeBlocks() {
        const container = $('.container')

        // Current hour/block using day.js
        const currentHour = dayjs().hour()

        //creating array for standard hours and business hours
        const businessHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']


        // set loop to start from 9-17 hrs
        // for (let i = 9; i < 17; i++) {
        //     var block = $('<div class= "row"' + 'id="' + i + '">')
        //     $(".container").append(block)

        //this one didn't work, trying a different way
        // }


        businessHours.forEach((hour, index) => {
            const timeBlock = $('<div>').addClass('row time-block')
            const hourCol = $('<div>').addClass('col-md-1 hour').text(hour)
            const textAreaCol = $('<textarea>').addClass('col-md-10 description')

            // assign colours for events

            if (index + 9 < currentHour) {
                textAreaCol.addClass('past')
            } else if (index + 9 === currentHour) {
                textAreaCol.addClass('present')
            } else {
                textAreaCol.addClass('future')
            }

            // Load saved event from local storage
            const savedEvent = localStorage.getItem(hour)
            if (savedEvent) {
                // textAreaCol = $('<textarea>').addClass('col-md-10 description') 
                textAreaCol.val(savedEvent)
                
            }

            const saveBtnCol = $('<div>').addClass('col-md-1 saveBtn')
            const saveBtn = $('<i>').addClass('fas fa-save')

            // click event for saved button
            saveBtn.on('click', function () {
                const eventText = textAreaCol.val()
                localStorage.setItem(hour, eventText)
            })

            // Append elements to container
            timeBlock.append(hourCol, textAreaCol, saveBtnCol)
            container.append(timeBlock)
            saveBtnCol.append(saveBtn)

        })
    }

    // No longer using a separate function to assign colours, check above
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

    // call for function 
    createTimeBlocks()
})


