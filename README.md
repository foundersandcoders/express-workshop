# Express Code-Along Workshop 💻

![express logo](./images/express-logo.png)

The workshop is composed of a number of steps with source files included in the individual folders. Before we start, let's go through some information about what Express is and why we use it.


## Introduction to Express
- In summary, express is a minimal and **unopinionated** web framework for Node.
- Express **handles low level functionality of the Node web server** so that you can focus on the business logic of your app.
- Express provides **only a thin layer of abstraction over vanilla Node** `http` server features. If required you can even add vanilla `http` code and it will be compatible with an Express app.


### Library vs framework
- A library is essentially a set of **functions that you can call**. The key idea behind libraries is code reuse: someone writes a bundle of code that is generally useful and can be shared across applications, so that other developers don't have to write it from scratch each time. Examples: jQuery, Underscore, Ramda, Lodash, Moment. Many of the npm modules can be thought of as libraries, e.g. the Request module.
- A framework embodies some abstract design, with more behaviour built in. In order to use it you need to insert your behaviour into various places in the framework. The **framework's code then calls your code** at these points. Examples: Angular, Express, Hapi, Koa.
- The key difference between a library and a framework is that with the library, you are in control. With the framework, the control is inverted: the framework calls you ('the Hollywood principle'): "Don't call us, we'll call you".
![library vs framework](./images/library-framework.png)


### Opinionated vs unopinionated
- **Opinionated** frameworks are those with opinions about the **"right way"** to handle any particular task.
- **Unopinionated** frameworks, by contrast, have **far fewer restrictions** on the best way to glue components together to achieve a goal, or even what components should be used. They make it easier for developers to use the optimal modules to complete a particular task, however at the cost that **you need to find the modules yourself**.
- **Express is unopinionated**. You can insert almost any compatible middleware you like into the request handling chain, in almost any order you like. You can structure the app in one file or multiple files, and using any directory structure. You may sometimes feel that you have too many choices!


### Abstraction
- Abstraction is a manner in which a person interacts with a program or system without directly working with more complex details "under the hood". Complex details that may not be of interest are abstracted away so that the programmer works with only what is necessary to complete the task.
- Libraries and frameworks are built on the idea of abstraction: they both abstract the underlying code.


### Express vs Node http module
- Express is a framework and not a "module". Express gives you an API, submodules, and methodology and conventions for quickly and easily tying together all the components necessary to set up a functional web server with all the conveniences necessary (static asset hosting, templating, CORS, cookie parsing, POST parsing etc.)
- For example, you can serve a whole directory of static files (images, CSS, JavaScript etc.) from your node server with a single line of code
```js
app.use(express.static('public'));
```
instead of writing long and bespoke functions for your vanilla `http` app: https://github.com/foundersandcoders/Node-Intro-Workshop/blob/completed-workshop/src/handlers/handlers.js#L6-L27


### Express hello world
```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
```
First we require() the express module and create an Express application. This object, which is traditionally named app, has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, and modifying application settings that control how the application behaves (e.g. the environment mode, whether route definitions are case sensitive, etc.)

The middle part of the code (the three lines starting with `app.get`) shows a route definition. The app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path (`'/'`) relative to the site root. The callback function takes a request and a response object as arguments, and simply calls send() on the response to return the string `'Hello world'`.

The final block starts up the server on port `3000` and prints a log comment to the console. With the server running, you could go to localhost:3000 in your browser to see the example response returned.


## Workshop tasks
Let's code along the solutions to the following tasks. A global installation of `nodemon` may be helpful when completing the tasks: `npm i -g nodemon`

1. **Hello world**
    - Task
      - Setup an Express server serving `Hello world` on port 3000
    - Notes
      - Go to Chrome Dev Tools -> Network; and check if the status code is `200` and if the content type is `text/html`
      - Go to Chrome Dev Tools -> Elements; and find `Hello world` in the DOM tree

1. **Hello html**
    - Task
      - Serve the following html
      ```html
      <h1>Hello world</h1><p>Cool</p>
      ```
    - Notes
      - Go to Chrome Dev Tools -> Elements; and check the response in the DOM tree

1. **Hello json**
    - Task
      - Serve the following object as json
      ```js
      { community: 'founders & coders' }
      ```
    - Notes
      - Go to Chrome Dev Tools -> Network; and check if the content type is `application/json`. You may need to hard reload chrome.

1. **Routes to cities**
    - Task
      - Serve `Hello [city name]` (e.g. `Hello London`) on the `/london`, `/nazareth`, `/gaza` paths

1. **One route to cities**
    - Task
      - Serve `Hello [city name]` (e.g. `Hello London`) on the `/london`, `/nazareth`, `/gaza` paths. Use only one route handler to handle the requests.

1. **new-york newyork**
    - Task
      - Serve `Hello New York` on the `/new-york`, `/newyork` paths. Use only one route handler to handle the requests.

1. **My logger middleware**
    - Task
      - Add a logging middleware that logs millisecond timestamp (`Date.now()`) **before** any request to our server is handled.
      - Add a logging middleware that logs millisecond timestamp (`Date.now()`) **after** every request to our server.
      ![middleware flow](./images/middleware.jpg)
    - Notes
      - Middleware and routing functions are called in the order that they are declared. For some middleware the order is important (for example if session middleware depends on cookie middleware, then the cookie handler must be added first). It is almost always the case that middleware is called before setting routes, or your route handlers will not have access to functionality added by your middleware.
      - The **only** difference between a middleware function and a route handler callback is that middleware functions have a **third argument `next`**, which middleware functions are expected to call if they do not complete the request cycle

1. **Morgan logger middleware**
    - Task
      - Add a `morgan` middleware to log standard Apache combined server log output
      - Save logs in the `access.log` file in the `logs-demo` folder
      - Compare the server logs by trying two different browsers

1. **Static files**
    - Task
      - Serve static files from the `public` folder

1. **Post form data**
    - Task
      - Access form data on the server

1. **Handle errors**
    - Task
      - Serve `page node found` with a status code of 404
      - Serve `internal server error` with a status code of 500, for example when trying to call an undefined function in one of the route handlers

1. **Prepare for production**
    - Tasks
      - Set port number
      - Disable `Powered by express` header' (check headers before and after in Chrome Dev Tools -> Network);
      - Enable compression
      - Let browser know to cache static resources for 30 days.

1. **Split into modules**
    - Tasks
      - Split the app into modules
        1. Create a new starting point: `index.js`
        2. First move routes to the `controllers/index.js` folder
        3. Then seperate routes out into individual files.

        ```
        13-split-into-modules
        ├── public
        └── src
            └── app.js
            └── index.js
            └── controllers
                └── error.js
                └── fruit.js
                └── index.js
        ```


## Tips

- You can run `nodemon` in a quiet mode with: `nodemon app.js -q`


## Resources

- [6 Easy Ways to Speed Up Express](http://stackabuse.com/6-easy-ways-to-speed-up-express/)
