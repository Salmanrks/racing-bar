import images from "../images";

let height = 23;
let margin = 33;
let down = height + margin;
let up = -down;
const players14 = [
  {
    namec: "Ibrahimovic",

    swidthC: [2, 9, 16, 25, 28, 30, 30, 30, 30, 30, 30],

    spositionC: [
      0,
      0,
      0,
      0,
      0,
      0,
      4 * down,
      4 * down,
      4 * down,
      4 * down,
      4 * down,
    ],

    bgcolorC: "#38bdf8",

    anim1c: "first2w",

    anim2c: "first2p",

    heightc: height,

    marginc: margin,

    img: images.ibra,
  },
  {
    namec: "Aguero",

    swidthC: [2, 9, 16, 25, 28, 30, 31, 32, 32, 32, 32],

    spositionC: [0, 0, 0, 0, 0, 0, up, up, down, down, down],

    bgcolorC: "#fb7185",

    anim1c: "second2w",

    anim2c: "second2p",

    heightc: height,

    marginc: margin,

    img: images.aguero,
  },
  {
    namec: "Cavani",

    swidthC: [2, 9, 16, 25, 28, 30, 31, 31, 31, 31, 31],

    spositionC: [0, 0, 0, 0, 0, 0, up, down, down, down, down],

    bgcolorC: "#4ade80",

    anim1c: "third2w",

    anim2c: "third2p",

    heightc: height,

    marginc: margin,

    img: images.cavani,
  },
  {
    namec: "C.Ronaldo",

    swidthC: [2, 9, 16, 25, 28, 30, 31, 32, 58, 61, 61],

    spositionC: [0, 0, 0, 0, 0, 0, up, 2 * up, 3 * up, 3 * up, 3 * up],

    bgcolorC: "#a78bfa",

    anim1c: "fourth2w",

    anim2c: "fourth2p",

    heightc: height,

    marginc: margin,

    img: images.ronaldo,
  },
  {
    namec: "Messi",

    swidthC: [2, 9, 16, 25, 28, 30, 31, 32, 58, 58, 58],

    spositionC: [0, 0, 0, 0, 0, 0, up, 2 * up, 3 * up, 3 * up, 3 * up],

    bgcolorC: "#2dd4bf",

    anim1c: "fifth2w",

    anim2c: "fifth2p",

    heightc: height,

    marginc: margin,

    img: images.messi,
  },
  {
    namec: "Lewandowski",

    swidthC: [2, 9, 16, 25, 28, 28, 28, 28, 28, 28, 28],

    spositionC: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    bgcolorC: "#e879f9",

    anim1c: "sixth2w",

    anim2c: "sixth2p",

    heightc: height,

    marginc: margin,

    img: images.lewa,
  },
  {
    namec: "Suarez",

    swidthC: [2, 9, 16, 25, 25, 25, 25, 25, 25, 25, 25],

    spositionC: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    bgcolorC: "#f472b6",

    anim1c: "seventh2w",

    anim2c: "seventh2p",

    heightc: height,

    marginc: margin,

    img: images.suarez,
  },
];

export default players14;
