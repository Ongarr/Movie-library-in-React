import React from 'react';

const searchForm = (props) => {
    return (
        <input type="text" onChange= {props.changed}/>
    )
}

export default searchForm;