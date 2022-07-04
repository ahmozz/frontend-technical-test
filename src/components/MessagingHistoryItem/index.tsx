import { useConversationDetails } from "../ConversationDetails/useConversationDetails";
import {
    MessagingHistoryItemDiv
  } from "./MessagingHistoryStyles";

import Moment from 'moment';
import { Conversation } from "../../types/conversation";
import { useMessagingHistoryItem } from "./useMessagingHistoryItem";

const MessagingHistoryitem = ({conversation} : {conversation : Conversation}) => {
    const { actions } = useMessagingHistoryItem(conversation);

    const lastDate = Moment(conversation.lastMessageTimestamp).format("MMM Do YY");


    return (
    <><MessagingHistoryItemDiv href="#" onClick={actions.itemClickEventHandler}>
        <p>{actions.getInterlocutorNickname()}</p>
        <span>{lastDate}</span>
        </MessagingHistoryItemDiv>
    </>);
}

export default MessagingHistoryitem;