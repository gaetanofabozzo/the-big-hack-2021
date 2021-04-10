import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import AnswerAge from "./AnswerAge";

const answers = {
  "quanti positivi oggi?": "2225",
  "quando potrò vaccinarmi?": "option",
  "andrà tutto bene": "CE LA FAREMOOOOOOOOOOOOO",
  "ho paura":
    "Sii fiducioso, i numeri mostrano una decrescita dell'incremento di positivi sul territorio. Se la campagna vaccinale proseguirà senza intoppi, potremo tornare presto ad abbracciarci",
};

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#0152a2",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#0152a2",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

export default function Chatbot({ opened, toggleOpen }) {
  return (
    <div className="chatbot">
      <ThemeProvider theme={theme}>
        <ChatBot
          placeholder="Come ti posso aiutare?"
          opened={opened}
          floating
          toggleFloating={toggleOpen}
          steps={[
            {
              id: "1",
              message: "Ciao, sono qui per aiutarti. Chiedimi informazioni",
              trigger: "example",
            },
            {
              id: "example",
              message:
                "Ad esempio: Quanti positivi oggi? Quando potrò vaccinarmi?",
              trigger: "3",
            },
            {
              id: "answer-option",
              message: "A che fascia d'età appartieni?",
              trigger: "options",
            },
            {
              id: "options",
              options: [
                { value: "16-19", label: "16-19", trigger: "3" },
                { value: "20-29", label: "20-29", trigger: "3" },
                { value: "30-39", label: "30-39", trigger: "3" },
                { value: "40-49", label: "40-49", trigger: "3" },
                { value: "50-59", label: "50-59", trigger: "3" },
                { value: "60-69", label: "60-69", trigger: "3" },
                { value: "70-79", label: "70-79", trigger: "3" },
                { value: "80-89", label: "80-89", trigger: "3" },
                { value: "90+", label: "90+", trigger: "3" },
              ],
            },
            {
              id: "3",
              component: <AnswerAge />,
              trigger: "4",

              asMessage: true,
            },
            {
              id: "4",
              user: true,

              trigger: ({ value }) => {
                if (value.toLowerCase() === "quando potrò vaccinarmi?") {
                  return "answer-option";
                }
                return "5";
              },
            },
            {
              id: "5",
              message: ({ previousValue }) =>
                answers[previousValue.toLowerCase()],
              trigger: "4",
            },
          ]}
        />
      </ThemeProvider>
    </div>
  );
}
