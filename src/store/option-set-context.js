/* Import */
import { createContext } from "react";

export const SetContext = createContext({
  kakaoInfoList: [],
  setKakaoInfoList: () => {}, 
  urlInfoList: [],
  setUrlInfoList: () => {}, 
  settingList: [],
  selectSettingList: [],
  setSelectSettingList: () => {}, 
  accountInfoList: {},
  setAccountInfoList: () => {}, 
  videoList: {},
  setVideoList: () => {}, 
  noticeTList: [],
  setNoticeTList: () => {}, 
  noticeDList: {},
  setNoticeDList: () => {}, 
  selectNoticeT: {},
  setSelectNoticeT: () => {},
  outroList: {},
  setOutroList: () => {},
  letterList: {},
  setLetterList: () => {},
  guestbookList: {},
  setGuestbookList: () => {},
});