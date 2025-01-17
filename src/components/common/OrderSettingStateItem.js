/* Import */
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemTypes = {
  ORDER: "order",
}
// C: 메뉴 순서 변경 - 위치 고정되지 않은 아이템
const OrderSettingStateItem = ({ children, id, index, moveItemHandler, className }) => {
  const orderItemRef = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.ORDER,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!orderItemRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = orderItemRef.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveItemHandler(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.ORDER,
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.5 : 1
  drag(drop(orderItemRef));
  return (
    <div ref={orderItemRef} className={className} style={{ opacity }} data-handler-id={handlerId}>
      {children}
    </div>
  )
}

export default OrderSettingStateItem;