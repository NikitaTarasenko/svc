import React from 'react';

const Tag = ({children, link = '/'}) => {
    return (
        <div className='tag' onClick={()=> window.open(link, "_blank")}>
            {children}
        </div>
    );
};

export default Tag;