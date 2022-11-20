import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(results => {
            setisLoading(false);
            setData(results)
        })
        .catch(error => {
            setisLoading(false);
            setErrorMessage('There was a error..');
        });
    }, [url])

    return { data, isLoading, errorMessage};
}

export default useFetch