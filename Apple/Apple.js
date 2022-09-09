/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Apple extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("apple", "./Apple/costumes/apple.svg", { x: 31, y: 31 })
    ];

    this.sounds = [new Sound("Chomp", "./Apple/sounds/Chomp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      )
    ];
  }

  *whenKeyUpArrowPressed() {
    this.direction -= 90;
    this.move(10);
    this.direction += 90;
  }

  *whenKeyRightArrowPressed() {
    this.move(10);
  }

  *whenKeyDownArrowPressed() {
    this.direction += 90;
    this.move(10);
    this.direction -= 90;
  }

  *whenKeyLeftArrowPressed() {
    this.direction += 180;
    this.move(10);
    this.direction -= 180;
  }

  *setx(x) {
    this.x = x;
  }

  *sety(y) {
    this.y = y;
  }
}
