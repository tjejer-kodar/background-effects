// BONUS TASKS

/* 6. We have defined a variable called "parallax"
that is getting the first div from our HTML so we can
use it here in the JavaScript file. Take a look in
the HTML to see if you can find the corresponding id.*/

const parallax = document.getElementById("parallax")

/* 7. Use the method addEventListener() on the built in window
variable to listen to the the scroll event. This will make it
possible to detect when we scroll the page.*/

/* 8. Create a variable called "offset" inside the function.
Give it the value window.pageYOffset. This will equal the
amount of pixels the document is currently scrolled along
the Y axis (vertically).*/

/* 9. Join this together by altering our first divs background
position. We do this by altering the parallax variable's
backgroundPositionY style property:
parallax.style.backgroundPositionY

That should equal our offset multiplied with a number (the higher
the number, the faster the scrolling). Don't forget to add a unit
- like "px" or "%":
offset * numberOfYourChoice + "px"

Now you should see a parallax effect on the first div!
*/