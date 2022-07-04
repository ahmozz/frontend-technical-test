import styled from "styled-components";

export const ConversationContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;
  margin-bottom: 200px;
  flex-wrap: wrap;
  align-content: center;
  > span {
    position: fixed;
    bottom: 0;
    background: whitesmoke;
    border: none;
    outline: none;
    width: 30%;
    height: 40px;
    border-radius: 8px;
    margin: auto;
    margin-bottom: 250px;
  }
}`;

export const MessageInputContainer = styled.div`
  bottom: 0;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 200px;
  flex-wrap: wrap;
  > input {
    position: fixed;
    bottom: 0;
    margin-bottom: 20px;
    background: whitesmoke;
    border: none;
    outline: none;
    width: 30%;
    height: 40px;
    border-radius: 8px;
  }
  > button {
    position: fixed;
    bottom: 0;
    margin-bottom: 20px;
    background: grey;
    border: none;
    outline: none;
    width: 60px;
    height: 30px;
    border-radius: 8px;
    margin-left: 510px;
    margin-bottom: 25px;
  }
}`;
