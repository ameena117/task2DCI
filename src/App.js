import { useState, useEffect } from "react";
import randomColor from "randomcolor";
import "./App.css";
import { Bedroom } from "./component/Bedroom";

export default function App() {
  // const [num, setNum] = useState(0);
  // const [text, setText] = useState("");
  // const [state, setState] = useState(true);
  // const [bgcolor, setBGColor] = useState("");
  // const [color, setColor] = useState("");
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // response = dataTheWeWillGetFromTheDatabase (correct) , or any error code (false)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    await setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {posts.length > 0 ? (
        posts.map((dataItem, i) => {
          return <div key={i}>{dataItem.title}</div>;
        })
      ) : (
        <div>No posts found</div>
      )}

      {/* <div className="App" style={{ backgroundColor: bgcolor, color: color }}>
      <button>Increment Number</button>
      <Bedroom name="Afnan" />
      <div>{num}</div>
      <button>Change Text To Hello</button>
      <div>{text}</div>

      <button
        onClick={() => {
          setState((prev) => !prev);
        }}
      >
        Change State
      </button>

      <div>{state ? "True" : "False"}</div>

      <input
        type="text"
        onChange={(e) => setBGColor(e.target.value)}
        placeholder="Write a Color"
      />
      <hr />
      <button
        onClick={() => {
          setBGColor(randomColor());
        }}
      >
        Change BG Color Random
      </button>

      <button
        onClick={() => {
          const color = "#" + Math.round(Math.random() * (256 * 256 * 256));
          setColor(color);
        }}
      >
        Change Color Random
      </button> */}
    </div>
  );


