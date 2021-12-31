import { AmplifyChatbot } from "@aws-amplify/ui-react/legacy";

import React, { useEffect } from "react";

interface Props {}

const Chatbot = (props: Props) => {
  const handleChatComplete = (event: any) => {
    const { data, err } = event.detail;
    if (data) console.log("Chat fulfilled!", JSON.stringify(data));
    if (err) console.error("Chat failed:", err);
  };

  useEffect(() => {
    const chatbotElement: any = document.querySelector("amplify-chatbot");
    chatbotElement.addEventListener("chatCompleted", handleChatComplete);
    return function cleanup() {
      chatbotElement.removeEventListener("chatCompleted", handleChatComplete);
    };
  }, []);

  return (
    <AmplifyChatbot
      botName="BookTrip_dev"
      botTitle="My Educational Chatbot"
      welcomeMessage="Hi! How can I help you?"
    />
  );
};

export default Chatbot;
