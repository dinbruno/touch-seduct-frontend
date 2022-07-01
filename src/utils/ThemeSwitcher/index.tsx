import ReactSwitch from "react-switch";
import { useTheme } from "../../hooks/useTheme";
import { FiMoon, FiSun, FiSunset } from "react-icons/fi";


export const ThemeSwitcher: React.FC = () => {
  const { switchTheme, isDarkMode } = useTheme();

  return (
    <ReactSwitch
      checked={isDarkMode}
      onChange={switchTheme}
      offColor="#FFFFFF"
      onColor="#FFFFFF"
      offHandleColor="#FFFFFF"
      onHandleColor="#3A3C4B"
      handleDiameter={14}
      height={16}
      width={44}
      checkedIcon={
        <FiSun size={12} color="#F3A84F" style={{ marginLeft: "2px" }} />
      }
      uncheckedIcon={
        <FiMoon size={12} color="#3A3C4B" style={{ marginLeft: "10px" }} />
      }
    />
  );
};
