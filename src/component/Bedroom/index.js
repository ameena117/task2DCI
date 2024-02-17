import { useState } from "react";
import { useStyle } from "./style";
import { useBedroom } from "./useBedroom";

const Bedroom = ({ name }) => {
  const { size, color, onClickSetBedroomSize, onClickSetBedroomColor } =
    useBedroom();

  const { bedroomClasess } = useStyle();

  return (
    <div>
      <div
        style={bedroomClasess.mainContainer3}
        onClick={() => {
          onClickSetBedroomSize();
          onClickSetBedroomColor();
        }}
      >
        {name}
      </div>
    </div>
  );
};

export { Bedroom };
