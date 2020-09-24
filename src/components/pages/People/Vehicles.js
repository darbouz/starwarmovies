import React from 'react'
import InfoCard from '../../common/Card/InfoCard';
import CardList from '../../common/CardList/CardList';
import Title from '../../common/Title/Title';
import WithData from '../../Hoc/WithData';


const VehiclesRaw = ({data}) => (
    <article>
        <Title text={data.name} />
        <CardList>
            <InfoCard title={'model'} info={data.model} />
            <InfoCard title={'crew'} info={data.crew} />
            <InfoCard title={'manufacturer'} info={data.manufacturer} />
            <InfoCard title={'cost_in_credits'} info={data.cost_in_credits} />
        </CardList>
    </article>
)

export const Vehicles = WithData(VehiclesRaw);