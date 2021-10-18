import styled from 'styled-components';
import heroImage from '../../assets/images/pexels-adonyi-gábor-1414651.jpg';

export const HeroImg = styled.section`
  background-image: url(${heroImage});
  background-size: cover;

`;


export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh; 
  background: rgba(0, 0, 0, 0.5);
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  h1 span{
    color: white;
    font-size: 10px;
    font-size: 15px;
    display:block;
    text-align: center;

  }
`;