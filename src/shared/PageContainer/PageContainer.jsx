import { Content } from "../Content/Content";
import { Sidebar } from "../Sidebar/Sidebar";
import { SmallVector } from "../SmallVector/SmallVector";
import styles from "./PageContainer.module.scss";

export const PageContainer = ({ page, title, children }) => (
  <div className={styles.container}>
    <SmallVector />
    <Sidebar activePage={page} />
    <Content title={title}>{children}</Content>
  </div>
);
