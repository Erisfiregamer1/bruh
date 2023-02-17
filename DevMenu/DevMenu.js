import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@1.4.1/dist/index.esm.js";

export default class DevMenu extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Show Cheats", "94df5cfa6b203107514fad3df4dc70d3.svg", {
        x: 51.63066389613027,
        y: 24.445445073304256
      })
    ];

    this.sounds = [
      new Sound("touch", "6389f51cb6380e9955ca06bd3a4a7632.wav"),
      new Sound("Devmode (1)", "3bef2773f67f5ba0db4aecd48a38f2cd.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.BROADCAST, { name: "Pause" }, this.whenIReceivePause),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Resume" },
        this.whenIReceiveResume
      )
    ];

    this.vars.i29 = 0;
    this.vars.p61 = 0;
    this.vars.state27 = 0;
    this.vars.x36 = 0;
    this.vars.y36 = 0;
    this.vars.direction29 = 0;
    this.vars.frame30 = 0;
    this.vars.xSpeed27 = 0;
    this.vars.ySpeed27 = 0;
    this.vars.i30 = 0;
    this.vars.length27 = 0;
    this.vars.part27 = 0;
    this.vars.p62 = 0;
    this.vars.touching27 = 0;
    this.vars.h27 = 0;
    this.vars.hx27 = 0;
    this.vars.hy27 = 0;
    this.vars.hxSize27 = 0;
    this.vars.hySize27 = 0;
    this.vars.health27 = 0;
    this.vars.hDamage27 = 0;
    this.vars.impact20 = 0;
    this.vars.commands13 = 0;
    this.vars.command13 = 0;
    this.vars.inputs27 = [];
    this.vars.hurtboxY27 = [];
    this.vars.hurtboxYSize27 = [];
    this.vars.hurtboxXSize27 = [];
    this.vars.inputNames13 = [];
  }

  *doDevFast() {
    this.costume = "Show Cheats";
    this.createClone();
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      if (this.compare(this.costumeNumber, 1) === 0) {
        this.moveAhead();
        this.goto(0, 120);
      }
      yield;
    }
  }

  *startAsClone2() {
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        yield* this.startSound("touch");
        this.effects.brightness = 20;
        while (!!this.touching("mouse")) {
          yield;
        }
      } else {
        this.effects.brightness = 0;
      }
      yield;
    }
  }

  *startAsClone3() {
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.size += (125 - this.size) * 0.25;
      } else {
        this.size += (100 - this.size) * 0.2;
      }
      yield;
    }
  }

  *startAsClone4() {
    while (true) {
      if (this.compare(this.costume.name, "Show cheats") === 0) {
        if (this.touching("mouse") && this.mouse.down) {
          this.broadcast("Dev");
          yield* this.startSound("touch");
          yield* this.startSound("Devmode (1)");
          while (!!this.mouse.down) {
            yield;
          }
          while (!(this.touching("mouse") && this.mouse.down)) {
            yield;
          }
          yield* this.startSound("touch");
          this.broadcast("Un-Dev");
          while (!!this.mouse.down) {
            yield;
          }
        }
      }
      yield;
    }
  }

  *whenIReceivePause() {
    if (this.compare(this.stage.vars.devMode, 1) === 0) {
      yield* this.doDevFast();
    }
  }

  *whenIReceiveMainMenu() {
    this.deleteThisClone();
  }

  *whenIReceiveResume() {
    this.deleteThisClone();
  }
}
