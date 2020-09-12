//second page for episodes

import React from 'react';
import { useParams } from "@reach/router"
import { Link } from "@reach/router"

function EpisodeDetail() {
    const params = useParams();
    const episodeNumber = params.episodeNumber;

    return (
        <div>
            <Link to="/">Go to homepage</Link>
            {/** Go to homepage or previous and next episodes */}
            episode {episodeNumber}
            <h1>title</h1>
            <p>Description</p>
            <img src="" width="400px" height="500px" />
        </div>
    )
}

export default EpisodeDetail;
