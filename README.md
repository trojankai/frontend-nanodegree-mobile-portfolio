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
___
###Part 2: Optimizing Frames Per Second in pizza.html

####(Some) Optimizations made to pizza.html and testpizza.js(instead of main.js)
  * meta tag for viewport added
  * optimized the pizza resizer based on recommendations given in the browser rendering course
  * made optimizations to the background pizzas(e.g. remove DOM requests outside of the for loop)

Click on Cam's Pizza link on the index page, open DevTools, click on Timeline.
Record scrolling and pizza changes, also note the times in the console, time to make 10 frames and time to change the sizes of pizzas will appear when action is complete.

The updated/optimized 'pretty' files are in the 'src' folder, however testpizza.js is the file I created and optimized, instead of main.js.
