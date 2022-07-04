import {useDispatch} from "react-redux";
import { getConversationMessages } from "../../services/messagingApi";
import {initMessages} from "../../reducers/conversationDetailsSlice";
import { setActiveConversation, setMyInterlocutorNickname } from '../../reducers/messagingHistorySlice'
import { Conversation } from "../../types/conversation";
import { getLoggedUserId } from '../../utils/getLoggedUserId'


interface MessagingHistoryItemActions {
    itemClickEventHandler: () => void;
    getInterlocutorNickname: () => string;
}

interface MessagingHistoryItemReturn {
    actions: MessagingHistoryItemActions
}


export const useMessagingHistoryItem = (conversation : Conversation) : MessagingHistoryItemReturn => {
    const dispatch = useDispatch();

    return {
        actions: {
            itemClickEventHandler: () => {
                getConversationMessages(conversation.id?.toString()).then(response => {
                    dispatch(initMessages(response));
                    dispatch(setActiveConversation(conversation));
                    dispatch(setMyInterlocutorNickname(conversation.recipientId == getLoggedUserId() ? conversation.senderNickname : conversation.recipientNickname))
                });        
            },
            getInterlocutorNickname: () => {
                return conversation?.recipientId == getLoggedUserId() ? conversation.senderNickname : conversation.recipientNickname
            }
        }
    }
}