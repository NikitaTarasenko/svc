import React from 'react';

const PageError = () => {
    return (
        <div className='errorPage'>
            <h2>Something went wrong...</h2>
            <a className='errorBtn' href='/'>Go to main page</a>
        </div>
    );
};

export default PageError;