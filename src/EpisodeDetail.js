import React from 'react';
import './EpisodeDetail.css';

function createMarkup(content) {
    return {__html: content};
}

function EpisodeDetail({ detail, onBack }) {
    return (
        <div className="episode-detail">
            <button className="back-button" onClick={onBack}>GO BACK TO HOMEPAGE</button>
            <h1>{detail.name}</h1>
            <div className="primary-content">
                <img alt="powerpuff_girls_episodes" src={detail.image && detail.image.original} />
                <div className="detail-wrapper">
                    <h3>
                        Season {detail.season} / Episode {detail.number}
                    </h3>
                    <div dangerouslySetInnerHTML={createMarkup(detail.summary)} />
                </div>
            </div>
        </div>
    )
}

export default EpisodeDetail;
