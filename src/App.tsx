import Amplify from "aws-amplify";
import React from "react";
import "./App.css";
import awsconfig from "./aws-exports";
import Chatbot from "./components/Chatbot/Chatbot";

Amplify.configure(awsconfig);

function App() {
  return <Chatbot />;
}

export default App;
