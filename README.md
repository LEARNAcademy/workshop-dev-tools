# Understanding Developer Tools
[MeetUp Event](https://www.meetup.com/LEARN-academy/events/274367569/)
[LEARN DevTools MockSite](https://learn-workshop-dev-tools.s3-us-west-1.amazonaws.com/index.html)

## Purpose
Get exposure to a few tools commonly used by web developers

## Browser developer tools (30 mins)
  * Why do developers use (Chrome) browser tools  -- change meetup to require Chrome (not VSCode)
      During process of development, it is usually quicker to use Chrome Dev Tools 
      for experimentation, debugging, and testing. Debugging - defects and "bugs" are terms
      used interchangably to describe something isn't working or behaving the way is it expected to.
      By "debugging", a developer is doing the investigative work to figure out 
      what (and where) the problem is while the program is running.
  * Short review: HTML CSS JS
      There are three languages often used in building a webpage: 
      - HTML: HyperText Markup Language - For the structure and raw content of the page 
        There are two input fields and a button with "Add" displayed on it.
      - CSS: Cascading Style Sheets - Presentation of content
        The button is green with rounded edges and becomes a lighter shade of green when the cursor hovers the button.
      - JS: Javascript - Interactivity of content
        When that button is clicked, it adds two numbers and displays the sum.
  * What is the DOM?
      The DOM (Document Object Model) is what gets created when the browser loads your website (html file). The DOM lives in the browser and is a representation of your website. Often times, it looks like HTML but you can actually directly manipulate it and see those changes reflected in the browser. 

      [What is the DOM?](https://css-tricks.com/dom/)
  * View and Change the DOM
    To access the DOM through Chrome DevTools: 
      On Mac, two-finger click on the website and click "Inspect" on menu.
      `Command+Shift+C` or `Command+Option+C`
      On Windows, right-click 
      `Control+Shift+C`
    * Edit an element
        Edit text: Notice how the change in text is reflected in the browser but our html document doesn't represent that change?
    * Add an element
        Edit as HTML
    * Delete element
        Notice when you refresh, it reloads. All the changes you've made in the DOM have been wiped.
    * Add attribute to element - example
    * Select an element in the page to inspect it
        Helpful for when the structure involves heavily nested elements

  * View and Change Page Styles
    * Change color, font, font-size
    * Change margin, padding, alignment

  * Mobile Simulator

## Console (20 mins)
  * Why?
      When a website is running javascript, it is helpful to have a way to understand parts of the code in a function or to confirm a result by outputting data. In the Console tab, plain javascript can be run.
  * Console (e.g.: log(), warn(), error())
  * alert()
  * confirm()
  * prompt()
  * Breakpoints 
  * Hack the game (mention js basics, read and break down a couple lines. eg.variable)

## Debugger (5 mins)
  * Why? 
      Sometimes you'll want to get an even closer look at what's happening within your code (without having to use breakpoints)

## Command Line Basics (10 mins)
  * Why?
      Sometimes it's often easier to do things in terminal especially when things need to happen multiple times but also it's nice to have minimize the number of windows that need to be open as you navigate through files.
  * Windows & iOS (linux)
  * Open terminal or command prompt
    Prompt will indicate `computer name: current location [user]`
    On Mac: `~` this is root directory
  * Navigate file system:
    List files: `ls` / `dir`
    Make directory: `mkdir`
    Change directory: `cd [subdirectory]` / `cd [subdirectory]`
    Change parent directory: `cd ..`
    Change grandparent directory: `cd ../..`
    Change to current directory `cd .`
    Print working directory (show path of current directory): `pwd` / `cd`
    Create file: `touch [fileName]` / `fsutil file createnew [filename] 0`
    
### Resources
[Chrome-DevTools](https://developers.google.com/web/tools/chrome-devtools)

[Intro to Terminal](https://developers.google.com/web/tools/chrome-devtools)

[Codecademy DevTools](https://www.codecademy.com/articles/use-devtools)
