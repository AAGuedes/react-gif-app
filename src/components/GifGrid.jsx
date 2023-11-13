import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);

    return (
        <>
            <h3 className='text-center mt-5 mb-3'>{category}</h3>
            <div className='d-flex row d-flex justify-content-evenly'>
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
