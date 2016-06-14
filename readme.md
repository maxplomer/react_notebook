# Description of Coding Test

Create a single-page web app of an online notebook using HTML/JavaScript. You can use any flavor of JavaScript you want, including any framework/library. Please send your code in a zip format. We will be judging you on your JavaScript, HTML and CSS code, not on fancy artwork. However, you should be able to show your ability to provide an intuitive UI design.
 
Here are the requirements:
 
1.  The notebook has a maximum of 5 pages, all blank to start.

2.  The web app should start on page 1.

3.  You need to provide the ability to turn pages.

4.  The user should be able to enter text into any page.

5.  As the user enters text, that text should be saved to that it persists through a page refresh.

6.  The notebook should start blank again if there is a new browser instance.


# Implementation

This solution uses a single react component that saves the state to a javascript cookie.


# Install/Running

If you are running in chrome you will need to run from a static webserver, or else will get cross domain error.


Install server with:

    npm install http-server -g


Then run server with:

    http-server


Should be available at  http://127.0.0.1:8080

