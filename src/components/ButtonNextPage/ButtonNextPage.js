import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 10px 15px;
    transition: background,color .4s linear;
    background: white;
    border: 0px solid;
    cursor: pointer;
    color: black;

    &:hover {
        background: black;
        color: white;
    }
`

const ButtonNextPage = (props) => {
    return (
        <Button onClick={props.nextPage} >
            { props.buttonText }
        </Button>
    )
}

export default ButtonNextPage;