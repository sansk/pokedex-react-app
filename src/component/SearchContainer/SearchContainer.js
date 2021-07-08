import React from 'react';
import './SearchContainer.css'

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            placeholder: "Search Pokemon"
        }
    };

    render() {
        return (
            <div className="searchContainer">
                <input type="search"
                    placeholder={this.state.placeholder}
                    onChange={e => this.props.searchFieldChange(e.target.value)} />
            </div>
        );
    };
}

export default SearchContainer;