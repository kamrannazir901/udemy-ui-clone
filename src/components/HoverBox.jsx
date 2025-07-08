import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";

const HoverBox = ({ children, content, className }) => {
  const [show, setShow] = useState(false);
  const HoverContentRef = useRef();
  const [position, setPosition] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const el = HoverContentRef.current;
      if (!el) return;
      const r = HoverContentRef.current.getBoundingClientRect();
      const per = window.innerWidth - r.left;

      if (r.left >= 0) {
        setPosition(0);
      } else {
        setPosition(r.left - 50);
        console.log(r.left);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="relative group hidden lg:block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className={`py-3 ${show && "text-purple"}`}>{children}</div>
      {show && (
        <div
          ref={HoverContentRef}
          style={{ right: position }}
          className={`absolute ${className} top-full border border-purple-300 z-10 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto flex flex-col gap-2 p-4 bg-white rounded-2xl min-w-[300px]`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default HoverBox;
