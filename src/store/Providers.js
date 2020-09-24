import axios from 'axios';
import React, {useReducer, useEffect, createContext} from 'react';
import Reducer from './Reducer';

const initialState = {
    isError: false,
    isLoading: true,
    isSpeciesError: false,
    isSpeciesLoading: true,
    isPeopleError: false,
    isPeopleLoading: true,
    isPlanetsError: false,
    isPlanetsLoading: true,
    isStarshipsError: false,
    isStarshipsLoading: true,
    isVehiclesError: false,
    isVehiclesLoading: true,
    movies: null,
    species: null,
    people: null,
    planets: null,
    startships: null,
    vehicles: null,
    search: ''
};

export const MoviesContext = createContext();

export const MoviesProvider = ({children}) => {
    const [state, dispatch] =   useReducer(Reducer, initialState);

    useEffect(() => {
        dispatch({
            type: "FETCH_MOVIES_REQUEST"
        });
        fetch('https://swapi.dev/api/films/')
            .then(response => response.json())
            .then(resJson => {
                dispatch({
                    type: "FETCH_MOVIES_SUCCESS",
                    payload: resJson
                });
            })
            .catch(error => {
                dispatch({
                    type: "FETCH_MOVIES_ERROR"
                });
            })
    }, [])

    return (
        <MoviesContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </MoviesContext.Provider>
    )
}


export const DataListProvider = ({
    requestAction,
    successAction,
    errorAction,
    urls,
    dispatch,
    children
}) => {
    useEffect(() => {
        dispatch({
            type: requestAction
        });
        const urlsReq = urls.map(url => axios.get(url));
        axios.all(urlsReq)
        .then(axios.spread((...responses) => {
            console.log(responses)
            dispatch({
                type: successAction,
                payload: responses
            });
        }))
        .catch(error => {
            console.log(error)
            dispatch({
                type: errorAction,
            });
        })
    }, [])

    return children;
}
