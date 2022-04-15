import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../App";
import { lightTheme, Theme } from "../../theme";

interface ToggleProps {
  theme: Theme;
}

const DarkModeToggle = () => {
  const { theme, setToggleTheme } = useContext(ThemeContext);
  return (
    <ToggleButton onClick={setToggleTheme} theme={theme}>
      {theme === lightTheme ? (
        <>
          <Emoji>
            <span role="img" aria-label="darkMoon">
              🕶️
            </span>
          </Emoji>
          <ModeContent>다크 모드</ModeContent>
        </>
      ) : (
        <>
          <Emoji>
            <span role="img" aria-label="lightSun">
              💡
            </span>
          </Emoji>
          <ModeContent>라이트 모드</ModeContent>
        </>
      )}
    </ToggleButton>
  );
};

const ToggleButton = styled("button")<ToggleProps>`
  place-content: center;
  width: 110px;
  height: 45px;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.toggleBackground};
  color: ${({ theme }) => theme.text};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    filter: brightness(
      ${({ theme }) => (theme === lightTheme ? "0.9" : "1.13")}
    );
  }
`;

const Emoji = styled.figure`
  width: 33px;
  height: 33px;
  border-radius: 100%;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModeContent = styled.p`
  font-size: 0.7rem;
  margin-left: 2px;
`;

export default DarkModeToggle;
