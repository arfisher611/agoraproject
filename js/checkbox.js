/*
    Links the two checkboxes on the page together.

    FileName: js/checkbox.js
*/

$(document).ready(function(){
    //Links the bottom checkbox to the top one if top is clicked   
    $("#checkbox-top").click(
        function(){
            //if top is checked, check bottom
            if($("#checkbox-top").prop('checked')) $('#checkbox-bottom').attr('checked', true);
            //else uncheck bottom
            else $('#checkbox-bottom').attr('checked', false);
        }
    );

    //Links the top checkbox to the bottom one if bottom is clicked
    $("#checkbox-bottom").click(
        function(){
            //if bottom is checked, check bottom
            if($("#checkbox-bottom").prop('checked')) $('#checkbox-top').attr('checked', true);
            //else uncheck bottom
            else $('#checkbox-top').attr('checked', false);
            console.log();
        }
    );
});