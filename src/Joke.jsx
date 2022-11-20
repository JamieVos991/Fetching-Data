import React, { useEffect, useState } from 'react'

function Joke() {
    const [joke, setJoke] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then(results => {
            setisLoading(false);
            setJoke(results.setup + ' ' + results.punchline );
        })
        .catch(error => {
            setisLoading(false);
            setErrorMessage('There was a error..');
        });
    }, [])
    
    return (
    <div>
        <h2>Joke API</h2>
        {isLoading && <div>Loading...</div>}
        {   joke && (
           <div>{joke}</div>
        )}
        {errorMessage && <div>{errorMessage}</div> }
    </div>
  )
}

export default Joke