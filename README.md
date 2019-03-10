# React Component Sandbox

## To run:
>`npm install`
>
>`npm start`
>
>You can view the compiled code running locally at http://localhost:3000/

>This very simple example contains each flavor of component used by React, including stateful and stateless examples. 
>
>This demo also contains basic wiring examples of single page navigation (routing), how to wire a single-page app, and basic form interaction.
>
>The intended audience is Software Engineers who are either learning React or just want a simple reference to build off of. Most of the basic building blocks required to create a React single-page web application are illustrated here.
>
>Some things of note:
>>* As you play with the components, you can save changes and see the updates in the browser as you make them. The browser reacts to your changes in real time. This is a fun time-saver.
>>* React allows you to create single-page web applications that do a lot with very little code. It builds off of multiple knowledge bases including web application wiring, JavaScript (Node.js), XML and HTML.
>>* React uses a special XML-like syntax called JSX, you see this in most of the component .js files. JSX allows you to model web components in a familiar and pleasing way. The interesting thing is that JSX is transpiled into traditional JavaScript, and that JavaScript can get pretty complex. JSX makes development faster and more enjoyable.
>>* To consolidate the various JavaScript transpiled files, a technology called Webpack is used. Webpack essentially consolidates all of the application's files into one JavaScript file called bundle.js. This allows the browser to download all necessary code, which enables the React experience. Pay attention to the size of this file as your application grows.
>>* The `npm start` command is actually correlating to the start script in package.json. This starts the webpack-dev-server, which in turn reads in webpack.config.js, which then does the transpiling (using babel), packs the JavaScript, and starts a web server on port 3000. 

## Components
>1. **App.js** This is the main parent container component rendered in the page, it contains all the components that comprise the single-page React application. Hence it's name, App.
>2. **Component 1.js** - Component created using ReactDOM.createClass.
>3. **Component 2.js** - Component created using an ES6 class.
>4. **Component 3.js** - Stateless component, note arrow function syntax.
>5. **Component 4.js** - Server-side render (using no JSX).
>6. **Clock.js** - An example of a live component with state management.
>7. **Clock2.js** - An example of a live stateless component.
>8. **Menu.js** - Stateless navigation component. Note use of icons, these are fun and free!
>9. **MessageBanner.js** - Stateless component used by the Message Forms. This illustrates React component hiearchy.
>10. **MessageForm.js** - Stateful component, utilizes MessageBanner. Here you can see how JSX is smoothly mixed with HTML to create easily conceived and rendered web components. Also note how smoothly the form updates the GUI.
>11. **MessageForm2.js** - Stateless component, utilizes MessageBanner. Again the JSX is mixed with HTML and the form still smoothly updates the GUI. The stateless component has a cleaner feel to the component code since there is less complexity.
>12. **Oops404.js** - Error handling component, used when routing gets an invalid address.
## Wiring Examples
>1. **Routing** - Take a look at Menu.js - there you can see how the single-page routing is wired. To add a menu item, simple add another Link element. This is wired into the app through index.js, where you can see the route paths. Here you get to see some of the simplicity and power of JSX.
>2. **Wiring** - The webpage index.html is located in the dist directory and is the entry point. Here you can see the wiring. 
>>Two things of note:
>>* The div tag with id="react-container" is actually referencing the class in index.js (which is consolidated into bundle.js), and this is the entry point for the React app. In index.js, you can see the route paths (referenced above) and the rendering of the react-container. The route paths reference App.js, the parent container of the web application.
>>* The script tag references bundle.js, this is the consolidated JavaScript of our application, transpiled and bundled.
