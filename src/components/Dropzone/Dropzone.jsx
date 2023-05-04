import styles from "./Dropzone.module.scss";
import PlusIcon from "../../assets/plus.svg";
import { useRef } from "react";

export const Dropzone = ({ onChange }) => {
  const filePicker = useRef(null);

  const chooseFile = () => {
    if (filePicker.current) {
      filePicker.current.click();
    }
  };

  return (
    <div className={styles.dropzone} onClick={() => chooseFile()}>
      <input
        type='file'
        ref={filePicker}
        className={styles.hiddenInput}
        accept='.jpg, .jpeg, .png'
        onChange={onChange}
      />
      <img src={PlusIcon} alt='add-card' className={styles.plusIcon} />
    </div>
  );
};
