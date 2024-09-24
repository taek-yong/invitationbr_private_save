/* Import */
import { useState, useEffect } from "react";
/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import PhotoSelector from "./PhotoSelector.js";
/* CSS Module */
import styles from "../../css/module/common/VideoSetting.module.css";

const VideoSetting = () => {
  const [videoList, setVideoList] = useState([]);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    
    if(file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setVideoList([
          {
            src: e.target.result,
            alt: e.target.result,
          },
        ]);
      };
      fileList.readAsDataURL(file);
    }
  }
  return (
    <div className="content__wrapper">
      <p>1가지만 선택</p>
      <ul className="option__list">
        <CommonItemWrapper>
          <CommonItemContent title="유튜브 URL">
            <input type="text" />
            <div className={styles.notice__wrap}>
              <small>업로드 한 영상의 URL 주소를 입력하세요.</small>
              <small>업로드 한 영상의 URL 주소를 입력하세요.</small>
              <small>업로드 한 영상의 URL 주소를 입력하세요.</small>
            </div>
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="직접 등록">
            <PhotoSelector id="photoList" listName={videoList} onChange={fileAddHandler} deleteFunction={setVideoList} />
            <div className={styles.notice__wrap}>
              <small>파일 확장자명은..</small>
            </div>
          </CommonItemContent>
        </CommonItemWrapper>

      </ul>
    </div>
  )
}

export default VideoSetting;