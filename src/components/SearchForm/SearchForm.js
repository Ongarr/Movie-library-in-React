import React from 'react';
import {Input} from './SearchFormStyle';

const SearchForm = (props) => {
    return (
        <Input placeholder="Give me some keyword" type="text" onChange= {props.changed}/>
    )
}

export default SearchForm;