import React from "react";
import CardList from "./CardList";
import { robots } from './robots';
import { Component } from "react";
import Searchbox from './Searchbox'



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    OnSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }


    render() {
        const filteredRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())

        })
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <Searchbox SearchChange={this.OnSearchChange} />
                <CardList robots={filteredRobot} />
            </div>
        )
    }
}





export default App