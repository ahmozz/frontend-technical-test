import { Message } from "../../types/message";
import {conversationSelector, initMessages} from "../../reducers/conversationDetailsSlice";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getConversationMessages, pushNewConversationMessage } from "../../services/messagingApi";
import { messagingHistorySelector } from '../../reducers/messagingHistorySlice'
import { loggedUserId } from "../../pages/_app";

export interface ConversationDetailsData {
    messages: Message[],
    recipientNickname: string, 
    senderNickname: string
}

interface ConversationDetailsActions {
    getLastMessageDate: (messages: Message[]) => number;
    sendMessage: (message : string) => void
}

interface ConversationDetailsReturn {
    data: ConversationDetailsData;
    actions: ConversationDetailsActions;
}


export const getLastMessageDate = (messages: Message[]) : number => {
    return messages.reduce((prev, curr) => {
        return prev.timestamp < curr.timestamp ? curr : prev;
    }).timestamp;    
}


export const useConversationDetails = () : ConversationDetailsReturn => {
    const dispatch = useDispatch();
    const messagingHistoryState = useSelector(messagingHistorySelector);
    const {activeConversation} = messagingHistoryState;

    const conversation = useSelector(conversationSelector);
    const {id, messages, recipientNickname, senderNickname} = conversation;


    const init = () => {
        getConversationMessages(activeConversation?.id.toString()).then(response => {
            dispatch(initMessages(response));
        });
    };

    useEffect(() => {
        init();
          
    }, [activeConversation]);

    return {
        data: {
            messages,  
            recipientNickname,
            senderNickname
        },
        actions: {
            getLastMessageDate,
            sendMessage : (message : string) : void => {
                pushNewConversationMessage(loggedUserId, activeConversation.id.toString(), message).then(() => {
                    init()
                });    
            }
        }
    }
}