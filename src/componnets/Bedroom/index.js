import { useBedroom } from "./useBedroom";

const Bedroom = () => {
  const {
    num,
    text,
    state,
    colorValue,
    onClickIncrementNumber,
    onClickSetText,
    onClickSetState,
    onClickSetBGColorDynamic,
  } = useBedroom();
  return (
    <div className="app" style={{ backgroundColor: colorValue }}>
      <h2>Hoock</h2>
      <input
        type="text"
        placeholder="Write a color"
        onChange={(e) => onClickSetBGColorDynamic(e.target.value)}
      />
      <hr />
      <button
        onClick={() => {
          onClickIncrementNumber();
        }}
      >
        Increment Number
      </button>
      <div>{num}</div>
      <hr />
      <button
        onClick={() => {
          onClickSetText();
        }}
      >
        Change Text To Hello
      </button>
      <div>{text}</div>
      <hr />
      <button
        onClick={() => {
          onClickSetState();
        }}
      >
        Change State
      </button>

      <div>{state ? "True" : "False"}</div>
    </div>
  );
};

export { Bedroom };
