import React from "react";
import {
  MessageSentContainer,
  MessageReceivedContainer,
  SenderInfo,
} from "./MessageStyles";
import Moment from 'moment';

const Message = ({isSent, username, message, timestamp }) => {
  const formatDate = Moment(timestamp).format('DD-MM-YYYY')

  return (
    <>
    {isSent && (
      <MessageSentContainer>
          {message}
      </MessageSentContainer>)
    }
    {!isSent && (<>  
      <SenderInfo>
        <span>{username}</span>
      </SenderInfo>
      <MessageReceivedContainer>
          {message}
      </MessageReceivedContainer></>)
    }
    </>
  );
};

export default Message;
