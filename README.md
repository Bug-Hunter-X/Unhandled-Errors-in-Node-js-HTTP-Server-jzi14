# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: the lack of proper error handling in HTTP servers.  Failure to handle potential errors can lead to unexpected crashes and downtime.

The `bug.js` file shows an example of an HTTP server without error handling.  The `bugSolution.js` file provides a corrected version with comprehensive error handling.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Attempt to access the server (e.g., using a browser or `curl`).  The server will appear to work, but it has a vulnerability. Try stopping it using Ctrl+C.  If you leave it running, then try sending a bad request, then you might see the server crash.

## Solution

The solution is to add comprehensive error handling to catch potential issues and prevent crashes. The `bugSolution.js` shows this best practice.