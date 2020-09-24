import React from 'react';
import LinkedButton from '../Button/LinkedButton';
import Title from '../Title/Title';
import './Style.css'


const Card = ({title, id}) => (
    <div className='card'>
        <img src={require(`../../../resources/img/${id}.jpg`)} width='100%' height='200px' alt={id} />
        <Title text={title} level={3} />
        <LinkedButton link={`/movie/${id}`}>
            →
        </LinkedButton>
    </div>
);

export default Card