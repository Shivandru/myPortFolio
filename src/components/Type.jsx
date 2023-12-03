import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Text } from "@chakra-ui/react";
const Type = ({ strings }) => {
  const typedTextRef = useRef(null);
  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 40,
      backSpeed: 20,
      startDelay: 500,
      backDelay: 800,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);
    return () => {
      typed.destroy();
    };
  }, [strings]);
  return (
    <>
      <Text ref={typedTextRef} fontSize="xl" fontWeight="bold" />
    </>
  );
};

export default Type;
