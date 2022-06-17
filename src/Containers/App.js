import React from "react";
import CardList from "../Componants/CardList";
import { Component } from "react";
import Searchbox from '../Componants/Searchbox'
import Scroll from '../Componants/Scroll'
import './App.css'



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            })


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
                <h1 className="f1">RoboFriends</h1>
                <Searchbox SearchChange={this.OnSearchChange} />
                <Scroll>
                        <CardList robots={filteredRobot} />
                   
                </Scroll>

            </div>
        )
    }
}





export default App