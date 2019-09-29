
import React, { Component } from 'react'


class App extends React.Component {
    render() {
        return <Greet greeting="Hello" />;
    }
}


class Greet extends React.Component {
    render() {
        return <h3 id="header">{this.props.greeting} World</h3>;
    }
}


export default App;