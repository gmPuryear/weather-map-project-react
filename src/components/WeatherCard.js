import React, {useContext} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import {useState} from 'react'
import {lngLatContext} from './MapBox';
import WeatherData from './WeatherData';

const owm = process.env.REACT_APP_OWM_KEY;
// Location of San Diego, CA (initial location for map and weather data)
// const initialLat = 32.715736;
// const initialLon = -117.161087;

function WeatherCard(props) {
    const 
    // const {getLngLat} = useContext(lngLatContext);

    const lat = props.latLng.lat
    const lng = props.latLng.lng;
    // Get request to open weather map API to get weather details based on lat and lon
    const getWeatherData = () => {
        axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=1&appid=${owm}`)
            .then(res => {
                // console.log(res.data);
            }).catch(err => {
            console.log(err);
        })
    }

    console.log(getWeatherData)

    // const weatherData = {
    //
    // }

    return (
        <div className="weatherCard-wrapper">
        <WeatherData weatherData = {getWeatherData}/>
            <Card style={{width: '18rem'}}>
                <Card.Header>Featured</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
}

export default WeatherCard;