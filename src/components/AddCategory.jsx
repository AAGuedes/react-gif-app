import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if (value.length <= 1) return;

        setInputValue('');
        onNewCategory(value);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                className='form-control mb-3'
                type="text"
                placeholder="Buscar gifs..."
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
