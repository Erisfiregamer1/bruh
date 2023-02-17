import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "/index.esm.js";

export default class Ground extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Blank", "14e46ec3e2ba471c2adfe8f119052307.svg", {
        x: 0,
        y: 0
      }),
      new Costume("Grid", "583c6469157b1b6821100c5f7b6158b0.png", {
        x: 80,
        y: 48
      }),
      new Costume("Grasslands", "a00303e9a2b12bf1ea8b4977a0d88763.svg", {
        x: 99.48990490925547,
        y: 39.101443549255976
      }),
      new Costume("GrasslandsBG1", "86458dd8c758f1e46e3e4b50eb81e09e.svg", {
        x: 99.48990490925547,
        y: 25.126968083849846
      }),
      new Costume("Dense Forest", "b30e3b2864ecfd3cda21b0e5d424d805.svg", {
        x: 99.48990047646402,
        y: 26.282280223047565
      }),
      new Costume("Scorched Forest", "4802a11de39370f265c21fd66f86f977.svg", {
        x: 99.48989047646378,
        y: 26.238443593619138
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Map" }, this.whenIReceiveMap),
      new Trigger(Trigger.KEY_PRESSED, { key: "5" }, this.whenKey5Pressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Red Lvl3" },
        this.whenIReceiveRedLvl3
      ),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.map = "Grasslands";
    this.stage.watchers.maps.visible = false;
    this.visible = false;
  }

  *whenIReceiveMap() {
    if (!null) {
      this.deleteThisClone();
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    while (true) {
      this.direction = 90;
      this.effects.clear();
      if (this.compare(this.stage.vars.map, "Gridplate") === 0) {
        this.costume = "Grid";
        this.goto(
          ((this.stage.vars.rumbleX - this.stage.vars.scrollX) % 16) * 4,
          this.stage.vars.rumbleY * 4
        );
        this.size = 800;
        if (this.compare(this.stage.vars.hitboxes, 1) === 0) {
          this.visible = false;
        } else {
          this.visible = true;
        }
      } else {
        this.costume = "Blank";
        this.size = 800;
        this.costume = this.stage.vars.map;
        if (this.compare(this.stage.vars.hitboxes, 1) === 0) {
          this.visible = false;
        } else {
          this.visible = true;
        }
        this.goto(
          (this.stage.vars.rumbleX - this.stage.vars.scrollX) * 4,
          this.stage.vars.rumbleY * 4
        );
      }
      yield;
    }
  }

  *whenKey5Pressed() {
    this.stage.vars.map = this.stage.vars.maps[
      this.random(1, this.stage.vars.maps.length) - 1
    ];
  }

  *whenIReceiveRedLvl3() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.createClone();
  }

  *whenIReceiveGame() {
    this.broadcast("Map");
  }

  *startAsClone() {
    this.moveAhead();
    this.moveBehind(6);
    this.costume = "Blank";
    this.size = 1600;
    this.costume = this.stage.vars.map;
    this.goto(
      ((this.stage.vars.rumbleX - this.stage.vars.scrollX) % 16) * 120,
      -480
    );
    this.direction = 100;
    this.effects.brightness = -25;
  }
}
