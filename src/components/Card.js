import React from 'react';

const Card = ({ title, date, copyright, media_type, url, explanation }) => {
    return (
        <div className="aspect-square col-span-1 rounded-md border-2 border-white p-4 flex flex-col justify-between overflow-hidden bg-cover bg-center relative group cursor-pointer" 
            style={{
                backgroundImage: `url(${url})`,
            }}>
                <div className="z-20 relative">
                    <h3 className="uppercase text-white">{title}</h3>
                    <h4 className="uppercase text-grey">{date}</h4>
                </div>
            <div className="absolute inset-0 bg-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-between p-4">
                <div className="overflow-scroll h-full">
                    <p className="text-white opacity-100 group-hover:opacity-100 transition-opacity duration-300 h-full flex items-center justify-center">{explanation}</p>
                </div>
            </div>
            <div className="z-20 relative">
                <div className="flex flex-row gap-2">
                    <span className='tag text-white uppercase bg-blue px-3 py-1 rounded-full border-2 border-blue max-w-[50%] text-nowrap overflow-x-scroll mobile:max-w-[75%]'>
                        {copyright}
                    </span>
                    <span className='tag text-white uppercase bg-black px-3 py-1 rounded-full border-2 border-darkGrey'>
                        {media_type}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;