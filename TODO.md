TODO:

* Declutter/split server.js
* Tests
* it's a bad idea to send user’s password over the network or to store it in a cookie. find alternative
* input validation: take a look at the [express-validator](https://github.com/ctavan/express-validator). You can see it being used through the [hackathon-starter](https://github.com/sahat/hackathon-starter) project.
* Check Step 11 for inspiration to torrent download agenda
* Perf
  * Check bottleneck on GET /api/shows
  * Not necessary to retrieve information about every single episode of every show because we don’t see it until we view the detail page of that show.
  * we are storing images as Base64 strings that are are fairly large in size and resolution (680 x 1000), not cached, not optimized.
  * You could further improve performance by putting Redis database in front of the MongoDB for caching.
    * Also take a look at the Couchbase database which seems to combine the best of both worlds. Couchbase seems to replace Redis, MongoDB and Riak all togther.
    * Firebase
  * Consider customizing the Bootstrap framework. If you are not using certain components such as well or button-group, remove it from bootstrap.scss
  * Experiment other perf optimizations (check csswizardry's)
* Suggestions:
  * User profile page with a list of subscribed shows
  * Dynamically update page <title> on each route
  * Create a personalized calendar view with subscribed shows
  * Create a calendar view that displays every show (time, date, network, episode overview)
  * Display a show’s episodes in Bootstrap Tabs, grouped by seasons
  * Text message notifications
  * Customizable alert time (2 hours in advance, 1 day in advance, etc.)
  * Add an admin role; only admins can add new TV shows
  * Display Twitter feed for each TV show
  * Create an AngularJS service for fetching and displaying latest news and gossip about a TV show
  * Resize thumbnails via [sharp](https://github.com/lovell/sharp) and optimize via [gulp-imagemin](https://www.npmjs.org/package/gulp-imagemin) then upload to Amazon S3
  * Add Redis database as a caching layer
  * Explore token-based authentication
  * https://medium.com/@luisvieira_gmr/html5-prefetch-1e54f6dda15d
