import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "/index.esm.js";

export default class PauseMenu extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bg", "e654c4983c76d81260e5e9488ccb1be8.svg", {
        x: 244.806285,
        y: 181.4672652312185
      }),
      new Costume("Resume", "e3b4673f9f22f913b8942535be45a1ad.svg", {
        x: 51.86207802875043,
        y: 24.445445073304256
      }),
      new Costume("Main Menu", "46dc314e96e9bc19bc77389c73c42b25.svg", {
        x: 51.24878896064695,
        y: 24.54413603145798
      })
    ];

    this.sounds = [new Sound("touch", "6389f51cb6380e9955ca06bd3a4a7632.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.BROADCAST, { name: "Pause" }, this.whenIReceivePause),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "enter" },
        this.whenKeyEnterPressed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Resume" },
        this.whenIReceiveResume
      )
    ];

    this.vars.i26 = 0;
    this.vars.p57 = 0;
    this.vars.state25 = 0;
    this.vars.x34 = 0;
    this.vars.y34 = 0;
    this.vars.direction27 = 0;
    this.vars.frame28 = 0;
    this.vars.xSpeed25 = 0;
    this.vars.ySpeed25 = 0;
    this.vars.i27 = 0;
    this.vars.length25 = 0;
    this.vars.part25 = 0;
    this.vars.p58 = 0;
    this.vars.touching25 = 0;
    this.vars.h25 = 0;
    this.vars.hx25 = 0;
    this.vars.hy25 = 0;
    this.vars.hxSize25 = 0;
    this.vars.hySize25 = 0;
    this.vars.health25 = 0;
    this.vars.hDamage25 = 0;
    this.vars.impact18 = 0;
    this.vars.commands12 = 0;
    this.vars.command12 = 0;
    this.vars.inputs25 = [];
    this.vars.hurtboxY25 = [];
    this.vars.hurtboxYSize25 = [];
    this.vars.hurtboxXSize25 = [];
    this.vars.inputNames12 = [];
  }

  *doGameMenuFast() {
    this.costume = "bg";
    for (let i = 0; i < 3; i++) {
      this.createClone();
      this.costumeNumber += 1;
    }
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      if (this.compare(this.costumeNumber, 1) === 0) {
        this.goto(0, 0);
        this.effects.color += 0.5;
        this.effects.ghost = 50;
      }
      if (this.compare(this.costumeNumber, 2) === 0) {
        this.goto(-115, -135);
      }
      if (this.compare(this.costumeNumber, 3) === 0) {
        this.goto(115, -135);
      }
      yield;
    }
  }

  *startAsClone2() {
    this.visible = true;
    while (true) {
      if (!(this.compare(this.costumeNumber, 1) === 0)) {
        if (this.touching("mouse")) {
          yield* this.startSound("touch");
          this.effects.brightness = 20;
          while (!!this.touching("mouse")) {
            yield;
          }
        } else {
          this.effects.brightness = 0;
        }
      }
      yield;
    }
  }

  *startAsClone3() {
    this.visible = true;
    while (true) {
      if (!(this.compare(this.costumeNumber, 1) === 0)) {
        if (this.touching("mouse")) {
          this.size += (125 - this.size) * 0.25;
        } else {
          this.size += (100 - this.size) * 0.2;
        }
      }
      yield;
    }
  }

  *startAsClone4() {
    while (true) {
      if (this.compare(this.costume.name, "Resume") === 0) {
        if (this.touching("mouse") && this.mouse.down) {
          this.broadcast("Resume");
        }
      }
      if (this.compare(this.costume.name, "Main Menu") === 0) {
        if (this.touching("mouse") && this.mouse.down) {
          this.broadcast("Main Menu");
          this.broadcast("Resume");
        }
      }
      yield;
    }
  }

  *whenIReceivePause() {
    this.stage.watchers.p1.visible = false;
    this.stage.watchers.p2.visible = false;
    yield* this.doGameMenuFast();
  }

  *whenKeyEnterPressed() {
    if (this.compare(this.stage.vars.gameframe, 0) > 0) {
      if (this.compare(this.stage.vars.pauseMenu, 0) === 0) {
        this.stage.vars.pauseMenu = 1;
        yield* this.broadcastAndWait("Pause");
      } else {
        yield* this.broadcastAndWait("Resume");
      }
    }
  }

  *whenIReceiveResume() {
    this.stage.vars.pauseMenu = 0;
    this.deleteThisClone();
  }
}
