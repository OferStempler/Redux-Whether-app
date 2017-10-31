/**
 * Created by ofer on 30/10/17.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
import Chart from '../components/chart.js';
export  class WeatherList extends  Component {

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        // const pressure = cityData.list.map(weather=> weather.main.humidity)
        // const humidity = cityData.list.map(weather=> weather.main.pressure)

        return(
            <tr key={name}>
                <td> {name}</td>
                <td>
                <Chart data={temps} color="orange" />
                </td>
            </tr>
        )
    }

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
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function  mapStateToProps({ weather }) {
    return { weather } // = { weather: weather }
}
export default connect(mapStateToProps)(WeatherList);