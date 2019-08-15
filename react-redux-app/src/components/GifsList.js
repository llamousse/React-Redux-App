import React from 'react';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';

// import { getData } from '../actions';

// import Gifs from './Gifs';

const GifsList = () => {
    return (
        <>
            <h1>Gif Search</h1>
            <button>Search Away!</button>
        </>
    );
};

const mapStateToProps = state => {
    return {

    };
};

export default connect(
    mapStateToProps,
    {}
)(GifsList);