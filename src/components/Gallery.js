import React, { useState, useEffect } from 'react';
import Card from './Card';

const Gallery = () => {
    const [imageData, setImageData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=dpIeEdEggyeVboW2OfzoT0gZECCTRjFLauVYOSUM&count=6')
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
        fetch('https://api.nasa.gov/planetary/apod?api_key=dpIeEdEggyeVboW2OfzoT0gZECCTRjFLauVYOSUM&count=3')
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
        <div className="grid grid-cols-3 p-5 gap-2 tablet:grid-cols-2 mobile:grid-cols-1">
            {imageData.length === 0 ? (
                <p className="col-span-3 place-self-center text-white tablet:col-span-2 mobile:col-span-1">Loading...</p>
            ) : (
                imageData.map((item, index) => (
                    <Card
                        className="col-span-1"
                        key={index}
                        title={item.title || "Untitled"}
                        date={item.date || "Redacted"}
                        copyright={item.copyright || "Unknown"}
                        media_type={item.media_type || "Undefined"}
                        explanation={item.explanation || 'No description available.'}
                        url={item.url || ""}
                    /> 
                ))
            )}
            <button 
                onClick={handleLoadMore} 
                className="button col-span-3 text-center place-self-center bg-blue text-white px-12 py-2 mt-10 rounded-lg uppercase
                            hover:bg-grey hover:text-black transition-colors duration-300"
            >
                Load More
            </button>
            {error && <p className="col-span-3 text-red-500 text-center">{error}</p>}
            <h3 className='col-span-3 text-white text-center'>...</h3>
        </div>
    );
};

export default Gallery;