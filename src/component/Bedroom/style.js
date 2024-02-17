import { useMemo } from "react";

const useStyle = () => {
  const bedroomClasess = useMemo(() => {
    return {
      mainContainer: {
        width: "100%",
        height: "100vh",
        display: "flex",
        background: "red",
      },
    };
  }, []);
  return { bedroomClasess };
};

export { useStyle };
