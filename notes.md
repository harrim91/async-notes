Async JavaScript

In JavaScript we sometimes want to perform an action that might take some time to complete.

- making http requests, you have to wait for a response
- manipulating files
- interacting with systems external to our own code

- example - `node read-file/read-file-sync.js`
  - what order to things get logged?
  - what happens to our program if it takes 20 seconds to read a file?
  - what if we were making a request to a rusty old server over a bad internet connection?

In a synchronous language - Ruby - the `readFile` command in would block the execution of the `console.log(3)` until `readFile` had completed.

When used as part of a large app, particularly in a UI, this would lead to a really bad user experience - you need to be able to do lots of things at the same time, without the whole thing freezing up.

JavaScript is asynchronous

This means that it will not wait for one command to finish executing before moving on to the next one.

- example - `node read-file/read-file-1.js`
  - using asynchronous version of `readFile`
  - what order do we expect the numbers to be logged?
  - get 1, 3, 2
  - why?


Example 2 - What if we want to do multiple async things at once?
  - What order do we expect the numbers to be logged?
  - depends on the speed of the filesystem / web server etc
  - this is something we can't control
  - need to factor this in and handle this in the flow of our code

Example 3 - how do we control the flow of how our code gets executed when using asynchroous features?

Callbacks to the rescue!

Asynchronous functions often take a callback parameter which gets executed after the action has been performed - if you want to delay some code from being executed until an action has been performed, put that code into a callback.

See `read-file/read-file-3.js`

Example 4 - Writing our own async code with callbacks.

set-timeout-1
  - what will happen?
  - how can we fix this?

set-timeout-2
  - using callbacks!

Common pattern is for async callbacks to provide us with an error and a data parameter
  - error making a request to a server
  - error reading or writing to a file

Example 5 - API requests
  - here we are calling writeFile and using request
  - the callbacks to these functions give us errors and data params to use.

CALLBACK HELL
  It's probably already easy to see how using callbacks to control async code can get very nested very quickly

  - hard to follow what callback / what level of nesting you are in

  - Callback hell is shaped like a pyramid
  - Caused by trying to write the code in a top to bottom manner

  - Extract callbacks into named functions?
    - github-2
    - end up with a lot of code still, hard to follow, even if it's not nested
  - Use Promises

Promises
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

Not a complete escape from callbacks, but make async code much more readable and concise

Two main methods:
  - .then - handles success (provides a data param)
  - .catch - handles failure (provides the error param)

Chainable

- github-promise

Creating Promises

new Promise constructor
  - takes a callback ironically
  - resolve (OK!) and reject (error) params
