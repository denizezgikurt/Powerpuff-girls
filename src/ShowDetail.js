//Home page

import React, { useState } from 'react';
import useApi from './useApi';
import EpisodeDetail from './EpisodeDetail';
import './ShowDetail.css';

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
        <div className="show-detail">
            <h1>{data.name}</h1>
            <div className="primary-content">
                <img alt="powerpuff_girls_poster" src={data.image.original} />
                <div className="detail-wrapper">
                    <div dangerouslySetInnerHTML={createMarkup(data.summary)} />
                    <p><strong>Rating:</strong> {data.rating.average}</p>
                    <p><strong>Language:</strong> {data.language}</p>
                    <p><strong>Network:</strong> {data.network.name}</p>
                </div>
            </div>

            <div className="episode-list-wrapper">
                <h3>Episode List</h3>
                <ul className="episode-list">
                    {
                        episodes && episodes.map(episode => {
                            return (
                                <li className="episode-list-item" key={episode.id}>
                                    <button className="episode-link" onClick={() => setEpisodeDetail(episode)}>
                                        <strong>Episode {episode.number}</strong>: {episode.name}
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ShowDetail;
