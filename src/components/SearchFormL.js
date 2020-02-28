import React, { useState, useEffect } from 'react';
import LocationCard from './LocationCard';
import axios from 'axios';

export default function SearchFormL() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https:/rickandmortyapi.com/api/location/')
            .then(res => {
                const filtered = res.data.results.filter(item => {
                    return item.location.toLowerCase().includes(query.toLowerCase());
                });
                setData(filtered);
            })
            .catch(error => console.error('error',error))
    }, [query]);
    const handleChange = e => {
        setQuery(e.target.value);
    };
    return (
        <section className="search-form">
            <form>
                <input
                type="text"
                value={query}
                name="query"
                placeholder="search"
                onChange={handleChange}
            />
            </form>
            {data.map((item, index) => (
                <LocationCard key={index} Loc={item} />
            ))}
        </section>
    )
}
