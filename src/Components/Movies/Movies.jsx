//MOVIES.JS

import React, { useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import './Movies.css'

const Movies = () => {
    //states
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    //Consume the API
    const searchMovie = async (e) => {
        e.preventDefault();

        const API_KEY = "b57e0c63"; //use your personal API Key
        const apiURI = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`;

        try {
            const response = await axios.get(apiURI);
            const data = response.data.Search
            console.log(data);

            //setState
            setMovies(data);

        } catch (err) {
            console.error(err);
        }
    }


    return (
        <div className="shoppies">
            {/*Header component*/}
            <Header
                searchMovie={searchMovie}
                query={query}
                setQuery={setQuery}
                movies={movies}
            />
        </div>
    )
}

export default Movies;