/*
Original "button" file

FileName: js/button.js

This file is not included in the final html file due to Cross Origin issues. 
More info in the README.
*/

$(document).ready(function(){
    //Triggers on button click
    $(".register-button").click(
        function(){
            //sets the endpoint url
            const endpoint = "https://ykx8pov945.execute-api.us-east-1.amazonaws.com/test-Prod/testFunction";
            //Used later to pull data from promise statement
            var data;
            if($("#checkbox-top").prop('checked')){
                //AJAX statement the read the responce from the endpoint
                $.ajax({
                    url: endpoint,
                    //Fails due to webpage not supporting JSONP
                    dataType: "jsonp",
                    crossDomain: true,
                    type: "GET",
                    success: function (result, status, xhr){
                        data = result;
                    },
                });
                $(".reg-res").html(data.submitok);

            }
            else{

            }
        }
    )
});
