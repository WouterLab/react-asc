import { useNavigate } from "react-router-dom";
import styles from "./NavButton.module.scss";

export const NavButton = ({ active, link, children, ...props }) => {
  const navigate = useNavigate();

  return (
    <button
      {...props}
      className={`${styles.navButton} ${active ? styles.big : ""}`}
      onClick={() => navigate(link)}
    >
      {children}
    </button>
  );
};
