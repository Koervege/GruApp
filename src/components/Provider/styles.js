import styled from 'styled-components';

export const Photo = styled.img`
  border-radius: 50%;
  border: solid 5px white;
  height: 70px;
  width: 70px;
  src: ${(props) => props.src};
`;

export const ContainerList = styled.article`
  display: flex;
  padding: 0 100px;
  margin: 10px 20px;
  justify-content: space-between;
  border: solid 2px #2980B9;
  border-radius: 11px;
  height: 100px;
  transition: height 1s;
  background-color: rgba(249, 249, 249, 0.5);

  &:hover {
    height: 125px;
    border: solid 2px whitesmoke;
  }
`;

export const ContainerElement = styled.p`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const SectionList = styled.section`
  padding: 25px 0;
  width: 100%;
`;
