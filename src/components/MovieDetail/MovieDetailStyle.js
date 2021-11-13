import styled from 'styled-components';

const MovieWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin: auto;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

const Rating = styled.span`
  color: gold;
  font-size: 1.5em;
  font-weight: bold;
`;

const Title = styled.h1`
  color: black;
  display: block;
  max-width: 80%;
  margin: auto;
  margin-top: 50px;
`;
const Overview = styled.p`
  color: black;
  display: block;
  max-width: 80%;
  text-align: justify;
  margin: 25px auto;
`;

const Button = styled.button`
  margin-top: 5px;
  padding: 10px 15px;
  transition: background, color 0.4s linear;
  background: lightgrey;
  border: 0px solid;
  cursor: pointer;
  color: black;
  border-radius: 50px;
  width: 90%;
`;

const BasicInfoWrapper = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(11.76%, 18.43%, 23.53%, 0.84) 0,
    rgba(18.82%, 25.49%, 30.59%, 0.64) 100%
  );
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const BasicInfo = styled.div`
  display: flex;
  padding: 50px 0;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  max-width: 1080px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Cast = styled.div`
  color: black;

  h2 {
    font-size: 40px;
  }
`;

const List = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  p {
    margin: 0;
  }
`;

const Actor = styled.div`
  background-color: hsla(109, 100%, 0%, 0.32);
  padding: 20px;
`;

export {
  MovieWrapper,
  List,
  Cast,
  BasicInfo,
  Button,
  Overview,
  Title,
  Rating,
  Actor,
  BasicInfoWrapper,
};
