/* Import */
import { useContext } from "react";
/* Component */
import Button from "../layout/Button";
/* CSS Module */
import styles from "../../css/module/common/PhotoSelector.module.scss";
/* Image */
import photoAddImg from "../../img/photoSelector/photo_selector_add.png"
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const PhotoSelector = (props) => {
  const { videoList, setVideoList } = useContext(SetContext);
  const introDeleteHandler = (item) => {
    let list = [...props.listName];
    list = list.filter((e) => e !== item);
    props.deleteFunction(list);
  }
  const videoDeleteHandler = () => {
    setVideoList(() => (
      {
        videoUrl: "",
        videoSrc: "",
      }
    ))
  }
  return (
    <div id={props.id} className={`${styles.photo__selector} ${props.id === "galleryPhotoList" ? styles["gallery"] : null}`}>
      <ul className={styles.option__list}>
        <li className={styles.option__item} style={{backgroundImage: `url(${photoAddImg})`}}>
          <input type="file" name="src" id={`${props.id}File`} multiple onChange={props.onChange} />
          <label htmlFor={`${props.id}File`}></label>
        </li>
        {
          props.type !== "video" ?
          props.listName.map((item, idx) => (
            item.src ? 
            <li className={styles.option__item} key={item.alt + idx} style={{backgroundImage: `url(${item.src})`}}>
              <Button type="button" styleType="close" onClick={props.hasSrc ? props.hasSrcFunction : () => introDeleteHandler(item)} />
            </li>
            : null
          ))
          : null
        }
        {
          props.type === "video" && videoList.videoSrc !== ""?
          <li className={styles.option__item} key={videoList.videoSrc}>
            <video src={videoList.videoSrc} type="video/mp4" preload="auto"></video>
            <Button type="button" styleType="close" onClick={() => {videoDeleteHandler(videoList.videoSrc)}} />
          </li>
          // :
          // videoList.videoSrc !== "" ?
          // <li className={styles.option__item} key={videoList.videoSrc}>
          //   <Button type="button" styleType="close" onClick={() => {introDeleteHandler(videoList.videoSrc)}} />
          // </li>
          : null
        }
      </ul>
    </div>
  )
}

export default PhotoSelector;