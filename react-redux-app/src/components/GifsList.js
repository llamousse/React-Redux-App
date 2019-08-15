import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import "./GifsList.css";

import { getData } from '../actions';

// import Gifs from './Gifs';

const GifsList = (props) => {
    return (
        <>
            <h1>Gif Search</h1>
            <button onClick={props.getData}>
                {props.isLoading ?
                <Loader type="TailSpin" color="#00BFFF"
                height="30" width="30" /> :
                'Search Away!' }
            </button>
        </>
    );
};

const mapStateToProps = state => {
    return {
        gifs: state.gifs,
        isLoading: state.isLoading
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(GifsList);