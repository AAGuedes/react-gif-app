import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (category) => {
        const isPresent = categories.find(cat => cat.toLowerCase() === category.toLowerCase());

        if (!isPresent) setCategories([category, ...categories]);
    }

    return (
        <>
            <div className='container'>
                <h1 className='text-center fw-bold my-5'>Gif App</h1>

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
