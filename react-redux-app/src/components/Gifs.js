import React from 'react';

import './Gifs.css';

const Gifs = (props) => {
    return (
        <div>
            <img src={props.gifs.images.fixed_height.url} alt={props.gifs.id} />
        </div>
    );
};

export default Gifs;