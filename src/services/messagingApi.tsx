import { loggedUserId } from "../pages/_app";
import { Conversation } from "../types/conversation";
import { Message } from "../types/message";

export const getConversationHistory = async (userID : string) : Promise<Conversation[]> => {
    const response = await fetch("http://localhost:3005/conversations/"+userID);
    // waits until the request completes...
    return response.json();
};


export const getConversationMessages = async (conversationID : string) : Promise<Message[]> => {
    const response = await fetch("http://localhost:3005/messages/"+conversationID);
    // waits until the request completes...
    return response.json();
};


export const pushNewConversationMessage = async (loggedUserId : number, conversationID : string, message : string) : Promise<Object> => {   
    const response = await fetch("http://localhost:3005/messages/"+conversationID, {
     
        method: "POST",
         
        body: JSON.stringify({
            conversationId: conversationID,
            timestamp: Date.now(),
            authorId: loggedUserId,
            body: message
        }),
         
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    return response.json();
}