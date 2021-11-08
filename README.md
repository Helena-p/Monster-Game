# Monster Game

This is a project during [Vanilla Js Academy](https://gomakethings.com/) by Chris Ferdinandi. The Vanilla JS Academy is a 10 week project-based training program designed to help you learn to solve problems and think in JavaScript.<br>
[Play the game](https://helena-p.github.io/Monster-Game/)

## Overview

The game is played by the user clicking on a door that will reveal a monster or a sock. The goal is to click on all the doors without finding a sock.

The project's objective was to shuffle an array of monsters using the Fisher-Yates shuffle algorithm and render them as images in the browser. Also to consider XSS attacks when handling third-party data and structure the project to accommodate users navigating by screen readers with dynamically updated data.

## My process

I started the project by shuffling the monster array with the Fisher-Yates algorithm and rendering the monsters in the browser. Before rendering the markup into the browser I used a helper function, cleanHTML, to sanitize the data. To convert the project into a game, I exchanged the monster image for the door image in the markup. Added a separate function to create the monster image to replace with the door when the user clicks. <br>To accommodate users navigating with screen readers and a keyboard, the door was placed inside a button element.
To announce the updated content when a user wins or loses, the user is directed to a new page with a link if the user would like to play another game, that directs back to the game page.

## Learning outcomes
