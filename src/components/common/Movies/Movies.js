import React from 'react';
import Card from '../Card/Card';
import CardList from '../CardList/CardList';


const Movies = ({movies, search, isLoading}) => (
    <CardList>
        {
        isLoading 
            ? <span>loading</span> 
            : movies
                .filter(({title}) => search !== '' ? title.toLowerCase().includes(search) : true)
                .map(({title, episode_id}) => (
                <Card 
                    key={`${title}${episode_id}`}
                    title={title}
                    id={episode_id}
                />
            ))
        }
    </CardList>
);

export default Movies