import ReactSwitch from "react-switch";
import { useTheme } from "../../hooks/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";


export const ThemeSwitcher: React.FC = () => {
  const { switchTheme, isDarkMode } = useTheme();

  return (
    <ReactSwitch
      checked={isDarkMode}
      onChange={switchTheme}
      offColor="#85225b"
      onColor="#24cacf"
      offHandleColor="#e213af"
      onHandleColor="#3A3C4B"
      handleDiameter={14}
      height={16}
      width={44}
      checkedIcon={
        <FiSun size={15} color="#ffffff" style={{ marginLeft: "2px",  marginBottom: "0px"}} />
      }
      uncheckedIcon={
        <FiMoon size={12} color="#ffffff" style={{ marginLeft: "10px", marginBottom: "0px"}} />
      }
    />
  );
};
