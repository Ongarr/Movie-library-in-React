import React from 'react';
import styled from 'styled-components';

const Perror = styled.p`
color: white;
text-align: center;
font-size: 32px;
font-weight:bold;
`

const NoInput = (props) => {
    return (
        <Perror>{props.info}</Perror>

    )
}

export default NoInput;