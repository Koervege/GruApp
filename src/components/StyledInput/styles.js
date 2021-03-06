import styled from 'styled-components';


export const Input = styled.input `
  flex: 1 1 auto;
  background-color: #fefefe;
  border-radius: 15px;
  border: 0;
  box-sizing: border-box;
  padding: 2px 10px;
  max-width: 233px;
  height: 30px;
  margin: 0 auto;
  outline: none;
  font-size: 16px;
  color: #444;
  font-weight: 600;
  letter-spacing: 0.3px;
    &:valid {
      background-color: #e8f0fe;  
    }
    &:focus {
      border: 1px solid #2980B9;  
    }
`

export const Label = styled.label `
  width: 70px;
  padding: 5px 0;
  font-weight: 500;
  font-size: 16px;
  margin-right: 18px;
  color: #2980B9;
    &:focus {
      background-color: white;
    }
    @media (max-width: 768px) {
      width: 100%;
      align-self: flex-start;
      margin-right: 0;
    } 
`
export const Container = styled.div `

  display: flex;
  justify-content: center;
  padding: 12px 15px;
  align-items: center;
  flex: 1 1 auto;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 5px 10px;
    }  
`