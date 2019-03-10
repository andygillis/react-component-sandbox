# React Component Sandbox

## To run:
`npm install`

`npm start`

You can view the compiled code running locally at http://localhost:3000/

## Description:
This very simple component sandbox contains an example of each kind of component used by React, including stateful and stateless examples. 

This demo also contains basic wiring examples of single-page navigation (routing), how to wire a single-page app, and basic form interaction.

The intended audience is Software Engineers who are either learning React or who want a simple reference to build off of. Most of the basic building blocks required to create a React single-page web application are illustrated here.

Some interesting details:
* As you play with the components, you can save changes and see the updates in the browser as you make them. The browser reacts to your changes in real time. This is a real time-saver.
* React allows you to create single-page web applications that do a lot with very little code. It builds off of multiple knowledge bases including web application wiring, JavaScript (Node.js), XML, and HTML.
* React uses a special XML-like syntax called JSX, you see this in most of the component .js files. JSX allows you to model web components in a familiar and pleasing way. An important point is that JSX is transpiled into regular JavaScript, and that transpiled JavaScript can be pretty complex. JSX encapsulates this complexity, making application development faster and more enjoyable.
* To make it easier to manage the various JavaScript transpiled files, a technology called Webpack is used. Webpack consolidates all of the application's JavaScript code into one file called *bundle.js*. This allows the browser to download all the necessary code in one file, which in turn, enables the React experience. Pay attention to the size of this file as your application grows.
* The `npm start` command correlates to the start script in *package.json*. This command starts the `webpack-dev-server`, which in turn reads in *webpack.config.js*, does the transpiling (using Babel), bundles the JavaScript (using Webpack), and starts a web server on port 3000. 

## Components:
1. **App.js** - This is the main parent container component rendered in the page, and it contains all the components that comprise the single-page React application. Hence it's name, `App`.
2. **Component1.js** - Component created using `ReactDOM.createClass`.
3. **Component2.js** - Component created using an ES6 class.
4. **Component3.js** - Stateless component, note arrow function syntax.
5. **Component4.js** - Server-side render (using no JSX).
6. **Clock.js** - An example of a live stateful component.
7. **Clock2.js** - An example of a live stateless component.
8. **Menu.js** - Stateless navigation component. Note the use of icons, these are fun and free!
9. **MessageBanner.js** - Stateless component used by the Message Forms. This illustrates React component hiearchy.
10. **MessageForm.js** - Stateful form component, utilizes MessageBanner. Here you can see how JSX is smoothly mixed with HTML to create easily conceived and rendered web components. Also note how smoothly the form updates the GUI.
11. **MessageForm2.js** - Stateless form component, utilizes MessageBanner. Again the JSX is mixed with HTML and the form still smoothly updates the GUI. The stateless component has a cleaner feel to the component code since there is less complexity.
12. **Oops404.js** - Error handling component, this is used when routing processes an invalid address.
## Wiring Examples:
1. **Wiring** - The HTML page *index.html* is located in the `dist` directory and is the entry point. Here you can see where the wiring begins. 
	* The div tag with `id="react-container"` is referencing the class in *index.js* (which is ultimately consolidated into *bundle.js*). In *index.js*, you can see the `Router` and the rendering of the `react-container`. 
	* The script tag in *index.html* references *bundle.js*, the consolidated JavaScript of the application, which has been transpiled and bundled.
2. **Navigation/Routing** - The overall application navigation is defined using a `Router` in *index.js*, where you can also see the route path values and the components they route to. In this case, we're routing to `App`, the parent container of the web application, and sending `"\"` or `"messages"` as the route path value.
	* **How it works** - Examine *App.js*. In order for the `App` component to render the appropriate child components, `App` examines the current value of `this.props.location.pathname`, which is the current route path value. Using a simple decision structure (in this case a ternary expression), the appropriate components are then rendered. Examine *Menu.js*. To navigate, the user clicks one of the `Link` tags contained in the `Menu` component. This causes the clicked `Link` component to update `props.location.pathname` with the route path value contained in its `to` attribute, either `"\"` or `"\messages"`. Then `App` rerenders and displays the appropriate child components. Examine the URL as you navigate, you will see it switching between http://localhost:3000/#/ and http://localhost:3000/#/messages. This creates clean and manageble GUI navigation code, and is a good example of the simplicity and power of React and JSX.
	* To add another route, add your new `Route` and path to *index.js*. Next, add another choice to the decision structure in *App.js*. Then create a new menu item in *Menu.js* by adding another `Link` JSX tag, making sure to put the new path value in the `to` attribute. Also confirm the new path matches between *index.js*, *App.js*, and *Menu.js*.