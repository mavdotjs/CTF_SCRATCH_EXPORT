import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Dock from "./Dock/Dock.js";
import Flag from "./Flag/Flag.js";
import MadeWithScratch from "./MadeWithScratch/MadeWithScratch.js";
import Apple from "./Apple/Apple.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Dock: new Dock({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 200,
    visible: true,
    layerOrder: 3
  }),
  Flag: new Flag({
    x: 0,
    y: 32,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  MadeWithScratch: new MadeWithScratch({
    x: 240,
    y: -180,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Apple: new Apple({
    x: -91,
    y: 3,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
