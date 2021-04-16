import styled from 'styled-components';

export const SectionList = styled.section`
  padding: 25px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerList = styled.article`
  display: flex;
  padding: 7px 50px;
  margin: 10px 20px;
  justify-content: space-between;
  border: solid 1px gray;
  border-radius: 5px;
  height: 100px;
  transition: padding 1s;

  &:hover {
    padding: 15px 50px;
    border: solid 1px goldenrod;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 50px;
    height: 300px;
    justify-content: center;
    align-items: center;
    &:hover {
      padding: 30px 50px;
      border: solid 1px goldenrod;
    }
  }
`;