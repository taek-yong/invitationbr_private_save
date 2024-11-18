/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import TabSelector from "./TabSelector.js";
import VideoSettingOption from "./VideoSettingOption.js";

const typeList = [
  {
    id: "videoYoutubeOption",
    title: "유튜브 등록",
  },
  {
    id: "videoRegOption",
    title: "직접 등록",
  }
];
const VideoSetting = () => {
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="등록방법" multi={true}>
            {/* 탭 활성화 필요 */}
            <TabSelector 
              listName={typeList}
              name="videoType"
            />
            <VideoSettingOption />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default VideoSetting;