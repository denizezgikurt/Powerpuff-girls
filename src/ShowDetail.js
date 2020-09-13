//Home page

import React, { useState } from 'react';
import useApi from './useApi';
import EpisodeDetail from './EpisodeDetail';

function createMarkup(content) {
    return {__html: content};
}

function ShowDetail() {
    const [ episodeDetail, setEpisodeDetail ] = useState(false);

    const data = useApi('http://api.tvmaze.com/shows/6771');
    const episodes = useApi('http://api.tvmaze.com/shows/6771/episodes');

    if (!data) {
        return <div>No data</div>
    }

    if (episodeDetail) {
        return <EpisodeDetail onBack={() => setEpisodeDetail(false)} detail={episodeDetail} />;
    }

    return (
        <div>
            <h1>{data.name}</h1>
            <img alt="powerpuff_girls_poster" src={data.image.original} width="100%" height="400px" />
            <div dangerouslySetInnerHTML={createMarkup(data.summary)} />

            <p><strong>Rating:</strong> {data.rating.average}</p>
            <p><strong>Language:</strong> {data.language}</p>
            <p><strong>Network:</strong> {data.network.name}</p>

            <ul>
                {
                    episodes && episodes.map(episode => {
                        return (
                            <li key={episode.id}>
                                <button onClick={() => setEpisodeDetail(episode)}>
                                    <strong>Episode {episode.number}</strong>: {episode.name}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ShowDetail;
