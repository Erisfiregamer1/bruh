import { Project } from "/index.esm.js";

import Stage from "./Stage/Stage.js";
import Ground from "./Ground/Ground.js";
import Logic from "./Logic/Logic.js";
import Health from "./Health/Health.js";
import Ex from "./Ex/Ex.js";
import Effects from "./Effects/Effects.js";
import Projectiles from "./Projectiles/Projectiles.js";
import Green from "./Green/Green.js";
import Red from "./Red/Red.js";
import Blue from "./Blue/Blue.js";
import Yellow from "./Yellow/Yellow.js";
import Orange from "./Orange/Orange.js";
import Black from "./Black/Black.js";
import Cyan from "./Cyan/Cyan.js";
import MainMenu from "./MainMenu/MainMenu.js";
import PauseMenu from "./PauseMenu/PauseMenu.js";
import MobileSupport from "./MobileSupport/MobileSupport.js";
import MusicHandler from "./MusicHandler/MusicHandler.js";
import NewColorlens from "./NewColorlens/NewColorlens.js";
import DevMenu from "./DevMenu/DevMenu.js";
import Cutscenes from "./Cutscenes/Cutscenes.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Ground: new Ground({
    x: 72.37999999999998,
    y: 0,
    direction: 90,
    costumeNumber: 3,
    size: 800,
    visible: true,
    layerOrder: 1
  }),
  Logic: new Logic({
    x: 49,
    y: -14,
    direction: 90,
    costumeNumber: 1,
    size: 800,
    visible: false,
    layerOrder: 9
  }),
  Health: new Health({
    x: -156,
    y: -160,
    direction: 90,
    costumeNumber: 1,
    size: 800,
    visible: true,
    layerOrder: 11
  }),
  Ex: new Ex({
    x: -240.0001,
    y: -169,
    direction: 90,
    costumeNumber: 1,
    size: 800,
    visible: true,
    layerOrder: 10
  }),
  Effects: new Effects({
    x: 0,
    y: 0,
    direction: -101,
    costumeNumber: 65,
    size: 800,
    visible: false,
    layerOrder: 19
  }),
  Projectiles: new Projectiles({
    x: -234.35999999999987,
    y: 0,
    direction: 90,
    costumeNumber: 19,
    size: 800,
    visible: false,
    layerOrder: 12
  }),
  Green: new Green({
    x: 258,
    y: -20,
    direction: 0,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Red: new Red({
    x: 198,
    y: -20,
    direction: 0,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Blue: new Blue({
    x: 23.850000000000108,
    y: -20,
    direction: 0,
    costumeNumber: 149,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Yellow: new Yellow({
    x: -16,
    y: -20,
    direction: 0,
    costumeNumber: 48,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Orange: new Orange({
    x: 250,
    y: -20,
    direction: 0,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Black: new Black({
    x: -264,
    y: -20,
    direction: 0,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Cyan: new Cyan({
    x: 56.564322762823416,
    y: -25.01364289273741,
    direction: 0,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  MainMenu: new MainMenu({
    x: 50,
    y: -15,
    direction: 90,
    costumeNumber: 17,
    size: 100,
    visible: false,
    layerOrder: 15
  }),
  PauseMenu: new PauseMenu({
    x: 95.0618205632392,
    y: -33.40467027461782,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  MobileSupport: new MobileSupport({
    x: 210,
    y: -150,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 16
  }),
  MusicHandler: new MusicHandler({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  NewColorlens: new NewColorlens({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 18,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  DevMenu: new DevMenu({
    x: -76.98463195130697,
    y: 47.16569534182765,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  Cutscenes: new Cutscenes({
    x: 0,
    y: -0.28284454017592375,
    direction: 90,
    costumeNumber: 31,
    size: 300,
    visible: false,
    layerOrder: 20
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
