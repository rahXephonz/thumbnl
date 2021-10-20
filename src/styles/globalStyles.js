import styled from "styled-components";

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#008060' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 45px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '18px' : '16px')};
  outline: none;
  font-family: 'Sora';
  font-weight: bold;
  margin-left: ${({ left }) => (left ? "-70px" : "0px")};
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#FF7D2A' : '#4B59F7')};
  }
  @media screen and (max-width: 868px) {
    width: 100%;
    margin-left: 0px !important;
  }
`;

export const ButtonNav = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#FF7D2A' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 45px' : '12px 20px')};
  color: #fff;
  border-radius: 30px;
  font-size: ${({ fontBig }) => (fontBig ? '18px' : '16px')};
  outline: none;
  width: 150px;
  text-align: center;
  height: 45px;
  font-family: 'Sora';
  font-weight: bold;
  margin-left: ${({ left }) => (left ? "-70px" : "10px")};
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#FDA6B4' : '#4B59F7')};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
  
  @media screen and (max-width: 834px) {
    width: 725px;
    margin-left: 20px;
    margin-top: 20px;
  }

  @media screen and (max-width: 600px) {
    width: 560px;
    margin-left: 20px;
    margin-top: 20px;
  }

  @media screen and (max-width: 540px) {
    width: 499px;
    margin-left: 20px;
    margin-top: 20px;
  }

  @media screen and (max-width: 428px){
    width: 385px;
  }

  @media screen and (max-width: 414px){
    width: 370px;
  }

  @media screen and (max-width: 393px){
    width: 355px;
  }

  @media screen and (max-width: 390px){
    width: 345px;
  }

  @media screen and (max-width: 375px){
    width: 332px;
  }

  @media screen and (max-width: 360px){
    width: 320px;
  }

  @media screen and (max-width: 320px){
    width: 278px;
  }

  @media screen and (max-width: 280px){
    width: 240px;
  }
`;