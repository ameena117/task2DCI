import { useState } from "react";
import { useDebounce } from "use-debounce";
const useBedroom = () => {
  const [color, setDynamicColor] = useState("");
  const [colorValue] = useDebounce(color, 2000);
  const [num, setNum] = useState(0);
  const [text, setText] = useState("HI");
  const [state, setState] = useState(true);
  const onClickSetBGColorDynamic = (colorValue) => {
    setDynamicColor(colorValue);
  };
  const onClickIncrementNumber = () => {
    setNum(num + 1);
  };
  const onClickSetText = () => {
    setText("Hello");
  };
  const onClickSetState = () => {
    setState((prev) => !prev);
  };
  return {
    num,
    text,
    state,
    colorValue,
    onClickIncrementNumber,
    onClickSetText,
    onClickSetState,
    onClickSetBGColorDynamic,
  };
};
export { useBedroom };
