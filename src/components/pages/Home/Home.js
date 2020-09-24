import React from 'react';
import { MoviesContext, MoviesProvider } from '../../../store/Providers';
import Movies from '../../common/Movies/Movies';
import Search from '../../common/Search/Search';
import Title from '../../common/Title/Title';

const Home = () => (
    <MoviesContext.Consumer>
      {
        context => (
          !context.state.isError 
              ? <article>
                  <Title text='StarWars' light='Movies' />
                  <Search />
                  <Movies movies={context.state.movies} search={context.state.search} isLoading={context.state.isLoading}/>
              </article>
              : <div>Error</div>
        )
      }
      </MoviesContext.Consumer>
);

export default Home