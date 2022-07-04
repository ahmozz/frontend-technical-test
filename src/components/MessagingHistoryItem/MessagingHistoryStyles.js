import styled from "styled-components";


export const MessagingScreenContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 20px;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(56,68,75,1) 0%, rgba(35,43,48,1) 100%); 
  `;


export const MessagingHistoryitemsContainer = styled.div`
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;
  width:30%;
  margin-top:200px;
  border-right: 6px solid white;
  margin-right: 80px;
  height: 100%;
  `;


  export const MessagingHistoryItemDiv = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  width:40%;
  margin: 20px auto 0px auto;
  padding: 20px;
  background: #E0E0E0;
  border-radius: 6px;
  box-shadow: 0 2px 10pxrgba(0,0,0,.2);
  border-width: 1px; 
  padding: 30px;
  > p {
    font-weight: bold;
    font-size: 1rem;
  }
  `;
