/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import Tab from "../invitationSection/Tab";
/* CSS Module */
import styles from "../../css/module/invitationSection/Intro.module.scss";
/* Image */
import intro1Ring from "../../img/intro/intro_theme_1_ring.png";
import intro3Letter from "../../img/intro/intro_theme_3_lettering.png";
import introPhoto from "../../img/intro/intro_photo_test.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { InfoContext } from "../../store/option-info-context.js";
import { IntroContext } from "../../store/option-intro-context.js";

const Intro = () => {
  const { selectOptionList } = useContext(SetContext);
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const { selectIntroPhoto, setSelectIntroPhoto } = useContext(IntroContext);
  const handleDateChange = (date) => {
    const selectedDate = date; 
    const formattedDate = selectedDate.split('-').join('.'); // "-"를 "."으로 변경
    return formattedDate;
  };
  const handleDaysChange = (date) => {
    const dateObj = new Date(date);
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']; // 요일 배열
    const dayOfWeek = daysOfWeek[dateObj.getDay()]; // 요일 계산
    return dayOfWeek;
  }
  const renderIntroHandler = (id) => {
    switch(id) {
      case "basicTemplate1":
        return (
          <>
            <Tab />
            <div className={styles.intro__wrap}>
              <div className={styles.intro__headline}>
                <div className={styles.img__wrap}>
                  <img src={intro1Ring} alt="" />
                </div>
                <div className={styles.txt__wrap}>
                  <span>Wedding</span>
                  <p>Invitation</p>
                </div>
              </div>
              <div className={styles.intro__photo}>
                {
                  selectIntroPhoto.length === 0 ?
                  <img src={introPhoto} alt="표지 사진" />
                  : <img src={selectIntroPhoto[0].src} alt="표지 사진" />
                }
              </div>
              <div className={styles.intro__title}>
                <div className={styles.intro__title_couple}>
                  <h2 className={styles.groom}>{basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname}</h2>
                  <p className={styles.divide}></p>
                  <h2 className={styles.bride}>{basicInfoList.brideInfo.lastname + basicInfoList.brideInfo.firstname}</h2>
                </div>
                <div className={styles.intro__title_date}>
                  <h3 className={styles.date}>
                    {`${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}:${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min : "00"}`}
                  </h3>
                </div>
                <div className={styles.intro__title_place}>
                  <h4 className={styles.groom}>{`${basicInfoList.placeInfo.placeName} ${basicInfoList.placeInfo.placeDetail}`}</h4>
                </div>
              </div>
            </div>
          </>
        );
        // case "basicTemplate2":
        case "basicTemplate3":
          return (
            <>
              <Tab />
              <div className={styles.intro__wrap}>
                <div className={styles.intro__headline}>
                  <div className={styles.img__wrap}>
                    <img src={intro3Letter} alt="" />
                  </div>
                  <div className={styles.txt__wrap}>
                    {/* <span>Wedding</span> */}
                    <p>저희 결혼합니다</p>
                  </div>
                </div>
                <div className={styles.intro__photo}>
                  {
                    selectIntroPhoto.length === 0 ?
                    <img src={introPhoto} alt="표지 사진" />
                    : <img src={selectIntroPhoto[0].src} alt="표지 사진" />
                  }
                </div>
                <div className={styles.intro__title}>
                  <div className={styles.intro__title_couple}>
                    <h2 className={styles.groom}>{basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname}</h2>
                    <p className={styles.divide}></p>
                    <h2 className={styles.bride}>{basicInfoList.brideInfo.lastname + basicInfoList.brideInfo.firstname}</h2>
                  </div>
                  <div className={styles.intro__title_date}>
                    <h3 className={styles.date}>
                      {`${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}:${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min : "00"}`}
                    </h3>
                  </div>
                  <div className={styles.intro__title_place}>
                    <h4 className={styles.groom}>{`${basicInfoList.placeInfo.placeName} ${basicInfoList.placeInfo.placeDetail}`}</h4>
                  </div>
                </div>
              </div>
            </>
          );
      // case "settingDate":
      //   return <Calendar />;
      // case "settingLocation":
      //   return <Location />;
      // case "settingGallery":
      //   return <Gallery />;
      // case "settingVideo":
      //   return <Video />;
      // case "settingGift":
      //   return <Gift />;
      // case "settingNoticeT":
      //   return <NoticeT />;
      // case "settingNoticeD":
      //   return <NoticeD />;
      // case "settingGuestbook":
      //   return <Guestbook />;
      // case "settingAttend":
      //   return <Attend />;
      // case "settingAttend":
      //   return <Attend />;
      default:
        return null;
    }
  }
  return (
    <div 
      key={selectOptionList.introFillType} 
      id={selectOptionList.introFillType} 
      className={`${styles.intro} ${styles[selectOptionList.introFillType]}`}
    >
      {renderIntroHandler(selectOptionList.introFillType)}
    </div>
  )
}

export default Intro;