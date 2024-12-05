import React from 'react';
import Universe from '../assets/icons/Universe.svg';

const Header = () => {
    return (
        <header className="flex items-start justify-between px-8 py-4">
            <div className="flex flex-col">
                <h1 className="m-0 p-0 uppercase leading-none">Horizons</h1>
                <h2 className="m-0 p-0 uppercase leading-none">A gallery of our universe</h2>
            </div>
            <div className="transform translate-y-[-6rem] translate-x-[6rem]">
                <img src={Universe} alt="Universe" className="h-[32rem] animate-rotation" />
            </div>
        </header>
    );
};

export default Header;