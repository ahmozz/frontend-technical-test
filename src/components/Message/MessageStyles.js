import styled from "styled-components";


export const ConversationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-radius: 28px;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  background: #fff;
  max-width: 450px;
`;

export const MessageSentContainer = styled.div`
  color: white;
  display: flex;
  justify-content: flex-end;
  border-radius: 28px;
  margin-bottom: 30px;
  margin-left: 65px;
  margin-right: 0px;
  padding: 13px;
  background: #00CCCC;
  max-width: 450px;

  > img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
`;

export const MessageReceivedContainer = styled.div`
  color: black;
  display: flex;
  justify-content: flex-end;
  border-radius: 28px;
  margin-bottom: 30px;
  margin-left: 0px;
  margin-right: 65px;
  padding: 13px;
  background: #E0E0E0;
  max-width: 450px;

  > img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
`;

export const SenderInfo = styled.div`
  > span {
    font-weight: bold;
    margin-left: 5px;
    margin-bottom: 22px;
    font-size: 1rem;
    color: #C0C0C0;
  }
`;


export const MessageInjfo = styled.div`
  display: flex;

  > span {
    margin-left: 5px;
    font-size: 1rem;
    color: #adb5bd;
  }
`;
