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
