import styled from 'styled-components';

const Img = styled.img`
  width: 185px;
  min-height: ${(props) => (props.forStyle ? '0px' : '278px')};
  max-height: 278px;
`;
const Loader = styled.div`
  box-sizing: border-box;
  color: #282c34;
  background: white;
  min-height: 278px;
  max-height: 278px;
  width: 100%;
  border: 1px solid black;
  display: flex;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  position: absolute;
  bottom: 10px;
  left: 0px;
  background: white;
  transform: translateX(-110%);
  border: 0;
  font-size: 20px;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 278px;
  width: 100%;

  &:hover ${Button} {
    transform: translateX(0%);
  }
`;

export { Img, Loader, Button, Wrapper };
