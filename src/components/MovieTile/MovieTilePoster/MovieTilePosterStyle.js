import styled from "styled-components";

const Img = styled.img`
  width: 185px;
  min-height: ${(props) => (props.forStyle ? "0px" : "278px")};
  max-height: 278px;
`;
const Loader = styled.div`
  color: #fff;
  background: #000;
`;

export { Img, Loader };
