/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MadeWithScratch extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./MadeWithScratch/costumes/costume1.svg", {
        x: 175.1947604244873,
        y: 27.706889991186472
      })
    ];

    this.sounds = [new Sound("pop", "./MadeWithScratch/sounds/pop.wav")];

    this.triggers = [];
  }
}
