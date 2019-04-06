import React from 'react';

import '../styles.css';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);

    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search videos</label>
                        <input 
                         type="text"
                         placeholder="Search"
                         value={this.state.term}
                         onChange={this.onInputChange}
                         />
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;