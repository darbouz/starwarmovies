import React, { useContext, useState } from 'react'
import { MoviesContext } from '../../../store/Providers';
import './Style.css'


const Search = () => {

    const [value, setValue] = useState('');

    const context = useContext(MoviesContext)
    const handleChange = (event) => {
        setValue(event.target.value);
        context.dispatch({
            type: 'SET_SEARCH',
            payload: event.target.value
        })
    }

    return (
        <form>
            <input type="text" value={value} onChange={handleChange} placeholder='Search...' />
        </form>
    )
}


export default Search