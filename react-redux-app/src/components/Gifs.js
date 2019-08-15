import React from 'react';

const Gifs = (props) => {
    return (
        <div>
            <img src={props.gifs.embed_url} 
                alt={props.gifs.id}/>
        </div>
    );
};

export default Gifs;