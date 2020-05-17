import styled from "styled-components";

const MovieWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1080px;
  padding-top: 100px;
  padding-bottom: 100px;
  margin: auto;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Rating = styled.span`
  color: gold;
  font-size: 1.5em;
  font-weight: bold;
`;

const Title = styled.h1`
  color: white;
  display: block;
  max-width: 80%;
  margin: auto;
  margin-top: 50px;
`;
const Overview = styled.p`
  color: white;
  display: block;
  max-width: 80%;
  text-align: justify;
  margin: 25px auto;
`;

const Button = styled.button`
  padding: 10px 15px;
  width: 80%;
`;
const BasicInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Cast = styled.div`
  color: white;

  h2 {
    font-size: 40px;
  }
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  div {
    background-color: hsla(109, 100%, 0%, 0.32);
    padding: 20px;
  }
  p {
    margin: 0;
  }
`;

export { MovieWrapper, List, Cast, BasicInfo, Button, Overview, Title, Rating };
