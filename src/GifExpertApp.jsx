import React, { useState } from 'react';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Gif List */}
            <ol>
                {categories.map(category => <li key={category}>{category}</li>)}
            </ol>
            {/* Gif Items */}
        </>
    )
}
