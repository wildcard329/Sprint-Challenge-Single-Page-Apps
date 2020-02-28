import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https:/rickandmortyapi.com/api/location/')
            .then(response => {
                console.log('location flag', response)
                setData(response.data.results)
            })
            .catch(error => {
                console.error('flag',error)
            })
    }, []);

    return (
        <section className="location-list">
            {data.map((item, index) => (
                <LocationCard key={index} loc={item} />
            ))}
        </section>
    )
}
