/* Import */
import { useContext } from "react";
/* Component */
import HeadLine from "../layout/HeadLine.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Attend.module.scss";
/* Image */
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { RefContext } from "../../store/option-ref-context.js";

const Attend = (props) => {
  const { attendList } = useContext(SetContext);
  const { attendRef } = useContext(RefContext);
  return (
    <div ref={attendRef} id="Attend" className={`${styles.attend}`}>
      <div className={styles.attend__wrap}>
        <HeadLine title={attendList.attendTitle ? attendList.attendTitle : "참석 의사 전달"} content="rsvp" />
        <div className={styles.attend__content}>
          <p>
            {
              attendList.attendContent ? attendList.attendContent : "한 분 한 분 정성껏 모실 수 있도록\n참석 의사 전달 부탁 드립니다."
            }
          </p>
          <ButtonWrapper styleType="center">
            <Button content={attendList.attendButtonTitle ? attendList.attendButtonTitle : "참석 의사 전달하기"} styleType="invitation__attend" onClick={props.handleOpen}></Button>
          </ButtonWrapper>
        </div>
      </div>

    </div>
  )
}

export default Attend;