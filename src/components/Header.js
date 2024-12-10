import React from 'react';
import Universe from '../assets/icons/Universe.svg';

const Header = () => {
    return (
        <header className="flex items-start justify-between px-8 py-4 overflow-hidden">
            <div className="flex flex-col">
                <h1 className="m-0 p-0 uppercase leading-none tablet:text-6xl mobile:text-4xl">Horizons</h1>
                <h2 className="m-0 p-0 uppercase leading-none tablet:text-3xl mobile:text-2xl">A gallery of our universe</h2>
            </div>
            <div className="transform translate-y-[-6rem] translate-x-[6rem] mobile:hidden">
                <img src={Universe} alt="Universe" className="h-full w-full animate-rotation" />
            </div>
        </header>
    );
};

export default Header;