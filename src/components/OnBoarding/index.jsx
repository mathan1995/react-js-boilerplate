import React, { Component } from "react";
import "./index.css"
class OnBoarding extends Component {


    render() {

        const users = ["Hello", "welcome", "Hello !"];
        const listItems = users.map(user => <li>{user}</li>);
        return (
            <div id="listView">
                <ul>{listItems}</ul>
            </div>
        )
    }

}

export default OnBoarding;



