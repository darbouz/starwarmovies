import React from 'react'
import './Style.css'

const CardList = ({children}) => (
    <div className='card-container'>
        {children}
    </div>
)

export default CardList;