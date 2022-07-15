import React, { useState, useRef, useEffect } from "react";

import "./ScrollCount.scss";

export default function ScrollCount(props) {

  const scrollerRef = useRef(null);

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;

    const handleScroll = () => {
      setScrollTop(scroller.scrollTop);
    };

    scroller.addEventListener("scroll", (event) => { handleScroll(event) }, { passive: true });

    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={scrollerRef} id="scroller">
        {props.children}
      </div>

      <div id="output">scrollTop: {scrollTop}</div>
    </>
  );
}
