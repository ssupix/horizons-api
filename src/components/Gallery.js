import React, { useState, useEffect } from 'react';
import Card from './Card';

const Gallery = () => {
    const [imageData, setImageData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=***REMOVED***&count=6')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setImageData(data);
            })
            .catch(error => {
                console.error('Error:', error);
                setError(error.message);
            });
    }, []);

    const handleLoadMore = () => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=***REMOVED***&count=3')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setImageData(prevData => [...prevData, ...data]);
            })
            .catch(error => {
                console.error('Error:', error);
                setError(error.message);
            });
    };

    return (
        <div className="grid grid-cols-3 p-5 gap-2">
            {imageData.length === 0 ? (
                <p className="col-span-3 place-self-center text-white">Loading...</p>
            ) : (
                imageData.map((item, index) => (
                    <Card
                        className="col-span-1"
                        key={index}
                        title={item.title || "Untitled"}
                        date={item.date || "Redacted."}
                        explanation={item.explanation || 'No description available.'}
                        url={item.url || ""}
                    /> 
                ))
            )}
            <button 
                onClick={handleLoadMore} 
                className="col-span-3 place-self-center bg-blue-500 text-white px-4 py-2 rounded"
            >
                Load More
            </button>
            {error && <p className="col-span-3 text-red-500 text-center">{error}</p>}
        </div>
    );
};

export default Gallery;