import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { Conversation } from "../types/conversation";


interface MessagingState {
    conversations: Conversation[],
    activeConversation: Conversation | null;
    interlocutorNickname: string | null //TODO - to migrate to a user Object
}

const initialState : MessagingState = {
    conversations: [],
    activeConversation: null,
    interlocutorNickname: null
}

export const messagingHistorySlice = createSlice({
    name: "MessagingHistory",
    initialState,
    reducers: {
        setActiveConversation(state, {payload : conversation} : {payload : Conversation}){
            state.activeConversation = conversation;
        },
        setMyInterlocutorNickname(state, {payload : nickname} : {payload : string}){
            state.interlocutorNickname = nickname;
        },
        initConversations(state, {payload : conversations} : {payload : Conversation[]}){
            state.conversations = conversations;
        },
        createNewConversation(state, {payload : conversation} : {payload : Conversation}){
            state.conversations.push(conversation);
        }
    }
})

export const {setMyInterlocutorNickname, setActiveConversation, initConversations, createNewConversation}  = messagingHistorySlice.actions;

export const messagingHistorySelector = (state : RootState) => state.messagingHistory;

export default messagingHistorySlice.reducer;