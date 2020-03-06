import React from 'react';

const pagination = (props) => {
    return (
        <div className="pagination" onClick={ props.switchpage } >
            { props.pagenumber }
        </div>
    )
}

export default pagination;