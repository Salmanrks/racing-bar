import images from "../images";

let height = 23;
let margin = 33;
let down = height + margin;
let up = -down;
const players11 = [
  {
    namec: "Ibrahimovic",

    swidthC: [2, 4, 6, 9, 17, 30, 33, 35, 35, 35, 35],

    spositionC: [0, 0, 0, 0, 0, 0, 0, 0, 2 * down, 2 * down, 2 * down],

    bgcolorC: "#38bdf8",

    anim1c: "firstw",

    anim2c: "firstp",

    heightc: height,

    marginc: margin,

    img: images.ibra,
  },
  {
    namec: "Aguero",

    swidthC: [2, 4, 6, 9, 17, 30, 30, 30, 30, 30, 30],

    spositionC: [
      0,
      0,
      0,
      0,
      0,
      0,
      3 * down,
      3 * down,
      3 * down,
      3 * down,
      3 * down,
    ],

    bgcolorC: "#fb7185",

    anim1c: "secondw",

    anim2c: "secondp",

    heightc: height,

    marginc: margin,

    img: images.aguero,
  },
  {
    namec: "Cavani",

    swidthC: [2, 4, 6, 9, 17, 30, 33, 33, 33, 33, 33],

    spositionC: [0, 0, 0, 0, 0, 0, up, down, down, down, down],

    bgcolorC: "#4ade80",

    anim1c: "thirdw",

    anim2c: "thirdp",

    heightc: height,

    marginc: margin,

    img: images.cavani,
  },
  {
    namec: "C.Ronaldo",

    swidthC: [2, 4, 6, 9, 17, 30, 33, 35, 60, 60, 60],

    spositionC: [0, 0, 0, 0, 0, 0, up, 2 * up, 3 * up, 2 * up, 2 * up],

    bgcolorC: "#a78bfa",

    anim1c: "fourthw",

    anim2c: "fourthp",

    heightc: height,

    marginc: margin,

    img: images.ronaldo,
  },
  {
    namec: "Messi",

    swidthC: [2, 4, 6, 9, 17, 30, 33, 35, 60, 65, 73],

    spositionC: [0, 0, 0, 0, 0, 0, up, 2 * up, 3 * up, 4 * up, 4 * up],

    bgcolorC: "#2dd4bf",

    anim1c: "fifthw",

    anim2c: "fifthp",

    heightc: height,

    marginc: margin,

    img: images.messi,
  },
  {
    namec: "Lewandowski",

    swidthC: [2, 4, 6, 9, 9, 9, 9, 9, 9, 9, 9],

    spositionC: [0, 0, down, down, down, down, down, down, down, down, down],

    bgcolorC: "#e879f9",

    anim1c: "sixthw",

    anim2c: "sixthp",

    heightc: height,

    marginc: margin,

    img: images.lewa,
  },
  {
    namec: "Suarez",

    swidthC: [2, 4, 6, 9, 17, 17, 17, 17, 17, 17, 17],

    spositionC: [0, 0, up, up, up, up, up, up, up, up, up],

    bgcolorC: "#f472b6",

    anim1c: "seventhw",

    anim2c: "seventhp",

    heightc: height,

    marginc: margin,

    img: images.suarez,
  },
];

export default players11;
