import React from 'react';
import { useParams } from "@reach/router"

function EpisodeDetail() {
    const params = useParams();
    const episodeNumber = params.episodeNumber;

    return (
        <div>
            episode {episodeNumber}
        </div>
    )
}

export default EpisodeDetail;