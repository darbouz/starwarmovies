import React from 'react'
import InfoCard from '../../common/Card/InfoCard';
import CardList from '../../common/CardList/CardList';
import Title from '../../common/Title/Title';
import WithData from '../../Hoc/WithData';


const SpeciesRaw = ({data}) => (
    <article>
        <Title text={data.name} />
        <CardList>
            <InfoCard title={'classification'} info={data.classification} />
            <InfoCard title={'designation'} info={data.designation} />
            <InfoCard title={'average_height'} info={data.average_height} />
            <InfoCard title={'skin_colors'} info={data.skin_colors} />
        </CardList>
    </article>
)

export const Species = WithData(SpeciesRaw);