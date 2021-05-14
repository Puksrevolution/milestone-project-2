Milestone Project 2 
======

## **JavaScript documentation** ##

[Main README.md file](https://github.com/Puksrevolution/milestone-project-2/blob/master/README.md)

[View the live project here.](https://puksrevolution.github.io/milestone-project-2/)

---

# Table of contents

- [Step One](#step-one)
  - [Ball and position](#ball-and-position)
- [Step Two](#step-two)
  - [Game Loop](#game-loop)
- [Step Three](#step-three)
    - [Speed](#speed)
- [Step Four](#step-four)
    - [Contain the game field](#contain-the-game-field)
- [Step Five](#step-five)
    - [Game end](#game-end)
- [Step Six](#step-six)
    - [Score](#score)
- [Step Seven](#step-seven)
    - [Modal](#modal)
- [Step Eight](#step-eight)
    - [A breath moment](#a-breat-moment)
    
---

Step One
======

## **Ball and position** ##

- Creating a class with two functions.
- Fist function creates a div, with styles and a start position.
- Second function sets a different position for the div.
- Tested it with a setInterval() of 1000 milliseconds.

[Screenshots of the steps](https://github.com/Puksrevolution/milestone-project-2/tree/master/assets/img/screenshots/jsDocu/1_renderer)

Step Two
======

## **Game Loop** ##

- Creating a counter function to add one px to the position of the div/ball, so that it moves down.
- Creating a class Game, which purpose is to “run” the game.
- Moving the counter function into the game class.
- Separate the time interval from position/px (counter function) in a separate class Box.
- Creating a click event for the whole game field in the class Game.
- Creating a function that changes the position of the div/ball by every click on the game field in 
the class Box and connected it with the click event in the class Game.

[Screenshots of the steps](https://github.com/Puksrevolution/milestone-project-2/tree/master/assets/img/screenshots/jsDocu/2_gameLoop)

Step Three
======

## **Speed** ##
 
- Giving the div/ball some speed on the way down.
- Giving the class Box a new variable speed with value 0.
- Increase the speed of the div/ball and combine it with the position.
- Changing the moveUp() function and replace the position with the speed .
variable click event to take the fall speed from the div/ball.

[Screenshots of the steps](https://github.com/Puksrevolution/milestone-project-2/tree/master/assets/img/screenshots/jsDocu/3_speed)

Step Four
======

## **Contain the game field** ##

- Creating a function into the start function of the class Game to contain.
the game field, getting alert when div/ball touches the top or bottom border of the game field.

[Screenshots of the steps](https://github.com/Puksrevolution/milestone-project-2/tree/master/assets/img/screenshots/jsDocu/4_contain)

Step Five
======

## **Game end** ##

- Stopping the position/speed and interval loop.
- Creating a new variable  timer with value setInterval().
- Setting a function into the setInterval() with clearInterval(timer). 
to stop the interval loop, when game ended.

[Screenshots of the steps](https://github.com/Puksrevolution/milestone-project-2/tree/master/assets/img/screenshots/jsDocu/5_gameEnd)

Step Six
======

## **Score** ##

- Adding a score variable with value 0.
- Adding a count function to it.
- Including the return of the score variable into the alert message.

[Screenshots of the steps](https://github.com/Puksrevolution/milestone-project-2/tree/master/assets/img/screenshots/jsDocu/6_score)

Step Seven
======

## **Modal** ##

- Creating a if else function with a style display with a none and block value.
- Creating a variable to manipulate the inner HTML of the modal targeting the content.
- Changing the alert to into the modal function.

[Screenshots of the steps](https://github.com/Puksrevolution/milestone-project-2/tree/master/assets/img/screenshots/jsDocu/7_modal)

Step Eight
======

## **A breath moment** ##

- Set a setTimeOut function so that the game starts a second after the pages loaded.

[Screenshots of the steps](https://github.com/Puksrevolution/milestone-project-2/tree/master/assets/img/screenshots/jsDocu/8_timeOut)

Step Nine
======
- Added a div element below the game field div in the game.html to create a count down and styled it
- Added a count down function to the js with that manipulate the innerHTML of the count down div
- Added a time out function to the div element that turns opasity to 0
- Needed changes in css:
  - game field background-color transparent and z-index 2
  - count down modul opasity 1 and z-index -1

[Screenshots of the steps](https://github.com/Puksrevolution/milestone-project-2/tree/master/assets/img/screenshots/jsDocu/9_countDown)

[Back to contents](#contents)