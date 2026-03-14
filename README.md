# Node.js Command Line Mini Programs

This project contains three small command-line programs written in
**JavaScript (Node.js)**. Each program reads input from the command line
using `process.argv` and prints the result to the console.

The goal of this project is to practice JavaScript outside the browser
by building simple CLI applications.

------------------------------------------------------------------------

## Programs Included

### 1. Rock Paper Scissors

A simple command-line version of the classic game.

**Features**

-   Takes the player's move as input
-   Randomly generates the computer's move
-   Determines the winner
-   Outputs the result (win / lose / draw)

**Example**

`node rockPaperScissors.js rock`

Example output:

You chose rock. Computer chose scissors. You win!

More information: https://en.wikipedia.org/wiki/Rock_paper_scissors

------------------------------------------------------------------------

### 2. Pig Latin Translator

Translates an English phrase into **Pig Latin**.

**Rules**

-   If a word starts with a consonant → move the first letter to the end
    and add `ay`
-   If a word starts with two consonants → move both letters to the end
    and add `ay`
-   If a word starts with a vowel → add `way` to the end

**Example**

`node pigLatin.js "Pig Latin is hard to speak"`

Example output:

Igpay Atinlay isway ardhay otay eakspay

More information: https://en.wikipedia.org/wiki/Pig_Latin

------------------------------------------------------------------------

### 3. Caesar Cipher

Encrypts a phrase using a **Caesar Cipher**.

**Features**

-   Takes a phrase and a shift number as input
-   Supports positive and negative shifts
-   Case insensitive
-   Outputs the encrypted text

**Example**

`node caesarCipher.js "hello world" 3`

Example output:

khoor zruog

More information: https://en.wikipedia.org/wiki/Caesar_cipher

------------------------------------------------------------------------

## Requirements

-   Node.js

Check installation:

`node -v`

------------------------------------------------------------------------

## Running the Programs

Clone the repository:

`git clone <repository-url>`\
`cd <repository-name>`

Run any program using Node.js:

`node <filename>.js <arguments>`

------------------------------------------------------------------------

## Author

Student project for practicing **Node.js command-line applications**.
