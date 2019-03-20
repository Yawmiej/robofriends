import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import {robots} from './robot';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
        
        // console.log(filterCard);
    }

    render() {
        const filterCard = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots = {filterCard}/>
            </div>
        )
    }
}

export default App;