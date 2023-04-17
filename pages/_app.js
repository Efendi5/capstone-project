import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [currentRound, setCurrentRound] = useState(1);
  const [nickname, setNickname] = useLocalStorageState("nickname", "");
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
        nickname={nickname}
        setNickname={setNickname}
      />
    </>
  );
}
