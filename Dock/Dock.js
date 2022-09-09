/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Dock extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("BLUE", "./Dock/costumes/BLUE.png", { x: 32, y: 6 }),
      new Costume("RED", "./Dock/costumes/RED.png", { x: 32, y: 6 })
    ];

    this.sounds = [new Sound("Meow", "./Dock/sounds/Meow.wav")];

    this.triggers = [];
  }
}
