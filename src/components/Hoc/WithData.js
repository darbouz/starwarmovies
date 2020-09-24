import React from 'react'
import { MoviesContext } from '../../store/Providers'


const WithData = (Component) => ({dataName, match}) => (
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
                        ( context.state[dataName] === null 
                            ? <span>Page not found</span>
                            : context.state[dataName]
                                .filter(({data}) => data.name.replace('/','') === match.params.id)
                                .map(({data}) => (
                                    <Component data={data} />
                                ))
                        )
                    }
                </>
            )
        }
    </MoviesContext.Consumer>
)

export default WithData;