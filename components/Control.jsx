import React from "react";
import Widthg from "./Widthg";
import { useEffect, useState } from "react";

const Control = (props) => {
  const [count, setCount] = useState(0);
  const [track, setTrack] = useState(0);
  const [replay, setreplay] = useState(0);
  const [cursor, setCursor] = useState("none");

  useEffect(() => {
    let timer;
    if (track <= 1) {
      timer = setTimeout(() => {
        setCount(1);
        setTrack((track) => {
          track + 1;
        });
      }, 11500);
    } else {
      setCount(1);
      setreplay(1);
      setCursor("auto");
    }
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  const funcontroller = () => {
    setreplay(1);
    setCursor("auto");
    setCount(0);
    setTrack(0);
  };
  const funcontroller2 = () => {
    if (track == 0) {
      setreplay(0);
      setCursor("none");
    }
  };

  const funcontroller3 = () => {
    props.myfunc();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-xl text-cyan-300 mb-6">
        Total Goals in {props.data[count].year}
      </div>
      <div className=" mb-4">
        {props.data[count].data.map((info) => {
          return (
            <Widthg
              key={Math.random()}
              name={info.namec}
              swidth={info.swidthC}
              sposition={info.spositionC}
              bgcolor={info.bgcolorC}
              anim1={info.anim1c}
              anim2={info.anim2c}
              height={info.heightc}
              margin={info.marginc}
              image={info.img}
              myfunc={funcontroller2}
            ></Widthg>
          );
        })}
      </div>
      <button
        className="w-[80px] h-[35px] bg-black text-cyan-200 rounded-md"
        onClick={funcontroller}
        style={{ opacity: replay, pointerEvents: cursor }}
      >
        Replay
      </button>
      <button
        className="font-medium mt-6 text-cyan-200"
        style={{ opacity: replay, pointerEvents: cursor }}
        onClick={funcontroller3}
      >
        Bact To Home
      </button>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(process.env.URL);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Control;
