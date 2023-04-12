import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [currentRound, setCurrentRound] = useState(1);
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        currentRound={currentRound}
        setCurrentRound={setCurrentRound}
      />
    </>
  );
}
