import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(' https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/episode/')
            .then(response => {
                setData(response.data.results)
            })
            .catch(error => {
                console.error('flag',error)
            })
    }, []);
    return (
        <section className="episode-list">
            {data.map(episode => (
                <EpisodeCard key={episode} episode={episode} />
            ))}
        </section>
    )
}