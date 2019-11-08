import React, { Component } from 'react';
import axios from "axios";

class SearchBar extends Component {
    state = {
        query: '',
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1){
                if (this.state.query.length % 2 === 0){
                    this.getInfo()
                }
            }
        })
    }

    render(){
        return (
            <form>
                <input placeholder="Searching for..." ref={input => this.search = input} onChange={this.handleInputChange}/>
                <Suggestions results={this.state.results}/>
            </form>
        )
    }

    getInfo = () => {
        axios.get(`https://swapi.co/api/people/?search=${this.state.query}`).then((response) => {
            this.setState({
                results: response.data
            })
        })
    }
}

const Suggestions = (props) => {
    const options = props.results.map(r => (
      <li key={r.id}>
        {r.name}
      </li>
    ))
    return <ul>{options}</ul>
}

export default SearchBar;