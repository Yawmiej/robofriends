import React, {Component} from "react";
import CardList from "./CardList"
import SearchBox from "./SearchBox";


class App extends Component {
    constructor (){
        super();
        this.state = {
            robot: [],
            searchInput: ""
        }
    }

    render () {
        const filteredRobot = this.state.robot.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots={filteredRobot}/>
            </div>
        )
    }

    onSearchChange = (event) => {
        this.setState({searchInput: event.target.value})
    }
}

export default App;