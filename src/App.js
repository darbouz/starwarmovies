import React from 'react';
import Main from './components/layout/Main/Main';
import './App.css'
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Movie from './components/pages/Movie/Movie';
import { MoviesProvider } from './store/Providers';
import {People} from './components/pages/People/People';
import { Species } from './components/pages/People/Species';
import { Planet } from './components/pages/People/Planet';
import { Starship } from './components/pages/People/Starship';
import { Vehicles } from './components/pages/People/Vehicles';

const App = () => (
  <MoviesProvider>
    <div className='app'>
        <Main>
          <Router>
            <Route path='/' component={Home} exact/>
            <Route path='/movie/:movieId' component={Movie} />
            <Route path='/people/:id' component={({match}) => <People match={match} dataName='people' />} />
            <Route path='/species/:id' component={({match}) => <Species match={match} dataName='species' />} />
            <Route path='/planets/:id' component={({match}) => <Planet match={match} dataName='planets'/>} />
            <Route path='/starships/:id' component={({match}) => <Starship match={match} dataName='starships' />} />
            <Route path='/vehicles/:id' component={({match}) => <Vehicles match={match} dataName='vehicles' />} />
          </Router>
        </Main>
      </div>
  </MoviesProvider>
)
export default App;
