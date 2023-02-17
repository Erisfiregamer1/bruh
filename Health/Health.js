import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "/index.esm.js";

export default class Health extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "eaeaf639959cde5c80b6139f60fa0ebf.png", {
        x: 35,
        y: 1
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *display(p9) {
    this.costume = "costume1";
    this.goto(
      (((100 -
        this.stage.vars.playerHealth[p9 - 1] /
          (0.01 *
            this.stage.vars.characterHealth[
              this.stage.vars.characterOrder.indexOf(
                this.stage.vars.playerCharacter[p9 - 1]
              ) +
                1 -
                1
            ]) /
          this.stage.vars.healthMultiplier) /
        2) *
        -4 +
        -140) *
        ((p9 - 1.5) * -2),
      -160
    );
  }

  *startAsClone() {
    this.effects.color = 115;
    this.goto(128, -160);
    this.direction = -90;
    while (true) {
      yield* this.display(2);
      yield;
    }
  }

  *whenIReceiveGame() {
    if (this.compare("", "") === 0) {
      this.deleteThisClone();
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = true;
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    this.createClone();
    this.size = 800;
    this.goto(-128, -160);
    this.direction = 90;
    while (true) {
      yield* this.display(1);
      yield;
    }
  }
}
