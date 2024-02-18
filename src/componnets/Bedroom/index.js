import { useBedroom } from "./useBedroom";

const Bedroom = () => {
  const {
    num,
    text,
    state,
    ColorValue,
    handleIncrementNumber,
    handleSetText,
    handleSetState,
    handleSetBGColorDynamic,
  } = useBedroom();
  return (
    
    <div className= "app" style={{ backgroundColor: ColorValue }}>
      <h2>Hoock</h2>
      <input
        type="text"
        placeholder="Write a color"
        onChange={(e) => handleSetBGColorDynamic(e.target.value)}
      />
      <hr />
      <button
        onClick={() => {
          handleIncrementNumber();
        }}
      >
        Increment Number
      </button>
      <div>{num}</div>
      <hr />
      <button
        onClick={() => {
          handleSetText();
        }}
      >
        Change Text To Hello
      </button>
      <div>{text}</div>
      <hr />
      <button
        onClick={() => {
          handleSetState();
        }}
      >
        Change State
      </button>

      <div>{state ? "True" : "False"}</div>
    </div>
  );
};

export { Bedroom };
