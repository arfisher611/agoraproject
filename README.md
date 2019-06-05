# Agora - Alex Fisher

This is Alex Fisher's completed Agora coding project.
This project was made on BitBucket not GitHub so only one commit is shown here.

## Dependencies

jQuery, Javascript ES7

## How to Run

Open the index.html file using your prefered internet browser.

## List of Files/Functions

### index.html

- This is the main HTML file for the project and contains the output and structure of the final product.

### css/style.css

- The main css file for the project containing all the styling for both desktop and mobile.

### js/alt-button.js

- The current functioning version of the button class. This was originally a placeholder, but due to time constraints is the current file.

- (".register-button).click
	- Triggers on the click of either button
	- Posts the proper responce based on whether or not the checkbox is clicked

### js/button.js

- This file was the original button file that properly addresses the requirement of reaching the endpoint.
- However due to Cross Origin issues since this was built on localhost it failed.
- The final version showing uses JSONP to avoid this issue however since the endpoint does not support it, this too failed.
- I also attempted to use a PHP proxy to attempt to avoid the Cross Origin issues, but this also failed.
- Given more time I would take the project off of localhost to avoid the security issues.

### js/checkbox.js

- Links the two checkboxes together

- (".checkbox-top").click
	- Triggers when the top checkbox is clicked.
	- Checks/Unchecks the other checkbox to link the two.
	
- (".checkbox-bottom").click
	- Triggers when the bottom checkbox is clicked.
	- Checks/Unchecks the other checkbox to link the two.


### js/datetime.js

- Gets the date/time and controls the countdown timer.

- String getDate()
	- Gets the current date.
	
- String addZero
	- Adds 0 to the front of any single digit number.
	
- int standardize()
	- Converts military time to standard time.
	
- String ampm()
	- Returns "AM" or "PM" based on time of day
	
- String getTime()
	- Gets current time in "HH:MM:SS XM" format
	
- countdown()
	- Runs the countdown clock
	- Interval runs every 1 second
	- Will stop when countdown reaches zero
