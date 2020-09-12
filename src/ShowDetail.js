//Home page

import React from 'react';
import { Link } from "@reach/router"

//Creating links with reach/router, for the episode pages

function ShowDetail() {
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
