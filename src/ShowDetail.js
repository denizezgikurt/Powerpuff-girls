//Home page

import React, { useState, useEffect } from 'react'; //imports useState hook from React
import { Link } from "@reach/router"
//Creates links with reach/router, for the episode pages

import useApi from './useApi';

function createMarkup(content) {
    return {__html: content};
}

function ShowDetail() {
    const data = useApi('http://api.tvmaze.com/shows/6771');
    const episodes = useApi('http://api.tvmaze.com/shows/6771/episodes');

    if (!data) {
        return <div>No data</div>
    }

    return (
        <div>
            <h1>{data.name}</h1>
            <img src={data.image.original} width="100%" height="400px" />
            <div dangerouslySetInnerHTML={createMarkup(data.summary)} />

            <p><strong>Rating:</strong> {data.rating.average}</p>
            <p><strong>Language:</strong> {data.language}</p>
            <p><strong>Network:</strong> {data.network.name}</p>

            <ul>
                {
                    episodes && episodes.map(episode => {
                        return (
                            <li key={episode.id}>
                                <Link to={`episode/${episode.number}`}>{episode.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ShowDetail;
