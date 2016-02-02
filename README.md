## Website Performance Optimization portfolio project

#### Challenge was ACCEPTED

###Part 1: PageSpeed Insights

To check PageSpeed, first download the .zip file to your local machine

* Check out the repository
* run a local server

  ```bash
  $> cd /path/to/downloaded-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

* Open a browser and visit localhost:8080
* Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/downloaded-project-folder
  $> ngrok http 8080
  ('/.ngrok http 8080' from the root directory was necessary (for me).)
  ```

* Copy the public URL ngrok gives you add 'dist' and run it through PageSpeed Insights!


#### Optimizations
 * index.html
    * inlined CSS
    * added async to scripts
    * added print media query to print.css
    * optimized profilepic.jpg and pizzeriapic (pagespeed insights provided optimization)


___
###Part 2: Optimizing Frames Per Second in pizza.html

#### Optimizations   
  * pizza.html
    * added viewport tag for responsiveness
    * inlined style.css

    * added .col-xs-6 to randomPizzas to ensure pizzas resized to same dimensions

  * testpizza.js (deleted main.js)
    * removed function for determineDx
    * removed the conversion from pixels to percent for changePizzaSizes function, now based
    on the percentage
    * moved array of DOM nodes out of for loop*changed to getElementByClassName() from querySelectorAll()
    * made a local variable for randomPizzas.length and items.length
    * declared phase outside the loop to prevent it from being made everytime the loop is executed
    * declared variable items outside of the loop
    * changed querySelector to getElementById() or getElementByClassName() where applicable


  * optimized the pizza resizer based on recommendations given in the browser rendering course
  * made optimizations to the background pizzas(e.g. remove DOM requests outside of the for loop)

Click on Cam's Pizza link on the index page, open DevTools, click on Timeline.
Record scrolling and pizza changes, also note the times in the console, time to make 10 frames and time to change the sizes of pizzas will appear when action is complete.

The updated/optimized 'pretty' files are in the 'src' folder, however testpizza.js is the file I created and optimized, instead of main.js.


#### Using Gulp
  Once you have downloaded the project and you have Node and Npm installed on your local computer, you can open the terminal or command line...cd into the project folder and type 'npm install' which will install devDependencies listed in the package.json. if any changes need to be made in the src you can run a gulp task listed in the gulpfile and it will compile it in the dist folder.
