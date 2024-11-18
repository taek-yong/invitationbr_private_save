/* Import */
import { useContext } from "react";
/* Component */
import ListOptionContent from "./ListOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
import TextEditor from "./TextEditor.js";
/* Context */
import { LocationContext } from "../../store/option-location-context.js";

const TrafficSetting = () => {
  const { trafficList, setTrafficList } = useContext(LocationContext);
  const trafficAddHandler = () => {
    setTrafficList((prev) => {
      return [...prev, 
        {
          "traffic": "",
          "content": ""
        },
      ]
    })
  }
  const trafficRemoveHandler = (removeidx) => {
    setTrafficList(() => {
      return [...trafficList].filter((_, listidx) => listidx !== removeidx);
    })
  }
  const trafficDataChangeHandler = (e, index) => {
    const { name, value } = e.target;
    setTrafficList(prev => (
      prev.map((item, idx) => 
        idx === index ? { ...item, [name]: value } : item 
      )
    ))
  }
  return (
    <ListOptionContent>
      {
        trafficList.map((item, idx) => (
        <CommonItemWrapper key={`${item}${idx}`}>
          <CommonItemContent title="교통수단" multi={true}>
            <input 
              type="text" 
              name="traffic" 
              value={item.traffic} 
              placeholder="교통수단명을 입력하세요. (ex : 지하철/버스/자가용)"
              onChange={(e) => trafficDataChangeHandler(e, idx)} 
            />
            <TextEditor name="content" textValue={item.content} onChange={(e) => trafficDataChangeHandler(e, idx)} />
            <Button type="button" content="교통수단 삭제" styleType="remove" onClick={() => trafficRemoveHandler(idx)} />
          </CommonItemContent>
        </CommonItemWrapper>
        ))
      }
      <ButtonWrapper styleType="center">
        <Button type="button" content="교통수단 추가" styleType="point" onClick={trafficAddHandler} />
      </ButtonWrapper>
    </ListOptionContent>

  )
}

export default TrafficSetting;