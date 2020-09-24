import React from 'react'
import InfoCard from '../../common/Card/InfoCard';
import CardList from '../../common/CardList/CardList';
import Title from '../../common/Title/Title';
import WithData from '../../Hoc/WithData';


const StarshipRaw = ({data}) => (
    <article>
        <Title text={data.name} />
        <CardList>
            <InfoCard title={'model'} info={data.model} />
            <InfoCard title={'manufacturer'} info={data.manufacturer} />
            <InfoCard title={'cost_in_credits'} info={data.cost_in_credits} />
            <InfoCard title={'length'} info={data.length} />
        </CardList>
    </article>
)

export const Starship = WithData(StarshipRaw);