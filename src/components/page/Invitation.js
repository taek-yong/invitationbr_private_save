/* Import */
import { useContext, useEffect } from "react";
/* Component */
import Container from "../layout/Container";
import Tab from "../invitationSection/Tab";
import Intro from "../invitationSection/Intro";
import Letter from "../invitationSection/Letter";
import Calendar from "../invitationSection/Calendar.js";
import Location from "../invitationSection/Location";
import Gallery from "../invitationSection/Gallery";
import Video from "../invitationSection/Video";
import Gift from "../invitationSection/Gift";
import NoticeT from "../invitationSection/NoticeT.js";
import NoticeD from "../invitationSection/NoticeD.js";
import BgMusic from "../invitationSection/BgMusic";
import Guestbook from "../invitationSection/Guestbook";
import Attend from "../invitationSection/Attend";
import Outro from "../invitationSection/Outro";
import Banner from "../invitationSection/Banner.js";
import Footer from "../invitationSection/Footer.js";
import SettingOther from "../invitationSection/SettingOther.js";
/* CSS Module */
import styles from "../../css/module/page/Invitation.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const Invitation = () => {
  const { settingList, selectSettingList, setSelectSettingList, settingOrderList } = useContext(SetContext);
  const renderItemHandler = (id) => {
    switch(id) {
      case "settingLetter":
        return <Letter />;
      case "settingDate":
        return <Calendar />;
      case "settingLocation":
        return <Location />;
      case "settingGallery":
        return <Gallery />;
      case "settingVideo":
        return <Video />;
      case "settingGift":
        return <Gift />;
      case "settingNoticeT":
        return <NoticeT />;
      case "settingNoticeD":
        return <NoticeD />;
      case "settingGuestbook":
        return <Guestbook />;
      case "settingAttend":
        return <Attend />;
      case "settingAttend":
        return <Attend />;
      default:
        return null;
    }
  }
  useEffect(() => {
    settingList.map((item) => (
      selectSettingList.includes(item.itemId) ?
      renderItemHandler(item.itemId)
      : null
    ))
  }, [selectSettingList]) 
  return (
    <div className={`${styles.invitation}`}>
      <Container>
        <Tab></Tab>
        <Intro></Intro>
        {/* <Letter></Letter>
        <Calendar></Calendar>
        <Location></Location> */}
        {selectSettingList.map((itemId) =>
          selectSettingList.includes(itemId) ? (
            <div key={itemId}>{renderItemHandler(itemId)}</div>
          ) : null
        )}
        {selectSettingList.includes("settingOutro") && <Outro />}
        
        <Banner></Banner>
        {/* 위치 방명록 위 */}
        
        <SettingOther />
        <Footer></Footer>
      </Container>
    </div>
  )
}

export default Invitation;