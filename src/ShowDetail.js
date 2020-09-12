//Home page

import React, { useState, useEffect } from 'react'; //imports useState hook from React
import { Link } from "@reach/router"
//Creates links with reach/router, for the episode pages

async function getData(url = '') {
    const response = await fetch(url, {
        method: 'GET',
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

function ShowDetail() {
    const [ showData, setShowData ] = useState(); //setting variables with useState hook

    useEffect(() => {
        getData('http://api.tvmaze.com/shows/6771').then(data => {
            setShowData(data)
        });
    }, []);

    return (
        <div>
            <h1>Title</h1>
            <p>Description</p>
            <img src="" width="700px" height="400px" />
            <ul>
                <li><Link to="/episode/1">Episode 1</Link></li>
                <li><Link to="/episode/2">Episode 2</Link></li>
            </ul>
        </div>
    )
}

export default ShowDetail;
