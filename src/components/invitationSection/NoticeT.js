/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import NoticeTItem from "./NoticeTItem.js";
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/NoticeT.module.scss";
/* Image */
import defaultImg1 from "../../img/notice/notice_photo_test1.png"
import defaultImg2 from "../../img/notice/notice_photo_test2.png"
import defaultImg3 from "../../img/notice/notice_photo_test3.png"
/* Context */
import { SetContext } from "../../store/option-set-context.js";
const defaultImg = [defaultImg1, defaultImg2, defaultImg3];
const NoticeT = () => {
  const { noticeTList, setNoticeTList } = useContext(SetContext);
  const [isActive, setIsActive] = useState(0);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }
  useEffect(() => {
    setIsActive(0);
  }, [noticeTList.length]);
  return (
    <div className={`${styles.notice} ${styles.style_theme_1}`}>
      <div className={styles.notice__wrap}>
        <HeadLine title="안내사항" content="information" />
        <div className={styles.notice__content}>
          <NoticeTItem onClick={setActiveHandler} isActive={isActive} />
          {
            noticeTList.map((item, idx) => (
              <div key={item + idx} id={item.id} className={`${styles.content} ${isActive === idx ? styles["active"] : ""}`}>
                <img src={`${item.src === "" ? defaultImg[idx] : item.src}`} alt="" />
                <p>
                  {item.content}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default NoticeT;