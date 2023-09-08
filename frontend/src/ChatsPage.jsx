// import {MultiChatSocket, useMultiChatLogic, MultiChatWindow} from "react-chat-engine-advanced"

// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic('476dc5d2-de93-4cb9-bd4b-bd4b68715c0e',props.user.username, props.user.secret);
//     // return <div className="background">chats...</div>;
//     return (
//         <div style={{height: '100vh'}}>
//             <MultiChatSocket {...chatProps} />
//             <MultiChatWindow {...chatProps} style={{height: '100%'}} />
//         </div>
//     ) 
//   };
// export default ChatsPage;

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId= "476dc5d2-de93-4cb9-bd4b-bd4b68715c0e"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;