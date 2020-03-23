import React from 'react';
import styled from 'styled-components'

const Pagination = styled.div `
    width: 18px;
    height: 30px;
    background-color:whitesmoke;
    color: black;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
`

const pagination = (props) => {
    return (
            <Pagination className="pagination" onClick={ props.switchpage } >
                { props.pagenumber }
            </Pagination>
    )
}

export default pagination;