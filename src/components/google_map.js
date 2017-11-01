/**
 * Created by ofer on 01/11/17.
 */
import React, { Component } from "react";

class GoggleMaps extends Component {

    componentDidMount(){
        new google.maps.Map(this.ref.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render(){
        return <div ref="map" /> //this.ref.map
    }

}


export default GoggleMaps;