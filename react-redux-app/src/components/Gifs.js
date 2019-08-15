import React from 'react';
import './Gifs.css';

const Gifs = (props) => {
    return (
        <div className="imgRender">
            <img src={props.gifs.images.fixed_height.url} alt={props.gifs.id} />
        </div>
    );
};

export default Gifs;