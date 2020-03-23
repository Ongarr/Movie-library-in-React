import React from 'react';
import styled from 'styled-components'

const Input = styled.input`
    padding: 5px 0px;
    font-size: 16px;
    border: 0px solid white;
    border-bottom: 2px solid white;
    background-color: #282c34;
    color: lightgrey;
`

const searchForm = (props) => {
    return (
        <Input placeholder="Give me some keyword" type="text" onChange= {props.changed}/>
    )
}

export default searchForm;