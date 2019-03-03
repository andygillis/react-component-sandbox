var Component2 = require("./src/component/Component2");
var Component4 = require("./src/component/Component4");
var Clock = require("./src/component/Clock");
var React=require('react');
var ReactDOMServer=require('react-dom/server')
var express = require("express");
var app = express();

app.use((req, res, next) => {
    console.log(`${req.method} for ${req.url}`);
    next();
});

app.use(express.static("./dist"));

app.get('/server', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    var component2 = React.createFactory(Component2.Component2)({renderText:'HI from Component2, I\'m serverside with JSX!'});
    var componentString2 = ReactDOMServer.renderToString(component2);
    var component4 = React.createFactory(Component4.Component4)({renderText:'HI from Component4, I\'m serverside without JSX!'});
    var componentString4 = ReactDOMServer.renderToString(component4);
    //componentDidMount() doesn't fire when using serverside render, so clock state won't change and is static:
    var clock = React.createFactory(Clock.Clock)({date: new Date()});
    var clockString = ReactDOMServer.renderToString(clock);
    res.end("<title> Server Render </title> " + componentString2 + componentString4 + (clockString + "componentDidMount() doesn't fire when using serverside render, so clock state won't change and is static"));
});

app.listen(3000);

console.log("express app running on port 3000");

module.exports = app;