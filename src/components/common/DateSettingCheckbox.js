/* Component */
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/BackgroundSettingCheckbox.module.css";

const DateSettingCheckbox = () => {
  return (
    <div className={styles.check__wrapper}>
      <CheckItem content="D-Day" id="dateDdayOption" />
      <CheckItem content="카운트다운" id="dateCountdownOption" />
    </div>
  )
}

export default DateSettingCheckbox;