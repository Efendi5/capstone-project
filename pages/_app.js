import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [currentRound, setCurrentRound] = useState(1);
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
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
        points1={points1}
        setPoints1={setPoints1}
        points2={points2}
        setPoints2={setPoints2}
      />
    </>
  );
}
