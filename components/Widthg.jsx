import React from "react";
import { useEffect, useState } from "react";

const Widthg = (props) => {
  const [counter, setCounter] = useState(0);
  const [track, setTrack] = useState(0);
  const [run, setRun] = useState(true);

  function addStylesheetRules(rules) {
    let styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    let styleSheet;
    styleSheet = styleEl.sheet;
    styleSheet.insertRule(rules, 0);
  }

  let animation = `${props.anim1}`;
  let animation2 = `${props.anim2}`;

  let keyframes = `
      @keyframes ${animation} {
        0% {
            width: ${props.swidth[0]}%;
        }
        10% {
            width: ${props.swidth[1]}%;
        } 
        20% {
            width: ${props.swidth[2]}%;
        }
        30%{
            width: ${props.swidth[3]}%;
          }
        40%{
            width: ${props.swidth[4]}%;
          }
        50%{
            width: ${props.swidth[5]}%;
          }
        60%{
            width: ${props.swidth[6]}%;
          }
        70%{
            width: ${props.swidth[7]}%;
          }
        80%{
            width: ${props.swidth[8]}%;
        }
        90%{
            width: ${props.swidth[9]}%;
        }
        100% {
            width: ${props.swidth[10]}%;
        }
      }`;

  let keyframes2 = `
      @keyframes ${animation2} {
        0% {
          transform: translateY(${props.sposition[0]}px);
        }
        10% {
          transform: translateY(${props.sposition[1]}px);
        }
        20% {
          transform: translateY(${props.sposition[2]}px);
        }
        30% {
          transform: translateY(${props.sposition[3]}px);
        }
        40% {
          transform: translateY(${props.sposition[4]}px);
        }
        50% {
          transform: translateY(${props.sposition[5]}px);
        }
        60% {
          transform: translateY(${props.sposition[6]}px);
        }
        70% {
          transform: translateY(${props.sposition[7]}px);
        }
        80% {
          transform: translateY(${props.sposition[8]}px);
        }
        90% {
          transform: translateY(${props.sposition[9]}px);
        }
        100% {
          transform: translateY(${props.sposition[10]}px);
        }
      }
      `;

  addStylesheetRules(keyframes);
  addStylesheetRules(keyframes2);

  useEffect(() => {
    props.myfunc();
    let timer;
    if (track < props.swidth[props.swidth.length - 1] && run) {
      timer = setTimeout(() => {
        setCounter((pre) => pre + 1);
        setTrack((prev) => prev + 1);
      }, 137);
    } else {
      setRun(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [counter]);

  return (
    <div
      className={`flex w-[275px] sm:w-[500px] md:w-[680px]`}
      style={{
        height: `${props.height}px`,
        marginBottom: `${props.margin}px`,
        animationName: animation2,
        animationDuration: "10s",
        animationIterationCount: 1,
        animationTimingFunction: "linear",
        transform: `translateY(${
          props.sposition[[props.sposition.length - 1]]
        }px)`,
      }}
    >
      <div className="w-[23px] h-[23px] mr-2">
        <img
          src={`${props.image}`}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div
        className={`rounded-md`}
        style={{
          width: `${props.swidth[props.swidth.length - 1]}%`,
          backgroundColor: `${props.bgcolor}`,
          animationName: animation,
          animationDuration: "10s",
          animationIterationCount: 1,
          animationTimingFunction: "linear",
        }}
      ></div>
      <div className="[font-size:12px] sm:[font-size:15px] text-cyan-200 ml-3 sm:translate-y-[-1px] w-[40%] sm:w-fit">
        {props.name} - {counter}
      </div>
    </div>
  );
};

export default Widthg;
