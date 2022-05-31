import { useState, useEffect, useRef } from "react";

export let useDetectClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current?.contains(event.target)) {
        console.log(domNode.current?.contains(event.target));
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, []);
};

export let useClickOutside = (initState) => {
  const triggerRef = useRef(null);
  const nodeRef = useRef(null);
  const [show, setShow] = useState(initState);

  const handleClickOutside = (event) => {
    if (triggerRef.current && triggerRef.current.contains(event.target)) {
      return setShow(!show);
    }

    if (nodeRef.current && !nodeRef.current.contains(event.target)) {
      return setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return {
    triggerRef,
    nodeRef,
    show,
    setShow,
  };
};
