const reducer =  (state, action) => {

    switch (action.type) {
        case "FETCH_MOVIES_REQUEST":
            return {
                ...state,
                isLoading: true,
                isError: false,
              };
        case "FETCH_MOVIES_SUCCESS":
            return {
                ...state,
                movies: action.payload.results,
                isError: false,
                isLoading: false
            };
        case "FETCH_SPECIES_REQUEST":
            return {
                ...state,
                isSpeciesError: false,
                isSpeciesLoading: true
            }
        case "FETCH_SPECIES_SUCCESS":
            return {
                ...state,
                isSpeciesError: false,
                isSpeciesLoading: false,
                species: action.payload
            }
        case "FETCH_SPECIES_ERROR":
            return {
                ...state,
                isSpeciesError: true,
                isSpeciesLoading: false,
            }
        case "FETCH_PEOPLE_REQUEST":
            return {
                ...state,
                isPeopleError: false,
                isPeopleLoading: true
            }
        case "FETCH_PEOPLE_SUCCESS":
            return {
                ...state,
                isPeopleError: false,
                isPeopleLoading: false,
                people: action.payload
            }
        case "FETCH_PEOPLE_ERROR":
            return {
                ...state,
                isPeopleError: true,
                isPeopleLoading: false,
            }
        case "FETCH_PLANETS_REQUEST":
            return {
                ...state,
                isPlanetsError: false,
                isPlanetsLoading: true
            }
        case "FETCH_PLANETS_SUCCESS":
            return {
                ...state,
                isPlanetsError: false,
                isPlanetsLoading: false,
                planets: action.payload
            }
        case "FETCH_PLANETS_ERROR":
            return {
                ...state,
                isPlanetsError: true,
                isPlanetsLoading: false,
            }
        case "FETCH_STARSHIPS_REQUEST":
            return {
                ...state,
                isStarshipsError: false,
                isStarshipsLoading: true
            }
        case "FETCH_STARSHIPS_SUCCESS":
            return {
                ...state,
                isStarshipsError: false,
                isStarshipsLoading: false,
                starships: action.payload
            }
        case "FETCH_STARSHIPS_ERROR":
            return {
                ...state,
                isStarshipsError: true,
                isStarshipsLoading: false,
            }
        case "FETCH_VEHICLES_REQUEST":
            return {
                ...state,
                isVehiclesError: false,
                isVehiclesLoading: true
            }
        case "FETCH_VEHICLES_SUCCESS":
            return {
                ...state,
                isVehiclesError: false,
                isVehiclesLoading: false,
                vehicles: action.payload
            }
        case "FETCH_VEHICLES_ERROR":
            return {
                ...state,
                isVehiclesError: true,
                isVehiclesLoading: false,
            }
        case "SET_SEARCH":
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
  };


export default reducer