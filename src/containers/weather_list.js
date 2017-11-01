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
        const humidity = cityData.list.map(weather=> weather.main.pressure);
        const pressure = cityData.list.map(weather=> weather.main.humidity);

        return(
            <tr key={name}>
                <td> {name}</td>
                <td><Chart data={temps} color="orange" units ="K" /></td>
                <td><Chart data={pressure} color="green" units ="hPa"  /></td>
                <td><Chart data={humidity} color="blue" units ="%" /></td>
            </tr>
        )
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temp(K)</th>
                    <th>Pressure(hPa)</th>
                    <th>Humidity(%)</th>
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