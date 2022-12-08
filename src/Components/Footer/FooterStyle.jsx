import styled from "styled-components";

export const Footerbody = styled.footer`
    background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
  gap: 10%;
  .main{
    display: flex;
    flex-direction: column;
    h3{
      font-family: 'Bebas Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 43px;
      color: #FFFFFF;
    }
    h4{
      font-family: 'Oswald';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
  .second{
    h5{
      font-family: 'Oswald';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 19px;
      color: #FFFFFF;
    }
    display: flex;
    flex-direction: column;
    gap: 1.4%;
    .text{
      display: flex;
      flex-direction: column;
      gap: 1%;
      h6{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: rgba(255, 255, 255, 0.6);
      }
      
    }
    .icon{
      display: flex;
      color: white;
    }
  }


`