import React, { Component } from 'react';

export default class SearchBar extends Component {
    render(){
        return(
            <form className="input-group">
                <input />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondery">Submit</button>
                </span>
            </form>
        )
    }
}