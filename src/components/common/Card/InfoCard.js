import React from 'react';
import Title from '../Title/Title';
import './Style.css'


const InfoCard = ({title, info}) => (
    <div className='card'>
        <Title text={title} level={3} />
        <span className='info'>{info}</span>
    </div>
);

export default InfoCard