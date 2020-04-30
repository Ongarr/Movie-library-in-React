import React from 'react';
import styled from 'styled-components'

const P = styled.p `
    color: lightgrey;
`

const whichPage = (props) => {
    return (
        <P className="current-page">{props.pageuare}</P>
    )
}

export default whichPage;