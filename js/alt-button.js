/*
    Button file currently in use

    FileName: js/alt-button.js
*/

$(document).ready(function(){
    //Triggers on click of either button
    $(".register-button").click(function(){
        $(".reg-res").css("display", "block");
        //Checks if checkboxes are checked then outputs the proper responce
        if($("#checkbox-top").prop('checked')){
            $(".reg-res").html("Congratulations! Your spot is reserved");
        }
        else{
            $(".reg-res").html("Oops! Looks like there is an error");
        }
    });
});