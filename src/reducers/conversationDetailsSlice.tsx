import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { Message } from "../types/message";


interface ConversationState {
    id: number | null,
    messages: Message[],
    recipientNickname: string,
    senderNickname: string,
    lastMessageTimestamp: number | null
}

const initialState : ConversationState = {
    id: null,
    messages: [],
    recipientNickname: "",
    senderNickname: "",
    lastMessageTimestamp: null
}

export const conversationSlice = createSlice({
    name: "Conversation",
    initialState,
    reducers: {
        initID(state, {payload : id} : {payload : number}){
            state.id = id;
        },
        initMessages(state, {payload : messages} : {payload : Message[]}){
            state.messages = messages;
        },
        initRecipientNickname(state,{payload : recipientNickname} : {payload : string}){
            state.recipientNickname = recipientNickname;
        },
        initSenderNickname(state,{payload : senderNickname} : {payload : string}){
            state.senderNickname = senderNickname;
        }
    }
})

export const {initID, initMessages, initRecipientNickname, initSenderNickname}  = conversationSlice.actions;

export const conversationSelector = (state : RootState) => state.conversation;

export default conversationSlice.reducer;