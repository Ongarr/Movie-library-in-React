import styled from "styled-components";

const MovieList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  justify-items: center;
  padding: 50px 20px;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  background: transparent;
`;

const Tile = styled.div`
  width: 185px;
  display: flex;
  flex-direction: column;
  background-color: lightgoldenrodyellow;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const P = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding: 5px 10px;
`;

export { MovieList, Tile, Title, P };
