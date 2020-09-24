import React from 'react';
import './Style.css'

const Title = ({level, text, light}) => (
    <div className='title'>
        {
            ((level) => {
                switch (level) {
                    case 1:
                        return <h1>{text} <span className="light">{light}</span></h1>
                    case 2:
                        return <h2>{text} <span className="light">{light}</span></h2>
                    case 3:
                        return <h3>{text} <span className="light">{light}</span></h3>
                    default:
                        return <h1>{text} <span className="light">{light}</span></h1>;
                }
            })(level)
        }
    </div>
);

export default Title