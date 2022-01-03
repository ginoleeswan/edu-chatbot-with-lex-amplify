import Amplify from "aws-amplify";
import React from "react";
import "./App.css";
import awsconfig from "./aws-exports";
import Chatbot from "./components/Chatbot/Chatbot";
import { Container, Row } from "react-bootstrap";

Amplify.configure(awsconfig);

function App() {
  return (
    <Container>
      <Row>
        <Chatbot />
      </Row>
    </Container>
  );
}

export default App;
