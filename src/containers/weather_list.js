/**
 * Created by ofer on 30/10/17.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
export  class WeatherList extends  Component {
    render(){
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temp</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
            </table>
        );
    }
}

function  mapStateToProps({ weather }) {
    return { weather } // = { weather: weather }
}
export default connect(mapStateToProps)(WeatherList);