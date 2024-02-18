import { useState } from "react";
import { useDebounce } from "use-debounce";
const useBedroom = () => {
  const [color, setDynamicColor] = useState("");
  const [ColorValue] = useDebounce(color, 2000);
  const [num, setNum] = useState(0);
  const [text, setText] = useState("HI");
  const [state, setState] = useState(true);
  const handleSetBGColorDynamic = (ColorValue) => {
    setDynamicColor(ColorValue);
  }
  const  handleIncrementNumber = () => {
    setNum(num + 1 );
  }
  const handleSetText = () => {
    setText("Hello");
  }
  const handleSetState = () => {
    setState((prev) =>!prev);
  }
  return {
    num,
    text,
    state,
    ColorValue,
    handleIncrementNumber,
    handleSetText,
    handleSetState,
    handleSetBGColorDynamic,
  }
};
export {useBedroom};
