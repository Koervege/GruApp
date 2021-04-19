import styled from 'styled-components';

export const SectionList = styled.section`
  padding: 25px 0;
  width: 100%;
`;

export const Photo = styled.img`
  border-radius: 50%;
  border: solid 5px white;
  height: 65px;
  width: 65px;
  src: ${(props) => props.src};
`;

export const IntDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Information = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Meter = styled.meter`
  width: 100%;
  height: 20px;
  margin: 15px 0;
`

export const ContainerList = styled.article`
  display: flex;
  padding: 7px 50px;
  margin: 15px 20px;
  align-items: center;
  justify-content: space-between;
  border: solid 1px gray;
  border-radius: 5px;
  height: 120px;
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