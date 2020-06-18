$(document).ready(function(){
    const $date = $(".date");
    const $inputForm = $(".input")
    const hours = [
        "9am", "10am", "11am", "12pm"
    ]
    const currentHour = moment().format("H");

    $date.text(moment().format("llll"));

    for(let i in hours) {
        const iTime = parseInt(i) + 9;
        const $inputGroupDiv = $("<div>");
        const $input = $("<input>");
        const $hourDiv = $("<div>");
        const $buttonDiv = $("<div>");
        const $saveBtn = $("<button>");
        const $saveIcon = $("<i>");

        $inputGroupDiv.addClass("input-group mb-3");
        $input.addClass("form-control").attr("type", "text");
        $hourDiv.addClass("input-group-prepend input-group-text").text(hours[i]);
        $buttonDiv.addClass("input-group-append");
        $saveBtn.addClass("btn btn-primary saveButton");
        $saveIcon.addClass("material-icons").text("save");

        if(iTime > currentHour){
            $input.addClass("future");

        }
        else if(iTime < currentHour){
            $input.addClass("past");
        }
        else{
            $input.addClass("current");
        }

        if(localStorage.getItem(hours[i])){
            input.val(localStorage.getItem(hours[i]))
        }
        
        $saveBtn.append($saveIcon);
        $buttonDiv.append($saveBtn);
        $inputGroupDiv.append($hourDiv, $input, $buttonDiv);
        $inputForm.append($inputGroupDiv);
    }

    $(document).on("click", ".saveButton", function(e){
        e.preventDefault();
        const inputVal = $(this).parents(".input-group-append").siblings("input").val();
        const inputHour = $(this).parents(".input-group.append").siblings(".input-group-text").text();

        localStorage.setItem(inputHour, inputVal);
    })


})

