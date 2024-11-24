import React, { Component, useEffect } from "react";
import DG from "2gis-maps";
import { Route,BrowserRouter as Router, Switch ,Link, Routes } from "react-router-dom";
const Map=()=>{
    useEffect(()=>{
        let map
        map=DG.map("map-container",{
            center: [57.144963,65.580515],
            zoom: 17
        })
        DG.marker([57.144963,65.580515]).addTo(map).bindPopup("7 корпус")
        DG.marker([57.167158,65.514763]).addTo(map).bindPopup("2 корпус")
        DG.marker([57.145941,65.579798]).addTo(map).bindPopup("3 корпус")
        DG.marker([57.150632,65.548646]).addTo(map).bindPopup("3 корпус")
        return () => map && map.remove();
    },[])
    
    return(
        <div id="map-container" style={{width:"100wv",height:"570px"}}>

        </div>
    )

}
export default class Maps extends Component {
    render() {
        return (
            <div>
                <Map/>
            </div>
        )
    }
}