import Control from "../components/Control";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(true);
  };
  const clickHandler2 = () => {
    setShow(false);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-900">
      {show && <Control myfunc={clickHandler2}></Control>}
      {!show && (
        <div className="text-white mb-10 mx-8 text-center text-2xl grad">
          Its a bar chart racing visualization of total goals scored by 7
          different football players in 2 different years only in club levels.
          International performance is not included here.And the data is
          collected from <span className=" font-bold">transfermarkt.com</span>
        </div>
      )}
      {!show && (
        <button
          className="w-[120px] h-[30px] rounded-md font-bold text-blue-400 ring-4"
          onClick={clickHandler}
        >
          Start Action
        </button>
      )}
    </div>
  );
}
