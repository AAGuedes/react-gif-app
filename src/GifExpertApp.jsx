import { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (category) => {
        const isPresent = categories.find(cat => cat.toLowerCase() === category.toLowerCase());

        if (!isPresent) setCategories([category, ...categories]);
    }

    return (
        <>
            <div className='container'>
                <h1 className='text-center fw-bold my-5'>Gif Expert App</h1>

                <AddCategory
                    onNewCategory={onAddCategory}
                />

                {
                    categories.map(category => (
                        <GifGrid
                            category={category}
                            key={category}
                        />
                    ))
                }
            </div>
        </>
    )
}
