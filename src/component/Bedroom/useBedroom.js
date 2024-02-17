import { useState } from "react";

const useBedroom = () => {
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const onClickSetBedroomSize = () => {
    setSize(35);
  };
  const onClickSetBedroomColor = () => {
    setColor("red");
    console.log(color);
  };

  return {
    size,
    color,
    onClickSetBedroomSize,
    onClickSetBedroomColor,
  };
};

export { useBedroom };
