import { useRef, useEffect, useState, useContext } from "react";
import { Context } from "./Provider";
import { useDimensions } from "./Dimensions";
import { motion } from "framer-motion";

let lastOption = 0;

export function DropdownOption({ name, content: Content, backgroundHeight }) {
  const idRef = useRef(++lastOption);
  const id = idRef.current;

  const [optionHook, optionDimensions] = useDimensions([]);
  const [registered, setRegistered] = useState(false);

  const {
    registerOption,
    updateOptionProps,
    deleteOptionById,
    setTargetId,
    targetId,
  } = useContext(Context);

  useEffect(() => {
    if (!registered && optionDimensions) {
      const WrappedContent = () => {
        const contentRef = useRef();
        useEffect(() => {
          const contentDimensions = contentRef.current.getBoundingClientRect();
          updateOptionProps(id, { contentDimensions });
        }, []);
        return (
          <div ref={contentRef}>
            <Content />
          </div>
        );
      };
      registerOption({
        id,
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2,
        WrappedContent,
        backgroundHeight,
      });
      setRegistered(true);
    } else if (registered && optionDimensions) {
      updateOptionProps(id, {
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2,
      });
    }
  }, [
    id,
    registered,
    registerOption,
    deleteOptionById,
    updateOptionProps,
    optionDimensions,
    backgroundHeight,
  ]);

  const handleOpen = () => setTargetId(id);
  const handleClose = () => setTargetId(null);
  const handleTounch = () => (window.isMobile = true);

  const handleClick = (event) => {
    event.preventDefault();

    return targetId === id ? handleClose() : handleOpen();
  };

  return (
    <motion.a
      href="#"
      className="dropdown-option"
      ref={optionHook}
      onMouseOver={() => !window.isMobile && handleOpen()}
      onMouseLeave={() => !window.isMobile && handleClose()}
      onTouchStart={handleTounch}
      onFocus={handleOpen}
      onBlur={handleClose}
      onClick={handleClick}
    >
      {name}
    </motion.a>
  );
}
