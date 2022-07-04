import Message from "../Message";
import { useConversationDetails } from "./useConversationDetails";
import {
  ConversationContainer,
  MessageInputContainer
} from "./ConversationStyles";
import { messagingHistorySelector } from '../../reducers/messagingHistorySlice'
import { useSelector } from "react-redux";
import { getLoggedUserId } from '../../utils/getLoggedUserId'
import { useState } from "react";

const Conversation = () => {
    const {data, actions} = useConversationDetails();
    const messagingHistoryState = useSelector(messagingHistorySelector);
    const {interlocutorNickname} = messagingHistoryState;
    const [input, setInput] = useState<string>();

    return (
    <div>
      <ConversationContainer>
        {data && data.messages.map((item, i) => (
            <Message
              key={i}
              isSent={getLoggedUserId() == item.authorId}
              username={interlocutorNickname}
              message={item.body}
              timestamp={item.timestamp}
            />
          ))}
      </ConversationContainer>
      <MessageInputContainer>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Write a menssage"
        />
        <button onClick={() => {actions.sendMessage(input); setInput("")}}>
          Send
        </button>
      </MessageInputContainer>

    </div>);

}

export default Conversation;