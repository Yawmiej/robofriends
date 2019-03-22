import React, {Component} from "react";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox";
import {robots} from "../robot";
import Scroll from "../components/Scroll";


class App extends Component {
    constructor (){
        super();
        this.state = {
            robot: robots,
            searchInput: ""
        }
    }

    render () {
        const {robot, searchInput} = this.state
        const filteredRobot = robot.filter(robot => {
            return robot.name.toLowerCase().includes(searchInput.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobot}/>
                </Scroll>
            </div>
        )
    }

    onSearchChange = (event) => {
        this.setState({searchInput: event.target.value})
    }
}

export default App;