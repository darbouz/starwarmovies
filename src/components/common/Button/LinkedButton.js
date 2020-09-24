import React from 'react'
import { Link } from 'react-router-dom';
import './Style.css'

const LinkedButton = ({link, children}) => (
    <Link className='linked-button' to={link}>
        {children}
    </Link>
)

export default LinkedButton;