import React from 'react'
import InfoCard from '../../common/Card/InfoCard';
import CardList from '../../common/CardList/CardList';
import Title from '../../common/Title/Title';
import WithData from '../../Hoc/WithData';


const PlanetRaw = ({data}) => (
    <article>
        <Title text={data.name} />
        <CardList>
            <InfoCard title={'Rotation Period'} info={data.rotation_period} />
            <InfoCard title={'Orbital Period'} info={data.orbital_period} />
            <InfoCard title={'Diameter'} info={data.diameter} />
            <InfoCard title={'Climate'} info={data.climate} />
        </CardList>
    </article>
)

export const Planet = WithData(PlanetRaw);