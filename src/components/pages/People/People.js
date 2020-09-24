import React from 'react'
import InfoCard from '../../common/Card/InfoCard';
import CardList from '../../common/CardList/CardList';
import Title from '../../common/Title/Title';
import WithData from '../../Hoc/WithData';


const PeopleRaw = ({data}) => (
    <article>
        <Title text={data.name} />
        <CardList>
            <InfoCard title={'Height'} info={data.height} />
            <InfoCard title={'Mass'} info={data.mass} />
            <InfoCard title={'Hair Color'} info={data.hair_color} />
            <InfoCard title={'Skin Color'} info={data.skin_color} />
        </CardList>
    </article>
)

export const People = WithData(PeopleRaw);