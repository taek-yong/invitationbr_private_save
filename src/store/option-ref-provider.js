/* Import */
import { useRef, useEffect } from "react";
/* Context */
import { RefContext } from "./option-ref-context.js"

const RefProvider = ({ children }) => {
  const letterRef = useRef(null);
  const dateRef = useRef(null);
  const locationRef = useRef(null);
  const galleryRef = useRef(null);
  const videoRef = useRef(null);
  const giftRef = useRef(null);
  const noticeTRef = useRef(null);
  const noticeDRef = useRef(null);
  const guestbookRef = useRef(null);
  const attendRef = useRef(null);
  return (
    <RefContext.Provider
      value={{
        letterRef,
        dateRef,
        locationRef,
        galleryRef,
        videoRef,
        giftRef,
        noticeTRef,
        noticeDRef,
        guestbookRef,
        attendRef
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

export default RefProvider;