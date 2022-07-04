import { configureStore } from "@reduxjs/toolkit";
import conversation from "../reducers/conversationDetailsSlice";
import messagingHistory from "../reducers/messagingHistorySlice";

export const store = configureStore({
    reducer: {
        conversation,
        messagingHistory
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState =  ReturnType<typeof store.getState>