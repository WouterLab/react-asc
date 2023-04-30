import { Sidebar } from "../../shared/Sidebar/Sidebar";
import { SmallVector } from "../../shared/SmallVector/SmallVector";
import styles from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <SmallVector />
      <Sidebar />
    </div>
  );
};
