import React from 'react'
import { Link } from 'react-router-dom';
import { DataListProvider, MoviesContext } from '../../../store/Providers';
import Title from '../Title/Title'
import './Style.css'


const List = ({
    title,
    dataName,
    urls
}) => (
        <MoviesContext.Consumer>
            {
                (context) => {
                    return (
                        <DataListProvider 
                            requestAction={`FETCH_${dataName.toUpperCase()}_REQUEST`}
                            successAction={`FETCH_${dataName.toUpperCase()}_SUCCESS`}
                            errorAction={`FETCH_${dataName.toUpperCase()}_ERROR`}
                            urls={urls}
                            dispatch={context.dispatch}
                        >
                            {
                                context.state[`is${title}Loading`] && <span>loading...</span>
                            }
                            {
                                !context.state[`is${title}Loading`] && !context.state[`is${title}Error`] &&
                                <div>
                                    <Title text={title} level={2}/>
                                    <ul>
                                        { context.state[dataName].map(({data}) => (<li><Link to={`/${dataName}/${data.name.replace('/','')}`}>{data.name}</Link></li>)) }
                                    </ul>
                                </div>
                            }  
                        </DataListProvider>
                    )
                }
            }
        </MoviesContext.Consumer>
)
export default List;