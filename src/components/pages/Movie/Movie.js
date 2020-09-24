import React from 'react';
import { MoviesContext } from '../../../store/Providers';
import InfoCard from '../../common/Card/InfoCard';
import Title from '../../common/Title/Title';
import CardList from '../../common/CardList/CardList';
import List from '../../common/List/List';
import './Style.css'

const Movie = ({match}) => (
    <MoviesContext.Consumer>
        {
            context => (
                <>
                    {
                        context.state.isLoading && <span>loading...</span>
                    }
                    {
                        context.state.isError && <span>Error</span>
                    }
                    {
                        !context.state.isLoading && !context.state.isError &&
                        context.state.movies
                            .filter(movie => movie.episode_id === parseInt(match.params.movieId))
                            .map(movie => (
                                <article>
                                    <Title text={movie.title} />
                                    <CardList>
                                        <InfoCard title={'Director'} info={movie.director} />
                                        <InfoCard title={'Opening Crawl'} info={movie.opening_crawl} />
                                        <InfoCard title={'Producer'} info={movie.producer} />
                                        <InfoCard title={'Release Date'} info={movie.release_date} />
                                    </CardList>
                                    <div className='list-container'>
                                        <List 
                                            title='Species'
                                            dataName='species'
                                            urls={movie.species}
                                        />
                                        <List 
                                            title='People'
                                            dataName='people'
                                            urls={movie.characters}
                                        />
                                        <List 
                                            title='Planets'
                                            dataName='planets'
                                            urls={movie.planets}
                                        />
                                        <List 
                                            title='Starships'
                                            dataName='starships'
                                            urls={movie.starships}
                                        />
                                        <List 
                                            title='Vehicles'
                                            dataName='vehicles'
                                            urls={movie.vehicles}
                                        />
                                    </div>
                                </article>
                            ))
                    }
                </>   
            )
        }
    </MoviesContext.Consumer>
);

export default Movie