import React from 'react';

function createMarkup(content) {
    return {__html: content};
}

function EpisodeDetail({ detail, onBack }) {
    return (
        <div>
            <button onClick={onBack}>Back</button>
            <h1>{detail.name}</h1>
            <h4>
                Season {detail.season} / Episode {detail.number}
            </h4>
            <img alt="powerpuff_girls_episodes" src={detail.image.original} width="100%" height="500px" />
            <div dangerouslySetInnerHTML={createMarkup(detail.summary)} />
        </div>
    )
}

export default EpisodeDetail;
