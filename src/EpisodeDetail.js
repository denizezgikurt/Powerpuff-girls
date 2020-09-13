import React from 'react';

function EpisodeDetail({ detail }) {
    // http://api.tvmaze.com/shows/1/episodebynumber?season=1&number=1
    console.log(detail);
    return (
        <div>
            {/** Go to previous and next episodes */}
            episode
            <h1>title</h1>
            <p>Description</p>
            <img src="" width="400px" height="500px" />
        </div>
    )
}

export default EpisodeDetail;
