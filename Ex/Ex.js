import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "/index.esm.js";

export default class Ex extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Meter Bar", "7f4ef61d732d77b0ceda9ff8dee3694e.png", {
        x: 35,
        y: 1
      }),
      new Costume("Meter", "d83eb967661be96abc3b51e7499ad9d1.png", {
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

    this.vars.b = 2;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *display(p10) {
    this.costume = "Meter Bar";
    this.goto(
      ((100 - this.stage.vars.playerEx[p10 - 1] * 33.3333) * 0.5 * -4 + -140) *
        ((p10 - 1.5) * -2),
      -170
    );
  }

  *startAsClone() {
    this.effects.color = 115;
    this.goto(128, -160);
    this.direction = -90;
    while (true) {
      if (!String(this.vars.b ?? "").includes(0.1)) {
        yield* this.display(2);
      }
      if (this.compare(this.vars.b, 1.1) === 0) {
        this.goto(-140, -170);
        this.costume = "Meter";
      } else {
        if (this.compare(this.vars.b, 2.1) === 0) {
          this.goto(140, -170);
          this.costume = "Meter";
        }
      }
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
    this.vars.b = 1.1;
    this.createClone();
    this.vars.b = 2.1;
    this.createClone();
    this.vars.b = 2;
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
