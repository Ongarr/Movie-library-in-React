import React from 'react';

import { Button } from './PaginationButtonStyle';

const ButtonPageControl = (props) => {
  return (
    <Button onClick={props.pageSwitcher}>{props.buttonText}</Button>
  );
};

export default ButtonPageControl;
