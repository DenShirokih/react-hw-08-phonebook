import { WelcomeWrapper, WelcomeImg, WelcomeTitle } from './Welcome.styled';
import logo from 'img/welcomeImg.png';

export const Welcome = () => {
  return (
    <WelcomeWrapper>
      <WelcomeImg src={logo} alt="" />
      <WelcomeTitle>Welcome to Phonebook</WelcomeTitle>
    </WelcomeWrapper>
  );
};
