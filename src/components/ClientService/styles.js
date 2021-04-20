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
  border: solid 2px #2980B9;
  border-radius: 11px;
  height: 120px;
  transition: padding 1s;
  background-color: rgba(249, 249, 249, 0.5);

  &:hover {
    padding: 15px 50px;
    border: solid 2px #BAB916;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 50px;
    height: 300px;
    justify-content: center;
    align-items: center;
    &:hover {
      padding: 30px 50px;
      border: solid 2px #BAB916;
    }
  }
`;