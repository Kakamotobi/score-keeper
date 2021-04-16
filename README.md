# score-keeper

## Description

This is a score keeper for 2 players.

## Features

- Players can enter their names to display on the score board.
- Players can select the score they will be playing to.
  - Selecting a new winning score mid-game will reset the current scores.
- Points can be deducted even if the winner has been declared (game is back on!).
- Reset button resets the current scores.
- When a player wins:
  - Winner is displayed green.
  - Loser is displayed red.
  - The moving banner displays the winner.
- Round results are recorded in a table.

## Demo

![demo](score-keeper-demo.gif)

## Link

Live-site URL: https://score-keeper-beta.vercel.app/

## My Process

### Built With
- HTML
- CSS
- JavaScript

### What I Learned/Applied
- First refactoring
  - Used player objects to access each respective elements.
  - Declared general functions that apply both ways (player, opponent).
- Events
  - Adding a class to an element upon a certain event and condition. 
  - Ex: when a player wins/loses display green/red color.
- Create elements in DOM
  - Ex: recording results in table.
