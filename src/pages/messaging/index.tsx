import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ConversationDetails from '../../components/ConversationDetails'
import MessagingHistoryitem from '../../components/MessagingHistoryItem'
import { messagingHistorySelector, setActiveConversation, setMyInterlocutorNickname, initConversations } from '../../reducers/messagingHistorySlice'
import { getConversationHistory } from '../../services/messagingApi'
import { getLoggedUserId } from '../../utils/getLoggedUserId'
import { MessagingScreenContainer, MessagingHistoryitemsContainer } from '../../components/MessagingHistoryItem/MessagingHistoryStyles.js'

const HomeMessaging: FC = () => {
  const dispatch = useDispatch();

  const messagingHistoryState = useSelector(messagingHistorySelector);
  const {conversations, activeConversation} = messagingHistoryState;

  useEffect(() => {
      getConversationHistory(getLoggedUserId()?.toString()).then(response => {
        response.sort((a, b) => (a.lastMessageTimestamp < b.lastMessageTimestamp) ? 1 : -1)
        dispatch(initConversations(response));
        dispatch(setActiveConversation(response.length > 0 ? response[0] : null));
        dispatch(setMyInterlocutorNickname(activeConversation.recipientId == getLoggedUserId() ? activeConversation.senderNickname : activeConversation.recipientNickname))
    });
      
}, []);

  return (
    <>
      <MessagingScreenContainer>
        <MessagingHistoryitemsContainer>
          {conversations && conversations.map((item) => (
            <MessagingHistoryitem conversation={item}></MessagingHistoryitem>
          ))}
        </MessagingHistoryitemsContainer>
        <ConversationDetails></ConversationDetails>
      </MessagingScreenContainer> 
    </>
  )
}

export default HomeMessaging;