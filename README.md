# Express Code-Along Workshop 💻

The workshop is composed of a number of steps with source files included in the individual folders. Before we start, let's go through some information about what Express is and why we use it.

## Introduction to Express
- In summary, express is a minimal and **unopinionated** web framework for Node.
- Express **handles low level functionality of the Node web server** so that you can focus on the business logic of your app.
- Express provides **only a thin layer of abstraction over vanilla Node** `http` server features. If required you can even add vanilla `http` code and it will be compatible with the Express app.

## Workshop tasks

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
      - Go to Chrome Dev Tools -> Elements; and find check the response in the DOM tree

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
      <img src="docs/middleware.jpg" alt="middleware"/>

1. **Morgan logger middleware**
    - Task
      - Add a `morgan` middleware to log standard Apache combined server log output
      - Save logs in the `logs` folder
      - Compare the server logs by trying two different browsers




























1. **Disable `Powered by express` header'**
    - Task
      - T
    - Notes
    ```js
    app.disable('x-powered-by');
    ```
