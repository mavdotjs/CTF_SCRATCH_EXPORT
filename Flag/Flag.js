/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Flag extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Flag-BLUE", "./Flag/costumes/Flag-BLUE.png", {
        x: 32,
        y: 64
      }),
      new Costume("Flag-RED", "./Flag/costumes/Flag-RED.png", { x: 32, y: 64 })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
