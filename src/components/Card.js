import React from 'react';
import Arrow from '../assets/icons/arrow.svg';

const Card = ({ title, date, copyright, media_type, url, hdurl, explanation }) => {
    return (
        <div className="aspect-square col-span-1 rounded-md border-2 border-white p-4 flex flex-col justify-between overflow-hidden bg-cover bg-center relative group cursor-pointer" 
            style={{
                backgroundImage: `url(${url})`,
            }}>
                <div className="bg-gradient-to-b from-[#000] to-transparent -mt-4 -mx-4 h-1/4">
                    <div className="z-20 relative mt-4 mx-4">
                        <h3 className="uppercase text-white">{title}</h3>
                        <h4 className="uppercase text-grey">{date}</h4>
                    </div>
                </div>
            <div className="absolute inset-0 bg-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-between p-4 pt-20 pb-12">
                <div className="h-full overflow-scroll">
                    <p className="text-white opacity-100 group-hover:opacity-100 transition-opacity duration-300 h-full flex justify-center">{explanation}</p>
                </div>
            </div>
            <div className="bg-gradient-to-t from-[#000] to-transparent -mb-4 -mx-4 h-1/4 flex flex-col justify-end">
                <div className="z-20 relative mb-4 mx-4">
                    <div className="flex flex-row gap-2 justify-between">
                        <div className="flex flex-row gap-2 w-full mobile:max-w-[75%]">
                            <span className='tag text-white uppercase bg-blue px-3 py-1 rounded-full border-2 border-blue max-w-[50%] text-nowrap overflow-x-scroll mobile:max-w-[75%]'>
                                {copyright}
                            </span>
                            <span className='tag text-white uppercase bg-black px-3 py-1 rounded-full border-2 border-darkGrey'>
                                {media_type}
                            </span>
                        </div>
                        <a href={hdurl} target="_blank" className="link hover:scale-90 transition duration-300">
                            <img src={Arrow}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;