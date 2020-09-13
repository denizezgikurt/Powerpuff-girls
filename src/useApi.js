import { useState, useEffect } from 'react';

export default function(url) {
    const [ data, setData ] = useState();

    async function getData() {
        const response = await fetch(url, {
            method: 'GET',
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
    useEffect(() => {
        getData().then(response => { setData(response) })
    }, [getData]);

    return data;
}
