import React from 'react';
import Card from './Card';

const mockData = [
    {
        title: 'Filaments of the Vela Supernova Remnant',
        date: '2013-10-01',
        tags: ['Astronomy', 'Star', 'Nebula'],
        description: 'Lorem ipsum dolor sit amet consectetur. Bibendum odio in erat volutpat turpis. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. In aliquet urna amet aliquet. Lorem ipsum dolor sit amet consectetur. Bibendum odio in erat volutpat turpis. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. In aliquet urna amet aliquet.Lorem ipsum dolor sit amet consectetur. Bibendum odio in erat volutpat turpis. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. In aliquet urna amet aliquet.Lorem ipsum dolor sit amet consectetur. Bibendum odio in erat volutpat turpis. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. ',
        imageUrl:
            'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001894/GSFC_20171208_Archive_e001894~medium.jpg',
    },
    {
        title: 'Filaments of the Vela Supernova Remnant',
        date: '2013-10-01',
        tags: ['Astronomy', 'Star', 'Nebula'],
        description: 'Lorem ipsum dolor sit amet consectetur. Bibendum odio in erat volutpat turpis. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. In aliquet urna amet aliquet. Lorem ipsum dolor sit amet consectetur. Bibendum odio in erat volutpat turpis. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. In aliquet urna amet aliquet.Lorem ipsum dolor sit amet consectetur. Bibendum odio in erat volutpat turpis. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. In aliquet urna amet aliquet.Lorem ipsum dolor sit amet consectetur. Bibendum odio in erat volutpat turpis. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. ',
        imageUrl:
            'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001894/GSFC_20171208_Archive_e001894~medium.jpg',
    },
    {
        title: 'Filaments of the Vela Supernova Remnant',
        date: '2013-10-01',
        tags: ['Astronomy', 'Star', 'Nebula'],
        description: 'Lorem ipsum dolor sit amet consectetur. Bibendum odio in erat volutpat turpis. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. In aliquet urna amet aliquet. Lorem ipsum dolor sit amet consectetur. Bibendum odio in erat volutpat turpis. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. In aliquet urna amet aliquet.Lorem ipsum dolor sit amet consectetur. Bibendum odio in erat volutpat turpis. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. In aliquet urna amet aliquet.Lorem ipsum dolor sit amet consectetur. Bibendum odio in erat volutpat turpis. Gravida curabitur a metus urna. Lobortis etiam integer nisl eget dictum in consectetur tellus at. ',
        imageUrl:
            'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001894/GSFC_20171208_Archive_e001894~medium.jpg',
    },
];

const Gallery = () => {
    return (
        <div className="grid grid-cols-3 p-5 gap-2">
            {mockData.map((item, index) => (
                <Card
                    className="col-span-1"
                    key={index}
                    title={item.title}
                    date={item.date}
                    tags={item.tags}
                    description={item.description}
                    imageUrl={item.imageUrl}
                />
            ))}
        </div>
    );
};

export default Gallery;