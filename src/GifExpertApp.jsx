import React, { useState } from 'react';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories(['Valorant', ...categories]);
        // setCategories(cat => [...cat, 'Valorant']);
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Gif List */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map(category => <li key={category}>{category}</li>)}
            </ol>
            {/* Gif Items */}
        </>
    )
}
