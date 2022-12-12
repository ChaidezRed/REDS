import styled from "styled-components";



export const HomeBody =styled.section`
  display: flex;
  background-size: cover;
  padding: 15%;
  box-sizing: border-box;
  height: 100vh;
  .content{
    display: flex;
    flex-direction: column;
    .title{
      display: flex;
      flex-direction: column;
      h2{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 128px;
        line-height: 190px;
        color: #FFFFFF;
      }
      .back-text{
        background: rgba(207, 85, 65, 0.56);
        background-size: contain;
        background-position-y: 1%;
        background-position-x: left;
      }
    }
  }
  .butoms{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    button{
      background: #1D1D1D;
      padding: 3%;
      color: white;
    }
    .more{
      padding: 3%;
      
    }
  }


`