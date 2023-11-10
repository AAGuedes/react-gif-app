import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (category) => {
        setCategories([category, ...categories]);
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />

            {/* Gif List */}
            <ol>
                {categories.map(category => <li key={category}>{category}</li>)}
            </ol>
            {/* Gif Items */}
        </>
    )
}
