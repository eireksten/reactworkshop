# Workshop - React.js

We're implementing a simple registration application using React.js!

### Prerequisites
- Install Node.js (http://nodejs.org/)
- Install webpack using npm (`npm install -g webpack`)
- Install git (http://git-scm.com/)
- Clone this repository (`git clone https://github.com/eireksten/reactworkshop.git`)
- Install project dependencies (`npm install`)

### Commands
- Starting the server: `npm start`
- Building the client side code: `webpack --progress --color --watch`

### Exercises

- Implement a view for a single event. It should contain:
  - General information about the event
  - A list of all registered participants
  - A waiting list for the participants that exceed the event capacity.
- Implement the possibility of registering for an event.
- Implement functionality for creating new events.

### Docs
- React.js documentation: https://facebook.github.io/react/docs/getting-started.html
  - Thinking in React, especially, is a good article to get to grips with how React.js works.
- Babel.js (http://babeljs.io/). This application uses babel.js to compile ECMAScript 6 and JSX into plain javascript. The only ES6 specific functionality in use is the module system, but feel free to try out other cool things!
- You can learn more about the ES6 module system at http://www.2ality.com/2014/09/es6-modules-final.html