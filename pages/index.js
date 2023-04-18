import SignUp from "./sign-up";

export default function Starten({ nickname, onAddNickname }) {
  return <SignUp nickname={nickname} onAddNickname={onAddNickname} />;
}
